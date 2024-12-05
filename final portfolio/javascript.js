document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".text span");
    const phrases = ["a Developer", "a Cursed Sorcerer", "a Problem Solver"];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            typingText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            if (currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
            }
        } else {
            typingText.textContent = phrases[currentPhrase].substring(0, currentChar + 1);
            currentChar++;
            if (currentChar === phrases[currentPhrase].length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause at the end of a phrase
                return;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});
