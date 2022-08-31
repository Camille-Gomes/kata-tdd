const { getSumExpression } = require('./RPNCalculator');

describe('RPN Calculator', () => {
    it('should return correct sum', () => {
        //given
        const expression = [5];

        //when
        const value = getSumExpression(expression)

        //then
        expect(value).toEqual(5); 
    })
    it('should return correct sum for all operators', () => {
        //given
        const plus = [3, 3, '+'];
        const divide = [20, 4, '/'];
        const minus = [10, 2, '-'];
        const multiply = [5, 5, '*'];

        //when
        const expressPlus = getSumExpression(plus)
        const expressDivide = getSumExpression(divide)
        const expressMinus = getSumExpression(minus)
        const expressMultiply = getSumExpression(multiply)

        //then
        expect(expressPlus).toEqual(6); 
        expect(expressDivide).toEqual(5); 
        expect(expressMinus).toEqual(8); 
        expect(expressMultiply).toEqual(25); 
    })
    it('should return correct sum for a sequence', () => {
        //given
        const expression = [4, 2, '+', 3, '-'];

        //when
        const sum = getSumExpression(expression)

        //then
        expect(sum).toEqual(3); 
    })
    it('should return correct sum for a sequence', () => {
        //given
        const expression = [3, 5, 8, '*', 7, '+', '*'];

        //when
        const sum = getSumExpression(expression)

        //then
        expect(sum).toEqual(141); 
    })
  });
