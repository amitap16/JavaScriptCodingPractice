/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
quizGame.main = (function () {
    'use strict';

    const Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    const _quizQuestions = [
        new Question('Which Italian city has a leaning tower?',
            ['Milan', 'Pisa', 'Rome', 'Turin'], 1)
        , new Question('How long does it take the Earth to rotate once on its axis?',
            ['One day', 'One week', 'One month', 'One year'], 0)
        , new Question('Why does the South Pole receive no sunlight during its winter?',
            ['The Northern Hemisphere is tilted away from the Sun', `The Sun doesn't orbit the Earth in the winter`,
                'The Earth stops rotating in the winter', 'The Southern Hemisphere is tilted away from the Sun'], 3)
        , new Question('What causes day and night?',
            ['The Sun moves around the Earth', 'The Moon comes out, causing night',
                'The Earth orbits the Sun', 'The Earth rotates on its axis'], 3)
        , new Question('How long does it take the Earth to orbit the Sun?',
            ['One day', 'One month', 'One year', 'One decade'], 2)
        , new Question('In which season are the nights much longer than the days?',
            ['Spring', 'Summer', 'Winter', 'Autumn'], 2)
        , new Question(`Alexander Graham Bell said, 'Come here Watson. I want you' on the first working what?`,
            ['MP3', 'Tape recorder', 'Loud speaker', 'Telephone'], 3)
        , new Question('Who demonstrated the first public television?',
            ['Jim Lagie Beard', 'John Logie Baird', 'James Lurgie Bead', 'Jake Lergie Bean'], 1)
        , new Question('How long ago was the first known wheel invented?',
            ['3, 000 years ago', '30 years ago', '3 years ago', '300 years ago'], 0)
        , new Question('The radio was a huge step in communication. It was invented in which year?',
            ['1999', '2010', '1892', '1982'], 2)
        , new Question('Thomas Edison conducted thousands of experiments in order to invent what?',
            ['The microwave', 'The electric lightbulb', 'The parachute', 'The roller skate'], 1)
    ];

    const _getAnswers = function (answers) {
        if (Array.isArray(answers)) {
            for (let i = 0; i < answers.length; i++) {
                console.log(i + ': ' + answers[i]);
            }
        }
    };

    const _getRandomQuestion = function () {
        const index = Math.floor(Math.random() * 11);
        const randomQ = _quizQuestions[index];

        console.log(randomQ.question);
        _getAnswers(randomQ.answers);

        let answer = parseInt(prompt("Please select the correct answer (just type the number)."));
        if (answer != null)
            console.log(answer === randomQ.correctAnswer ? 'Correct answer!' : 'Wrong answer. Try again :)');
    };

    document.addEventListener('DOMContentLoaded', function () {
        _getRandomQuestion();
    }, false);

    //return {
    //    getRandomQuestion: _getRandomQuestion
    //}
})();