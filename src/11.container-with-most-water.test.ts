import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { maxArea } from "./11.container-with-most-water.ts";

const testDatas: TestData<typeof maxArea>[] = [
  {
    args: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    expected: 49,
  },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(maxArea(t.args), t.expected);
    },
  });
});