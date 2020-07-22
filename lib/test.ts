export type TestData<T extends (...args: any) => any> = {
  args: Parameters<T>[0],
  argsAfter?: Parameters<T>[0],
  expected: ReturnType<T>,
};