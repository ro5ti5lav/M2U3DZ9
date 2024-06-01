// scripts/index.ts
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data: User[] = await response.json();
        console.log(data);
        fillTable(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function fillTable(users: User[]) {
    const tableHeaders = ['id', 'name', 'username', 'email', 'phone', 'website'];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    tableHeaders.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create data rows
    users.forEach(user => {
        const row = document.createElement('tr');
        tableHeaders.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = user[header as keyof User].toString();
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

fetchUsers();
