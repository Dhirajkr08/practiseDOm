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

function ROman(n){
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
main()