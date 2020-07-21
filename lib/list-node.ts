export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  static fromArray(arr: number[]): ListNode {
    let l = new ListNode(arr[0]);
    const result = l;
    arr.slice(1).forEach((n) => {
      l.next = new ListNode(n);
      l = l.next;
    });
    return result;
  }

  toString(): string {
    let l: ListNode | null = this;
    let result = String(l.val);
    l = l.next;
    while (l != null) {
      result += `->${String(l.val)}`;
      l = l.next;
    }
    return result;
  }
}