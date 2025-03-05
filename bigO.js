function logMultiples2(a, b) {
    for (var num1 = 1; num1 <= a; num1++) {
        for (let num2 = 1; num2 <= b; num2++) {
            console.log("test");
        }
    }
}
//O(n^2))Потому что тут цикл в цикле 
// Quadratic time n matters 
// памяти алгоритмом увеличивается по квадрату данных



function sum(x) {
    for (let i = 0; i < x; i++) {
        console.log("test");
    }
}
// O(n) Потому что тут один цикл который повторяется n раз 
// Linear time n matters
//памяти алгоритмом растет с размером  данных

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
// O(1)Потому что тут просто сложения   
// Constant time n doesn't matter
// использует фиксированный объем памяти 

function sayHello(numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        console.log("Hello");
    }
}
// O(n)Потому что тут один цикл который повторяется n раз   
// Linear time n matters 
// памяти алгоритмом растет линейно с размером  данных

function logMultiples(n) {
    for (var num1 = 1; num1 <= n; num1++) {
        for (var num2 = 1; num2 <= n; num2++) {
            console.log(num1 * num2);
        }
    }
}
// O(n^2))Потому что тут цикл в цикле 
// Quadratic time n matters 
// памяти алгоритмом увеличивается по квадрату данных

