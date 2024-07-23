document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        // Funzione per applicare l'effetto luminoso
        const applyLightEffect = () => {
            block.style.transform = 'scale(1.1)';
            block.style.filter = 'brightness(1.4)'; // Maggiore luminosità
            block.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Effetto di luce
        };

        // Funzione per rimuovere l'effetto luminoso
        const removeLightEffect = () => {
            block.style.transform = 'scale(1)';
            block.style.filter = 'brightness(1)'; // Luminosità normale
            block.style.boxShadow = 'none'; // Rimuove l'effetto di luce
        };

        // Aggiungi gli eventi di mouse enter e mouse leave
        block.addEventListener('mouseenter', applyLightEffect);
        block.addEventListener('mouseleave', removeLightEffect);
    });
});
