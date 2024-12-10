// Confetti Effect on Join Button
const joinBtn = document.getElementById('join-btn');
if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    });
}

// Random Fun Fact
const facts = [
    "The first Discord bot was created in 2015!",
    "The word 'emoji' comes from Japanese.",
    "Cats sleep 70% of their lives!",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance.'"
];
const factBtn = document.getElementById('fact-btn');
if (factBtn) {
    factBtn.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById('random-fact').textContent = randomFact;
    });
}

// Toggle Night Mode
const toggleModeBtn = document.getElementById('toggle-mode');
if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
        const isNightMode = document.body.classList.toggle('night-mode'); // Toggle the 'night-mode' class
        toggleModeBtn.textContent = isNightMode
            ? 'Switch to Day Mode' // Update button text for night mode
            : 'Switch to Night Mode'; // Update button text for day mode

        // Persist theme in localStorage
        localStorage.setItem('theme', isNightMode ? 'night' : 'day');
    });

    // Load persisted theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-mode');
        toggleModeBtn.textContent = 'Switch to Day Mode';
    }
}

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Particles.js Initialization
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ff5959" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 40, size_min: 0.1 }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            random: true,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    },
    retina_detect: true
});

// Countdown Timer
const countdownTimer = document.getElementById('countdown-timer');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        countdownTimer.textContent = 'The time has come!';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Joke Button
const jokeBtn = document.getElementById("joke-btn");
const jokeDisplay = document.getElementById("joke");
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

if (jokeBtn) {
    jokeBtn.addEventListener("click", () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeDisplay.textContent = randomJoke;
        setTimeout(() => jokeDisplay.textContent = "", 30000); // Clear after 30 seconds
    });
}

// Trivia Button
const triviaBtn = document.getElementById("trivia-btn");
const triviaDisplay = document.getElementById("trivia");
const trivia = [
    "Did you know? Honey never spoils.",
    "Fun fact: Octopuses have three hearts!",
    "Trivia: Bananas are berries, but strawberries aren't!"
];

if (triviaBtn) {
    triviaBtn.addEventListener("click", () => {
        const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];
        triviaDisplay.textContent = randomTrivia;
    });
}

// Simple Game Button
const gameBtn = document.getElementById("game-btn");
const gameResult = document.getElementById("game-result");

if (gameBtn) {
    gameBtn.addEventListener("click", () => {
        const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            gameResult.textContent = `It's a tie! You both chose ${userChoice}.`;
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            gameResult.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            gameResult.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    });
}
