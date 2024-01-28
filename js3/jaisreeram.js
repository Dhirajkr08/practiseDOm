

const form=document.getElementById('form');
const link='https://crudcrud.com/api/0045a7d27d2d4f548473144e2de242b1/bookingDetails';

//
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

//add event listener for form
form.addEventListener('submit',addItem);

//create function for the addItem
function addItem(e){
    e.preventDefault();

    //take input and option values
    const item=document.getElementById('item').value;
    const price=document.getElementById('price').value;
    const option=document.getElementById('option').value;

    let list;
    switch (option){
        case 'option1':
            list=document.getElementById('electricorder')
            break
        case 'option2':
            list=document.getElementById('groceryorder')
            break
        case 'option3':
            list=document.getElementById('medicineorder')
            break        
    }
    let data={item,price,option}
    axios.post(link,data)
    .then((res)=>{
        console.log(res)
        let li=document.createElement('li');
        li.textContent=`${item} - $${price}`;
        list.appendChild(li);
        storeData('data',data)
    })
    .catch((err)=>{
        console.log(err)
    })

}
//store in localstorage
function storeData(key,val){
    localStorage.setItem(key, JSON.stringify(val))

}
//function the retrive data from the localstorage
function getData(key){
    return JSON.parse(localStorage.getItem(key)) 
}

//function to load data from the localstorage
function loadData(){
    const storedData=getData('data');

    if(storeData){
        let list;
        switch (storedData.option) {
            case "option1":
                list = document.getElementById("electronicorder");
                break;
            case 'option2':
                list=document.getElementById('groceryorder')
                break
            case 'option3':
                list=document.getElementById('medicineorder')
                break

    }
    let li=document.createElement('li');
    li.textContent=`${storeData.item} - $${storeData.price}`
    list.appendChild(li);
}
}

