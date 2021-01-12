//your code here!
var student = [
    { name:  620610111},
    { name:  620610222},
    { name:  620610333},
    { name:  620610444},
  ];
  
function generateTableHead(table, data) {
var thead = table.createTHead();
    var row = thead.insertRow();
    for (let key of data) {
      var th = document.createElement("th");
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (var element of data) {
      var row = table.insertRow();
      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  var table = document.querySelector("table");
  var data = Object.keys(student[0]);
  generateTableHead(table, data);
  generateTable(table, student);