import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { isValid } from "./20.valid-parentheses.ts";

type Target = typeof isValid;
type TestData = [Parameters<Target>[0], ReturnType<Target>];
const testDatas: TestData[] = [
  ["()[]{}", true],
  ["", true],
  ["(]", false],
  ["([{}])", true],
  ["([{}]))", false],
  ["{([{}]))", false],
  ["{([{}]))", false],
];

isValid(testDatas[0][0])

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(isValid(t[0]), t[1]);
    },
  });
});