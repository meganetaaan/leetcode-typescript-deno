import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { invertTree } from "./226.invert-binary-tree.ts";
import { TreeNode } from "../lib/tree-node.ts";

const testData = [
  [
    [4, 2, 7, 1, 3, 6, 9],
    [4, 7, 2, 9, 6, 3, 1],
  ],
];
Deno.test({
  name: "[4, 2, 7, 1, 3, 6, 9]",
  fn(): void {
    const actual = invertTree(TreeNode.fromArray8(testData[0][0]));
    const expected = TreeNode.fromArray8(testData[0][1]);
    assertEquals(actual, expected);
  },
});