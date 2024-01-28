const form=document.getElementById('form')
const list1=document.getElementById('table1order');
const lsit2=document.getElementById('table2order');
const list3=document.getElementById('table3order');
const link='https://crudcrud.com/api/9cbd3de2d02c4ad9acb329a75969beb0/dummyBooking';

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault()
     
    const dish=document.getElementById('dish').value;
    const price=document.getElementById('price').value;
    const table=document.getElementById('table').value;

    if(dish && price && table){
        const data={dish,price,table}
        axios.post(link,data)
        .then(response=>{
            const orderId=response.data._id
            const listItem=showOnScreen(orderId,dish,price)
            switch(table){
                case 
            }
        })
    }
}
