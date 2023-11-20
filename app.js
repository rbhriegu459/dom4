var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// AddItem to the list
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // adding classname to it
    li.className = 'list-group-item';
    
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button for new li
    var del = document.createElement('button');
    // Ad classes to delete button
    del.className = "btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    itemList.appendChild(li);
}


// Deleting function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}