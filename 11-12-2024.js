// Closures in javascript

function outerFunction(a) {
    var outerVariable = "I'm outside!";
    
    function innerFunction(b) {
        console.log(a+b);
    }
    
    return innerFunction
}

outerFunction(2)(2);


