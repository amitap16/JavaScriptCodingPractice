jsCourse2020Main.codingChallenge05 = (function () {
    "use strict";

    const _calcJohnTip = function (bill) {
        let percentage = 0;
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
        }

        return bill * percentage;
    };

    //bills: [100, 40, 250, 180, 60],
    const _john = {
        fullName: 'John Smith',
        bills: [124, 48, 268, 180, 42],
        calcTips: function () {
            this.tips = [];
            this.tipsWithBill = [];

            for (var i = 0; i < this.bills.length; i++) {
                const bill = this.bills[i];

                this.tips[i] = _calcJohnTip(bill);
                this.tipsWithBill[i] = this.tips[i] + bill;
            }
        }
    };

    const _calcMarkTip = function (bill) {
        let percentage = 0;
        switch (true) {
            case bill < 100:
                percentage = .2;
                break;
            case bill >= 100 && bill < 300:
                percentage = .1;
                break;
            case bill >= 300:
                percentage = .25;
                break;
        }

        return bill * percentage;
    };

    //bills: [80, 400, 200, 50],
    const _mark = {
        fullName: 'Mark Miller',
        bills: [77, 475, 110, 45],
        calcTips: function () {
            this.tips = [];
            this.tipsWithBill = [];

            for (var i = 0; i < this.bills.length; i++) {
                const bill = this.bills[i];

                this.tips[i] = _calcMarkTip(bill);
                this.tipsWithBill[i] = this.tips[i] + bill;
            }
        }
    };

    const _calcJohnBill = function () {
        _john.calcTips();
        console.log(_john);
    };

    const _calcMarkBill = function () {
        _mark.calcTips();
        console.log(_mark);
    };

    const _calcAverageTip = function (tips) {
        let sum = 0;
        for (var i = 0; i < tips.length; i++) {
            sum += tips[i];
        }
        return sum / tips.length;
    };

    const _averageJohnTip = function () {
        _john.average = _calcAverageTip(_john.tips)
        return _john;
    };

    const _averageMarkTip = function () {
        _mark.average = _calcAverageTip(_mark.tips);
        return _mark;
    };

    const _calcHigherTipsAvg = function () {
        let logMsg = '';

        if (_john.average > _mark.average) {
            logMsg = _john.fullName + '\'s family pays higher tips, with an average of $'
                + _john.average;
        } else if (_john.average < _mark.average) {
            logMsg = _mark.fullName + '\'s family pays higher tips, with an average of $'
                + _mark.average;
        } else {
            logMsg = _john.fullName + '\'s family pays the same tips as '
                + _mark.fullName + '\'s family, with an average of $'
                + _john.average;
        }
        console.log(logMsg);
    };

    return {
        calcJohnBill: _calcJohnBill,
        calcMarkBill: _calcMarkBill,
        averageJohnTip: _averageJohnTip,
        averageMarkTip: _averageMarkTip,
        calcHigherTipsAvg: _calcHigherTipsAvg
    };
}());

console.log('jsCourse2020Main.codingChallenge05');
jsCourse2020Main.codingChallenge05.calcJohnBill();
jsCourse2020Main.codingChallenge05.calcMarkBill();
console.log(jsCourse2020Main.codingChallenge05.averageJohnTip());
console.log(jsCourse2020Main.codingChallenge05.averageMarkTip());
jsCourse2020Main.codingChallenge05.calcHigherTipsAvg();