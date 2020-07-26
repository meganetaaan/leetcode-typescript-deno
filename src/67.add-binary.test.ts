import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { addBinary } from "./67.add-binary.ts";

type Target = typeof addBinary;
type TestData = [Parameters<Target>, ReturnType<Target>];
const testDatas: TestData[] = [
  [["11", "1"], "100"],
  [["1010", "1011"], "10101"],
  [["1".repeat(Math.pow(10, 4)), "1"], "1" + "0".repeat(Math.pow(10, 4))],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(addBinary(...t[0]), t[1]);
    },
  });
});