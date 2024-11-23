document.addEventListener('DOMContentLoaded', () => {
    const supplyBox = document.querySelector('.supply-animation');
    if (!supplyBox) return;

    const supplyText = supplyBox.querySelector('.supply-text');
    if (!supplyText) return;

    function generateNumberSequence() {
        const sequences = [];

        // Space to comma (32 to 44)
        for(let i = 32; i <= 44; i++) {
            sequences.push('1' + String.fromCharCode(i) + 'Million');
        }

        // M to 0 (77 to 48)
        for(let i = 77; i >= 48; i--) {
            sequences.push('1,' + String.fromCharCode(i) + 'illion');
        }

        // First i to 0 (105 to 48)
        for(let i = 105; i >= 48; i--) {
            sequences.push('1,0' + String.fromCharCode(i) + 'llion');
        }

        // First l to 0 (108 to 48)
        for(let i = 108; i >= 48; i--) {
            sequences.push('1,00' + String.fromCharCode(i) + 'lion');
        }

        // Second l to comma (108 to 44)
        for(let i = 108; i >= 44; i--) {
            sequences.push('1,000' + String.fromCharCode(i) + 'ion');
        }

        // i to 0 (105 to 48)
        for(let i = 105; i >= 48; i--) {
            sequences.push('1,000,' + String.fromCharCode(i) + 'on');
        }

        // o to 0 (111 to 48)
        for(let i = 111; i >= 48; i--) {
            sequences.push('1,000,0' + String.fromCharCode(i) + 'n');
        }

        // n to 0 (110 to 48)
        for(let i = 110; i >= 48; i--) {
            sequences.push('1,000,00' + String.fromCharCode(i));
        }

        sequences.push('1,000,000');
        return sequences;
    }

    const numberSequence = generateNumberSequence();
    const textStages = ['1 Million', ...numberSequence];
    let currentIndex = 0;
    let animationInterval;

    supplyBox.addEventListener('mouseenter', () => {
        supplyText.classList.add('transforming');
        animationInterval = setInterval(() => {
            if (currentIndex < textStages.length - 1) {
                currentIndex++;
                supplyText.textContent = textStages[currentIndex];
            } else {
                clearInterval(animationInterval);
            }
        }, 1);
    });

    supplyBox.addEventListener('mouseleave', () => {
        clearInterval(animationInterval);

        const reverseAnimation = setInterval(() => {
            if (currentIndex <= 2) {
                clearInterval(reverseAnimation);
                supplyText.classList.remove('transforming');
                if (currentIndex !== 0) {
                    currentIndex = 0;
                    supplyText.textContent = textStages[0];
                }
                return;
            }
            currentIndex--;
            supplyText.textContent = textStages[currentIndex];
        }, 1);
    });
});
