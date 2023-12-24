import {Mult, Sum} from './01';

let a: number
let b: number

beforeEach(() => {
    a = 1;
    b = 2;
})

test.skip('sum two numbers', () => {
    const result1 = Sum(a, b)
    expect(result1).toBe(3)
})

test.skip('multiply of two numbers', () => {
    const Result2 = Mult(a, b)
    expect(Result2).toBe(2)
})