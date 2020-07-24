import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { searchInsert } from "./35.search-insert-position.ts";

type Target = typeof searchInsert;
type TestData = [Parameters<Target>, ReturnType<Target>];
const testDatas: TestData[] = [
  [[[1, 3, 5, 6] , 5], 2],
  [[[1, 3, 5, 6] , 2], 1],
  [[[1, 3, 5, 6] , 7], 4],
  [[[1, 5, 5, 5, 7, 7, 7, 8, 9] , 5], 1],
  [[[1, 3, 5, 6] , 0], 0],
];

testDatas.forEach((t, i) => {
  Deno.test({
    name: `${String(i)}: "${t}"`,
    fn(): void {
      assertEquals(searchInsert(...t[0]), t[1]);
    },
  });
});
