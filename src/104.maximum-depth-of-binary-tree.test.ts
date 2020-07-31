import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { maxDepth } from "./104.maximum-depth-of-binary-tree.ts";
import { TreeNode } from "../lib/tree-node.ts";

const testDatas: TestData<typeof maxDepth>[] = [
  {
    args: [
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    ],
    expected: 3,
  },
  {
    args: [
      new TreeNode(1),
    ],
    expected: 1,
  },
  {
    args: [null],
    expected: 0,
  },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(maxDepth(...t.args), t.expected);
    },
  });
});
