function reservenumb(n) {

var result = "";

	while ( n != 0) {
		result += n%10;
		n = parseInt(n/10);
	}
	return result;
}

console.log(reservenumb(654321));