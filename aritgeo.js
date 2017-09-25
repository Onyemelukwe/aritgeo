
const aritGeo = function (anArray) {
	if (isEmpty(anArray)) {
		return '0';
	} else if (isGeometric(anArray)) {
		return 'Geometric';
	} else if (isArithmetic(anArray)) {
		return 'Arithmetic';
	} else {
		return '-1';
	}
}

function isArithmetic(myArray) {
	let response = true;
	let firstDiff = myArray[1] - myArray[0];
	for (let i=1; i < myArray.length - 1; i++) {
		let j = i+1;
		let newDiff = myArray[j] - myArray[i];
		if (firstDiff == newDiff) {
			continue;
		} else {
			response = false;
		}
	}
	return response;
}

function isGeometric(myArray) {
	let response = true;
	let firstDiff = myArray[1]/myArray[0];
	for (let i=1; i < myArray.length - 1; i++) {
		let j = i+1;
		let newDiff = myArray[j]/myArray[i];
		if (firstDiff == newDiff) {
			continue;
		} else {
			response = false;
		}
	}
	return response;
}

function isEmpty(myArray) {
	let response = true;
	if (myArray.length !== 0) {
		response = false;
	}
	return response;
}

console.log(aritGeo([1,2,3,4,6,9]));
module.exports=aritGeo;