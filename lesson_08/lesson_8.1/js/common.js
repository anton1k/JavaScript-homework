// ДЗ - 1:
//
// написать модуль, который экспортирует аналоги методов для работы с массивами:
// forEach, filter, map, slice, reduce, splice  пример:
//
// let array = [1, 2, 3, 4, 5, 6];
// forEach(array, item => console.log(item));
// let greaterThan4 = filter(array, item => item > 4);
// let sqare = map(array, item => item*item);
//
// Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.
//
// Реализация функции splice является задачей со звездочкой.
// Ее выполнение не обязательно, но желательно.
//
// Внимание:
//  в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные
// операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'

let array = [1, 2, 3, 4, 5, 6, 7];
console.info('Работает метод forEach');
forEach1(array, item => console.log(item));
function forEach1(arrays, collback) {
	for (let i in arrays) {
		collback(arrays[i]);
	}
}
console.info('Работает метод filter');
let greaterThan4 = filter(array, item => item > 4);
function filter(arrays, collback) {
	let arrNew = [];
	let j = 0;

	for (let i in arrays) {
		if (collback(arrays[i])) {
			arrNew[j] = arrays[i];
			j++;
		}
	}
	return arrNew;
}
console.log(greaterThan4);

console.info('Работает метод map');
let sqare = map(array, item => item*item);
function map(arrays, collback) {
	let arrNew = [];
	let j = 0;
	for (let i in arrays) {
		arrNew[j] = collback(arrays[i]);
		j++;
	}
	return arrNew;
}
console.log(sqare);

console.info('Работает метод slice');
let slices = slice(array, 2, 1);
function slice(arrays) {
	let arrNew = [];
	let j = 0;
	let ind1 = arguments[1,1];
	let ind2 = arguments[1,2];
	if (ind1 >=0 && ind1 < ind2) {
		for (let i = ind1; i < ind2; i++) {
			arrNew[j] = arrays[i];
			j++;
		}
	}
	if (ind1 < 0 && ind2 == undefined) {
		for (let i = arrays.length + ind1; i < arrays.length; i++) {
			arrNew[j] = arrays[i];
			j++;
		}
	}
	if (ind1 >= 0 && ind2 < 0 && ind1 > ind2) {
		for (let i = ind1; i < arrays.length + ind2; i++) {
			arrNew[j] = arrays[i];
			j++;
		}
	}
	if (ind1 < 0 && ind2 < 0) {
		for (let i = arrays.length + ind1; i < arrays.length + ind2; i++) {
			arrNew[j] = arrays[i];
			j++;
		}
	}
	if (ind1 == undefined && ind2 == undefined) {
		return 'Параметры не переданы!';
	}
	if (ind1 > ind2 || ind1 == ind2) {
		return 'Параметры переданы не правильно! Параметр 1 должен быть меньше параметра 2';
	}
	if (ind1 > arrays.length || ind2 > arrays.length) {
		return 'Параметры больше длинны массива!';
	}
	return arrNew;
}
console.log(slices);

console.info('Работает метод reduce');
let reduces = reduce(array);
function reduce(arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		sum += arrays[i];
	}
	return sum;
}
console.log(reduces);

console.info('Не работает так как надо метод splice');
let splices0 = splice(array, -5, 2, 'что', 'это', 'такое', 53);
let splices = splice(array, 2, 2, 'что', 'это', 'такое', 53);
let splices1 = splice(array, 2, 2);
function splice(arrays) {
	let arrNew = [];
	let arrNewToo = [];
	let t = 0;
	let ind1 = arguments[1,1];
	let j = 0;
	let ind2 = arguments[1,2];
	let otr = arrays.length+ind1;
	let arr1 = arguments.length;
	let arr2 = arrays.length;
	let arrSum = arr2 + arr1 - 3;
	let s = ind1+1;
	let ras = arr1 - arr2;
	let h = ind1 + ind2+1;
	let g = 0;

	if (arr1 == 3) {
		for (let i=0; i < arrays.length; i++) {
			if ((ind1 > 0 && (i < ind1 || i > ind2 + ind1-1)) || (ind1 < 0 && (i < otr || i > ind2 + otr-1))) {
				arrNew[j] = arrays[i];
				j++;
			}
		}
		return arrNew;
	}

	if (arr1 > 3) {
		for (let i=0; i < arrSum; i++) {
			if ((ind1 > 0 && (i < ind1 || i > ind2 + ind1-1)) || (ind1 < 0 && (i < otr || i > ind2 + otr-1))) {
				if (i < arrays[ind1] && ind1 > 0)  {
					arrNew[j] = arrays[i];
				}
				if (i > ind1 + ind2+1 && ind1 > 0) {
					arrNewToo[t] = arrays[h-1];
					t++;
					h++;
				}
				if (i >= arrays[ind1-1] && i < arr1+1 && ind1 > 0) {
					arrNew[j] = arguments[s];
					s++;
				}


				if (i < arrays[otr] && ind1 < 0)  {
					arrNew[j] = arrays[i];
				}
				if (i > otr + ind2+1 && ind1 < 0) {
					arrNewToo[t] = arrays[h-1];
					t++;
					h++;
				}
				if (i >= arrays[otr-1] && i < arr1+1 && ind1 < 0) {
					arrNew[j] = arguments[s];
					s++;
				}


				if (i > arrSum-arrNewToo.length-1) {
					arrNew[j] = arrNewToo[g];
					g++;
				}
				j++;
			}
		}

		return arrNew;
	}




}
console.log(splices0);
console.log(splices);
console.log(splices1);
