document.addEventListener('DOMContentLoaded', function() {
    const dataCells = document.querySelectorAll('#data-chart tbody td');
    dataCells[0].textContent = '1234KC';
  
    // Handling the search button click
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const rows = document.querySelectorAll('#data-chart tbody tr');
      
      rows.forEach(row => {
        const rowData = Array.from(row.children).map(cell => cell.textContent.toLowerCase());
        if (rowData.includes(searchTerm)) {
          row.style.display = ''; // Show matching rows
        } else {
          row.style.display = 'none'; // Hide non-matching rows
        }
      });
    });
  
    // Adding 14 more rows to the table
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

// Get all the table rows (except the header row)
const rows = document.querySelectorAll('#data-chart tbody tr');

// Loop through each row
rows.forEach(row => {
  // Get the second cell (contains Tool Status)
  const toolStatusCell = row.getElementsByTagName('td')[1];

  // Check if the cell contains 'Dull'
  if (toolStatusCell.textContent.trim() === 'Dull') {
    // Change the cell's background color to red
    toolStatusCell.style.color = 'red';
  }
});

// Function to handle marking as scrap
function markAsScrap() {
  const rows = document.querySelectorAll('#data-chart tbody tr');

  // Prompt for confirmation
  const confirmation = confirm('Do you want to mark this tool as Scrap?');

  if (confirmation) {
    // Get user input for tool status
    const status = prompt('Enter the Tool Status (Dull or Scrap):');

    // Check user input and update table accordingly
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

// Get the "Mark as Scrap" button
const markAsScrapBtn = document.getElementById('after-chart-btn');

// Attach a click event listener
markAsScrapBtn.addEventListener('click', markAsScrap);

document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("data-chart");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var statusCell = rows[i].getElementsByTagName("td")[1]; // Get the cell with Tool Status

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

