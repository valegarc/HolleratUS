const moldData = [
    { id: 1111, type: 'Cope', dateTime: '2023-12-14 12:00:00' },
    { id: 2222, type: 'Drag', dateTime: '2023-12-13 15:00:00' },
    { id: 3333, type: 'Cope', dateTime: '2023-12-12 15:50:00' },
    { id: 4444, type: 'Cope', dateTime: '2023-12-12 16:00:00' },
    { id: 5555, type: 'Cope', dateTime: '2023-12-10 16:00:00' },
    { id: 6666, type: 'Drag', dateTime: '2023-12-8 16:00:00' },
    { id: 7777, type: 'Cope', dateTime: '2023-12-8 17:00:00' },
    { id: 8888, type: 'Drag', dateTime: '2023-12-5 17:00:00' },
    { id: 9999, type: 'Drag', dateTime: '2023-12-5 18:00:00' },
    { id: 1001, type: 'Drag', dateTime: '2023-12-3 19:00:00' },
    { id: 1101, type: 'Cope', dateTime: '2023-12-3 19:00:00' },
    { id: 1202, type: 'Drag', dateTime: '2023-12-3 19:00:00' },
    { id: 1303, type: 'Cope', dateTime: '2023-12-3 19:00:00' },
    { id: 1404, type: 'Drag', dateTime: '2023-12-3 19:00:00' },
    { id: 1505, type: 'Cope', dateTime: '2023-12-1 15:00:00' },
    { id: 1606, type: 'Drag', dateTime: '2023-12-1 15:00:00' },
    { id: 1707, type: 'Cope', dateTime: '2023-12-1 15:00:00' },
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

function searchTable() {
        const input = document.getElementById('searchInput').value.trim().toUpperCase();
        const table = document.getElementById('moldTable');
        const rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const moldId = rows[i].getElementsByTagName('td')[0];
            if (moldId) {
                const idText = moldId.textContent || moldId.innerText;
                
                if (idText.toUpperCase () .indexOf(input) > -1) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    }


populateTable();


function homePageBack() {
    window.location.href = "operatorHome.html";
  }

  