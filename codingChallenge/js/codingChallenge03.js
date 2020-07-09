jsCourse2020Main.codingChallenge03 = (function () {
    "use strict";

    const _bills = { _1stBill: 124, _2ndBill: 48, _3rdBill: 268 };

    const _tipCalculator = function (bill) {
        let percentage;

        switch (true) {
            case bill < 50:
                percentage = .2;
                break;
            case bill >= 50 && bill < 200:
                percentage = .15;
                break;
            case bill >= 200:
                percentage = .1;
                break;
            default:
                percentage = 0;
                break;
        }
        return percentage * bill;
    };

    const _add = function (bill) {
        return _tipCalculator(bill) + bill;
    }

    const _printTips = function () {
        let _tips = [];
        _tips.push(_tipCalculator(_bills._1stBill));
        _tips.push(_tipCalculator(_bills._2ndBill));
        _tips.push(_tipCalculator(_bills._3rdBill));
        console.log(_tips);
    };

    const _printTipsWithBill = function () {
        const _tipsWithBill = [_add(_bills._1stBill), _add(_bills._2ndBill), _add(_bills._3rdBill)];
        console.log(_tipsWithBill);
    };

    return {
        tipCalculator: _tipCalculator,
        printTips: _printTips,
        printTipsWithBill: _printTipsWithBill
    };
}());

console.log('jsCourse2020Main.codingChallenge03');
jsCourse2020Main.codingChallenge03.printTips();
jsCourse2020Main.codingChallenge03.printTipsWithBill();

const _tipCalc = jsCourse2020Main.codingChallenge03.tipCalculator;
const _billsAarray = [100, 40, 200];
const _tipsArray = [_tipCalc(_billsAarray[0]), _tipCalc(_billsAarray[1]), _tipCalc(_billsAarray[2])];
const _finalTotal = [_tipsArray[0] + _billsAarray[0], _tipsArray[1] + _billsAarray[1], _tipsArray[2] + _billsAarray[2]];
console.log(_tipsArray, _finalTotal);