import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { addBinary } from "./67.add-binary.ts";
import type { TestData } from "../lib/test.ts";

const testDatas: TestData<typeof addBinary>[] = [
  { args: ["11", "1"], expected: "100" },
  { args: ["1010", "1011"], expected: "10101" },
  {
    args: ["1".repeat(Math.pow(10, 4)), "1"],
    expected: "1" + "0".repeat(Math.pow(10, 4)),
    name: "huge number"
  },
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(addBinary(...t.args), t.expected);
    },
  });
});
