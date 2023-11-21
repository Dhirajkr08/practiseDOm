function person(firstName,lastName,age,sex){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.sex=sex

    this.printFullName= function(){
        console.log(this.firstName+' '+this.lastName);
    }
}

const person1=new person('Dhiraj','Singh',21,'Male')
const person2=new person('Vaibhav','jain',22,'Male')
 function checkEligiblity(person){
    if(person.age>=18){
        console.log(person.firstName  + " is eligible for disco")

    }else{
        console.log(person.firstName  + " is not eligible for disco")

    }

 }
 checkEligiblity(person1)
 checkEligiblity(person2)