import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { addTwoNumbers } from "./2.add-two-numbers.ts";
import { ListNode } from "../lib/list-node.ts";

Deno.test({
  name: "same length, no moveup",
  fn(): void {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const l2 = new ListNode(2, new ListNode(3, new ListNode(4, null)));
    const expected = new ListNode(3, new ListNode(5, new ListNode(7, null)));
    assertEquals(addTwoNumbers(l1, l2), expected);
  },
});

Deno.test({
  name: "same length with moveup",
  fn(): void {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, null)));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, null)));
    const expected = new ListNode(
      8,
      new ListNode(9, new ListNode(9, new ListNode(1, null))),
    );
    assertEquals(addTwoNumbers(l1, l2), expected);
  },
});

Deno.test({
  name: "differenct length with moveup",
  fn(): void {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, null)));
    const l2 = new ListNode(9, new ListNode(9));
    const expected = new ListNode(
      8,
      new ListNode(9, new ListNode(0, new ListNode(1, null))),
    );
    assertEquals(addTwoNumbers(l1, l2), expected);
  },
});