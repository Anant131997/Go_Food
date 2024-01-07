import Sum from "../sum"


test('Function should Add the two numbers', () => { 
    const result = Sum(3,5);

    //This line of code written below is known asq Assertion.
    expect(result).toBe(8);
 })