import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { mergeTwoLists } from "./21.merge-two-sorted-lists.ts";
import { ListNode } from "../lib/list-node.ts";

type Target = typeof mergeTwoLists;
type TestData = [Parameters<Target>, ReturnType<Target>];
const testDatas: TestData[] = [
  [
    [ListNode.fromArray([0]), ListNode.fromArray([1])],
    ListNode.fromArray([0, 1]),
  ],
  [
    [ListNode.fromArray([1, 2, 4]), ListNode.fromArray([1, 3, 4])],
    ListNode.fromArray([1, 1, 2, 3, 4, 4]),
  ],
  [
    [ListNode.fromArray([1, Infinity]), ListNode.fromArray([2, Infinity])],
    ListNode.fromArray([1, 2, Infinity, Infinity]),
  ],
  [
    [ListNode.fromArray([-1, 0, 1]), ListNode.fromArray([-2, -1, 0, 1, 2])],
    ListNode.fromArray([-2, -1, -1, 0, 0, 1, 1, 2]),
  ],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(mergeTwoLists(...t[0]), t[1]);
    },
  });
});