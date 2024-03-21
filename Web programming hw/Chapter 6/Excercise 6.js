function calculate() {
    const cost = document.getElementById('cost').value;
    const liters = document.getElementById('liters').value;
    const totalCost = cost * liters;
    document.getElementById('totalCost').textContent = `Total cost: $${totalCost.toFixed(2)}`;
}
