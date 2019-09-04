// # ДЗ 1:
// Написать функцию 'isAllTrue', которая принимает 2 параметра - 'source' и 'filterFn'
// source - массив
// 'filterFn' - фильтрующая функция
// Если фильтрующая функция вернет 'true' для ВСЕХ элементов массива, то и сама 'isAllTrue' вернет 'true'
// Если фильтрующая функция вернет 'false' хотя бы для одного элемента массива, то и сама 'isAllTrue' вернет 'false'
//
// пример:
// var allNumbers = [1, 2, 4, 5, 6, 7, 8],
// someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
// noNumbers = ['это', 'массив', 'без', 'чисел'];
//
// function isNumber(val) {
// return typeof val === 'number';
// }
//
// console.log(isAllTrue(allNumbers, isNumber)); //вернет true
// console.log(isAllTrue(someNumbers, isNumber)); //вернет false
// console.log(isAllTrue(noNumbers, isNumber)); //вернет false
//
// Выбрасывать и обрабатывать исключение, если в 'source' пустой массив.

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'],
	emptyArray = [];


function isAllTrue (source, filterFn) {
	try {
		if (!source.length) {
			throw new Error('Массив пустой')
		} else {
			for (var i = 0; i < source.length; i++) {
				if(!filterFn(source[i])) {
					return false;
				}
			}
		}
		return true;
	} catch (e) {
		console.log(e.message);
	} finally {
		console.log('Операция выполнена!');
	}
}

function isNumber(val) {
return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log(isAllTrue(emptyArray, isNumber)); //вернет Масив пусстой
