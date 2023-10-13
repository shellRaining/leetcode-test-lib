// this is a typescript module, which used to define a list class, and its methods

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) {
      return null;
    }

    const head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i]);
      cur = cur.next;
    }

    return head;
  }

  static toArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let cur = head;
    while (cur != null) {
      arr.push(cur.val);
      cur = cur.next;
    }

    return arr;
  }

  static print(head: ListNode | null): void {
    console.log(ListNode.toArray(head));
  }

  print(): void {
    console.log(ListNode.toArray(this));
  }
}

export default ListNode;
export { ListNode };
