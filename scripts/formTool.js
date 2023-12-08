const moldData = [
    { date: '2023-11-15 12:00:00', type: '', id: '' },
    { date: 2, type: '2023-11-15 12:00:00', id: '5678' },
    { date: 3, type: '2023-11-15 12:00:00', id: '2468' },
    { date: 4, type: '2023-11-15 12:00:00', id: '1357' },
    { date: 5, type: '2023-11-15 12:00:00', id: '0000' },
    { date: 6, type: '2023-11-15 12:00:00', id: '1111' },
    { date: 7, type: '2023-11-15 12:00:00', id: '2222' },
];

function populateTable() {
    const tableBody = document.querySelector('#formTable tbody');
    tableBody.innerHTML = '';
    moldData.forEach(form => {
        const row = `<tr>
                        <td>${sharpened.date}</td>
                        <td>${dateTime.type}</td>
                        <td>${ProductMold.id}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}