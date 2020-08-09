import { test } from "../lib/test.ts";
import { T } from "../lib/tree-node.ts";
import { isBalanced } from "./110.balanced-binary-tree.ts";

test(isBalanced, [{
  args: [T(3)],
  expected: true,
}, {
  args: [T(1, T(1), T(1))],
  expected: true,
}, {
  args: [T(1, T(1, T(1)))],
  expected: false,
}, {
  args: [null],
  expected: true,
}, {
  args: [T(1, T(1, T(1)), T(1, T(1)))],
  expected: true,
}]);
