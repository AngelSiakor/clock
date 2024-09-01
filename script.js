    const randomNumber = Math.floor(Math.random() * 100) + 1;
        let chances = 5;

        function checkGuess() {
            const guess = parseInt(document.getElementById('guessInput').value);
            const resultText = document.getElementById('result');

            if (guess === randomNumber) {
                resultText.textContent = 'Yayyy!! You guessed it right!';
            } else {
                chances--;
                if (chances > 0) {
                    resultText.textContent = `Wrong guess! You have ${chances} chances left.`;
                } else {
                    resultText.textContent = 'Failed! You used all 5 chances. The correct number was ' + randomNumber;
                }
            }
        }