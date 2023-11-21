var form=document.getElementById('addForm');
var listItem=document.getElementById('items');

//form a submit event
form.addEventListener('submit',addItem)

//delete event
listItem.addEventListener('click',remove)

//


//add input
function addItem(e){
    e.preventDefault()

    //get Input Value
    var newItem=document.getElementById('item').value;

    //create new Li
    var li=document.createElement('li');
    //add class
    li.className="list-group-item"
    
    //add text node with input 
    li.appendChild(document.createTextNode(newItem))

    //create delete button
    var del=document.createElement('button')

    //add class in button
    del.className="btn btn-danger btn-sm float-right delete"

    //append text node
    del.appendChild(document.createTextNode('X'))

    //append button to li
    li.appendChild(del)

    listItem.appendChild(li)
    
    
}
function remove(e){
    e.preventDefault()
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            listItem.removeChild(li);
        }
    }
}


