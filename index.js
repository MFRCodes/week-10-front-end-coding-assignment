let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('info');
    let row = table.insertRow(); 
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('pro').value;
    row.insertCell(1).innerHTML = document.getElementById('con').value;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id));
    document.getElementById('pro').value = '';
    document.getElementById('con').value = ''; 
    id++;
});

// I initialized the Javascript by defining a variable named "id" and assigning it the value of zero. On line 3, 
// the "EventListener" on the button is created. Once the button is clicked, the code on lines 4-13 runs. On lines 4-13,
// new rows and cells are created and added to the table. Line 10, is what allows users to delete what they've
// inserted to the table.

function createDeleteButton(rowId) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${rowId}`);
        let elementToDelete = document.getElementById(`item-${rowId}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

// Lines 21-31 is what creates the "delete" button. The code starts off with the function "createDeleteButton" being declared
// and it uses "rowID" as its parameter. On lines 22-24, a new button is made and assigned the name "btn btn-primary". On lines
// 25-30, once a user clicks the "delete" button, the "onclick" event will take place and any rows that need to be deleted will
// be deleted because the row will be taken away from the DOM.
