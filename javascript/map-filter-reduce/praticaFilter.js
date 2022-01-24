/*function filterPares (array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const numbs = [1, 8, 35, 28, 40, 22];

console.log(filterPares(nums));*/

function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 8, 35, 28, 40, 22]));