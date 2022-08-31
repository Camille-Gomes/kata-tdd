export const getValue = (number) => {

    if(number % 3 == 0 && number % 5 == 0) {
        return 'FizzBuzz'
    }

    if(number % 3 == 0) {
        return 'Fizz'
    }

    if(number % 5 == 0) {
        return 'Buzz'
    }

    if(number % 7 == 0) {
        return 'Whizz'
    }

    return number
}