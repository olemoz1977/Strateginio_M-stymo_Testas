const questions = [
    // I. Sisteminis mąstymas (1–5)
    { text: "Kai sprendžiu skyriaus biudžeto sumažinimo problemą, aš...", answers: [
        { text: "Naudoju formalią matricą...", score: 4, dim: "Sisteminis" },
        { text: "Ignoruoju kitus skyrius...", score: 1, dim: "Sisteminis" },
        { text: "Analizuoju visos organizacijos grandinę...", score: 5, dim: "Sisteminis" },
        { text: "Paklausiu kitų vadovų nuomonės...", score: 3, dim: "Sisteminis" },
        { text: "Atsižvelgiu į prieštaravimus, bet darau kas geriausia mano skyriui...", score: 2, dim: "Sisteminis" }
    ]},
    { text: "Susidūrus su klientų praradimu, aš...", answers: [
        { text: "Analizuoju rinkos pokyčius ir konkurentus...", score: 5, dim: "Sisteminis" },
        { text: "Peržiūriu paskutinių savaičių pardavimus...", score: 2, dim: "Sisteminis" },
        { text: "Kaltinu pardavimų skyrių...", score: 1, dim: "Sisteminis" },
        { text: "Ieškau vidinių klaidų (IT, procesai)...", score: 4, dim: "Sisteminis" },
        { text: "Peržiūriu pardavimų ir kokybės duomenis...", score: 3, dim: "Sisteminis" }
    ]},
    { text: "Mano požiūris į ilgalaikes tendencijas (AI, reguliavimas)...", answers: [
        { text: "Skaitau naujienas, bet tai neturi įtakos sprendimams...", score: 2, dim: "Sisteminis" },
        { text: "Inicijuoju scenarijų planavimą kas 5 metus...", score: 5, dim: "Sisteminis" },
        { text: "Tai aukščiausios vadovybės reikalas...", score: 1, dim: "Sisteminis" },
        { text: "Kartais diskutuoju su komanda...", score: 3, dim: "Sisteminis" },
        { text: "Stebiu tendencijas ir peržiūriu prioritetus kas ketvirtį...", score: 4, dim: "Sisteminis" }
    ]},
    { text: "Kai iškyla problemos, kurios viršija mano kompetenciją, aš...", answers: [
        { text: "Bandau išspręsti tik savo resursais...", score: 2, dim: "Sisteminis" },
        { text: "Ieškau organizacinės priežasties...", score: 5, dim: "Sisteminis" },
        { text: "Perduodu atsakomybę ir nustoju stebėti...", score: 1, dim: "Sisteminis" },
        { text: "Bendradarbiauju su keliais skyriais...", score: 3, dim: "Sisteminis" },
        { text: "Inicijuoju tarpfunkcinį susitikimą...", score: 4, dim: "Sisteminis" }
    ]},
    { text: "Planuojant ilgalaikę strategiją, didžiausią dėmesį skiriu...", answers: [
        { text: "Kritinių prielaidų nustatymui ir planams...", score: 5, dim: "Sisteminis" },
        { text: "Išteklių paskirstymui pagal dabartinius prioritetus...", score: 2, dim: "Sisteminis" },
        { text: "Tikslams pagal praėjusių metų rezultatus...", score: 1, dim: "Sisteminis" },
        { text: "Rizikoms ir galimybėms (vidiniai/išoriniai)...", score: 4, dim: "Sisteminis" },
        { text: "Konkurenciniam pranašumui artimiausiu metu...", score: 3, dim: "Sisteminis" }
    ]},

    // II. Perframinimas (6–10)
    { text: "Komandai nepavykstant įveikti kliūties, aš...", answers: [
        { text: "Liepiu sustabdyti veiklą ir sugalvoti 5 naujus būdus...", score: 4, dim: "Perframinimas" },
        { text: "Organizuoju dirbtuves iš kito vaidmens perspektyvos...", score: 5, dim: "Perframinimas" },
        { text: "Paprašau 3-4 naujų, bet panašių planų...", score: 2, dim: "Perframinimas" },
        { text: "Primenu naudoti patvirtintas taktikas...", score: 1, dim: "Perframinimas" },
        { text: "Inicijuoju diskusiją su radikaliai kitomis idėjomis...", score: 3, dim: "Perframinimas" }
    ]},
    { text: "Ruošiantis svarbiam sprendimui, aš visada...", answers: [
        { text: "Kuriu kelis nesuderinamus scenarijus...", score: 5, dim: "Perframinimas" },
        { text: "Ieškau objektyvių duomenų tarp dviejų pasirinkimų...", score: 2, dim: "Perframinimas" },
        { text: "Prašau komandos surinkti duomenis patvirtinimui ir paneigimui...", score: 3, dim: "Perframinimas" },
        { text: "Ieškau įrodymų, patvirtinančių mano idėją...", score: 1, dim: "Perframinimas" },
        { text: "Ieškau aktyvių oponentų ir jų pasiūlymų...", score: 4, dim: "Perframinimas" }
    ]},
    { text: "Susidūrus su sudėtingu tikslu, aš...", answers: [
        { text: "Naudoju tik išbandytus metodus...", score: 1, dim: "Perframinimas" },
        { text: "Naudoju pramonės standartus (SWOT)...", score: 2, dim: "Perframinimas" },
        { text: "Ieškau nekonvencinių sprendimų...", score: 4, dim: "Perframinimas" },
        { text: "Tikrinu, ar tikslas teisingas, gal keičiu kryptį...", score: 5, dim: "Perframinimas" },
        { text: "Adaptuoju metodus iš kitų pramonės šakų...", score: 3, dim: "Perframinimas" }
    ]},
    { text: "Iškilo netikėta nauja problema. Aš...", answers: [
        { text: "Pritaikau standartines procedūras...", score: 2, dim: "Perframinimas" },
        { text: "Ieškau analogiškų sprendimų savo patirtyje...", score: 1, dim: "Perframinimas" },
        { text: "Ieškau sprendimų iš kitų pramonės šakų...", score: 4, dim: "Perframinimas" },
        { text: "Pasitelkiu išorinius ekspertus...", score: 3, dim: "Perframinimas" },
        { text: "Dekonstruoju problemą ir apverčiu prielaidas...", score: 5, dim: "Perframinimas" }
    ]},
    { text: "Kai komanda generuoja idėjas, mano vaidmuo yra...", answers: [
        { text: "Atmesti rizikingas idėjas...", score: 2, dim: "Perframinimas" },
        { text: "Užtikrinti realistiškumą ir biudžetą...", score: 1, dim: "Perframinimas" },
        { text: "Paskirti „advokato velnio“ poziciją...", score: 5, dim: "Perframinimas" },
        { text: "Leisti generuoti laisvai, bet pasirinkti akivaizdų variantą...", score: 3, dim: "Perframinimas" },
        { text: "Skatinti idėjas, prieštaraujančias strategijai...", score: 4, dim: "Perframinimas" }
    ]},

    // III. Refleksija (11–15)
    { text: "Po didelės sėkmės/nesėkmės, aš...", answers: [
        { text: "Naudoju rezultatus strateginiam dienoraščiui...", score: 5, dim: "Refleksija" },
        { text: "Surengiu trumpą susitikimą...", score: 2, dim: "Refleksija" },
        { text: "Greitai einu prie kito darbo...", score: 1, dim: "Refleksija" },
        { text: "Organizuoju struktūrizuotą peržiūrą...", score: 4, dim: "Refleksija" },
        { text: "Parašau trumpą atmintinę komandos nariams...", score: 3, dim: "Refleksija" }
    ]},
    { text: "Aš aktyviai ieškau kritinio grįžtamojo ryšio...", answers: [
        { text: "Iš nepriklausomų patarėjų...", score: 5, dim: "Refleksija" },
        { text: "Tik iš palaikančių asmenų...", score: 2, dim: "Refleksija" },
        { text: "Iš platesnio rato, įskaitant oponentus...", score: 4, dim: "Refleksija" },
        { text: "Tik tada, kai prašo...", score: 1, dim: "Refleksija" },
        { text: "Iš tiesioginių pavaldinių ir vadovų...", score: 3, dim: "Refleksija" }
    ]},
    { text: "Kai analizuoju praeities klaidas, ieškau...", answers: [
        { text: "Pamokų ateičiai...", score: 3, dim: "Refleksija" },
        { text: "Klaidų padariusių asmenų...", score: 1, dim: "Refleksija" },
        { text: "Klaidingų prielaidų...", score: 4, dim: "Refleksija" },
        { text: "Organizacinių tendencijų ir mokymosi sistemos...", score: 5, dim: "Refleksija" },
        { text: "Akivaizdžių sistemų trūkumų...", score: 2, dim: "Refleksija" }
    ]},
    { text: "Mano nuomonė apie strategijos keitimą yra...", answers: [
        { text: "Keisti tik po analizės...", score: 4, dim: "Refleksija" },
        { text: "Keitimas rodo silpnumą...", score: 1, dim: "Refleksija" },
        { text: "Keisti tik metų pabaigoje...", score: 3, dim: "Refleksija" },
        { text: "Keisti tik po blogų rezultatų...", score: 2, dim: "Refleksija" },
        { text: "Keisti nedelsiant gavus naujų duomenų...", score: 5, dim: "Refleksija" }
    ]},
    { text: "Priėmęs sėkmingą sprendimą, aš...", answers: [
        { text: "Dokumentuoju sąlygas pakartojimui...", score: 4, dim: "Refleksija" },
        { text: "Tiesiog džiaugiuosi ir einu toliau...", score: 1, dim: "Refleksija" },
        { text: "Išvedu bendrą principą ir testuoju kitur...", score: 5, dim: "Refleksija" },
        { text: "Analizuoju veiksmus, atvedusius prie sėkmės...", score: 3, dim: "Refleksija" },
        { text: "Pasidalinu pamoka su kolegomis...", score: 2, dim: "Refleksija" }
    ]}
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

function interpret(score) {
    if (score <= 15) return "Žemas";
    if (score <= 25) return "Vidutinis";
    return "Aukštas";
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    resultEl.classList.remove('hidden');
    summaryEl.innerHTML = `
        <p><strong>Sisteminis mąstymas:</strong> ${scores.Sisteminis} (${interpret(scores.Sisteminis)})</p>
        <p><strong>Perframinimas:</strong> ${scores.Perframinimas} (${interpret(scores.Perframinimas)})</p>
        <p><strong>Refleksija:</strong> ${scores.Refleksija} (${interpret(scores.Refleksija)})</p>
    `;
}

document.getElementById('download-pdf').onclick = () => {
    html2pdf().from(resultEl).save('rezultatai.pdf');
};

showQuestion();owQuestion();
