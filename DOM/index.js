/*
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//console.log(document.title=123)
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all)
console.log(document.forms);
console.log(document.all[10]);
console.log(document.all[12]);
//document.all[10].textContent='Hello World';
console.log(document.links);
console.log(document.forms[0])
console.log(document.images);
*/

//getElementByID//
/*
var header=document.getElementById('header-title');
var h=document.getElementById('main-header');
//console.log(header);
//header.textContent='DRJ';
//header.innerHTML='GoodToSeeYou';
//showing text content
//console.log(header.textContent);
//console.log(header.innerText)
header.innerHTML='<h1>"Mr.Singh"</h1>';
//header.style.borderBottom='solid 3px black';
h.style.borderBottom='solid 3px black';
*/

//get document by class name//
/*
var items=document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1]);
items[1].textContent='HEY BABE';
items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='green';
items[1].style.color='green';


//items.style.backgroundColor='grey'; "gives error"//
//correct one is//
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='grey';
}
*/

//get element by TagName//
/*
var li=document.getElementsByTagName('li');
console.log(li[1])
li[1].style.fontStyle='bold';
li[1].style.color='yellow';
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='pink'
}
*/

//QUERYSELECTOR//
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 3px black'; 
var input=document.querySelector('input');
input.value='Hello World!'

var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

//editing 2nd li
var secndLi=document.querySelector('.list-group-item:nth-child(2)');
secndLi.style.color='orange';

//
var title=document.querySelectorAll('.title');
console.log(title)
title[0].textContent='YOYO';
title[1].textContent="XOXO";

var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='pink';
}

var even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<even.length;i++){
    even[i].style.backgroundColor='grey';
}

var even=document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<even.length;i++){
    even[i].style.backgroundColor='purple';
}



