document.addEventListener('DOMContentLoaded', function() {
    const dataCells = document.querySelectorAll('#data-chart tbody td');
    dataCells[0].textContent = '1234KC';
  
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const rows = document.querySelectorAll('#data-chart tbody tr');
      
      rows.forEach(row => {
        const rowData = Array.from(row.children).map(cell => cell.textContent.toLowerCase());
        if (rowData.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none'; 
        }
      });
    });
  
    const tableBody = document.querySelector('#data-chart tbody');
    for (let i = 0; i < 0; i++) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>Row ${i + 2} Data 1</td>
        <td>Row ${i + 2} Data 2</td>
        <td>Row ${i + 2} Data 3</td>
        <td>Row ${i + 2} Data 4</td>
        <td>Row ${i + 2} Data 5</td>
      `;
      tableBody.appendChild(newRow);
    }
});

const rows = document.querySelectorAll('#data-chart tbody tr');

rows.forEach(row => {

  const toolStatusCell = row.getElementsByTagName('td')[1];

  if (toolStatusCell.textContent.trim() === 'Dull') {
    toolStatusCell.style.color = 'red';
  }
});

function markAsScrap() {
  const rows = document.querySelectorAll('#data-chart tbody tr');

  const confirmation = confirm('Do you want to mark this tool as Scrap?');

  if (confirmation) {
    const status = prompt('Enter the Tool Status (Dull or Scrap):');

    if (status && (status.toLowerCase() === 'dull' || status.toLowerCase() === 'scrap')) {
      rows.forEach(row => {
        const toolStatusCell = row.getElementsByTagName('td')[1];
        if (toolStatusCell.textContent.trim().toLowerCase() === status.toLowerCase()) {
          toolStatusCell.style.color = 'red';
        }
      });
    } else {
      alert('Please enter a valid status (Dull or Scrap).');
    }
  }
}

const markAsScrapBtn = document.getElementById('after-chart-btn');

markAsScrapBtn.addEventListener('click', markAsScrap);

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("data-chart");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var statusCell = rows[i].getElementsByTagName("td")[1]; 

    if (statusCell.innerHTML.trim() === "Dull") {
      rows[i].classList.add("dull-row");
    } else if (statusCell.innerHTML.trim() === "Scrap") {
      rows[i].classList.add("scrap-row");
    }
  }

  table.addEventListener("click", function (event) {
    if (event.target.tagName === "TD") {
      var selectedRow = event.target.parentNode;

      if (selectedRow.classList.contains("dull-row")) {
        selectedRow.classList.toggle("selected-dull");
      }
    }
  });
});

