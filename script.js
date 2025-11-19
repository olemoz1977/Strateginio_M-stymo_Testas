const questions = [
  {
    question: "Kuris iš šių veiksmų geriausiai atspindi strateginį mąstymą?",
    options: ["Greitas sprendimas", "Ilgalaikė vizija", "Emocinis atsakas", "Atsitiktinis pasirinkimas"],
    answer: 1
  },
  {
    question: "Ką reiškia SWOT analizė?",
    options: ["Stiprybės, silpnybės, galimybės, grėsmės", "Strategijos, veiklos, organizacijos, technologijos", "Sistemos, veiklos, orientacijos, tikslai", "Sąmoningumas, veiksmingumas, organizuotumas, tikslumas"],
    answer: 0
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${q.question}</p>` +
      q.options.map((opt, j) =>
        `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`
      ).join("");
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  document.getElementById("result").innerText = `Rezultatas: ${score} iš ${questions.length}`;
}

loadQuiz();
