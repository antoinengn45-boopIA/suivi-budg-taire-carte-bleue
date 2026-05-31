// Vous pouvez charger ces données via fetch('data.json') si vous préférez
const transactions = [
  { "date": "2026-04-16", "description": "Victorine - Orléans",   "type": "Débité",  "montant": 11.80 },
  { "date": "2026-05-09", "description": "Retrait en Banque",      "type": "Crédité", "montant": 51.05 }
];

const tbody = document.getElementById('table-body');
const totalEl = document.getElementById('total-balance');
let total = 0;

transactions.forEach(item => {
    const montant = parseFloat(item.montant);
    if (item.type === 'Débité') total -= montant;
    else total += montant;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${item.date}</td>
        <td>${item.description}</td>
        <td>${item.type}</td>
        <td style="color: ${item.type === 'Débité' ? 'red' : 'green'}">${item.montant.toFixed(2)} €</td>
    `;
    tbody.appendChild(tr);
});

totalEl.textContent = total.toFixed(2) + " €";
