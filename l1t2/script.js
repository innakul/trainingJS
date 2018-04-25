function isprime(n,iftrue,ifalse) {

	if (n <= 1) {
		return ifalse;
	} else {
		for (var i=2; i<n; i++) {
		if (n%i === 0) {
			return ifalse;
		} 
			}
	}
return iftrue;
}

console.log(isprime(6,"true: is prime","false: is not prime"));

