function ListNode(val){
    this.val=val
    this.next=null
}
function findMiddleElement(head){
    let slow=head
    let fast=head;
    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next

    }
    return slow

}
const node1=new ListNode(1)
const node2=new ListNode(2)
const node3=new ListNode(3)
const node4=new ListNode(4)
const node5=new ListNode(5)
const node6=new ListNode(6)
node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
console.log(findMiddleElement(node1))
