import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { isSymmetric } from "./101.symmetric-tree.ts";
import { TreeNode } from "../lib/tree-node.ts";

type Target = typeof isSymmetric;
type TestData = [Parameters<Target>, ReturnType<Target>];
const testDatas: TestData[] = [
  [
    [
      new TreeNode(1, new TreeNode(2), new TreeNode(2)),
    ],
    true,
  ],
  [
    [
      new TreeNode(
        0,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3)),
      ),
    ],
    true,
  ],
  [
    [
      new TreeNode(1, new TreeNode(2), null),
    ],
    false,
  ],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(isSymmetric(...t[0]), t[1]);
    },
  });
});