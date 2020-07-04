import {
  assertEquals,
  assertThrows,
  assert,
} from "https://deno.land/std/testing/asserts.ts";
import { addTwoNumbers } from "./2.add-two-numbers.ts";
import { lengthOfLongestSubstring } from "./3.longest-substring-without-repeating-characters.ts";

Deno.test({
  name: "a space",
  fn(): void {
    assertEquals(lengthOfLongestSubstring(" "), 1);
  },
});

Deno.test({
  name: "same char",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
  },
});

Deno.test({
  name: "empty",
  fn(): void {
    assertEquals(lengthOfLongestSubstring(""), 0);
  },
});

Deno.test({
  name: "pwwkew",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
  },
});

Deno.test({
  name: "1",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
  },
});

Deno.test({
  name: "two char",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("au"), 2);
  }
})

Deno.test({
  name: "unique suffix1",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("aabcde"), 5);
  }
})

Deno.test({
  name: "unique suffix2",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("aaabcde"), 5);
  }
})

Deno.test({
  name: "middle",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("aaabcaccb"), 3);
  }
})

Deno.test({
  name: "unique prefix",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("cdd"), 2);
  }
})

Deno.test({
  name: "even str",
  fn(): void {
    assertEquals(lengthOfLongestSubstring("dvdf"), 3);
  }
})