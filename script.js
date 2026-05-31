fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');
        data.forEach(item => {
            const row = `<tr>
                <td>${item.date}</td>
                <td>${item.description}</td>
                <td>${item.montant.toFixed(2)} €</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Erreur de chargement:', error));
