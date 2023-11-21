const button=document.getElementById('submit');
const header=document.getElementById('text');

//adding eventListener
button.addEventListener('click',function(e){
    e.preventDefault();
    header.innerHTML='clicked';
})

//adding mouseover
button.addEventListener('mouseover',function(e){
    e.preventDefault()
    header.style.color='red';
    header.innerHTML='mouse is overed'
})
//adding mouseout
button.addEventListener('mouseout',function(e){
    e.preventDefault()
    header.innerHTML='mouse is out';
    header.style.color='green';

})