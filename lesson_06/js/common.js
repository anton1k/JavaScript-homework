// 2 задание:
// Взять калькулятор, который был сделан в контексте ДЗ от 9 июля.
// Если домашнее задание не сделано, то необходимо сделать.
// Необходимо модифицировать калькулятор следующим образом:
// Превратить калькулятор в Класс (конструктор + прототип)
// Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
// SqrCalc должен расширять все методы оригинального калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов. Например:

// let myCalculator = new SqlCalc(100);

// console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
// console.log(myCalculator.dif(10, 20)); //вернет 4 900
// console.log(myCalculator.div(2, 2)); //вернет 625
// console.log(myCalculator.mul(2, 2)); //вернет 160 000

window.onload = function() {
	//Оригинальный калькулятор
	 class Calc {

		 constructor(initial) {
			 this.sums = initial;
			 this.sumsDif = initial;
			 this.sumsDiv = initial;
			 this.sumsMul = initial;
		 }

		 sum() {
		    for (let i = 0; i < arguments.length; i++) {
				this.sums+=arguments[i];
				   }
			return this.sums;
		   }

		   dif() {
				for (let i = 0; i < arguments.length; i++) {
					this.sumsDif-=arguments[i];
						}
				return this.sumsDif;
			}

			div() {
				for (let i = 0; i < arguments.length; i++) {
					try {
						if (arguments[i] == 0) {
							throw new Error('На ноль делить нельзя!');
						}
					} catch (e) {
						console.error(e.message);
						// return 0;
					}
					this.sumsDiv/=arguments[i];
						}
					return this.sumsDiv;
				}

			mul() {
				for (var i = 0; i < arguments.length; i++) {
					this.sumsMul*=arguments[i];
						}
					return this.sumsMul;
				}

	 }


	 let calculator = new Calc(100);

	console.info('Оригинальный класс калькулятор');
 	
	console.log(calculator.sum(1, 2, 3)); //вернет 106
	console.log(calculator.dif(10, 20)); //вернет 70
	console.log(calculator.div(2, 2)); //вернет 25
	console.log(calculator.mul(2, 2)); //вернет 400
	console.log(calculator.div(2, 0)); //вернет На ноль делить нельзя


	// расширяет все методы оригинального калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов
	 class SqrCalc extends Calc {
		// constructor(initial) {
		// 	super(initial);
		// 	this.initial = initial;
		// }
		sum() {
			super.sum(...arguments);
			return this.sums *= this.sums;
		}

		dif() {
			super.dif(...arguments);
			return this.sumsDif *= this.sumsDif;
		}

		div() {
			super.div(...arguments);
			return this.sumsDiv *= this.sumsDiv;
		}

		mul() {
			super.mul(...arguments);
			return this.sumsMul *= this.sumsMul;
		}
	 }

	 let myCalculator = new SqrCalc(100);


	 console.info('Расширенный класс калькулятор');


	console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
	console.log(myCalculator.dif(10, 20)); //вернет 4 900
	console.log(myCalculator.div(2, 2)); //вернет 625
	console.log(myCalculator.mul(2, 2)); //вернет 160 000
	
};

