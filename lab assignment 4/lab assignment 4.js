const quizQuestions = [
    { question: "Q1: What is the capital of France?", answer: "paris" },
    { question: "Q2: Which programming language is used alongside HTML and CSS?", answer: "javascript" },
    { question: "Q3: What company developed the Python programming language?", answer: "cwi" },
    { question: "Q4: How many bits are in a byte?", answer: "8" },
    { question: "Q5: What term describes finding and fixing errors in code?", answer: "debugging" },
    { question: "Q6: What is the file extension for a JavaScript file?", answer: ".js" }
];

function runQuiz() {
    let score = 0;
    const total = quizQuestions.length;

    console.log("--- Quiz Started! ---");
    console.log(`We have ${total} questions for you. Let's begin!`);

    for (let i = 0; i < total; i++) {
        const currentQ = quizQuestions[i];
        
        const userInput = prompt(currentQ.question);

        if (userInput === null) {
            alert(`Quiz stopped early. Final score: ${score} out of ${total}`);
            return;
        }

        const normalizedInput = userInput.toLowerCase().trim();
        const correctAnswer = currentQ.answer.toLowerCase().trim();

        if (normalizedInput === correctAnswer) {
            score++;
            alert("Correct! You got it right.");
        } else {
            alert(` Not quite! The answer was: "${correctAnswer}".`);
        }
    }

    alert(`Quiz Complete! Your final score is ${score} out of ${total}.`);
    console.log(`--- Final Score: ${score}/${total} ---`);
}

runQuiz();