const questions = [
  // --- Sorting ---
  {
    q: "Apa tujuan utama dari proses pengurutan (sorting)?",
    options: [
      "Mengacak data",
      "Mengatur data agar terurut",
      "Menghapus data lama",
      "Membuat data acak",
    ],
    answer: 1,
  },
  {
    q: "Algoritma yang menyisipkan elemen satu per satu ke posisi yang tepat disebut?",
    options: ["Selection Sort", "Insertion Sort", "Bubble Sort", "Quick Sort"],
    answer: 1,
  },
  {
    q: "Selection Sort bekerja dengan cara?",
    options: [
      "Menukar elemen acak",
      "Memilih elemen terkecil lalu menukarnya",
      "Menghapus elemen",
      "Menyalin elemen",
    ],
    answer: 1,
  },

  // --- Stack ---
  {
    q: "Prinsip utama dari Stack adalah?",
    options: ["FIFO", "LIFO", "RANDOM", "AUTO"],
    answer: 1,
  },
  {
    q: "Operasi untuk menambah data ke Stack disebut?",
    options: ["Pop", "Push", "Peek", "Insert"],
    answer: 1,
  },
  {
    q: "Operasi untuk melihat data paling atas tanpa menghapus disebut?",
    options: ["Push", "Pop", "Peek", "Swap"],
    answer: 2,
  },

  // --- Queue ---
  {
    q: "Prinsip utama dari Queue adalah?",
    options: [
      "Last In First Out",
      "First In First Out",
      "Random Order",
      "Circular Logic",
    ],
    answer: 1,
  },
  {
    q: "Operasi untuk menambah data ke belakang antrean disebut?",
    options: ["Dequeue", "Enqueue", "Insert", "Push"],
    answer: 1,
  },
  {
    q: "Komponen Queue di mana data diambil disebut?",
    options: ["Rear", "Middle", "Front", "Back"],
    answer: 2,
  },

  // --- Searching ---
  {
    q: "Proses mencari data tertentu dalam kumpulan data disebut?",
    options: ["Sorting", "Searching", "Stacking", "Queuing"],
    answer: 1,
  },
];

let currentQuestion = 0;
let score1 = 0,
  score2 = 0;
let turn = 1;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const turnEl = document.getElementById("turn");
const resultEl = document.getElementById("result");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startGame);

function startGame() {
  currentQuestion = 0;
  score1 = 0;
  score2 = 0;
  turn = 1;
  startBtn.classList.add("hidden");
  resultEl.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }

  const q = questions[currentQuestion];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  turnEl.textContent = `Giliran: Pemain ${turn}`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  const correct = questions[currentQuestion].answer === i;
  if (turn === 1) {
    score1 += correct ? 10 : -5;
    score1El.textContent = score1;
  } else {
    score2 += correct ? 10 : -5;
    score2El.textContent = score2;
  }

  currentQuestion++;
  turn = turn === 1 ? 2 : 1;
  showQuestion();
}

function endGame() {
  questionEl.textContent = "🎮 Duel Selesai!";
  optionsEl.innerHTML = "";
  startBtn.classList.remove("hidden");

  let winner = "Seri!";
  if (score1 > score2) winner = "🏆 Pemain 1 Menang!";
  else if (score2 > score1) winner = "🏆 Pemain 2 Menang!";

  resultEl.textContent = `${winner} Skor Akhir: ${score1} - ${score2}`;
  resultEl.classList.remove("hidden");
}
