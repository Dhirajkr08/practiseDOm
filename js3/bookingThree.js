

const form=document.getElementById('addform');
const list=document.getElementById('items');
const link="https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails";

//create eventlistener for form
form.addEventListener("submit",addItem);

//define addItem
function addItem(e){
    e.preventDefault();

    const name=document.getElementById('username').value;
    const email=document.getElementById('emailId').value;
    const phone=document.getElementById('phone').value;
    const date=document.getElementById('date').value;

    const data={name,email,phone,date}
    //const elink=`https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`
    axios.post(link,data)
    .then((response)=>{
        const listItem=showOnScreen(response.data)
        list.appendChild(listItem);
        form.reset();
    })
    .catch((err)=>{
        console.error("ERROR: adding user details:",err);
    });
}
function showOnScreen(user){
    const listItem=document.createElement('li');
    listItem.id=`user-${user._id}`
    listItem.innerHTML=`
    name:${user.name}, email:${user.email}, phone:${user.phone}, date&Time:${user.date}
    <button class="btn btn-info" onclick="editItem('${user._id}')">Edit</button>
    <button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delete</button>`;
    return listItem;
}

function editItem(userId){
    if(!userId){
        console.error("Invalid userId:",userId);
        return;
    }
    const editlink=`https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`;
    axios.get(editlink)
    .then(response =>{
        const user=response.data;

        document.getElementById("username").value=user.name;
        document.getElementById("emailId").value=user.email;
        document.getElementById("phone").value=user.phone;
        document.getElementById("date").value=user.date;

        //removing initial form submit
        form.removeEventListener("submit",addItem);

        //add new event
        function editSubmit(event){
            event.preventDefault();

            const editname=document.getElementById("username").value;
            const editemail=document.getElementById("emailId").value;
            const editPhone=document.getElementById("phone").value;
            const editdate=document.getElementById("date").value;

            const editedLink=`https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`
            const editedData={name: editname,email: editemail,phone: editPhone,date: editdate}
            axios.put(editedLink,editedData)
            .then(()=>{
                const editedUser={
                    _id:userId,
                    name:editname,
                    email:editemail,
                    phone:editPhone,
                    date:editdate
                };
                const editedListItem=showOnScreen(editedUser)
                list.replaceChild(editedListItem,document.getElementById(`user-${userId}`));
                form.reset()

                //restore original submit
                form.removeEventListener("submit",editSubmit)
                form.addEventListener("submit",addItem);
            })
            .catch(error=>{
                console.log("ERROR editing user details:",error);
            });
        }
        //add event listener for new edit 
        form.addEventListener("submit",editSubmit)
    })
    .catch(error=>{
        console.error("ERROR fetching user details:",error);
    })

}

function deleteUser(userId){
    const deletelink=`https://crudcrud.com/api/f19180852f744647a78785bbacd9c7f6/bookingDetails/${userId}`;
    axios.delete(deletelink)
    .then(()=>{
        list.removeChild(document.getElementById(`user-${userId}`))
    })
    .catch(error=>{
        console.error("Error deleting user:",error)
    })
}
