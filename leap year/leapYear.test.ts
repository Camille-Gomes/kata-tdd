import { isLeapYear } from "./leapYear";

describe('Leap Year', () => {
    it('should return correct boolean for a common year', () => {
        //given
        const year: number = 2001;

        //when
        const result = isLeapYear(year)

        //then
        expect(result).toEqual(false); 
    })

    it('should return correct boolean for a common leap year', () => {
        //given
        const year: number = 1996;

        //when
        const result = isLeapYear(year)

        //then
        expect(result).toEqual(true); 
    })

    it('should return correct boolean for a atypical common year', () => {
        //given
        const year: number = 1900;

        //when
        const result = isLeapYear(year)

        //then
        expect(result).toEqual(false); 
    })

    it('should return correct boolean for a atypical leap year', () => {
        //given
        const year: number = 2000;

        //when
        const result = isLeapYear(year)

        //then
        expect(result).toEqual(true); 
    })
   
  });
