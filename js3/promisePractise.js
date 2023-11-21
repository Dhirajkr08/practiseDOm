/*function buyCar(cb1,cb2){
    setTimeout(()=>{
        console.log('buy a car')
        cb1(cb2)

    },3000)
}

function planTrip(cb){
    setTimeout(()=>{
        console.log('lets go to manali')
        cb()
    },1000)
}

function reacManali(){
    setTimeout(()=>{
        console.log('reached manali');
    },500)
}
buyCar(
planTrip,reacManali)
*/

//this is a mess code which is solved by promises

////using promise//////

/*
function buyCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;
            if(!error){
                resolve('buy a car')

            }else{
                reject('error')
            }
            
        },1000)
    })
}

function planTrip(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const error=false;
            if(!error){
                resolve('lets go to manali')

            }else{
                reject('there is some issue');
            }
            
        },750)
    })
}

function  reacManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;
            if(!error){
                resolve('reached manali')

            }else{
                reject('error')
            }
            
        },1500)
    })

}
*/

/*
buyCar().then(()=>{
     return planTrip()

}).then(()=>{
    return reacManali()
}).then (()=>{
    console.log('all steps completed')
}).catch(()=>{
    console.log('Error',error)
})
*/

//asnyc method//
/* 
async function fun1(){

        const a=await buyCar();
    console.log(a)

    const b=await planTrip();
    console.log(b)

    const c=await reacManali();
    console.log(c)
}
fun1()
*/

/*console.log('start')
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
})
console.log('end');
*/


/*
console.log('start');
const promise1=new Promise((resolve,reject)=>{
    console.log(1)
    resolve(2)

});
promise1.then(res=>{
    console.log(res)
})
console.log('end')
*/
console.log('start');



const promise1 = Promise.resolve().then(() => {

  console.log('promise1');

  const timer2 = setTimeout(() => {

    console.log('timer2')

  }, 0)

});



const timer1 = setTimeout(() => {

  console.log('timer1')

  const promise2 = Promise.resolve().then(() => {

    console.log('promise2')

  })

}, 0)



console.log('end');






