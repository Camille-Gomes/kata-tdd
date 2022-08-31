const { getValue } = require('./fizzBuzz');

describe('Fizz Buzz', () => {
    it('should prints value for ', () => {
        //given
        const number = 1

        //when
        const value = getValue(number)

        //then
        expect(value).toEqual(1); 
    })
    it('should prints “Fizz” for multiples of three', () => {
        //given
        const number = 3

        //when
        const value = getValue(number)

        //then
        expect(value).toEqual('Fizz'); 
    })
    it('should prints "Buzz" for multiples of five', () => {
        //given
        const number = 5

        //when
        const value = getValue(number)

        //then
        expect(value).toEqual('Buzz'); 
    })
    it('should prints "Whizz" for multiples of seven', () => {
        //given
        const number = 14

        //when
        const value = getValue(number)

        //then
        expect(value).toEqual('Whizz'); 
    })
    it('should prints "FizzBuzz" when number is a multiple of both three and five', () => {
        //given
        const number = 15

        //when
        const value = getValue(number)

        //then
        expect(value).toEqual('FizzBuzz'); 
    })
  });

