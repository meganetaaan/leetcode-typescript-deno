import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { longestCommonPrefix } from "./14.longest-common-prefix.ts";

const testData: [string[], string][] = [
  [["hoge", "hogefuga"], "hoge"],
  [[], ""],
  [["piyo", "foo"], ""],
  [["yahoo", "yahhoi", "yababa"], "ya"],
];

testData.forEach((t, i) => {
  Deno.test({
    name: String(i),
    fn(): void {
      assertEquals(longestCommonPrefix(t[0]), t[1]);
    },
  });
});