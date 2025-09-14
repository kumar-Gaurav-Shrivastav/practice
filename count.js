//https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript


//2704. To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function(val) {
    return {
        toBe: (anVal) => (val === anVal) ? true : (() => {throw new Error("Not Equal")})(),
        notToBe: (anVal) => (val !== anVal) ? true : (() => {throw new Error("Equal")})()
    };
}