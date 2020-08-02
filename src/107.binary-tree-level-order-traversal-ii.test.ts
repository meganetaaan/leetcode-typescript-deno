import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { levelOrderBottom } from "./107.binary-tree-level-order-traversal-ii.ts";
import { TreeNode } from "../lib/tree-node.ts";

const testDatas: TestData<typeof levelOrderBottom>[] = [
  {
    args: [
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    ],
    expected: [
      [15, 7],
      [9, 20],
      [3],
    ],
  },
  {
    args: [null],
    expected: [],
  },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(levelOrderBottom(...t.args), t.expected);
    },
  });
});