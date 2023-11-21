/*console.log("hello world!")
console.log('Trust the process')
function Add(a,b){
    let sum=a+b;
    console.log(sum)
}
(Add(12,45))

function fullName(firstName,lastName){
    let name=firstName+" "+lastName;
    console.log(name)
} 
(fullName('Dhiraj','Singh'))  

const instRate=0.3;
console.log(instRate);

//premetive string,number,boolean,null,undefined

function All(name,age,isApprove,firstName,lastName){
    let details=

 name+" ,"+//string
 age +","+ //int
 isApprove+" ,"+//boolean
 firstName +" ,"+ //undefined
 lastName  //null
return details;

}
console.log(All('Dhiraj',25,true,undefined,null))
*/

//Dynamic use of js
/*let name="DRJ";
let age=24;
let lastName=null
let fullname=undefined;
name="Dhiraj Singh"
console.log(name) 
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(lastName))
console.log(typeof(fullname))
*/


/*
//refrence types (object array function)
let person={
    name:'Dhiraj',
    age:24
}
person.name='jarvis'
console.log(person)
person['name']='MVJ'//u can use like(person.name or person['name])
console.log(person)

let selectedColors=['red','blue'];
selectedColors[2]=7;
console.log(selectedColors)
console.log(typeof(selectedColors))
console.log(selectedColors.length)
*/

const form=document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const date=document.getElementById('date').value;
    const time=document.getElementById('time').value;

    if(name && email && phone && date && time){
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(date)
        console.log(time)
    }
})