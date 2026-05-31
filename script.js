fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        const totalElement = document.getElementById('total-balance');
        let total = 0;

        data.forEach(item => {
            // Logique de calcul
            const montant = parseFloat(item.montant);
            if (item.type === "Débité") {
                total -= montant;
            } else {
                total += montant;
            }

            // Ajout ligne
            const color = item.type === "Débité" ? "red" : "green";
            tableBody.innerHTML += `
                <tr>
                    <td>${item.date}</td>
                    <td>${item.description}</td>
                    <td style="color: ${color}">${item.type}</td>
                    <td>${montant.toFixed(2)} €</td>
                </tr>`;
        });

        totalElement.innerText = total.toFixed(2) + " €";
        totalElement.style.color = total < 0 ? "red" : "green";
    });
