import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { maxSubArray } from "./53.maximum-subarray.ts";

type Target = typeof maxSubArray;
type TestData = [Parameters<Target>[0], ReturnType<Target>];
const testDatas: TestData[] = [
  [[-2,1,-3,4,-1,2,1,-5,4], 6],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(maxSubArray(t[0]), t[1]);
    },
  });
});