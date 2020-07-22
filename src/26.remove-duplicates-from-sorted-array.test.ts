import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import type { TestData } from "../lib/test.ts";
import { removeDuplicates } from "./26.remove-duplicates-from-sorted-array.ts";

const testDatas: TestData<typeof removeDuplicates>[] = [
  {
    args: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    argsAfter: [0, 1, 2, 3, 4],
    expected: 5,
  },
  {
    args: [0],
    argsAfter: [0],
    expected: 1,
  },
  {
    args: [],
    argsAfter: [],
    expected: 0,
  },
  {
    args: [-1, 0, 1],
    argsAfter: [-1, 0, 1],
    expected: 3,
  },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t.args}"`,
    fn(): void {
      assertEquals(removeDuplicates(t.args), t.expected);
      assertEquals(t.args, t.argsAfter);
    },
  });
});