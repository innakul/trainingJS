var numArr = [1,2,8,-2,-10,0,-5,1.5,-7.8];


function filtePlus(item, ind) {
	return item >= 0;
}

function filterMinus(item,ind) {
	return item <0;
}

var positivArr = numArr.filter(filtePlus);
var negativArr = numArr.filter(filterMinus);

console.log(positivArr);
console.log(negativArr);
