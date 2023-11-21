/*
console.log('Jai Hanuman');
setTimeout(function(){
    console.log('Namaste mate')

},5000)

*/

const cart=['pant','kurta','jacket'];
api.createOrder(cart,function(){
    api.proceedOrder(function(){
        api.showOderSummary(function(){
            api.updateItem()
        });

    })

})

