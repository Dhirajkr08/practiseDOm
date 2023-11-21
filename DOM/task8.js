var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');



//submit event
form.addEventListener('submit',addItem);

//add delete function event
itemList.addEventListener('click',remove);

//add filter event
filter.addEventListener('keyup',filterItem);



//add input
function addItem(e){
    e.preventDefault();
    //get input value
    var newitem=document.getElementById('item').value;
    //create new Li
    var li=document.createElement('li');
    //create className
    li.className='list-group-item';

    //append li in newItem
    li.appendChild(document.createTextNode(newitem));

    //create delete button
    var del=document.createElement('button');
    //create del class
    del.className='btn btn-danger btn-sm float-right delete';
    //create text Node
    del.appendChild(document.createTextNode('x'));
    //append li to del
    li.appendChild(del);
    //append li to itemList
    itemList.appendChild(li);
}

//remove functio event
function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//fiter event
function filterItem(e){
    e.preventDefault()
    //convert to lowecse
    var text=e.target.value.toLowerCase();
    //search items
    var item=itemList.getElementsByTagName('li');
    //convert into array
    Array.from(item).forEach(function(items){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=1){
            item.style.display='block';

        }else{
            item.style.display='none';
        }
    })

}



