import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { climbStairs } from "./70.climbing-stairs.ts";

type Target = typeof climbStairs;
type TestData = [Parameters<Target>[0], ReturnType<Target>];
const testDatas: TestData[] = [
  [2, 2],
  [3, 3],
  [4, 5],
  [5, 8],
  [45, 1836311903],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(climbStairs(t[0]), t[1]);
    },
  });
});