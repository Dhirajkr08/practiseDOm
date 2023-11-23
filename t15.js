const planAtripTomanali=async()=>{
    try{
        const planTrip=new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('lets go manali'),1000)
        })

        const buyCar=new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('Buy a car'),1500)

        })


        
        const reachManali=new Promise((resolve,reject)=>resolve('reached manali'));
        const reachedMountain=new Promise((resolve,reject)=>resolve('reached mountain'));
        let trip=await planTrip;


        let[car,manali,mountain]=await Promise.all([buyCar,reachManali,reachedMountain]);
        console.log(`${car},${manali},${mountain}`)
        return trip;

    }catch(error){
        console.log('ERROR: error occured',error)
        throw error;
    }
}
planAtripTomanali().then((result)=>{
    console.log(`Trip message:${result}`);
})
.catch((error)=>{
    console.error('Error in planning the trip:',error)
})
