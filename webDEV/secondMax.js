function secMax(arr){
    let highest=-Infinity;
    let secHighest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>highest){
            highest=secHighest;
            highest=arr[i]
        }else if(arr[i]>secHighest && arr[i]!==highest){
            secHighest=arr[i]

        }
    }
    return secHighest
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for(let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    console.log(secMax(arr))
}
main()