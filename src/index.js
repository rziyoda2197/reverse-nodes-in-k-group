class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;

    while (head) {
        let count = 0;
        let cur = head;

        while (cur && count < k) {
            cur = cur.next;
            count++;
        }

        if (count < k) {
            break;
        }

        let preTail = pre;
        let curTail = head;

        for (let i = 0; i < k; i++) {
            let next = curTail.next;
            curTail.next = preTail.next;
            preTail.next = curTail;
            curTail = next;
        }

        pre = preTail;
        head = curTail;
    }

    return dummy.next;
}
