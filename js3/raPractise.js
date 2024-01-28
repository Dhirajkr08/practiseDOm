const form=document.getElementById('form');
const link='https://crudcrud.com/api/6284efb24b264b02af8c62e5348801b5/helloWorld'

//now create event listener
form.addEventListener('submit',addItem);

//prevent from refresh
document.addEventListener('DOMContentLoaded',()=>{
    displayItems('option1')
    displayItems('option2')
    displayItems('option3')
})

// create addItem function
function addItem(e){
    e.preventDefault()

    //take input of the form
    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const option=document.getElementById('option').value;

    //now create switch method for the printing on the screen accorsing to the category
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
            break;        
    }

    //create listItem for the order list
    const listItem=document.createElement('li');
    listItem.textContent=`${item} - $${price}`

    //append list item in order
    order.appendChild(listItem)

    const data={item,price,option}
    axios.post(link,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    let items=JSON.parse(localStorage.getItem(option) ||  []);
    items.push(listItem.textContent)
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

