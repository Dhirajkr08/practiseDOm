<<<<<<< HEAD
const posts=[{title:'POST 1',body:'This is post one'},
{title:'POST2',body:'This is post two'}
];

let lastActivityTime='';
 function getPost(){
    let output='';
    posts.forEach(post=>{
        output+=`<li>${post.title}</li>`;
    })
    document.body.innerHTML=output
 }

 function updateLastUserActivityTime(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            lastActivityTime=new Date().toISOString();
            resolve(lastActivityTime)
        },1000)
    })
 }

 function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
        },2000)
    })
 }
 Promise.all([
    createPost({ title: 'POST3', body: 'This is post three' }),
    updateLastUserActivityTime()
  ])
 .then(()=>{
    const deletePost=posts.pop();
    if(deletePost){
        console.log(`post deleted:${deletePost.title}`)

    }else{
        console.log('No post to delte.');
        

    }
    console.log('Remaining posts:',posts)
    
    
 })
 
 .catch(err=>console.log(err));

=======
const posts=[{title:'POST 1',body:'This is post one'},
{title:'POST2',body:'This is post two'}
];

let lastActivityTime='';
 function getPost(){
    let output='';
    posts.forEach(post=>{
        output+=`<li>${post.title}</li>`;
    })
    document.body.innerHTML=output
 }

 function updateLastUserActivityTime(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            lastActivityTime=new Date().toISOString();
            resolve(lastActivityTime)
        },1000)
    })
 }

 function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
        },2000)
    })
 }
 createPost({title:'POST3',body:'This is post three'})
 .then(updateLastUserActivityTime)
 .then(()=>{
    getPost();
    console.log('user last activity time updated:',lastActivityTime)
 })
 .then(()=>{
    const deletePost=posts.pop();
    if(deletePost){
        console.log(`post deleted:${deletePost.title}`)

    }else{
        console.log('No post to delte.');
        

    }
    console.log('Remaining posts:',posts)
    
    
 })
 
 .catch(err=>console.log(err));

 
>>>>>>> cbb6413e308176459dbd95af04e141889b40f0f1
