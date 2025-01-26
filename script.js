// Page 1 - Ask a Question
function submitQuestion() {
    var questionText = document.getElementById("questionText").value;
    if (questionText.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    var questionList = document.getElementById("questionList");

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerText = questionText;
    questionDiv.onclick = function() {
        showAnswers(questionText);
    };

    questionList.appendChild(questionDiv);

    document.getElementById("questionText").value = "";
}

// Page 2 - Show Answers
function showAnswers(questionText) {
    localStorage.setItem("selectedQuestion", questionText);
    window.location.href = "page2.html";
}

function getSelectedQuestion() {
    return localStorage.getItem("selectedQuestion");
}

// Page 2 - Answer a Question
function submitAnswer() {
    var answerText = document.getElementById("answerText").value;
    if (answerText.trim() === "") {
        alert("Please enter an answer.");
        return;
    }

    var answerList = document.getElementById("answerList");

    var answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");
    answerDiv.innerText = answerText;

    answerList.appendChild(answerDiv);

    document.getElementById("answerText").value = "";
}

function goBack() {
    localStorage.removeItem("selectedQuestion");
}
// Page 2 - Initialize
window.onload = function() {
    var selectedQuestion = getSelectedQuestion();
    if (selectedQuestion) {
        var questionDetails = document.getElementById("questionDetails");
        questionDetails.innerText = "Question: " + selectedQuestion;
    } else {
        goBack(); // Clear selected question if not found
    }
};
