const questions = [
    { text: "Kai sprendžiu skyriaus biudžeto sumažinimo problemą, aš...", answers: [
        { text: "Naudoju formalią matricą...", score: 4, dim: "Sisteminis" },
        { text: "Ignoruoju kitus skyrius...", score: 1, dim: "Sisteminis" },
        { text: "Analizuoju visos organizacijos grandinę...", score: 5, dim: "Sisteminis" }
    ]},
    // ... Įkelti visus 15 klausimų su atsakymais ir dimensijomis
];

let currentQuestion = 0;
let scores = { Sisteminis: 0, Perframinimas: 0, Refleksija: 0 };

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const summaryEl = document.getElementById('summary');

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.text;
    answersEl.innerHTML = '';
    q.answers.forEach(a => {
        const btn = document.createElement('button');
        btn.textContent = a.text;
        btn.onclick = () => {
            scores[a.dim] += a.score;
            nextBtn.disabled = false;
        };
        answersEl.appendChild(btn);
    });
    progressEl.textContent = `${currentQuestion + 1}/${questions.length}`;
    nextBtn.disabled = true;
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    resultEl.classList.remove('hidden');
    summaryEl.innerHTML = `
        <p>Sisteminis mąstymas: ${scores.Sisteminis}</p>
        <p>Perframinimas: ${scores.Perframinimas}</p>
        <p>Refleksija: ${scores.Refleksija}</p>
    `;
}

document.getElementById('download-pdf').onclick = () => {
    html2pdf().from(resultEl).save('rezultatai.pdf');
};

showQuestion();
