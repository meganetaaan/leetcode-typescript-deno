import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { threeSum } from "./15.3-sum.ts";

const testDatas: TestData<typeof threeSum>[] = [{
  args: [-1, 0, 1, 2, -1, -4],
  expected: [
    [-1, -1, 2],
    [-1, 0, 1],
  ],
}, {
  args: [-2, 0, 0, 2, 2],
  expected: [
    [-2, 0, 2],
  ],
}, {
  args: [3,0,-2,-1,1,2],
  expected: [
    [-2,-1,3],[-2,0,2],[-1,0,1]
  ]
}, {
  args: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6],
  expected: [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
}];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(threeSum(t.args), t.expected);
    },
  });
});