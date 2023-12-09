const moldData = [
    { id: 1, type: 'Cope', dateTime: '2023-11-15 12:00:00' },
    { id: 2, type: 'Drag', dateTime: '2023-11-16 15:00:00' },
    { id: 3, type: 'Cope', dateTime: '2023-11-16 15:50:00' },
    { id: 4, type: 'Cope', dateTime: '2023-11-16 16:00:00' },
    { id: 5, type: 'Cope', dateTime: '2023-11-16 16:00:00' },
    { id: 6, type: 'Drag', dateTime: '2023-11-16 16:00:00' },
    { id: 7, type: 'Cope', dateTime: '2023-11-16 17:00:00' },
    { id: 8, type: 'Drag', dateTime: '2023-11-16 17:00:00' },
    { id: 9, type: 'Drag', dateTime: '2023-11-16 18:00:00' },
    { id: 10, type: 'Drag', dateTime: '2023-11-16 19:00:00' },
    { id: 11, type: 'Cope', dateTime: '2023-11-16 19:00:00' },
    { id: 12, type: 'Drag', dateTime: '2023-11-16 19:00:00' },
    { id: 13, type: 'Cope', dateTime: '2023-11-16 19:00:00' },
    { id: 14, type: 'Drag', dateTime: '2023-11-16 19:00:00' },
    { id: 15, type: 'Cope', dateTime: '2023-11-17 15:00:00' },
    { id: 16, type: 'Drag', dateTime: '2023-11-17 15:00:00' },
    { id: 17, type: 'Cope', dateTime: '2023-11-17 15:00:00' },
];

function populateTable() {
    const tableBody = document.querySelector('#moldTable tbody');
    tableBody.innerHTML = '';
    moldData.forEach(mold => {
        const row = `<tr>
                        <td>${mold.id}</td>
                        <td>${mold.type}</td>
                        <td>${mold.dateTime}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function searchTable(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('searchInput').value.trim().toUpperCase();
        const table = document.getElementById('moldTable');
        const rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const moldId = rows[i].getElementsByTagName('td')[0];
            if (moldId) {
                const idText = moldId.textContent || moldId.innerText;
                const idValue = idText.trim().toUpperCase();
                
                if (idValue === input) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    }
}


document.getElementById('searchInput').addEventListener('keydown', searchTable);

populateTable();


function homePageBack() {
    window.location.href = "operatorHome.html";
  }

  