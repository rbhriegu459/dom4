var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

// AddItem to the list
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;
    var newItemDesc = document.getElementById('item-desc').value;
    // create new li element
    var li = document.createElement('li');
    // adding classname to it
    li.className = 'list-group-item';
    
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    li.appendChild(document.createTextNode(' '+ newItemDesc));

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

// Filter items function
function filterItems(e){
    // Convert to lowercase
    var text = e.target.value.toLowerCase();
    // get list 
    var i = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(i).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemName2 = item.firstChild.nextSibling.textContent;
        if((itemName.toLowerCase().indexOf(text) != -1) || (itemName2.toLowerCase().indexOf(text) != -1)){
            item.style.display = 'block';
        } else{
            item.style.display= 'none';
        }
    });
}