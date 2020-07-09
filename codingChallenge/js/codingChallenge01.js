jsCourse2020Main.codingChallenge01 = (function () {
    "use strict";

    const massAmita = 55, heightAmita = 1.75,
        massNiraj = 65, heightNiraj = 1.85;

    const _showHelloMessage = function () {
        console.log('Pranam Raj Shyamaji!!');
    };

    const _calculateBMI = function (mass, height) {
        return mass / (height ^ 2);
    };

    const _bmiAmita = _calculateBMI(massAmita, heightAmita);
    const _bmiNiraj = _calculateBMI(massNiraj, heightNiraj);

    const _isNirajBMIHigher = function () { console.log('Is Niraj\'s BMI higher than Amita?', _bmiNiraj > _bmiAmita); };
    const _isAmitaBMIHigher = function () { console.log('Is Amita\'s BMI higher than Niraj?', _bmiAmita > _bmiNiraj); };

    return {
        showHelloMessage: _showHelloMessage,
        isNirajBMIHigher: _isNirajBMIHigher,
        isAmitaBMIHigher: _isAmitaBMIHigher
    };
})();

console.log('jsCourse2020Main.codingChallenge01');
jsCourse2020Main.codingChallenge01.showHelloMessage();
jsCourse2020Main.codingChallenge01.isNirajBMIHigher();
jsCourse2020Main.codingChallenge01.isAmitaBMIHigher();