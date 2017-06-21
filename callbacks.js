// Callbacks.
// In JS, functions are just objects.
// Therefore... you can pass functions around your code.

// =======this=======
// $('btn').click(function(){console.log("Click!")};); 
// =====is the same as======
// var clickFunction = function(){console.log("Click!")};
// $('btn').click(clickFunction); 


// ===========somewhere in jQuery, is this...==========
// var $ = {};
// $.click = function(callbackToRunLater){
// 	//stuff happens
// 	callbackToRunLater();
// }

// COnsider the folliwng...
function x(y){
	// return function(z){
	// 	console.log(2+z);
	// }
	var funcToReturn = function(z){
		console.log(y+z);
	}
	return funcToReturn;
}
x(2)(3)

// How can you make this work?
// The only way is if x RETURNS a function.
// That function will take a paramater
// Higher Order function = a funciton that gets passed around

// =================
function print(thingToPrint){
	console.log(thingToPrint);
}

// The print functino doesnt need to be passed around. Because
// we have access to it locally. Think BlackJack. Deal was
// a utitlity function, we called it when we needed it.

function b(number){
	let localNum = number * number;
	// Call the print function above
	print(localNum);
}

function c(theString){
	let localString = theString + " is what was passed";
	print(localString)
}

b(2);
c("Test ")

// COuld also make print a prototype of a constructor.
// BUT... what if we didn't have access to the code that needed
// to run our code? I.e., what if we didn't have access to the print function

var a = function(theVar){
	console.log(theVar)
}

var b = function(number, callback){
	let localNum = number * number;
	callback(localNum);
}

// b(3,function(number){console.log(number)})
b(3,a)

var url = "https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman"
$.getJSON(url,function(data){
	// do stuff
})

========somewhere inside of jquery...============
var $ = {};
$.getJSON = function(urlToRequest, callbackToRunLater){
	// make an xmlhttpobject request to url sent
	// do some stuff
	// it's back! check the status decodeURI
	// do some more stuff
	// all done. Did you want me to do something now?
	// YES! Run callbackToRunLater. OK.
	// callbackToRunLater(whatAJAXGotBack)
}

var students = ['Rissa','Merilee','Chris','Stephen'];
students.map((student,index)=>{
	console.log(student);
});

// Array.prototype.map 