function minElement(arr){
    let min=arr[0]
    for (let i=1;i<=arr.length;i++){
        if(arr[i]<=min){
            min=arr[i]
        }
    }
    return min
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    console.log(minElement(arr))
}
main()