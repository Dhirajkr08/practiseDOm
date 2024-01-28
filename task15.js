/*console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWife=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')

    },3000)
})
const getPopcorn=promiseWife.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));


});
const getButter=getPopcorn.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:I need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))


});
getButter.then((t)=>console.log(t))
console.log('person4: shows ticket')
console.log('person5:shows ticket')
*/

console.log('person1:show ticket');
console.log('person2:show ticket');

const preMovie=async()=>{
    try{
    const promiseWife=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })

    const getPopCorn=new Promise((resolve,reject)=> resolve('popcorn'));
    const addButter=new Promise((resolve,reject)=>resolve('butter'))
    const getColdDrinks=new Promise((resolve,reject)=>resolve('coldrink'));
    let ticket=await promiseWife;
    

    
    



    let[popcorn,butter,coldrink] = await Promise.all([getPopCorn,addButter,getColdDrinks])
    console.log(`${popcorn},${butter},${coldrink}`)

    return ticket;
}catch(error){
    console.error("error occured",error)
    throw error;

}
}

preMovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:show ticket');
console.log('person5:show ticket');


preMovie().then((m)=>console.log(`person3:${m}`))