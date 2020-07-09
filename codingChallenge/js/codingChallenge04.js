jsCourse2020Main.codingChallenge04 = (function () {
	"use strict";

	const _calculateBMI = function (mass, height) {
		return mass / height ^ 2;
	};

	const _mark = {
		fullName: 'Mark Raj',
		mass: 75,
		height: 1.8,
		calculateBMI: function () {
			this.bmi = _calculateBMI(this.mass, this.height);
			return this.bmi;
		}
	};

	const _john = {
		fullName: 'John Sha',
		mass: 70,
		height: 1.95,
		calculateBMI: function () {
			this.bmi = _calculateBMI(this.mass, this.height);
			return this.bmi;
		}
	};

	const _compareBMI = function () {
		switch (true) {
			case _mark.calculateBMI() > _john.calculateBMI():
				console.log(_mark.fullName + ' has a higher bmi than ' + _john.fullName + ' bmi with ', _mark.bmi);
				break;
			case _john.bmi > _mark.bmi:
				console.log(_john.fullName + ' has a higher bmi than ' + _mark.fullName + ' bmi with ', _john.bmi);
				break;
			default:
				console.log('Mark and John has same bmi - ', _mark.bmi);
				break;
		}
	};

	return {
		compareBMI: _compareBMI
	};
}());

console.log('jsCourse2020Main.codingChallenge04');
jsCourse2020Main.codingChallenge04.compareBMI();