<<<<<<< HEAD
const form=document.getElementById('form');
const list1=document.getElementById('table1order');
const list2=document.getElementById('table2order');
const list3=document.getElementById('table3order');
const link='https://crudcrud.com/api/9cbd3de2d02c4ad9acb329a75969beb0/orderDetails';

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    const food=document.getElementById('dish').value;
    const price=document.getElementById('price').value;
    const table=document.getElementById('table').value;

    if(food && price && table){
        const data={food,price,table}
        axios.post(link,data)
        .then(response=>{
            const orderId=response.data._id;
            const listItem=showOnScreen(orderId,food,price);
            switch(table){
                case "table1": list1.appendChild(listItem)
                break;

                case "table2": list2.appendChild(listItem)
                break;
                case "table3":list3.appendChild(listItem)
                break;
                default:
                    break;


            }
            form.reset()
        })
        .catch(err=>{
            console.error(err)
        })

    }
}
function showOnScreen(orderId,dish,price){
    const listItem=document.createElement('li');
    listItem.id=`order-${orderId}`;
    listItem.innerHTML=`
    ${dish}- $${price}
    <button onclick="deleteUser('${orderId}')">Delete</button>
    `;
    return listItem;
}

function deleteUser(orderId){
    const deletelink=`https://crudcrud.com/api/9cbd3de2d02c4ad9acb329a75969beb0/orderDetails/${orderId}`;
    const listItem=document.getElementById(`order-${orderId}`)
    axios.delete(deletelink)
    .then(()=>{
        if(listItem){
            listItem.parentNode.removeChild(listItem)

        }
        else{
            console.error(`Error: listitem 'order-${userId}' not found`)
        }
        


    })
    .catch((err)=>{
        console.log(err)
    })

=======
const form=document.getElementById('form');
const list1=document.getElementById('table1order');
const list2=document.getElementById('table2order');
const list3=document.getElementById('table3order');
const link='https://crudcrud.com/api/9cbd3de2d02c4ad9acb329a75969beb0/orderDetails';

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
    const food=document.getElementById('dish').value;
    const price=document.getElementById('price').value;
    const table=document.getElementById('table').value;

    if(food && price && table){
        const data={food,price,table}
        axios.post(link,data)
        .then(response=>{
            const orderId=response.data._id;
            const listItem=showOnScreen(orderId,food,price);
            switch(table){
                case "table1": list1.appendChild(listItem)
                break;

                case "table2": list2.appendChild(listItem)
                break;
                case "table3":list3.appendChild(listItem)
                break;
                default:
                    break;


            }
            form.reset()
        })
        .catch(err=>{
            console.error(err)
        })

    }
}
function showOnScreen(orderId,dish,price){
    const listItem=document.createElement('li');
    listItem.id=`order-${orderId}`;
    listItem.innerHTML=`
    ${dish}- $${price}
    <button onclick="deleteUser('${orderId}')">Delete</button>
    `;
    return listItem;
}

function deleteUser(orderId){
    const deletelink=`https://crudcrud.com/api/9cbd3de2d02c4ad9acb329a75969beb0/orderDetails/${orderId}`;
    const listItem=document.getElementById(`order-${orderId}`)
    axios.delete(deletelink)
    .then(()=>{
        if(listItem){
            listItem.parentNode.removeChild(listItem)

        }
        else{
            console.error(`Error: listitem 'order-${userId}' not found`)
        }
        


    })
    .catch((err)=>{
        console.log(err)
    })

>>>>>>> cbb6413e308176459dbd95af04e141889b40f0f1
}