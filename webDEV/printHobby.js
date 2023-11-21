const printObject=()=>{
    const personDetails={
        age:26,
        firstName:'Dhiraj',
        LastName:'Singh',
        hobbies:['football','cricket','treking','workout','coding'],
        address:{
            street:'50 main road',
            city:'Patna',
            state:'Bihar'
        }


    }
    const printSecondHobby=()=>{
        console.log("person's 1st hobbies =",personDetails.hobbies[1]);
    }

    const printState=()=>{
        console.log("person's state is =",personDetails.address.state);

    }

    const AgeandCity=()=>{
        const {age,address:{city}}=personDetails;
        console.log("person's age is =",age);
        console.log("person's city is =",city)

    }
    printSecondHobby()
    printState()
    AgeandCity()
}
printObject()