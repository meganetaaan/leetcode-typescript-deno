export type TestData<T extends (...args: any) => any> = {
  args: Parameters<T>,
  argsAfter?: Parameters<T>,
  expected: ReturnType<T>,
};