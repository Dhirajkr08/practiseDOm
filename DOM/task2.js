////using class Tag////
/*
var list=document.getElementsByClassName('list-group-item');
//console.log(list)
list[2].style.backgroundColor='green'; 
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}
*/

////using tag name////
/*
var list=document.getElementsByTagName('li');
//console.log(list)
list[2].style.backgroundColor='green';
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}
*/

////using querySelector////
var list=document.querySelector('li:nth-child(3)');
list.style.backgroundColor='green';
var list=document.querySelectorAll('li');
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}


