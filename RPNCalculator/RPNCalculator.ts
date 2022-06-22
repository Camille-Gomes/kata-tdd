export const getSumExpression = (expression) => {

    let stack = []

    for (let i = 0; i < expression.length; i++) {
        if(!isNaN(expression[i])) {
            stack.push(expression[i])
        }
   
        if(isNaN(expression[i])) {

            const num1 = stack.pop()
            const num2 = stack.pop()

            const sum = getOperator(expression[i], num2, num1)
        
            stack.push(sum)

        }
    }

    return stack[0]

}

export const getOperator = (operator, num1, num2) => {

    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2
        case '*':
            return num1 * num2
    }
}
