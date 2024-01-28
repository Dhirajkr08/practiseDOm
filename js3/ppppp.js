/*
function swap(a,b){
    if(a && b){
        let temp=a
        a=b
        b=temp
    }
    console.log(a)
    console.log(b)

}
function main(){
    let a=parseInt(prompt())
    let b=parseInt(prompt())
    swap(a,b)
}
main()
*/

/*
function findLargest(a,b,c){
    if(a >b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    return c
}
function main(){
    let a=parseInt(prompt())
    let b=parseInt(prompt())
    let c=parseInt(prompt())
    console.log(findLargest(a,b,c))
}
main()
*/
/*
function findDistance(d){
    if(d>=1000){
        return 12
    }else if(d>500 && d<1000){
        return 10
    }else if (d>100 && d<=500){
        return 8
    }
    return 5
}
function main(){
    d=parseInt(prompt())
    console.log(findDistance(d))

}
main()
*/

/*
function TernaryOP(marks){
    return marks>=40 ? 'Pass' : 'fail'
}
function main(){
    marks=parseInt(prompt())
    console.log(TernaryOP(marks))
}
main()
*/
/*
function maxTwoTernary(a,b){
    return a>b ? a : b

}
function main(){
    let a=parseInt(prompt())
    let b=parseInt(prompt())
    console.log(maxTwoTernary(a,b))

}
main()
*/

/*
function findDayName(day){
    switch (day){
        case 1:
            return 'monday'
        case 2:
            return 'tuesday'
        case 3:
            return 'wednesday'
        case 4:
            return 'thursday'
        case 5:
            return 'friday'
        case 6:
            return 'saturday'
        case 7:
            return 'sunday'
        default:
            return 'Invalid'                            
    }
}
function main(){
    let day=parseInt(prompt())
    console.log(findDayName(day))
}
main()
*/

/*
function evenNumber(n){
    let i=1
    while(i<=n){
        if(i%2==0){
            console.log(i)
        }
        i+=1

    }
    

}
function main(){
    let n=parseInt(prompt())
    evenNumber(n)

}
main()
*/

/*
function printSeries(n){
    i=1
    while (i*i<=n){
        console.log(i*i)
        i+=1
        
        
    }
    
    
}
function main(){
    let n=49
    printSeries(n)

}
main()
*/

/*function printSeries(n){
    let i=1
    while (i<=n){
        if(i%5===0){
            i+=1
            continue
        }
        console.log(i)
        i+=1
    }
}
function main(){
    let n=7
    printSeries(n)
}  
main()  
*/

/*
function printDigit(n){
    while(n>0){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
function main(){
    let n=153
    printDigit(n)
}
main()
*/

/*
function printDigit(n){
    while (n>0){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
function main(){
    let n=351
    printDigit(n)
}
main()
*/

/*
function revString(n){
    console.log(n.split("").reverse().join(""))

    }
function main(){
    n="hello"
    revString(n)
}
main()
*/

/*
function oddNumber(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}
function main(){
    let n=7
    oddNumber(n)

}
main()
*/
/*function printSeries(n){
    for(let i=1;i<=n;i++){
        if(i*i*i>n){
            break

        }
        console.log(i*i*i)
    }
}
function main(){
    let n=125
    printSeries(n)

}
main()*/

/*function printSeries(n){
    for(let i=1;i<=n;i++){
        if(i*i*i>n){
            break
        }
        console.log(i*i*i)
    }
}
function main(){
    let n=125
    printSeries(n)
}
main()*/

/*
function EvnNumber(n){
    for (let i=1;i<=n;i++){
        if(i%4==0){
            continue
        }
        else if(i%2==0){
            console.log(i)
        }
    }
}
function main(){
    let n=10
    EvnNumber(n)
}
main()
*/

/*function printNumber(n,m){
    for (let i=1;i<=n;i++){
        if(i===m){
            break
        }
        console.log(i)

    }
}
function main(){
    let n=10
    let m=4
    printNumber(n,m)
}
main()*/

/*
function printPattern(n){
    for(let i=1;i<=n;i++){
        str=''
        for (let j=0;j<=n-i;j++){
            str+='*'

        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)

}
main()
*/

/*
function printPattern(n){
    for(let i =1;i<=n;i++){
        str='';
    
        for(let j=1;j<=i;j++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*
function printPattern(n){
    let i=1
    while(i<=n){
        let j=n;
        let str='';
        while(j>=i){
            j-=1
            str+='*'

        }
        console.log(str)
        i+=1
    }
}
function main(){
    let n=5
    printPattern( n)

}
main() 
*/

/*
function printPattern(n){
    let i=1
    while (i<=n){
        let j=1
        let str=''
        while(j<=i){
            j+=1
            str+='*'

        }
        console.log(str)
        i+=1

    }
}
function main(){
    let n=5
    printPattern(n)
}
main()
*/

/*
function pattern(n){
    let i=1
    while(i<=n){
        let j=n;
        str='';
        while(j>=i){
            j-=1
            str+='*'
            

        }
        console.log(str)
        i+=1
    }
}
function main(){
    let n=5
    pattern(n)
}
main()
*/

/*function printPattern(n){
    for (let i=1;i<=n;i++){
        str='';
        for(let j=1;j<=n-i+1;j++){
            str+='*'

        }
        console.log(str)

    }
    for (let i=1;i<=n;i++){
        str='';
        for (let j=1;j<=i;j++){
            str+='*';
        }
        console.log(str)
    }

}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*
//using while loop
function Pattern(n){
    let i=1
    while (i<=n){
        let j=n;
        let str='';
        while (j>=i){
            j-=1
            str+='*';

        }
        console.log(str)
        i+=1
    }
    let k=1
    while (k<=n){
        let l=1;
        let str='';
        while (l<=k){
            str+='*'
            l+=1

        }
        console.log(str)
        k+=1
    }
}
function main(){
    let n=5
    Pattern(n)
}
main()
*/

// function printPattern(n){
//     for (let i=1;i<=n;i++){
//         let str=''
//         for (let j=1;j<=i;j++){
//             str+='*';

//         }
//         for(let j=1;j<=n-i;j++){
//             str+=' ';
//         }
//         for(let j=1;j<=i;j++){
//             str+='*'
//         }
//         console.log(str)

//     }
    
// }
// function main(){
//     n=5
//     printPattern(n)

// }
// main()

/*
function Pattern(n){
    let i=1
    while (i<=n){
        let j=n
        let str=''
        while (j>=i){
            j-=1
            str+='*';

        } 
        console.log(str)
        i++
    }
    let k=1
    while(k<=n){
        let l=1;
        let str=''
        while(l<=k){
            l+=1
            str+='*'


        }
        console.log(str)
        k++

    }

}
function main(){
    let n=5
    Pattern(n)
}
main()*/

/*
function TwoSum(nums,target){
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
        


    }
    return null
    
}
function main(){
    nums=[3,4,5]
    target=7
    console.log(TwoSum(nums,target))
}
main()*/

/*function TwoSum(nums,target){
    for(let i=0;i<=nums.length;i++){
        for (let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
    return null;
}
function main(){
    let n=parseInt(prompt())
    let nums=[]
    for(let i=1;i<=n;i++){
        nums.push(parseInt(prompt()))

    }
    let target=parseInt(prompt())
    console.log(TwoSum(nums,target))

}
main()*/

/*function palindrome(n){
    let num=n
    let rev=0
    while (n>0){
        let temp=n%10
        rev=rev*10+temp
        n=Math.floor(n/10)
    }
    if(num===rev){
        return true
    }else{
        return false
    }
}
function main(){
    let n=121
    console.log(palindrome(n))
}
main()*/

/*function Palindrome(n){
    let num=n.toString();
    let rev=num.split('').reverse().join('');
    while (n){
        if(num==rev){
            return true
        }
        return false

    }
}
function main(){
    let n=121
    console.log(Palindrome(n))
}
main()*/


/*function WoodenPieces(piece,cut){
    let remain=piece;
    for(let i=1;i<=cut;i++){
        if(remain<0){
            return false

        }
        remain-=1
    
    }
    return remain
}
function main(){
    let piece=5
    let cut=2
    console.log(WoodenPieces(piece,cut))

}
main()*/

/*function ROman(n){
    let roman={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let ans=0
    let prev=0
    for(let i of n){
        if(roman[i]>prev){
            ans+=roman[i]-2*prev

        }
        else{
            ans+=roman[i]
        }
        prev=roman[i]
    }
    return ans
}
function main(){
    let n='XIV'
    console.log(ROman(n))
}
main()*/

/*
function storeEle(n){
    let arr=[]
    for(let i=1;i<=n;i++){
        arr.push(i)

    }
    return arr
}
function main(){
    let n=12
    console.log(storeEle(n))
}
main()*/

/*function maxInArray(arr,length){
    let maxi=arr[0];
    for (let i=0;i<=arr.length;i++){
        if (arr[i]>=maxi){
            maxi=arr[i]
        }

    }
    return maxi
}
function main(){
    let n=5
    let arr=[]
    for(let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))

    }
    console.log(maxInArray(arr,n))
}
main()*/

/*
function minInArray(arr,length){
    mini=arr[0]
    for(let i=0;i<=arr.length;i++){
        if(arr[i]<=mini){
            mini=arr[i]
        }
    }
    return mini
}
function main(){
    let n=5
    let arr=[]
    for(let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))

    }
    console.log(minInArray(arr,n))
}
main()*/

/*function PrimeNumber(n){
    //let num=toString(n)
    let arr=[]
    let count=0
    let x=2
    while(arr.length<=n){
        flag=true
        for(let i=2;i<=Math.sqrt (x);i++){
            if((x%i)==0){
                flag=false
                break
            }
            

        }
        if(flag==true){
            arr.push(x)
            count+=1

        }
        if(count==n){
           break
        }
        x+=1
    }
    return arr
}    

function main(){
    let n=5
    console.log(PrimeNumber(n))
}
main()*/

/*function PrimeNumber(n){
    let x=2
    let count=0
    let arr=[]
    while(arr.length<=n){
        flag=true
        for(let i=2;i<=Math.sqrt(x);i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if(flag==true){
            arr.push(x)
            count+=1
        }
        if(count==n){
            break
        }
        x+=1
    }
    return arr
}
function main(){
    let n=5
    console.log(PrimeNumber(n))
}
main()*/

/*function printSeries(arr,length){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sr=''
            for(let k=i;k<=j;k++){
                sr+=arr[k]
            }
            console.log(sr)
        }
    }
}
function main(){
    let n=5
    let arr=[1,2,3,4,5]
    printSeries(arr,n)
}
main()*/

/*
function printSeries(arr,length){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sr=''
            for(let k=i;k<=j;k++){
                sr+=arr[k]
            }
            console.log(sr)
        }
    }
}
function main(){
    let n=5
    let arr=[1,2,3,4,5]
    printSeries(arr,n)
}
main()*/

/*function MaxSum(arr,length){
    let maxisum=arr[0]
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum=0
            for(let k=i;k<=j;k++){
                sum+=arr[k]
                if(sum>maxisum){
                    maxisum=sum
                }
            }
        }
    }
    return maxisum
}
function main(){
    let n=9
    let arr=[5,2,-4,-5,3,-1,2,3,1]
    console.log(MaxSum(arr,n))
}
main()*/

/*function runningSum(nums){
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
}
function main(){
    let ar=[1,2,3,4]
    console.log(runningSum(ar))
}
main()*/

/*function maxWealth(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let total=0
        for(let j=0;j<accounts[i].length;j++){
            total+=accounts[i][j]
        }
        maxi=Math.max(maxi,total)
    }
    return maxi
}
function main(){
    let accounts=[[1,2,3],[3,2,1]]
    console.log(maxWealth(accounts))
}
main()*/

/*function maxWealth(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let total=0
        for(let j=0;j<accounts[i].length;j++){
            total+=accounts[i][j]
        }
        maxi=Math.max(maxi,total)
    }
    return maxi
}
function main(){
    let accounts=[[1,2,3],[3,2,1]]
    console.log(maxWealth(accounts))
}
main()
*/

/*function maxWealth(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let total=0
        for(let j=0;j<accounts[i].length;j++){
            total+=accounts[i][j]
            maxi=Math.max(total,maxi)
        }
    }
    return maxi
}
function main(){
    let accounts=[[1,2,3],[3,2,1]]
    console.log(maxWealth(accounts))
}
main()*/

/*function SumOffOdd(arr){
    let total=0
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if((j-i+1)%2===1){
                total+=sum
            }
        }
    }
    return total
}
function main(){
    let arr=[1,4,2,5,3]
    console.log(SumOffOdd(arr))
}
main()*/

//maxWealth
/*function maxWealth(accounts){
    let maxi=0;
    for(let i=0;i<accounts.length;i++){
        let sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
            maxi=Math.max(sum,maxi)
        }

    }
    return maxi
}
function main(){
    let accounts=[[1,2,3],[3,2,1]]
    console.log(maxWealth(accounts))
}
main()*/

/*function sumOfOdd(arr){
    let total=0
    for(let i =0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if((j-i+1)%2===1){
                total+=sum
            }
        }
    }
    return total
}
function main(){
    let arr=[1,4,2,5,3]
    console.log(sumOfOdd(arr))
}
main()*/

/*function sumOfOdd(arr){
    let total=0
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if((j-i)%2===0){
                total+=sum
            }
        }
    }
    return total

} 
function main(){
    let arr=[1,4,2,5,3]
    console.log(sumOfOdd(arr))

}   
main()*/

/*function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

function main(){
    let arr=[4,3,2,5,1]
    console.log(bubbleSort(arr))
}
main()*/

//selectionSort
/*function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let c=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[c]){
                c=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[c]
        arr[c]=temp

    }
    return arr
}
function main(){
    let arr=[4,3,2,5,1]
    console.log(selectionSort(arr))
}
main()*/

/*
function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>=temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
function main(){
    let arr=[4,1,5,3,2]
    console.log(InsertionSort(arr))
}
main()
*/

/*
function hamminghWeight(n){
    let count=0
    for(let i=0;i<=n.length;i++){
        if(n[i]==='1'){
            count+=1
        }
    }
    return count
}
function main(){
    let n='1011';
    console.log(hamminghWeight(n))

}
main()*/

/*function altBits(n){
    let num=n.toString(2)
    for(let i=1;i<num.length;i++){
        if(num[i-1]===num[i]){
            return false
        }
    }
    return true

}
function main(){
    let n=7
    console.log(altBits(n))
}
main()*/

/*function hexa(num){
    if(num==0){
        return '0'
    }
    let hex='0123456789abcdef'
    let ans=''
    while(num>0){
        ans=hex[num%16]+ans
        num=Math.floor(num/16)
    }
    return ans
}
function main(){
    n=-1
    console.log(hexa(n))
}
main()

function hexa(num){
    return (num<0) ? (num>>>0).toString(16):num.toString(16)

}
*/

/*function Hexa(num){
    return (num<0) ? (num>>>0).toString(16):num.toString(16)
}
function main(){
    n=-1
    console.log(Hexa(n))
}
main()*/

/*function printPattern(n){
    for(let i=0;i<n;i++){
        let str='';
        for(let j=0;j<2(i-n);j++){
            str=str+'*'
        }
        for (let j=1;j<i+2;j++){
            str+='';
        }
        for(let j=i;j<n;j++){
            str+='*'
        }
        console.log(str)

    }
}
function main(){
    let n=5;
    printPattern(n)
}
main()*/




/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str='';
        for(let j=i;j>0;j--){
            str+='*'
        }
        for(let k=2*(n-i);k>0;k--){
            str+=' ';
        }
        for(let l=i;l>0;l--){
            str+='*';
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str='';
        for(let j=i;j>0;j--){
            str+='*';

        }
        for(let k=2*(n-i);k>0;k--){
            str+=' ';
        }
        for(let l=i;l>0;l--){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str='';
        for(let j=i;j>0;j--){
            str+='*';
        }
        for(let k=2*(n-i);k>0;k--){
            str+=' ';
        }
        for(let l=i;l>0;l--){
            str+='*';
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str=''
        for(let j=i;j>0;j--){
            str+='*'
        }
        for(let k=2*(n-i);k>0;k--){
            str+=' ';
        }
        for(let l=i;l>0;l--){
            str+='*';
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function Indices(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]*nums[j]===target){
                return [i,j]
            }
        }
    }
    return null
}
function main(){
    let nums=[4,5,2,3,1]
    let target=2
    console.log(Indices(nums,target))

}
main()*/

/*function Indices(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]*nums[j]===target){
                return [i,j]
            }
        }
    }
    return null
}
function main(){
    let nums=[1,2,5,7,8,10]
    let target=50
    console.log(Indices(nums,target))

}
main()
*/

/*function shapees(n){
   let arr=[]
   let count=1
   while (arr.length<n){
    const sumDig=String(count).split('').reduce((sum,digit)=>sum+parseInt(digit),0);
    if(sumDig%5===0){
        arr.push(count)
    }
    count++

   }
   return arr
}
function main(){
    let n=5
    console.log(shapees(n))
}
main()
*/

/*function sharpees(n){
    let arr=[]
    let count=1
    while (arr.length<n){
        const sumofDigit=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0);
        if(sumofDigit%5===0){
            arr.push(count)
        }
        count++
    }
    return arr

}
function main(){
    n=5
    console.log(sharpees(n))

}
main()*/

/*function sharpees(n){
    let arr=[]
    let count=1
    while(arr.length<n){
        const sumCount=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0);
        if(sumCount%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(sharpees(n))
}
main()*/


/*
function sharpees(n){
    let arr=[]
    let count=1
    while (arr.length<n){
        const sumCount=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(sumCount%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(sharpees(n))
}
main()*/

/*function sharpees(n){
    let arr=[]
    let count=1
    while(arr.length<n){
        const sumCount=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)

        if(sumCount%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(sharpees(n))
}
main()*/

/*function maxStar(s){
    total=0
    count=0
    for(let i of s){
        if (i==='*'){
            count+=1
            total=Math.max(total,count)
        }
        else{
            count=0

        }
    }
    return total
}
function main(){
    let s='a*b***c***d****e'
    console.log(maxStar(s))
}
main()*/


/*function maxStar(str){
    let total=0
    let count=0
    for(let i of str){
        if(i==='*'){
            count+=1
            total=Math.max(total,count)

        }
        else{
            count=0
        }
    }
    return total
}*/


/*function targetIndices(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]*nums[j]==target){
                return [i,j]
            }

        }
    }
    return [-1]
}
function main(){
    let n=[1,3,5,7,8,10]
    let target=50
    console.log(targetIndices(n,target))
}
main()*/

/*function reversesortedMin(nums){
    let low=0
    let high=nums.length-1
    while (low<high){
        let mid=Math.floor((low+high)/2)
        if(nums[mid]<nums[mid-1] && nums[mid] < nums[mid+1]){
            return nums[mid]
        }
        else if(nums[mid]>=nums[low] && nums[mid]>nums[high]){
            low=mid+1

        }
        else{
            high=mid-1
        }

    }
    return nums[low]
}
function main(){
    let n=[4,5,6,7,0,2]
    console.log(reversesortedMin(n))
}
main()
*/

/*function sortedArray(nums){
    let l=0
    let h=nums.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2);
        if(nums[mid]<nums[mid-1] && nums[mid]<nums[mid+1]){
            return nums[mid]
        }
        else if(nums[mid]>=nums[l] && nums[mid]>nums[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return nums[l]
}
function main(){
    let arr=[4,5,6,7,0,2]
    console.log(sortedArray(arr))
}
main()*/

/*function sortedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>=arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,0,2]
    console.log(sortedArray(arr))
}
main()*/

/*function printsharpees(n){
    let arr=[]
    let count=1
    while(arr.length<n){
        const total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(printsharpees(n))
}
main()*/

/*
function Sharpees(n){
    let count=1
    let arr=[]
    while(arr.length<n){
        const total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(Sharpees(n))
}
main()*/

/*function starFreQ(str){
    let total=0
    let count=0
    for(let i of str){
        if(i==='*'){
            count=count+1
            total=Math.max(count,total)
        }
        else{
            count=0
        }
    }
    return total
}
function main(){
    let str='a*b***c**d****e'
    console.log(starFreQ(str))
}
main()*/

/*function findNode(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]*nums[j]===target){
                return [i,j]

            }
        }
    }
    return -1
}
function main(){
    let nums=[1,3,5,7,8,10]
    let target=50
    console.log(findNode(nums,target))

}
main()*/

/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str=''
        for(let j=i;j>0;j--){
            str+='*'
        }
        for(let k=2*(n-i);k>0;k--){
            str+=' ';
        }
        for(let l=i;l>0;l--){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    printPattern(n)
}
main()*/

/*function minInrotatedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,0,2]
    console.log(minInrotatedArray(arr))
}
main()*/


/*function rotatedMinArray(arr){
    let l=0;
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1

        }
       
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,0,2]
    console.log(rotatedMinArray(arr))
}
main()*/

/*function indices(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]*nums[j]===target){
                return [i,j]
            }
        }
    }
    return -1

}
function main(){
    let nums=[1,3,5,7,8,10]
    let target=50
    console.log(indices(nums,target))
}
main()*/

/*function printPattern(n){
    for(let i=n;i>0;i--){
        let str=''
        for(let j=i;j>0;j--){
            str+='*'
        }
        for(let k=2*(n-i);k>0;k--){
            str+=' '
        }
        for(let l=i;l>0;l--){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    (printPattern(n))
}
main()*/

/*function maxStar(n){
    let count=0
    let total=0
    for(let i of n){
        if(i==='*'){
            count+=1
            total=Math.max(total,count)
        }
        else{
            count=0
        }
    }
    return total
}
function main(){
    let s='a*b***c***d****e'
    console.log(maxStar(s))
}
main()*/

/*function countStar(n){
    let total=0
    let count=0
    for(let i of n){
        if(i==='*'){
            count+=1
            total=Math.max(count,total)
        }
        else{
            count=0
        }
    }
    return total
}
function main(){
    let n='a*b***c***d****e';
    console.log(countStar(n))
}
main()*/

/*function showIndices(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]*nums[j]===target){
                return [i,j]
            }
        }
    }
    return null
}
function main(){
    let nums=[1,3,5,7,8,10]
    let target=50
    console.log(showIndices(nums,target))
}
main()*/

/*function nSharpees(n){
    let arr=[]
    let count=1
    while (arr.length<n){
        let total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(nSharpees(n))

}
main()*/

/*function miniInrotatedArray(nums){
    let l=0
    let h=nums.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid]<=nums[mid-1] && nums[mid]<nums[mid+1]){
            return nums[mid]
        }
        else if(nums[mid]>nums[l] && nums[mid]>nums[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return nums[l]
}
function main(){
    let nums=[4,5,6,7,0,2]
    console.log(miniInrotatedArray(nums))
}
main()
*/

/*function nSharpees(n){
    let count=1
    let arr=[]
    while(arr.length<n){
        let total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(nSharpees(n))
}
main()*/
/*function nPrime(n){
    let x=2
    let arr=[]
    let count=0
    while(arr.length<n){
        flag=true;
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if(flag===true){
            arr.push(x)
            count+=1

        }
        if(count===n){
            break;
        }
        x+=1
    }
    return arr
}
function main(){
    let n=5
    console.log(nPrime(n))

}
main()*/

/*function nSharpees(n){
    let arr=[]
    let count=1
    while(arr.length<n){
        let total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(nSharpees(n))
}
main()*/

/*function minInrotatedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,0,2]
    console.log(minInrotatedArray(arr))
}
main()*/

/*function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        for(let k=0;k<2*(n-i-1);k++){
            str+=' '
        }
        for(let l=0;l<i+1;l++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
     let n=5
     printPattern(n)
}
main()*/

/*function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= 5; j++) {
            if ((i === 1 || i === n) && (j === 1 || j === 5)) {
                str += ' ';
            } else if (i === Math.floor(n / 2) + 1 && (j === 1 || j === 5)) {
                str += ' ';
            } else {
                str += '*';
            }
        }
        console.log(str);
    }
}

function main() {
    let n = 5;
    printPattern(n);
}

main();*/

/*function printPattern(n){
    for (let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        for(let k=0;k<2*(n-i-1);k++){
            str+=' '
        }
        for(let j=0;j<i+1;j++){
            str+='*'
        }
        console.log(str)
    }
}
function main(){
    let n=5
    console.log(printPattern(n))
}
main()*/   


/*function nSharpees(n){
    let arr=[]
    let count=1
    while(arr.length<n){
        let total=String(count).split('').reduce((sum,digit)=>
        sum+parseInt(digit),0)
        if(total%5===0){
            arr.push(count)
        }
        count++
    }
    return arr
}
function main(){
    let n=5
    console.log(nSharpees(n))

}
main()*/

/*function nPrime(n){
    let arr=[]
    let count=0
    let x=2
    while(arr.length<n){
        flag=true
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if (flag===true){
            arr.push(x)
            count+=1
        }
        x+=1
    }
    return arr
}
function main(){
    let n=5
    console.log(nPrime(n))
}
main()*/

/*function findMinInROtArray(arr){
    let l=0
    let h=arr.length-1
    while (l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,8,0,2]
    console.log(findMinInROtArray(arr))

}
main()*/

/*function findIndices(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]*arr[j]===target){
                return [i,j]
            }
        }
    }
    return arr[l]
}
function main(){
    let arr=[1,3,5,7,8,10]
    let target=50
    console.log(findIndices(arr,target))

}
main()*/

/*function countStar(n){
    let count=0
    let total=0
    for(let i of n){
        if(i==='*'){
            count+=1
            total=Math.max(count,total)
        }
        else{
            count=0
        }
    }
    return total
}
function main(){
    let n='a*b***c***d****e**'
    console.log(countStar(n))
}
main()*/

/*function IndexSortArr(arr,target){
    let l =0;
    let h=arr.length-1;
    while (l<=h){
        const mid=Math.floor((l+h)/2);
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            l=mid+1

        }
        else{
            h=mid-1

        }

    }
    return -1

}
function main(){
    let arr=[10,8,6,4,2,1]
    let target=4
    console.log(IndexSortArr(arr,target))
}
main()   */

/*function findMajorityClass(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total++
            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
    
}
function main(){
    let arr=[2,2,1,1,1,2,2]
    console.log(findMajorityClass(arr))
}
main()*/

/*function findmajority(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(findmajority(arr))
}
main()*/

/*
function findMajority(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(findMajority(arr))
}
main()*/

/*function findMajorElement(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(findMajorElement(arr))
}
main()
*/

/*function findMajorElement(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1
            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(findMajorElement(arr))

}
main()
*/

/*function indexOfDesArray(arr,target){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            l=mid+1
        }
        else{
            h=mid-1

        }
    }
    return -1
}
function main(){
    let arr=[9,5,3, 2,1]
    let target=5
    console.log(indexOfDesArray(arr,target))

}
main()*/


/*function areProString(s1,s2){
    if(s1.length !== s2.length){
        return false
    }
    let count=0
    let arr=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
        
    }
    if(count==2){
        return s1[arr[0]]===s2[arr[1]] && s1[arr[1]]===s2[arr[0]]
        
    }
    return count===0
}
function main(){
    let s1= "sharpener"
    let s2="pharsener"
    console.log(areProString(s1,s2));
}

main()
*/

/*function areProString(s1,s2){
    let count=0
    let arr=[]
    if(s1.length !== s2.length){
        count++
        arr.push(i)
        if(count>2){
            return false
        }
    }
    if(count ===2){
        return s1[arr[0]]===s2[arr[1]] &&
        s1[arr[1]]===s2[arr[0]]
    }
    return count==0
}
function main(){
    let s1= "sharpener"
    let s2="pharsener"
    console.log(areProString(s1,s2));
}

main()*/

/*function areProString(s1,s2){
    let count=0
    let arr=[]
    for (let i =0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            count++
            arr.push(i)
            if (count>2){
                return false
            }
        }
    }
    if(count===2){
        return s1[arr[0]]===s2[arr[1]] &&
        s1[arr[1]]===s2[arr[0]]
    }
    return count===0
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(areProString(s1,s2))  

}
main()*/
 

/*function ProString(s1,s2){
    let count=0
    let arr=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
    }
    if(count===2){
        return s1[arr[0]]=== s2[arr[1]] 
        && s1[arr[1]]===s2[arr[0]]

    }
    return count==0
 }
 function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(ProString(s1,s2))  

}
main() */

/*function maxRewards(n,assignment){
    assignment.sort((a,b)=>{return a-b})
    let res=[],temp=0
    for(let i=0;i<n;i++){
        temp+=assignment[i]
        res.push(Math.max(temp,i+1))
    }
    return Math.max(...res)
}
function main(){
    let n =6
    let assignment = [3,4,5,9,7,8]
    console.log(maxRewards(n,assignment))
}
main()*/


/*function maxRewards(n,assignment){
    assignment.sort((a,b)=>{return a-b})
    let arr=[]
    let count=0
    for(let i=0;i<n;i++){
        count+=assignment[i]
        arr.push(Math.max(count,i+1))
    }
    return Math.max(...arr)
}
function main(){
    let n=6
    let arr=[3,4,5,9,7,8]
    console.log(maxRewards(n,arr))
}
main()*/

/*
function maxRewards(n,assignment){
    assignment.sort((a,b)=>{return a-b})
    let arr=[]
    let count=0
    for(let i=0;i<n;i++){
        count+=assignment[i]
        arr.push(Math.max(count,i+1))
    }
    return Math.max(...arr)
    
}
function main(){
    let n=6
    let arr=[3,4,5,9,7,8]
    console.log(maxRewards(n,arr))
}
main()*/

/*function proString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
    }
    if(count===2){
        return s1[arr[0]]===s2[arr[1]]
        && s1[arr[1]]===s2[arr[0]]
    }
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(proString(s1,s2))
}
main()*/

/*function indexOfArray(arr,target){
    let l=0
    let h=arr.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            l=mid+1

        }
        else{
            h=mid-1
        }
    }
    return -1
}
function main(){
    const arr=[10,8,6,4,2,1]
    const target=4
    console.log(indexOfArray(arr,target))
}
main()*/

/*
function MajorElement(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total++

            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(MajorElement(arr))
}
main()*/

/*function minInrotatedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
    
}
function main(){
    let arr=[4,5,6,7,8,9,2]
    console.log(minInrotatedArray(arr))
}
main()*/


/*function minRotatedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=((l+h)/2)
        if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,8,9,2]
    console.log(minRotatedArray(arr))
}
main()*/

/*function minInRotatedArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let mid=Math.floor((l+h)/2)
        
            if(arr[mid]<=arr[mid-1] && arr[mid]<arr[mid+1]){
                return arr[mid]
            }
            else if(arr[mid]>arr[l] && arr[mid]>arr[h]){
                l=mid+1
            }
            else{
                h=mid-1
            }
        }
    
    return arr[l]
}
function main(){
    let arr=[4,5,6,7,8,9,2]
    console.log(minInRotatedArray(arr))
}
main()*/

/*function MajorElement(arr){
    let count=0
    let max=0
    for(let i=0;i<arr.length;i++){
        let total=0

        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                total+=1

            }
        }
        if(total>count){
            count=total
            max=arr[i]
        }
    }
    return max
}
function main(){
    let arr=[3,2,3]
    console.log(MajorElement(arr))
}
main()*/


/*function IndexofArray(arr,target){
    l=0
    h=arr.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            l=mid+1
            
        }
        else{
            h=mid-1
        }
    }
    return -1
}
function main(){
    const arr=[10,8,6,4,2,1]
    const target=4
    console.log(IndexofArray(arr,target))
}
main()*/
/*function indexOfArray(arr,target){
    let l=0
    let h=arr.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            l=mid+1

        }
        else{
            h=mid-1
        }
    }
    return -1
}
function main(){
    const arr=[10,8,6,4,2,1]
    const target=4
    console.log(indexOfArray(arr,target))
}
main()*/


/*function IsProString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!== s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
    }
    if(count===0){
        return s1[arr[0]]===s2[arr[1]]
        && s1[arr[1]]===s2[arr[0]]
    }
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(IsProString(s1,s2))  
}*/

/*function ProString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
    }
    if(count===0){
        return s1[arr[0]===s2[arr[1]]]
        && s1[arr[1]]===s2[arr[0]]
    }
}
    
function main(){
    
    let s1='sharpener'
    let s2='pharsener'
    console.log(ProString(s1,s2))  
}
main()*/


/*
function proString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            count++
            arr.push(i)
            if (count>2){
                return false
            }
        }
    }
    if(count===2){
        return s1[arr[0]]===s2[arr[1]] &&
        s1[arr[1]]===s2[arr[0]]
    }
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(proString(s1,s2))  
}
main()*/

/*function proString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false

            }
        }
    }
    if(count===2){
        return s1[arr[0]]===s2[arr[1]] &&
        s1[arr[1]]===s2[arr[0]]
    }
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(proString(s1,s2))  
}
main()*/

function proString(s1,s2){
    let arr=[]
    let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            count++
            arr.push(i)
            if(count>2){
                return false
            }
        }
    }
    if(count===2){
        return s1[arr[0]]===s2[arr[1]] &&
        s1[arr[1]]===s2[arr[0]]
    }
}
function main(){
    let s1='sharpener'
    let s2='pharsener'
    console.log(proString(s1,s2))  
}
main()
   








