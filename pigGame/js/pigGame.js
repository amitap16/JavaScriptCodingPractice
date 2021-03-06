/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Three Challenges:
1)  A player loses his entire score when he rolls two six in a row. Then, is the next player after that.
2)  Add an input field to the HTML where the players can set the winning score by themselves,
    so they can change the predefined score of 100.
3)  Add a second dice to the game and in this scenario, the player loses his current score when only one of them is an one.
*/
pigGame.main = (function () {
    'use strict';

    const _sctrPostValue = { Zero: 0, One: 1 };
    const _sctrIdCurrent0 = `current-${_sctrPostValue.Zero}`,
        _sctrIdCurrent1 = `current-${_sctrPostValue.One}`,
        _sctrIdScore0 = `score-${_sctrPostValue.Zero}`,
        _sctrIdScore1 = `score-${_sctrPostValue.One}`,
        _sctrIdName0 = `name-${_sctrPostValue.Zero}`,
        _sctrIdName1 = `name-${_sctrPostValue.One}`,
        _sctrClsPlayer0 = `.player-${_sctrPostValue.Zero}-panel`,
        _sctrClsPlayer1 = `.player-${_sctrPostValue.One}-panel`,
        _sctrlScore = 'winning-score',
        _sctrlClsDice0 = `.dice-${_sctrPostValue.Zero}`,
        _sctrlClsDice1 = `.dice-${_sctrPostValue.One}`,
        _sctrlMessage = '.message',
        _clsWinner = 'winner',
        _clsActive = 'active';
    let activePlayer, roundScore, score, gamePlaying, dice6Rolled, skipUpdateScore;

    const _showHideDice = function (dice = 0, sctrClsDice) {
        const diceDOM = document.querySelector(sctrClsDice);

        if (dice === 0) {
            diceDOM.style.display = 'none';
        }
        else {
            diceDOM.style.display = 'block';
            diceDOM.src = `images/dice-${dice}.png`;
        }
    };

    const _setMessage = function (message) {
        document.querySelector(_sctrlMessage).textContent = message;
    };

    const _resetControls = function () {
        activePlayer = 0;
        roundScore = 0;
        score = [0, 0];
        gamePlaying = true;
        dice6Rolled = false;
        skipUpdateScore = false;

        _showHideDice(0, _sctrlClsDice0);
        _showHideDice(0, _sctrlClsDice1);

        document.getElementById(_sctrIdCurrent0).textContent = _sctrPostValue.Zero;
        document.getElementById(_sctrIdCurrent1).textContent = _sctrPostValue.Zero;
        document.getElementById(_sctrIdScore0).textContent = _sctrPostValue.Zero;
        document.getElementById(_sctrIdScore1).textContent = _sctrPostValue.Zero;
        document.getElementById(_sctrIdName0).textContent = 'Player 1';
        document.getElementById(_sctrIdName1).textContent = 'Player 2';

        document.querySelector(_sctrClsPlayer0).classList.remove(_clsWinner);
        document.querySelector(_sctrClsPlayer1).classList.remove(_clsWinner);
        document.querySelector(_sctrClsPlayer0).classList.remove(_clsActive);
        document.querySelector(_sctrClsPlayer0).classList.add(_clsActive);
        document.querySelector(_sctrClsPlayer1).classList.remove(_clsActive);
    };

    const _nextPlayer = function () {
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;
        dice6Rolled = false;

        document.getElementById(_sctrIdCurrent0).textContent = roundScore;
        document.getElementById(_sctrIdCurrent1).textContent = roundScore;

        document.querySelector(_sctrClsPlayer0).classList.toggle(_clsActive);
        document.querySelector(_sctrClsPlayer1).classList.toggle(_clsActive);

        _showHideDice(0, _sctrlClsDice0);
        _showHideDice(0, _sctrlClsDice1);
    };

    const _onRollDiceClick = function () {
        _setMessage('');
        skipUpdateScore = false;

        if (gamePlaying) {
            // Random number
            const dice0 = Math.floor(Math.random() * 6) + 1;
            const dice1 = Math.floor(Math.random() * 6) + 1;

            // Display the result
            _showHideDice(dice0, _sctrlClsDice0);
            _showHideDice(dice1, _sctrlClsDice1);

            // Challenges 1: A player loses his entire score when he rolls two six in a row. Then, is the next player after that.
            if (dice0 === 6 || dice1 === 6) {
                if (dice6Rolled) {
                    score[activePlayer] = 0;
                    document.getElementById(`score-${activePlayer}`).innerText = score[activePlayer];
                    _setMessage('dice six was rolled in a row!!!');

                    // Next Player
                    _nextPlayer();
                    skipUpdateScore = true;
                }
                else
                    dice6Rolled = true;
            }
            else
                dice6Rolled = false;

            if (!skipUpdateScore) {
                // Update the score IF the rolled number is NOT a number 1
                if (dice0 !== 1 && dice1 !== 1) {
                    roundScore += dice0 + dice1;
                    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
                }
                else {
                    _setMessage('dice one was rolled!');

                    // Next Player
                    _nextPlayer();
                }
            }
        }
    };

    const _onHoldClick = function () {
        if (gamePlaying) {
            // Add CURRENT Score to GLOBAL Score
            score[activePlayer] += roundScore;

            // Update the UI
            document.getElementById(`score-${activePlayer}`).innerText = score[activePlayer];

            let winScore = parseInt(document.getElementById(_sctrlScore).value);
            // Undefined, 0, null or "" are COERCED to false; Anything else is COERCED to true.
            winScore = (winScore) ? winScore : 100;

            // Check if player won the match
            if (score[activePlayer] >= winScore) {
                const activePlayerPanel = `.player-${activePlayer}-panel`;

                _showHideDice(0, _sctrlClsDice0);
                _showHideDice(0, _sctrlClsDice1);
                document.getElementById(`name-${activePlayer}`).textContent = 'WINNER!!!';
                document.querySelector(activePlayerPanel).classList.add(_clsWinner);
                document.querySelector(activePlayerPanel).classList.remove(_clsActive);
                gamePlaying = false;
            }
            else {
                // Next Player
                _nextPlayer();
            }
        }
    };

    const _registerEvents = function () {
        document.querySelector('.btn-roll').addEventListener('click', _onRollDiceClick, false);
        document.querySelector('.btn-hold').addEventListener('click', _onHoldClick, false);
        document.querySelector('.btn-new').addEventListener('click', _resetControls);
    };

    const _init = function () {
        _resetControls();
        _registerEvents();
    };

    document.addEventListener('DOMContentLoaded', function () {
        _init();
    }, false);
})();