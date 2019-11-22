/* global BigInt */

export default class Calculator {
  /**
   * Add two numbers together.
   * @param a The first number to add.
   * @param b The second number to add.
   * @returns Resultant is the sum of the two inputs, a and b.
   */
  public static add(a: number | bigint, b: number | bigint): number | bigint {
    if (typeof a === 'bigint' && typeof b === 'bigint') {
      return a + b;
    }
    if (typeof a === 'bigint' || typeof b === 'bigint') {
      return BigInt(a) + BigInt(b);
    }
    return a + b;
  }
}
