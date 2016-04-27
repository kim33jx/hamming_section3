var compute;

//compute the hamming distance between 
//two DNA strands
compute = function( s1, s2) {

	//if the strands are NOT the same length
	if (s1.length !== s2.length){
		//throw an error
		throw new Error('DNA strands must be of equal length.')
	}

	//this is the Hamming distance
	var distance = 0;
	//make distance a variable
	//for loop that counts each letter
	//defaults to zero, i.e. strands are the same
	for (var i = 0; i < s1.length; i += 1) {
		// if the i'th character in strand 1
		// is NOT equal to the i'th character
		// in strand 2
		if (s1.charAt(i) !== s2.charAt(i)) {
			// then increase the distance by 1
			distance += 1;
//return the distance
		}
	}
	//look at each pair of letters in the sequence
	/*compute the distance */


	//https://github.com/JonahMoses/exercism/blob/master/javascript/hamming/hamming.js
	//return the distance
    return distance;
};

module.exports = {
        compute: compute
};