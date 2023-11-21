//store data in local storage
var form=document.getElementById('addForm');

//creating a function 
form.addEventListener('submit',submitEvent);

//function of submitEvent
function submitEvent(e){
    e.preventDefault()
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value; 
    if(username && email){
       const userDetails={ userName:username,
        userEmail:email,
       };
       //store the serialized user object in the local storage
       const userJSON=JSON.stringify(userDetails);
       //store in local storagre
       localStorage.setItem(email,userJSON)
       alert('userDetails are stored in localstorage')

    }else{
        alert('kindly enter the both inputs')
    }

}    
    