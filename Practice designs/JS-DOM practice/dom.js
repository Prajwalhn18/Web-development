var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    console.log("Success");

    var newItem = document.getElementById('item');
    var li = document.createElement('li');

    li.className = 'list-group-item';
    console.log(li);
}