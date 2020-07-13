import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { twoSum } from "./1.two-sum.ts";

Deno.test({
  name: "two-sum",
  fn(): void {
    assertEquals(twoSum([0, 1, 2, 4], 3), [1, 2]);
    assertEquals(twoSum([5, 5, 2, 1, 8], 9), [3, 4]);
    assertEquals(twoSum([3, 2, 3], 6), [0, 2]);
  },
});