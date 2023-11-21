function ListNode(value){
    this.value=value;
    this.next=null;
}
function remove3rdElement(head){
    if(!head || !head.next || !head.next.next){
        return head

    }
    let current =head;
    for(let i=1;i<3;i++){
        current=current.next
    }
    current.next=current.next.next
    return head
}
function printList(head){
    let current=head
    while (current){
        console.log(current.value)
        current=current.next
    }
}
const node1=new ListNode(1)
const node2=new ListNode(3)
const node3=new ListNode(2)
const node4=new ListNode(5)
const node5=new ListNode(1)
const node6=new ListNode(9)
node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
printList(remove3rdElement(node1))