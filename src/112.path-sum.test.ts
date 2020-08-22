import { test } from "../lib/test.ts";
import { T } from "../lib/tree-node.ts";
import { hasPathSum } from "./112.path-sum.ts";

test(hasPathSum, [{
  args: [T(3), 3],
  expected: true,
}, {
  args: [T(1, T(1), T(1)), 2],
  expected: true,
}, {
  args: [T(1, T(1, T(1))), 2],
  expected: false,
}, {
  args: [null, 0],
  expected: false,
}, {
  args: [T(1, T(1, T(1)), T(1, T(1))), 5],
  expected: false,
}]);
