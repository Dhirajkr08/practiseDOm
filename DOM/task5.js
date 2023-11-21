//var item=document.querySelector('#items')
//parentELement
// console.log(item.parentElement);
// item.parentNode.style.backgroundColor='grey';
// console.log(item.parentNode.parentNode.parentNode);

//parentElement//
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor='lightgrey';
// console.log(item.parentElement.parentElement.parentElement);


//childNode //
//console.log(item.childNodes);
// console.log(item.children);
// console.log(item.children[1]);
// item.children[1].style.backgroundColor='pink';


//firstChild //
//console.log(item.firstChild);


//firstElementChild//
// console.log(item.firstElementChild);
// item.firstElementChild.style.fontWeight='bold';
// item.firstElementChild.textContent='Hey There!'


//lastChild//
//console.log(item.lastChild);

//lastElementChild//
// console.log(item.lastElementChild);
// item.lastElementChild.textContent='Go There!';
// item.lastElementChild.style.color='purple';


//nextsibling//
// console.log(item.nextSibling);


// //nextELementSibling
// console.log(item.nextElementSibling);

//previousSibling//
//console.log(item.previousSibling);

//previousElementSibling//
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.backgroundColor='yellow';
// item.previousElementSibling.style.color='green';


//createElement//
// var newDiv=document.createElement('div');


// //add class
// newDiv.className='hello';


// //add id
// newDiv.id='newDiv';


// //setAttribute (add attributes)
// newDiv.setAttribute('title','hello Div')


// //createTextNode
// var newDivText=document.createTextNode('hello World!');


// //add dext to div
// newDiv.appendChild(newDivText);


// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv, h1)
// newDiv.style.fontSize='30px';

// //console.log(newDiv)

// //adding new List
// var newLi=document.createElement('li');

// //adding className
// newLi.className='list-group-item';

// //adding textContent
// newLi.textContent='Hello World!';

// //adding in existing userList
// var newLiItem=document.getElementById('items');
// newLiItem.insertBefore(newLi,newLiItem.firstElementChild);

//new header
// var header=document.createElement('h1');
// header.className='newHeader';
// header.id='header';
// header.textContent='Welcome!';
// var newHeader=document.getElementById('main-header');
// newHeader.insertBefore(header,newHeader.firstElementChild)

var header=document.createElement('h1');
header.className='newHeader';
header.id='newHeader';
header.textContent='Hey DRJ';
var newHeader=document.getElementById('main-header');
newHeader.insertBefore(header,newHeader.firstChild);

var list=document.createElement('li');
list.className='list-group-item';
list.id='list';
list.textContent='Hey DRJ!'
var newLi=document.getElementById('items');
newLi.insertBefore(list,newLi.firstElementChild);

