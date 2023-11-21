class User{
    static count=0;
    constructor (username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++
    }
    printNumberOfUser(){
        console.log('currentNumberOfUsers =',User.count)
    }
}
class Member extends User{
    constructor(username,email,password,memberSince){
        super(username,email,password)
        this.memberSince=memberSince
    }
    printMemberInfo(){
        console.log('Member Info :');
        console.log('username:',this.username);
        console.log('Email',this.email);
        console.log('Member Since:',this.memberSince)
    }

}
const u1=new Member('zxser','imzxser@gmail.com','2023-11-03');
const u2=new Member('cvfrer','imcvfrer@gmail.com','2023-11-03');
u1.printNumberOfUser()
u1.printMemberInfo()
