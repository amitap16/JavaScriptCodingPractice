/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
pigGame.Main = function () {
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
        _sctrClsDice = '.dice',
        _clsWinner = 'winner',
        _clsActive = 'active';
    let activePlayer, roundScore, score, gamePlaying;

    const _resetControls = function () {
        activePlayer = 0;
        roundScore = 0;
        score = [0, 0];
        gamePlaying = true;

        document.querySelector(_sctrClsDice).style.display = 'none';

        document.getElementById(_sctrIdCurrent0).textContent = 0;
        document.getElementById(_sctrIdCurrent1).textContent = 0;
        document.getElementById(_sctrIdScore0).textContent = 0;
        document.getElementById(_sctrIdScore1).textContent = 0;
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

        document.getElementById(_sctrIdCurrent0).textContent = roundScore;
        document.getElementById(_sctrIdCurrent1).textContent = roundScore;

        document.querySelector(_sctrClsPlayer0).classList.toggle(_clsActive);
        document.querySelector(_sctrClsPlayer1).classList.toggle(_clsActive);

        document.querySelector(_sctrClsDice).style.display = 'none';
    };

    const _onRollDiceClick = function () {
        if (gamePlaying) {
            // Random number
            const dice = Math.floor(Math.random() * 6) + 1;

            // Display the result
            const diceDOM = document.querySelector(_sctrClsDice);
            diceDOM.style.display = 'block';
            diceDOM.src = `images/dice-${dice}.png`;

            // Update the score IF the rolled number is NOT a number 1
            if (dice !== 1) {
                roundScore += dice;
                document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            }
            else {
                // Next Player
                _nextPlayer();
            }
        }
    };

    const _onHoldClick = function () {
        if (gamePlaying) {
            // Add CURRENT Score to GLOBAL Score
            score[activePlayer] += roundScore;

            // Update the UI
            document.getElementById(`score-${activePlayer}`).innerText = score[activePlayer];

            // Check if player won the match
            if (score[activePlayer] >= 20) {
                const activePlayerPanel = `.player-${activePlayer}-panel`;

                document.querySelector(_sctrClsDice).style.display = 'none';
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
}();