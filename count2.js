/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    return {
        increment: () => count = count+1,
        decrement: () => count = count -1,
        reset: () => count = init,
    }
};