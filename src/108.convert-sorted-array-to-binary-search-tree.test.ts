import { test } from "../lib/test.ts";
import { sortedArrayToBST } from "./108.convert-sorted-array-to-binary-search-tree.ts";
import { T } from "../lib/tree-node.ts";

test(sortedArrayToBST, [{
  name: "odd length",
  args: [[-10, -3, 0, 5, 9]],
  expected: T(0, T(-10, null, T(-3)), T(5, null, T(9))),
}, {
  name: "empty",
  args: [[]],
  expected: null,
}, {
  name: "single",
  args: [[1]],
  expected: T(1),
}, {
  name: "even length",
  args: [[-1, 0, 1, 2]],
  expected: T(0, T(-1), T(1, null, T(2))),
}]);