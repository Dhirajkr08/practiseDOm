//take form and link
const form=document.getElementById('form');
const link='https://crudcrud.com/api/f9b081596b0f495fa6fda688e7fb8ca4/dataStorage'

//add evntListener to handle the submit
form.addEventListener('submit',addItem);

//create function for addItem
function additem(e){
    e.preventDefault();

    //take value from input
    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const option=document.getElementById('option').value;

    //create switch in list
    let list;
    switch(option){
        case 'option1':
            list=document.getElementById('option1order')
            break
        case 'option2':
            list=document.getElementById('option2order') 
            break
        case 'option3':
            list=document.getElementById('option3order')
            break       
    }
    const listItem=document.createElement('li');
    listItem.textContent=`${item} - $${price}`;
    list.appendChild(listItem)

    //post data on online
    const data={item,price,option}
    axios.post(link,data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    let items=JSON.parse(localStorage.getItem(option))||[];
    items.push(listItem.textContent)
    localStorage.setItem(option, JSON.stringify(items));
    
}


