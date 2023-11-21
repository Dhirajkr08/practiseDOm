function convertTemp(temp,convUnit){
    if (convUnit=='K'){
        return temp+273;
    }
    else if(convUnit=='C'){
        return temp-273;

    }else{
        return 'Invalid Input';
    }
}
function main(){
    let temp=parseInt(prompt())
    let convUnit=prompt()
    console.log(convertTemp(temp,convUnit))
}
main()