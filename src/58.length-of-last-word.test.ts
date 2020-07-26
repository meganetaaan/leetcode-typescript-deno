import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { lengthOfLastWord } from "./58.length-of-last-word.ts";

type Target = typeof lengthOfLastWord;
type TestData = [Parameters<Target>[0], ReturnType<Target>];
const testDatas: TestData[] = [
  ["Hello World", 5],
  ["foo bar baz", 3],
  ["single", 6],
  ["", 0],
  ["tail space ", 5],
  ["   ", 0],
  [" head is space", 5]
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(lengthOfLastWord(t[0]), t[1]);
    },
  });
});