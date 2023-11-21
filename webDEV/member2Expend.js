class user{
    static count=0
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        user.count++
    }
    printNumberOfUser(){
        console.log("numberOfUsers = ",user.count);
    }
}
class member extends user{
    constructor(username,email,password){
        super(username,email,password);
        this.membershipActivetillDate=new Date(2023,2,3);
        this.package='membershiPackageName';
    }
    renewMemberShip(membershiPackageName){
        this.package=membershiPackageName;
        if (this.package=='MONTHLYPACKAGE'){
            this.membershipActivetillDate=new Date(2023,3,3);
        }else if(this.package=='YEARLYPACKAGE'){
            this.membershipActivetillDate=new Date(2024,2,3);
        }

    }
    subscriptionActivetillDate(){
        console.log(this.username+ ' is subscribed to ' + this.package +' uptil ' + this.membershipActivetillDate);
    }

}
function createStudent(username,email,password,membershiPackageName){
    const mike=new member(username,email,password);
    mike.renewMemberShip(membershiPackageName);
    mike.subscriptionActivetillDate()
}
createStudent('DRJ','imdrj@gmail.com','resxer45','YEARLYPACKAGE')
