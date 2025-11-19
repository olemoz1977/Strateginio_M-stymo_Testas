const questions = [
  // Refleksija
  { text: "Aš dažnai apmąstau savo sprendimus.", reverse: false, dimension: "Refleksija" },
  { text: "Man nesvarbu, kokias pasekmes turi mano sprendimai.", reverse: true, dimension: "Refleksija" },
  { text: "Aš mokausi iš savo klaidų.", reverse: false, dimension: "Refleksija" },
  { text: "Aš retai analizuoju, kodėl mano sprendimai buvo sėkmingi ar nesėkmingi.", reverse: true, dimension: "Refleksija" },
  { text: "Aš reguliariai reflektuoju savo veiklą.", reverse: false, dimension: "Refleksija" },

  // Reframing
  { text: "Aš dažnai permąstau situacijas iš skirtingų perspektyvų.", reverse: false, dimension: "Reframing" },
  { text: "Man sunku įsivaizduoti alternatyvius požiūrius į problemą.", reverse: true, dimension: "Reframing" },
  { text: "Aš gebu keisti savo požiūrį, kai gaunu naujos informacijos.", reverse: false, dimension: "Reframing" },
  { text: "Aš laikausi vienos nuomonės, net jei aplinkybės keičiasi.", reverse: true, dimension: "Reframing" },
  { text: "Aš vertinu skirtingus požiūrius prieš priimdamas sprendimą.", reverse: false, dimension: "Reframing" },

  // Sisteminis mąstymas
  { text: "Gebu įžvelgti ryšius tarp skirtingų situacijų.", reverse: false, dimension: "Sisteminis" },
  { text: "Man sunku matyti bendrą vaizdą, kai sprendžiu problemas.", reverse: true, dimension: "Sisteminis" },
  { text: "Aš planuoju savo veiksmus atsižvelgdamas į ilgalaikes pasekmes.", reverse: false, dimension: "Sisteminis" },
  { text: "Man nesvarbu, kaip mano sprendimai paveiks kitus.", reverse: true, dimension: "Sisteminis" },
  { text: "Aš suprantu, kaip mano sprendimai veikia visą organizaciją ar komandą.", reverse: false, dimension: "Sisteminis" }
];

// Atsitiktinis sumaišymas
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
        `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`
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
  } else if (percentage >= 75) {
    message = "Jūsų strateginio mąstymo lygis yra aukštas.";
  } else if (percentage >= 50) {
    message = "Jūsų strateginio mąstymo lygis yra vidutinis.";
  } else {
    message = "Rekomenduojama toliau lavinti strateginio mąstymo įgūdžius.";
  }

  document.getElementById("result").innerText = `Rezultatas: ${percentage}% – ${message}`;
}

loadQuiz();
