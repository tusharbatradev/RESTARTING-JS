// fibonacci
function fibonacci(range){
    let fib = [0,1];

    for(let i=2 ; i<range ; i++){
        fib[i] = fib[i - 1] + fib[i-2]
    }

    console.log(fib)
}

fibonacci(8)