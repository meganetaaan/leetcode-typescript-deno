import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { longestPalindrome } from "./5.longest-palindromic-substring.ts";

Deno.test({
  name: "abba",
  fn(): void {
    assertEquals(longestPalindrome("abba"), "abba");
  },
});
