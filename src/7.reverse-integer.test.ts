import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { reverse } from "./7.reverse-integer.ts";

const testData = [
  [-1, -1],
  [0, 0],
  [123, 321],
  [-123, -321],
  [120, 21],
]

for (let t of testData) {
  Deno.test({
    name: String(t[0]),
    fn(): void {
      assertEquals(reverse(t[0]), t[1])
    }
  })
}
