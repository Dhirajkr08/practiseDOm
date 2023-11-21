function IsValidate(s){
    let stack=[]
    let dict={']':'[','}':'{',')':'('}
    for(let i of s){
        if(i in dict){
            if(stack.length===0 || stack.pop()!==dict[i]){
                return false
            }
        }
        else{
            stack.push(i)
        }
    }
    return stack.length===0;
}
function main(){
    let s='[]';
    let output=IsValidate(s)
    if(output){
        console.log(true)

    }else{
        console.log(false)
    }
}
main()