

const form=document.getElementById('addform');
const list=document.getElementById('items');
const link='https://crudcrud.com/api/0cd05321d7b9476dbe2016fe3affacdd/VDmadness';

//add eventListener
form.addEventListener('submit',addItems);

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
            console.error('Error:......')
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
    <li>Name:${userdata.name}</li>
    <li>Email:${userdata.email}</li>
    <li>Phone:${userdata.phone}</li>
    <li>dateTime:${userdata.dateTime}</li>
    <button onclick="editUser('${userdata.id}')">Edit</button>
    <button onclick="editUser('${userdata.id}')">Delete</button>
    <hr>
    `;
    if(userDetails){
        userDetails.innerHTML+=userDetailsString
    }
    else{
        console.log('Error:kindly check the details')
    }


}