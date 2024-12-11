// Closures in javascript

function outerFunction() {
    var outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    innerFunction();
}

outerFunction();


function outerFunction() {
    var outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

var inner = outerFunction();
inner();

function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        console.log(a + b);
    }
    return inner;
}

const innerFunc = outer();
innerFunc();
