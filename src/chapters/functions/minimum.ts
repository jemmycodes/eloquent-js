// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

function findMinimum(a: number, b:number) {
return a < b ? a : b
}

console.log(findMinimum(-1000, 7))