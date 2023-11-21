const form=document.getElementById('addForm');
const userList=document.getElementById('items');

//add event Listener 
form.addEventListener('submit',addItem);

//creating function 
function addItem(e){
    e.preventDefault()
    const name=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    if(name && email){
        localStorage.setItem(email, JSON.stringify({name,email}))

        //create list for the UI
        const li=document.createElement('li');
        //creating list details with delete button
        li.innerHTML=`${name} (${email})<button class="delete">Delete</button>`
        userList.appendChild(li)
        //add delete event listener
        const del=li.querySelector('.delete')
        del.addEventListener('click',deleteItem);
        function deleteItem(){
            li.remove()
            localStorage.removeItem(email)
        }
        alert('Data has been completey saved in localStorage')
    }else{
        alert('enter both name and email')
    }

}