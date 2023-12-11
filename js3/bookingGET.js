const { default: axios } = require("axios");

const form=document.getElementById('addform')
const link='https://crudcrud.com/api/dca8748f57294a8ab8a0a404a858dd14/VDmadness';
const list=document.getElementById('items');

//create EventListener
form.addEventListener('submit',addItems)

//create function
function addItems(e){
    e.preventDefault()
    const name=document.getElementById('username').value;
    const email=document.getElementById('emailId').value;
    const mobile=document.getElementById('phone').value;
    const date=document.getElementById('date').value;

    if(name && email && mobile && date){
        const date={name,email,mobile,date}
        axios.get(link,data)
        .then((response)=>{
            
            console.log(response)
            for (let i=0;i<=response.data.length;i++){
                showResponseOnScreen(response.data[i])
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }
}

function showResponseOnScreen(userData){
    let userDetails=document.getElementById('items')
    if(!userDetails){
        userDetails=document.createElement('li')
        userDetails.id='items';

    }
    const userDetailsString=`<li>Name: ${userData.name} Email: ${userData.email} Mob: ${userData.mobile} Date&Time: ${userData.date}
    </li><button onclick='editUser('${userData.id}')</button><button onclick deleteUser ('${userData.id}')
    <hr>`;
     if(userDetails){
        userDetails.innerHTML=userDetailsString
     }
     else{
        console.log('EROOR')
     }
    
}