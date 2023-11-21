class user{
    static count=0;
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        user.count++
    }
    printNumberUser(){
        console.log("current number of users =",user.count)
    }
}
const u1=new user('Drj','imdrjsingh@gmail.com','12qwertxza')
const u2= new user('ritz','imritzsingh@gmail.com','546opwert')
const u3= new user('ritz','imritzsingh@gmail.com','546opwert')
const u4= new user('ritz','imritzsingh@gmail.com','546opwert')
u1.printNumberUser()

