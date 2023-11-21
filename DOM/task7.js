var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//submit event
form.addEventListener('submit',addItems)

//add delete event
itemList.addEventListener('click',remove);

//add filter event
filter.addEventListener('keyup',filterItem);


//add Input
function addItems(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;
    
    //create new li
   var newLi=document.createElement('li');

    //create class
    newLi.className='list-group-item';

    //appending li into new item
    newLi.appendChild(document.createTextNode(newItem));

    //create delete button
    var del=document.createElement('button');
     del.className='btn btn-danger btn-sm float-right delete';
     del.appendChild(document.createTextNode('x'))

     //append new li to del
     newLi.appendChild(del)
     //append new li to itemlis
     itemList.appendChild(newLi)
}

//fucntion for remove item
function remove(e){
    e.preventDefault()
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//filter Item
function filterItem(e){
    e.preventDefault()
    //convert to lowercase
    var text=e.target.value.toLowerCase();
    //console.log(text)
    var items=itemList.getElementsByTagName('li');
    //console.log(items)
    //convert into array//
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';

        }else{
            item.style.display='none';
        }
    });

}