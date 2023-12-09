
const moldData = [
    { id: '1234KC', status: 'Sharp', size: '28 in.', dateTime: '2023-11-15 12:00:00', recentmold: 1234},
    { id: '5678KC', status: 'Dull', size: '32 in.', dateTime: '2023-11-16 15:00:00', recentmold: 1111 },
    { id: '1122KC', status: 'Sharp', size: '42 in.', dateTime: '2023-11-16 15:50:00', recentmold: 2222 },
    { id: '3344KC', status: 'Sharp', size: '28 in.', dateTime: '2023-11-16 16:00:00', recentmold: 3333 },
    { id: '5566KC', status: 'Sharp', size: '28 in.', dateTime: '2023-11-16 16:00:00', recentmold: 4444 },
    { id: '7788KC', status: 'Dull', size: '36 in.', dateTime: '2023-11-16 16:00:00', recentmold: 5555 },
    { id: '9900KC', status: 'Sharp', size: '32 in.', dateTime: '2023-11-16 17:00:00', recentmold: 6666 },
    { id: '2468KC', status: 'Dull', size: '28 in.', dateTime: '2023-11-16 17:00:00', recentmold: 7777 },
    { id: '1357KC', status: 'Dull', size: '28 in.', dateTime: '2023-11-16 18:00:00', recentmold: 8888 },
    { id: '0000KC', status: 'Sharp', size: '36 in.', dateTime: '2023-11-16 19:00:00', recentmold: 9999 },
    { id: '1111KC', status: 'Sharp', size: '36 in.', dateTime: '2023-11-16 19:00:00', recentmold: '0000' },
    { id: '2222KC', status: 'Sharp', size: '32 in.', dateTime: '2023-11-16 19:00:00', recentmold: 1122 },
    { id: '3333KC', status: 'Scrap', size: '28 in.', dateTime: '2023-11-16 19:00:00', recentmold: 3344 },
];

function populateTable() {
    const tableBody = document.querySelector('#moldTable tbody');
    tableBody.innerHTML = '';
    moldData.forEach(mold => {
        const statusClass = mold.status === 'Dull' ? 'status-dull' : '';
        const row = `<tr>
                        <td><a href="${mold.id}.html">${mold.id}</a></td>
                        <td class="${statusClass}">${mold.status}</td>
                        <td>${mold.size}</td>
                        <td>${mold.dateTime}</td>
                        <td>${mold.recentmold}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// this is how you search molds by ID
// need to make it so that it does not change as you type
// dont want table to move
function searchTable() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const table = document.getElementById('moldTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const moldId = rows[i].getElementsByTagName('td')[0];
        if (moldId) {
            const idText = moldId.textContent || moldId.innerText;
            if (idText.toUpperCase().indexOf(input) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

populateTable();


function homePageBack() {
    window.location.href = "homePage.html";
  }

  