var arr = [1,1,1.5,9,-10,6,2,9,9,3,5,-3,3];

var res_arr = [];

arr.forEach(repit);

function repit(item, i, arr) {
	if (res_arr[arr[i]]!=undefined ) {
		(res_arr[arr[i]]++)
    }
    else {
        (res_arr[arr[i]]=1)
	}
	return res_arr; 
}

console.log(res_arr);
