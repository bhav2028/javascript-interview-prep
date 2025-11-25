// Calaculate the factorial of a number using recursion

function calcFactorial(n) {
    if(n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if(n == 0 || n ==1) {
        return 1;
    }
    return n * calcFactorial(n -1);
}

console.log(calcFactorial(3))
console.log(calcFactorial(4))
console.log(calcFactorial(6))