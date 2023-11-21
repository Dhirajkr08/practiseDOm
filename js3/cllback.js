/*
const post=[
    {title:'post One', body:'This is post one'},
    {title:'post Two', body:'this is post two'}
];

function getPost(){
    setTimeout(function(){
        let output='';
        post.forEach(function(post,index){
            output+=`<li>${post.title}</li>`

        })
        document.body.innerHTML=output;
    },1000)
}
getPost()
*/

const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post Two',body:'this is post Two'}
];
function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;

    },1000);
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();

    },2000)
}
//getPost()
createPost({title:'post three',body:'this is post three'},getPost)

