# A RPN calculator program computes expressions written in RPN (Reverse Polish Notation).

A RPN expression (or a postfix expression) is one of the following:

a number X, in which case the value of the expression is that of X;
a sequence of the form E1 E2 O, where E1 and E2 are postfix expressions and O is an arithmetic operation; in this case, the value of the expression is that of E1 O E2.

The following are RPN expressions:

1 => 1
1 2 + => (1 + 2) = 3
20 5 / => (20 / 5) = 4
4 2 + 3 - => (4 + 2) - 3 = 3
3 5 8 * 7 + * => 3*((5*8) + 7) = 141

Once this calculator works, add the SQRT operator:

9 SQRT => √9 = 3
Once the SQRT operator has been added, add the MAX operator:

5 8 1 4 2 MAX => 8
4 5 MAX 1 2 MAX * => MAX(4, 5) * MAX(1, 2) = 10