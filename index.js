const receivesAFunction = (drive) => {
    drive();
}

const returnsANamedFunction = (fn = returnsANamedFunction) => {
    return returnsANamedFunction;
}

const returnsAnAnonymousFunction = (fn = returnsAnAnonymousFunction) => {
    return (function () {
    })
}



// function returnsANamedFunction(fn = returnsANamedFunction) {
//     return returnsANamedFunction;
// }

// function returnsAnAnonymousFunction() {
//     return (function() {

//     })
// }