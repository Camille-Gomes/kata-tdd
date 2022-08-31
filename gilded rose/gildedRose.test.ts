const { updateQuality } = require('./gildedRose');

describe('Gilded Rose', () => {
    it('should lowers SellIn and Quality value for every item at the end of each day', () => {
        //given
        const item = {
            name: 'toto',
            sellIn: 10,
            quality: 16
        }

        //when
        const value = updateQuality(item)

        //then
        expect(value.sellIn).toEqual(9); 
        expect(value.quality).toEqual(15); 
    })
    it('should Quality degrades twice as fast when the SellIn by date has passed', () => {
        //given
        const item = {
            name: 'toto',
            sellIn: 0,
            quality: 10
        }

        //when
        const value = updateQuality(item)

        //then
        expect(value.quality).toEqual(8); 
    })

  });