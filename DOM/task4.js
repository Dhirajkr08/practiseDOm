////using class Name ///
/*

var list=document.getElementsByClassName('list-group-item');
list[1].style.backgroundColor='green';
list[2].style.visibility='hidden';

*/

//using querSelectorALL//
var list=document.querySelectorAll('.list-group-item:nth-child(2)');
for(let i=0;i<list.length;i++){
    list[i].style.color='green';
}


var odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
