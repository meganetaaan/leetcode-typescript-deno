import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { isSameTree } from "./100.same-tree.ts";
import { TreeNode } from "../lib/tree-node.ts";

type Target = typeof isSameTree;
type TestData = [Parameters<Target>, ReturnType<Target>];
const testDatas: TestData[] = [
  [
    [
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    ],
    true,
  ],
  [
    [
      new TreeNode(1, new TreeNode(2), null),
      new TreeNode(1, null, new TreeNode(3)),
    ],
    false,
  ],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(isSameTree(...t[0]), t[1]);
    },
  });
});