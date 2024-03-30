
let button = document.getElementById("button")
button.addEventListener('click', function(event){
    // prevents default actions for the form
    event.preventDefault();

    // gets values from the input elements
    let pro = document.getElementById("pro").value;
    let con = document.getElementById("con").value;
    console.log(pro, con)
    
    // create elements to put data in before appending to table
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    // adding data to inner HTML of cell 1 and cell 2
    cell1.innerHTML = pro;
    cell2.innerHTML = con;

    // add cells to row
    row.append(cell1, cell2);

    // get table add row with cells attached to it
    let table = document.getElementById("data");
    table.append(row);

    // clear form inputs. 
    document.getElementById("pro").value = "";
    document.getElementById("con").value = "";
})