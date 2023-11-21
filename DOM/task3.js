//BY class NAme//


var list=document.getElementsByClassName('list-group-item-action');
for(let i=0;i<list.length;i++){
    list[i].style.backgroundColor='grey';
    list[i].style.fontStyle='italic';
    list[i].style.fontWeight='bold';
}

//by tag Name///

var li=document.getElementsByTagName('li');
li[4].style.backgroundColor='red';
