const button = document.getElementById('confettiButton');

button.addEventListener('click', () => {
    createConfetti();
});

function createConfetti() {
    // Get the button's position and dimensions
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomize the direction of the confetti (splatter effect)
        const angle = Math.random() * 360; // Random angle for spreading out
        const distance = Math.random() * 200 + 100; // Random distance from the center

        const x = distance * Math.cos(angle * Math.PI / 180);
        const y = distance * Math.sin(angle * Math.PI / 180);

        // Random rotation
        const rotation = Math.random() * 360;

        // Apply the random values as CSS custom properties
        confetti.style.setProperty('--x', `${x}px`);
        confetti.style.setProperty('--y', `${y}px`);
        confetti.style.setProperty('--rotate', `${rotation}deg`);

        // Apply the starting position of the confetti (from the button center)
        confetti.style.left = `${buttonCenterX}px`;
        confetti.style.top = `${buttonCenterY}px`;

        // Randomize color
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000); // Duration matches the animation time
    }
}
