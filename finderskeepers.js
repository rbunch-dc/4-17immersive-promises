// Write a function that accepts two parameters (you may add a third to differentiate type). The first is an array, and the second is a function. The function should look through the array for the first thing that matches the condition of the function passed. If a match is not found, return false.

// Test at least these:

function findElement(array,callback){
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])){
			return array[i];
		}
	}
	return false;
}

var a = findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
var b = findElement([1,3,5,9], function(num){return num % 2 === 0})
// Return false
var c = findElement(['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1})

console.log(a)
console.log(b)
console.log(c)
