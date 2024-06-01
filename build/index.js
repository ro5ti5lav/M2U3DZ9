"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = yield response.json();
            console.log(data);
            fillTable(data);
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
}
function fillTable(users) {
    const tableHeaders = ['id', 'name', 'username', 'email', 'phone', 'website'];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    tableHeaders.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    users.forEach(user => {
        const row = document.createElement('tr');
        tableHeaders.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = user[header].toString();
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}
fetchUsers();
