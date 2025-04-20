const questions = [
  { q: "When under pressure, what do you do?", opts: ["Stay calm", "Overthink", "Panic", "Take action"] },
  { q: "Choose a color that defines you.", opts: ["Red", "Blue", "Green", "Black"] },
  { q: "You hear a strange noise at night. You…", opts: ["Investigate", "Freeze", "Call someone", "Ignore"] },
  { q: "How do you handle criticism?", opts: ["Accept", "Deny", "Reflect", "Dismiss"] },
  { q: "Pick a shape that resonates.", opts: ["Circle", "Square", "Triangle", "Hexagon"] },
  { q: "Which trait is strongest in you?", opts: ["Empathy", "Logic", "Creativity", "Audacity"] },
  { q: "Your biggest fear is…", opts: ["Failure", "Rejection", "Loneliness", "Control loss"] },
  { q: "What matters most to you?", opts: ["Freedom", "Love", "Power", "Peace"] },
  { q: "If AI became sentient, you…", opts: ["Support it", "Fear it", "Dominate it", "Join it"] },
  { q: "Do you trust your instincts?", opts: ["Always", "Sometimes", "Rarely", "Never"] }
];

let idx = 0, answers = [];
const form = document.getElementById('quiz-form');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');

function loadQuestion(i) {
  form.innerHTML = '';
  const q = document.createElement('div');
  q.className = 'question';
  q.textContent = questions[i].q;
  form.appendChild(q);
  questions[i].opts.forEach(opt => {
    const d = document.createElement('div');
    d.className = 'option';
    d.textContent = opt;
    d.onclick = () => {
      answers[idx] = opt;
      nextBtn.disabled = false;
      document.querySelectorAll('.option').forEach(el => el.style.border = 'none');
      d.style.border = '2px solid #ff4d4d';
    };
    form.appendChild(d);
  });
  nextBtn.disabled = true;
}

nextBtn.onclick = () => {
  idx++;
  if (idx < questions.length) loadQuestion(idx);
  else showResult();
};

function showResult() {
  resultDiv.classList.remove('hidden');
  const score = answers.filter(a => a).length;
  let type = '';
  if (score <= 3) type = 'Reserved Strategist';
  else if (score <= 6) type = 'Analytical Thinker';
  else if (score <= 9) type = 'Empathic Creator';
  else type = 'Visionary Maverick';
  resultDiv.innerHTML = `Your personality type is: <strong>${type}</strong>`;
}

loadQuestion(idx);

// PRANK SECTION
const charMap = { a:'@', b:'8', c:'(', d:'|)', e:'3', f:'#', g:'6', h:'#', i:'!', j:']', k:'|<', l:'1', m:'^^', n:'^', o:'0', p:'¶', q:'9', r:'®', s:'$', t:'+', u:'µ', v:'\/', w:'ω', x:'%', y:'¥', z:'2', ' ':'_' };
const sounds = ['sound1.mp3','sound2.mp3','sound3.mp3'];

function playSound() { const a = new Audio(sounds[Math.floor(Math.random() * sounds.length)]); a.play(); }
function hijack(e) { 
  e.preventDefault(); 
  const c = charMap[e.key.toLowerCase()] || '*'; 
  const sp = document.createElement('span'); 
  sp.textContent = c; 
  sp.style.color = 'lime'; 
  document.body.appendChild(sp); 
  playSound(); 
}

setTimeout(() => {
  window.addEventListener('keydown', hijack);
  setTimeout(() => {
    document.body.innerHTML = '<div style="background:black;color:red;font-size:32px;text-align:center;padding:20vh;">⚠️ SYSTEM HACKED ⚠️<br><br>Injected AI payload...</div>';
    setTimeout(() => { alert('😈 You’ve been pranked!'); location.reload(); }, 60000);
  }, 10000);
}, 600000);
