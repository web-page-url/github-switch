
// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Find the button that was clicked
        const buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(btn => {
            if (btn.onclick.toString().includes(text)) {
                btn.classList.add('copied');
                btn.textContent = 'Copied!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.textContent = 'Copy';
                }, 2000);
            }
        });
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
    });
}

// Add some interactive cyber effects
document.addEventListener('DOMContentLoaded', function() {
    // Add glow effect on hover for command blocks
    const commandBlocks = document.querySelectorAll('.command-block');
    commandBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
        });
        block.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add click effect for account cards
    const accountCards = document.querySelectorAll('.account-card');
    accountCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
