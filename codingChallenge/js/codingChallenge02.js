jsCourse2020Main.codingChallenge02 = (function () {
    "use strict";

    const _avgPointsScoreJohn = (89 + 120 + 103) / 3;
    const _avgPointsScoreMark = (116 + 94 + 123) / 3;

    const _avgPointsScoreJohn2 = (97 + 144 + 109) / 3;
    const _avgPointsScoreMark2 = (119 + 91 + 140) / 3;

    const _printWinnerWithAvgScore = function () {
        if (_avgPointsScoreJohn === _avgPointsScoreMark)
            console.log('There is a tie with avg points score of ' + _avgPointsScoreMark);
        else if (_avgPointsScoreJohn === _avgPointsScoreMark)
            console.log('John\'s team is the WINNER with avg points score of ' + _avgPointsScoreJohn);
        else
            console.log('Mark\'s team is the WINNER with avg points score of ' + _avgPointsScoreMark);
    };

    const _printWinnerWithAvgScore2 = function () {
        if (_avgPointsScoreJohn2 === _avgPointsScoreMark2)
            console.log('There is a tie with avg points score of ' + _avgPointsScoreMark2);
        else if (_avgPointsScoreJohn2 === _avgPointsScoreMark2)
            console.log('John\'s team is the WINNER with avg points score of ' + _avgPointsScoreJohn2);
        else
            console.log('Mark\'s team is the WINNER with avg points score of ' + _avgPointsScoreMark2);
    };


    return {
        printWinnerWithAvgScore: _printWinnerWithAvgScore,
        printWinnerWithAvgScore2: _printWinnerWithAvgScore2
    };
}());

console.log('jsCourse2020Main.codingChallenge02');
jsCourse2020Main.codingChallenge02.printWinnerWithAvgScore();
jsCourse2020Main.codingChallenge02.printWinnerWithAvgScore2();