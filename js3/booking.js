

const form=document.getElementById('addform');
const list=document.getElementById('items');
const link='https://crudcrud.com/api/1366ed0c5b694d74b98afbd96b216125/VDmadness/657981d46e31f903e8a920e7';

//add eventListener
form.addEventListener('submit',addItems);

//eventlistener for list
list.addEventListener('click',function(e){
    e.preventDefault();
    const target=event.target;
    if(target.tagName==='BUTTON' && target.classList.contains('delete-button')){
        const userId=target.dataset.userId;
        if(userId){
            deleteUser(userId)
        }

    }
})

//create function 
function addItems(e){
    e.preventDefault();

    const name=document.getElementById('username').value;
    const email=document.getElementById('emailId').value;
    const phone=document.getElementById('phone').value;
    const dateTime=document.getElementById('date').value;

    if(name && email && phone && dateTime){
        const data={name,email,phone,dateTime}

        //posting on axios
        axios.post(link,data)
        .then((response)=>{
            showUserOnScreen(response.data);
            console.log(response)
        })
        .catch((err)=>{
            console.error('Error:',err)
        })
    }
}

function showUserOnScreen(userdata){
    let userDetails=document.getElementById('items')

    if(!userDetails){
        userDetails=document.createElement('li');
        userDetails.id='items'
        list.appendChild(userDetails)
    }

    const userDetailsString=`
    <li>Name:${userdata.name}
    Email:${userdata.email}
    Phone:${userdata.phone}
    dateTime:${userdata.dateTime}</li><button onclick="editUser('${userdata.id}')">Edit</button><button onclick="deleteUser('${userdata.id}')">Delete</button>
    <hr>
    `;
    if(userDetails){
        userDetails.innerHTML+=userDetailsString
    }
    else{
        console.log('Error:kindly check the details')
    }


}
function deleteUser(userId){
    axios.delete(`${link}/${userId}`)
    .then ((response)=>{
        removeUserFromScreen(userId)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function removeUserFromScreen(userId){
    const userEle=document.getElementById(`user-${userId}`);
    if(userEle){
        userEle.remove();
    }
}