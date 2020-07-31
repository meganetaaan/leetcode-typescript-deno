import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
// import { someFunction } from "./some-function.ts";

function target(arg: number): boolean {
  return arg > 0;
}
const testDatas: TestData<typeof target>[] = [
  { args: [1], expected: true },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(target(...t.args), t.expected);
    },
  });
});