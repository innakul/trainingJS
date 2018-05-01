
function anagramTrue(firstWord, secondWord){

	var arr1 = firstWord.split('');
	var arr2 = secondWord.split('');

	arr1.sort();
	arr2.sort();

	var str1 = String(arr1);
	var str2 = String(arr2);


	if (arr1.length!=arr2.length) {
		console.log ('Its not Anagrams!');
	}
	else {
		if (str1 ===str2) {
			console.log('good luck, its anagrams');
		}
		else {
			console.log('its not Anagrams');
		}
	}

}

anagramTrue('mama','amam');

	
