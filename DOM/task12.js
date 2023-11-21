//find sum of odd in list Node

function ListNode(val){
    this.val=val
    this.next=null
}
function findSumOfOdd(head){
    let sum=0
    while (head!==null){
        if(head.val%2!==0){
            sum+=head.val
        }
        head=head.next
    }
    return sum
}
const node1=new ListNode(1)
const node2=new ListNode(2)
const node3=new ListNode(4)
const node4=new ListNode(3)
const node5=new ListNode(9)
const node6=new ListNode(10)
const node7=new ListNode(5)
node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
node6.next=node7
console.log(findSumOfOdd(node1))