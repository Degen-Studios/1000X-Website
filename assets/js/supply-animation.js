document.addEventListener('DOMContentLoaded', () => {
    const supplyBox = document.querySelector('.supply-animation');
    if (!supplyBox) return;

    const supplyText = supplyBox.querySelector('.supply-text');
    if (!supplyText) return;

    function generateNumberSequence() {
        const sequences = [];

        // First 1 stays the same
        // Comma to space (44 to 32)
        for(let i = 44; i >= 32; i--) {
            sequences.push('1' + String.fromCharCode(i) + '000,000');
        }

        // 0 to M (48 to 77)
        for(let i = 48; i <= 77; i++) {
            sequences.push('1 ' + String.fromCharCode(i) + '000,000');
        }

        // First 0 to i (48 to 105)
        for(let i = 48; i <= 105; i++) {
            sequences.push('1 M' + String.fromCharCode(i) + '00,000');
        }

        // Second 0 to l (48 to 108)
        for(let i = 48; i <= 108; i++) {
            sequences.push('1 Mi' + String.fromCharCode(i) + '0,000');
        }

        // Third 0 to l (48 to 108)
        for(let i = 48; i <= 108; i++) {
            sequences.push('1 Mil' + String.fromCharCode(i) + ',000');
        }

        // Fourth 0 to i (48 to 105)
        for(let i = 48; i <= 105; i++) {
            sequences.push('1 Mill' + String.fromCharCode(i) + '000');
        }

        // Fifth 0 to o (48 to 111)
        for(let i = 48; i <= 111; i++) {
            sequences.push('1 Milli' + String.fromCharCode(i) + '00');
        }

        // Last 00 to n (48 to 110)
        for(let i = 48; i <= 110; i++) {
            sequences.push('1 Millio' + String.fromCharCode(i));
        }

        return sequences;
    }


    const numberSequence = generateNumberSequence();
    const textStages = ['1,000,000', ...numberSequence];
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
        }, .1);
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
        }, .1);
    });
});
