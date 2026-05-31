fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        const totalElement = document.getElementById('total-balance');
        let total = 0;

        data.forEach(item => {
            total += item.montant;
            
            // Couleur selon si c'est une dépense ou un gain
            const colorClass = item.montant < 0 ? 'text-red' : 'text-green';

            const row = `<tr>
                <td>${item.date}</td>
                <td>${item.description}</td>
                <td class="${colorClass}">${item.montant.toFixed(2)} €</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        totalElement.innerText = total.toFixed(2) + ' €';
        totalElement.style.color = total < 0 ? 'red' : 'green';
    })
    .catch(error => console.error('Erreur de chargement:', error));
