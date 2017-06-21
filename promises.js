// Promises
// Are a way to manage async without passing zillions of 
// callback functions around or nesting to no end.
// I.e. this...
// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{	
// 		connection.query(query3, (results3)=>{	
// 			connection.query(query4, (results4)=>{	
				
// 			});			
// 		});

// 	});
// });

// connection.query(query1){
// 	// do some stuff
// 	call function I got from earlier and pass it what I just got from result
// 	call function I got earlier and pass it this result	
// 	call function I got earlier and pass it...
// }

function successCallback(result){
	console.log("Success: "+result);
}
function failureCallback(error){
	console.log("Failed: "+error);
}

function checkName(name,winning,losing){
	if(name == "Rob"){
		winning("Name is Rob.")
	}else{
		losing("Sorry. Not Rob.");
	}
}

// checkName("Rob", successCallback, failureCallback);

// What is a promise?
// It is a just a JS constructor that give you a few methods:
// - all
// - race
// - reject
// - resolve
// - then

let myFirstPromise = new Promise((resolve, reject)=>{
	// resolve and reject are callbacks.
	// we will run resolve when we are done with our asnyc stuff
	// we will run reject if it Failed
	// setTimeout will stand in as an AJAX or sql request
	setTimeout(function(){
		resolve("Success!")
	},250);
});

// console.log(myFirstPromise);
// myFirstPromise.then((successMessage)=>{
// 	console.log(successMessage);
// 	console.log(myFirstPromise);
// })
// console.log(myFirstPromise);

function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed");
		}, 4000);
	});
}

function two(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed");
		}, 2000);
	});	
}

var promiseOne = one();
var promiseTwo = two();
// console.log(promiseOne)
// promiseOne.then((successMsg)=>{
// 	console.log(successMsg);
// });
// promiseTwo.then((successMsg)=>{
// 	console.log(successMsg);
// });
var promises = [];
promises.push(promiseOne);
promises.push(promiseTwo);

// All will wait until EVERY promise in the array has resolved.
// It will have an array of each argument passed to each resolve
Promise.all(promises).then((data)=>{
	console.log("All done.");
	console.log(data)
})

Promise.race(promises).then((data)=>{
	console.log("Someone is done.");
	console.log(data);
})