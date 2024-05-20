async function callAPI() {
    try {
        const response = await fetch('http://localhost:3000/superfood');
        const data = await response.json();
        console.log(data);

        const tableBody = document.querySelector('#food-facts-table tbody');
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.food_name || 'N/A'}</td>
                <td>${item.food_nutrients || 'N/A'}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching food facts:', error);
    }
}

window.onload = callAPI;
