function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

describe('Adds Two Numbers', () => {
  it('Adds two numbers', () => {
    expect(addNumbers(2, 2)).toEqual(4);
  });
});
