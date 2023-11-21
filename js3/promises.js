const posts=[
    {title:'post one', body:'This is post One'},
    {title:'post Two',body:'This is post two'}
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((posts,index)=>{
            output+='<li>$(post)</li>';

        })
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)
            const error=false;
            if(!error){
                resolve()
            }else{
                reject('Error:Something went Wrong');
            }
        },2000)
        
    })
    
}

createPost({title:'post Three',body:'This is Post three'}).then(getPost).catch(err=>console.log(err));
