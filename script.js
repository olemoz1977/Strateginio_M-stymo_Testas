const questions = [
  // Refleksija
  { text: "Aš dažnai apmąstau savo sprendimus.", reverse: false },
  { text: "Man nesvarbu, kokias pasekmes turi mano sprendimai.", reverse: true },
  { text: "Aš mokausi iš savo klaidų.", reverse: false },
  { text: "Aš retai analizuoju, kodėl mano sprendimai buvo sėkmingi ar nesėkmingi.", reverse: true },
  { text: "Aš reguliariai reflektuoju savo veiklą.", reverse: false },

  // Reframing
  { text: "Aš dažnai permąstau situacijas iš skirtingų perspektyvų.", reverse: false },
  { text: "Man sunku įsivaizduoti alternatyvius požiūrius į problemą.", reverse: true },
  { text: "Aš gebu keisti savo požiūrį, kai gaunu naujos informacijos.", reverse: false },
  { text: "Aš laikausi vienos nuomonės, net jei aplinkybės keičiasi.", reverse: true },
  { text: "Aš vertinu skirtingus požiūrius prieš priimdamas sprendimą.", reverse: false },

  // Sisteminis mąstymas
  { text: "Gebu įžvelgti ryšius tarp skirtingų situacijų.", reverse: false },
  { text: "Man sunku matyti bendrą vaizdą, kai sprendžiu problemas.", reverse: true },
  { text: "Aš planuoju savo veiksmus atsižvelgdamas į ilgalaikes pasekmes.", reverse: false },
  { text: "Man nesvarbu, kaip mano sprendimai paveiks kitus.", reverse: true },
  { text: "Aš suprantu, kaip mano sprendimai veikia visą organizaciją ar komandą.", reverse: false }
];

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

const likertOptions = [
  "Visiškai nesutinku",
  "Nesutinku",
  "Nei sutinku, nei nesutinku",
  "Sutinku",
  "Visiškai sutinku"
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  shuffledQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${i + 1}. ${q.text}</p>` +
      likertOptions.map((opt, j) =>
        `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label>`
      ).join("");
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  let answered = 0;

  shuffledQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      let val = parseInt(selected.value);
      if (q.reverse) val = 4 - val;
      score += val;
      answered++;
    }
  });

  const maxScore = shuffledQuestions.length * 4;
  const percentage = Math.round((score / maxScore) * 100);

  let message = "";
  if (answered < shuffledQuestions.length) {
    message = "Prašome atsakyti į visus klausimus.";
    document.getElementById("printBtn").style.display = "none";
  } else if (percentage >= 75) {
    message = "Jūsų strateginio mąstymo lygis yra aukštas.";
    document.getElementById("printBtn").style.display = "inline-block";
  } else if (percentage >= 50) {
    message = "Jūsų strateginio mąstymo lygis yra vidutinis.";
    document.getElementById("printBtn").style.display = "inline-block";
  } else {
    message = "Rekomenduojama toliau lavinti strateginio mąstymo įgūdžius.";
    document.getElementById("printBtn").style.display = "inline-block";
  }

  document.getElementById("result").innerText = `Rezultatas: ${percentage}% – ${message}`;
}

loadQuiz();
