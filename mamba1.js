<script>
    var containers = document.getElementsByClassName('container');
    var currentQuestion = 0;

    // Display the first question
    containers[0].style.display = 'block';

    // Define the next function
    function next() {
        if (currentQuestion < containers.length - 1) {
            containers[currentQuestion].style.display = 'none';
            currentQuestion++;
            containers[currentQuestion].style.display = 'block';
        }
    }

    // Get the final result and redirect to the result page
    function result() {
        var score = 0;
        var correctAnswers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (var i = 0; i < correctAnswers.length; i++) {
            var radioButtons = document.getElementsByName('question' + (i + 1));
            for (var j = 0; j < radioButtons.length; j++) {
                if (radioButtons[j].checked && radioButtons[j].id === 'correct' + (i + 1)) {
                    score++;
                }
            }
        }

        // Redirect to the result page with the score as a query parameter
        window.location.href = 'result.html?score=' + score;
    }
</script>
