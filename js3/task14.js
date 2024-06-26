const posts=[
    {
        title:'POST 1' ,body:'This is post one'
    },
    {
        title:'POST 2', body:'This is post two'
    }
]
function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
            
        },1000);

    }

function   createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false;
            if(!error){
                resolve();

            }else{
                PromiseRejectionEvent('Error:Something went Wrong')
            }
        },2000);

    })
        

    }

// createPost({
//     title:'POST 3',body:'This is post three'
// }).then(getPost);
// //.catch(err=>console.log(err))

const promise1=Promise.resolve('Hello World')
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye')
})
Promise.all([promise1,promise2,promise3]).then(values =>console.log(values));

