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

// List of sound effects
const soundEffects = [
    "sound1.mp3", // Add your own sound effect files
    "sound2.mp3",
    "sound3.mp3",
    "sound4.mp3",
    "sound5.mp3",
    "sound6.mp3"
];

// Custom key mapping (as discussed)
const keyMapping = {
    'p': ['x', '0', 'z', '🥴', 'q', '&', 'n', 'y', 'f'],
    'a': ['$', 'x', '!', 'z', '@', 's', 'y', 'f', 'u'],
    'd': ['💩', 'p', 'e', '😈', 'k', 'a', '3', 'w', 'q'],
    'i': ['💩', 'u', '1', 'j', '✨', 'x', 'b', 'h', 'a'],
    's': ['$', 'x', '!', 'z', 'm', 'n', 'b', 'v', 'c'],
    // Add more mappings for other letters
};

// Word map replacements
const wordMap = {
    2: ["bc", "gu", "pgl", "pgl", "pgl", "ui", "na", "lo", "bk", "pgl", "pgl"],
    3: ["pgl", "pgl", "pgl", "pgl", "pgl", "pgl", "pgl", "pgl", "bub", "chl", "hat", "luv", "ulu", "fat", "mar", "guu", "pgl", "dil", "umm", "aww"],
    4: ["mental", "pgl", "pgl", "pgl", "pgl", "dogi", "pagl", "chal", "lame", "zero", "baka", "noor", "baby", "shiv", "kiyu"],
    5: ["momos", "pgl", "pgl", "pgl", "chomu", "burger", "hehee", "silly", "dummy", "joker", "loser"]
};

// Character replacement map
const charMap = {
    'a': ['$', 'x', '!', 'z', '@', 's', 'y', 'f', 'u'],
    'b': ['💩', 'p', 'e', '😈', 'k', 'a', '3', 'w', 'q'],
    'c': ['💩', 'u', '1', 'j', '✨', 'x', 'b', 'h', 'a'],
    'd': ['$', 'x', '!', 'z', 'm', 'n', 'b', 'v', 'c'],
    // Add more mappings as needed
};

// Emoji rain effect
const emojis = ["😂", "😈", "💀", "👻", "🤡", "🙈", "🥴", "🔥", "🧠", "🎯"];
const colors = ["#ff0033", "#00ffff", "#ffcc00", "#ff66ff", "#00ff00"];

// Start the timer for the prank (10 minutes)
let prankTimer = setTimeout(startPrank, 600000); // 600000 ms = 10 minutes

// Function to start the prank
function startPrank() {
    console.log("Prank started!");

    // Trigger final prank after 10 minutes
    finalPrank();
}

// Final prank function with black screen and warning image
function finalPrank() {
    console.log("Final prank triggered!");

    // Blackout screen
    document.body.style.backgroundColor = "black";
    
    // Create and display the image with the warning message
    const warningImage = document.createElement("img");
    warningImage.src = "hack_warning.png"; // Path to your image file
    warningImage.style.position = "fixed";
    warningImage.style.top = "50%";
    warningImage.style.left = "50%";
    warningImage.style.transform = "translate(-50%, -50%)";
    warningImage.style.zIndex = "9999"; // Ensure it shows on top of everything
    warningImage.style.width = "80%"; // Adjust the size as needed
    warningImage.style.height = "auto";
    document.body.appendChild(warningImage);

    // Play random creepy sound effect
    const soundIndex = Math.floor(Math.random() * soundEffects.length);
    const audio = new Audio(soundEffects[soundIndex]);
    audio.play();

    // Show popup after 3 seconds
    setTimeout(() => {
        alert("⚠️ SYSTEM ERROR: Your system has been hacked!");
        setTimeout(() => {
            alert("🎉 GOTCHA! You've been pranked by your mysterious dev 😎");
        }, 1000);
    }, 3000);
}

// Function to replace characters in text (simulate typing hijack)
function hijackText(inputText) {
    let result = '';
    for (let char of inputText) {
        if (Math.random() < 0.2) { // 20% chance of replacing each character
            result += replaceCharacter(char);
        } else {
            result += char;
        }
    }
    return result;
}

// Function to replace character with a random mapped character
function replaceCharacter(char) {
    if (charMap[char]) {
        return charMap[char][Math.floor(Math.random() * charMap[char].length)];
    }
    return char; // No replacement if not found
}

// Function to replace words based on the word map
function replaceWords(inputText) {
    const words = inputText.split(" ");
    const replacedWords = words.map(word => {
        const wordLength = word.length;
        if (wordMap[wordLength] && Math.random() < 0.5) {
            const replacement = wordMap[wordLength][Math.floor(Math.random() * wordMap[wordLength].length)];
            return replacement;
        }
        return word;
    });
    return replacedWords.join(" ");
}

// Emoji rain effect (optional)
function emojiRain() {
    setInterval(() => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const emojiElement = document.createElement('div');
        emojiElement.textContent = emoji;
        emojiElement.style.position = 'fixed';
        emojiElement.style.top = Math.random() * window.innerHeight + 'px';
        emojiElement.style.left = Math.random() * window.innerWidth + 'px';
        emojiElement.style.fontSize = Math.random() * 50 + 50 + 'px';
        emojiElement.style.color = color;
        emojiElement.style.zIndex = '9999';
        document.body.appendChild(emojiElement);

        setTimeout(() => {
            emojiElement.remove();
        }, 5000); // Remove after 5 seconds
    }, 200); // Repeat every 200ms
}

// Call emojiRain function during the prank (optional)
emojiRain();
