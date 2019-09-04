let scarr = 0;
function consoleRec(arr) {
	console.log(arr[scarr]);
	scarr++;
	if (scarr < arr.length) {
		consoleRec(arr);
	}
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции', 'вот'], function () {
	console.log(1);
});
