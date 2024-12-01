document.addEventListener('DOMContentLoaded', () => {
    const contractAddress = document.querySelector('.contract-address');
    
    if (contractAddress) {
        const updateTooltipPosition = (e, tooltip) => {
            const tooltipWidth = tooltip.offsetWidth;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            tooltip.style.left = `${mouseX - (tooltipWidth / 2)}px`;
            tooltip.style.top = `${mouseY - 30}px`;
        };

        contractAddress.addEventListener('mousemove', (e) => {
            const tooltip = document.querySelector('.contract-tooltip');
            if (tooltip) {
                updateTooltipPosition(e, tooltip);
            }
        });

        contractAddress.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'contract-tooltip';
            tooltip.textContent = 'Click to Copy';
            document.body.appendChild(tooltip);
        });

        contractAddress.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.contract-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });

        contractAddress.addEventListener('click', (e) => {
            const tooltip = document.querySelector('.contract-tooltip');
            navigator.clipboard.writeText(contractAddress.textContent.trim());
            
            if (tooltip) {
                tooltip.textContent = 'Copied';
                updateTooltipPosition(e, tooltip);
                
                setTimeout(() => {
                    if (tooltip && document.contains(tooltip)) {
                        tooltip.textContent = 'Click to Copy';
                        updateTooltipPosition(e, tooltip);
                    }
                }, 2000);
            }
        });
    }
});