class User{
    static count=0
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++

    }
    printNumberOfUser(){
        console.log('currentNumberOfUsers =',user.count)
    }
}
class Member extends User{
    constructor(username,email,password){
        super(username,email,password)
        this.memberShipValidate=new Date(2023,2,3);
        this.package='memberShipPackageName';
    }
    purchaseMemberShip(memberShipPackageName){
        this.package=memberShipPackageName
        if(this.package=='MONTHLYPACKAGE'){
            this.memberShipValidate=new Date(2023,3,3)
            
        }
        else if(this.package=="YEARLYPACKAGE"){
            this.memberShipValidate=new Date(2024,2,3)
        }
        
    }
    subscriptiontillDate(){
        console.log(this.username + " is subscibed to " + this.package + " uptill " + this.memberShipValidate)
    }
}
function createNewElement(username,email,password,memberShipPackageName){
    const mike=new Member(username,email,password)
    mike.purchaseMemberShip(memberShipPackageName);
    mike.subscriptiontillDate()
}
createNewElement('Dhiraj','drj@gmail.com','ertsc879','MONTHLYPACKAGE')
