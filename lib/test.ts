export type TestData<T extends (...args: any[]) => any> = {
  args: Parameters<T>,
  argsAfter?: Parameters<T>,
  name?: string,
  expected: ReturnType<T>,
};

import {
  assertEquals,
} from "https://deno.land/std@0.60.0/testing/asserts.ts";

export function test<T extends (...args: any[]) => any>(f: T, data: TestData<T>[]) {
  data.forEach((t, i) => {
    Deno.test({
      name: `${String(i)}: "${t.name ?? t.args}"`,
      fn(): void {
        assertEquals(f(...t.args), t.expected);
      },
    });
  });
}
