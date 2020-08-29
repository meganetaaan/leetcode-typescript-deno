import { test } from "../lib/test.ts";
import { generate } from "./118.pascals-triangle.ts";

test(generate, [{
  args: [1],
  expected: [[1]],
}, {
  args: [2],
  expected: [[1], [1, 1]],
}, {
  args: [3],
  expected: [[1], [1, 1], [1, 2, 1]],
}, {
  args: [4],
  expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
}, {
  args: [0],
  expected: [],
}]);