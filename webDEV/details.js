class student{
    constructor(firstName,lastName,rollNumber,age){
        this.firstName=firstName
        this.lastName=lastName
        this.rollNumber=rollNumber
        this.age=age
    }
    fullName(){
        console.log(this.firstName + " " +  this.lastName);

    }
    minorOrMajor(){
        if(this.age>=18){
            console.log('Major')
        }
        else{
            console.log("Minor")
        }
    }
}

const DRj=new student('Dhiraj' , 'singh',7,24)
const Avj=new student('Abhijit' , 'singh',32,17)

DRj.fullName()
Avj.fullName()
DRj.minorOrMajor()
Avj.minorOrMajor()
