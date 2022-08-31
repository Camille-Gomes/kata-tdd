export const getSumExpression = (expression: ExpressionItem[]) => {

    const stack: ExpressionItem[] = []

    for (let i = 0; i < expression.length; i++) {
        const item = expression[i]

        if(isNumber(item)) {

            stack.push(item)

        } else {
            
            const num1 = stack.pop()
            const num2 = stack.pop()
            
            if(num1 && isNumber(num1) && num2 && isNumber(num2)) {

                const result = applyOperator(item, num2, num1)
                stack.push(result)
            }
            
        }
    }

    return stack[0]

}

const isNumber = (expression: ExpressionItem): expression is number => {
    return typeof expression === 'number'
}

const applyOperator = (operator: Operator, num1: number, num2: number) => {

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

type ExpressionItem = number | Operator 

type Operator = '+' | '-' | '/' | '*' 

