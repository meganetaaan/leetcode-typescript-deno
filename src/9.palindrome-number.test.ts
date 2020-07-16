import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { isPalindrome } from "./9.palindrome-number.ts";

const testData: [number, boolean][] = [
  [-1, false],
  [0, true],
  [123, false],
  [1221, true],
  [1234567654321, true],
  [-121, false],
  [121, true],
];

for (let t of testData) {
  Deno.test({
    name: String(t[0]),
    fn(): void {
      assertEquals(isPalindrome(t[0]), t[1]);
    },
  });
}