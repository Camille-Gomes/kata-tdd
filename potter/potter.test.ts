describe('Potter books', () => {
    it('should return correct price for an empty basket', () => {
        //given
        
        const basket: string[] = [];
        
        //when
        const invoice = payFor(basket)

        //then
        expect(invoice).toEqual(0);

  });
    it('should return correct price for one book', () => {
        //given
        
        const basket: string[] = ['1'];
        
        //when
        const invoice = payFor(basket)

        //then
        expect(invoice).toEqual(8);

  });
    it('should return correct price for duplicate book', () => {
        //given
        
        const basket: string[] = ['2','2','1','2'];
        
        //when
        const invoice = payFor(basket)

        //then
        expect(invoice).toEqual(31.2);

  })
    it('should return correct price for the ultimate basket', () => {
        //given
        
        const basket: string[] = ['1','1','2','2','3','3','4','5'];
        
        //when
        const invoice = payFor(basket)

        //then
        expect(invoice).toEqual(51.6);

  })
});

type Book = string

const payFor = (basket: Book[]): number => {
    const priceForOneBook: number = 8;

    const discountRef = [0, 1, 0.95, 0.90, 0.80, 0.75];

    const setsOfBooks = basket.reduce((acc: Book[][], currentBook: Book): Book[][] => {
        const index = acc.findIndex(array => array.indexOf(currentBook) < 0)

        index === -1 ? acc.push([currentBook]) : acc[index].push(currentBook)
        
        return acc
    }, []); 

    const totalBasket = setsOfBooks.reduce((acc: number, currentSet: string[]): number => {
        acc += currentSet.length * priceForOneBook * discountRef[currentSet.length];
        
        return acc;
    }, 0)
    
    return totalBasket
}


// if(index === -1) {
//     acc.push([currentBook])
// } else {
//     acc[index].push(currentBook)
// }
// const sizeWithoutDuplicate = new Set(basket).size;
//const restOfBasket = basket.length - sizeWithoutDuplicate

   // if(!acc[currentBook]) {
    //     acc[currentBook] = 1
    // } else {
    //     acc[currentBook] += 1
    // }
    
    // const sets = basket.reduce((acc, currentBook) => {
    //     if(acc !== currentBook) {
    //         }
    // })

//return basket.length * price * discountFactor

    // const sortedBasket = basket.sort((a, b) => a.localeCompare(b));

    // const groupedBasket: [][] = [];

    // sortedBasket.forEach(item => {
    //     if (groupedBasket.some(oneSet => oneSet.indexOf(item) < 0)) {
    //         const newEntry = [item];
    //         groupedBasket.push(newEntry);
    //     } else {

    //     }
    // })

    // if(basket.length > 2 && basket[0] !== basket[1] && basket[1] !== basket[2] && basket[0] !== basket[2]) {
    //     return basket.length * price * 0.90;
    // }
    // if(basket.length > 1 && basket[0] !== basket[1]) {
    //     return basket.length * price * 0.95;
    // }
    // return basket.length * price;

// basket.reduce(book, currentBook) =>{
//     if(book !== currentBook) {
//         continue
//     }
// }