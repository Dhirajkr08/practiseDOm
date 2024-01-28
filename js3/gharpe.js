const form =document.getElementById('form');
const link='https://crudcrud.com/api/6284efb24b264b02af8c62e5348801b5/task'

//add event listener in form
form.addEventListener('submit',addItem);


//create addItemFunction 

function addItem(e){
    e.preventDefault()

    //get the value of the input

    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const option=document.getElementById('option').value;
    
    let order;
    switch(option){
        case 'option1':
            order=document.getElementById('option1order');
            break
        case 'option2':
            order=document.getElementById('option2order');
            break
        case 'option3':
            order=document.getElementById('option3order');
            break        
    }

    const listItem=document.createElement('li');
    listItem.textContent=`${item} - $${price}`;

    order.appendChild(listItem)

    const data={item,price,option};
    axios.post(link,data)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err)
    })

   let items=JSON.parse(localStorage.getItem(option))|| [];
   items.push(listItem.textContent);
   localStorage.setItem(option,JSON.stringify(items))
    

}
/*function displayItems(option){
    let items=JSON.parse(localStorage.getItem(option)) || [];
    let order=document.getElementById(`${option}order`)

    items.forEach((itemText) => {

        const listItem=document.createElement('li');
        listItem.textContent=itemText;
        order.appendChild(listItem)
    });
}*/
