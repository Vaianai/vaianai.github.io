document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const overlay = document.querySelector('.overlay');
    const popupContainer = document.querySelector('.popup-container');
    const popupLeftImg = document.querySelector('.popup-left img');
    const popupRightTitle = document.querySelector('.popup-right h3');
    const popupLinks = document.querySelectorAll('.popup-link');
    const closeBtn = document.querySelector('.close-btn');

    gridItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Cambia il colore solo se non è stato cliccato il testo
            if (!event.target.classList.contains('monster-name')) {
                item.classList.toggle('selected');
            }
        });

        const monsterName = item.querySelector('.monster-name');
        if (monsterName) {
            monsterName.addEventListener('click', function(event) {
                // Impedisce la propagazione del click al contenitore
                event.stopPropagation();
                console.log('Text clicked'); // Debugging line

                const name = item.getAttribute('data-name');
                const image = item.getAttribute('data-image');
                const googleLink = item.getAttribute('data-google');
                const amazonLink = item.getAttribute('data-amazon');

                // Debugging lines
                console.log('Name:', name);
                console.log('Image:', image);
                console.log('Google Link:', googleLink);
                console.log('Amazon Link:', amazonLink);

                // Popola il contenuto del popup
                popupLeftImg.src = image;
                popupRightTitle.textContent = name;
                popupLinks[0].href = `https://www.google.com/search?q=${googleLink}`;
                popupLinks[1].href = `https://www.amazon.com/s?k=${amazonLink}`;

                // Mostra il popup e l'overlay
                overlay.style.display = 'block';
                popupContainer.style.display = 'block';
            });
        }
    });

    overlay.addEventListener('click', function() {
        // Nasconde il popup e l'overlay quando si clicca sull'overlay
        overlay.style.display = 'none';
        popupContainer.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        // Nasconde il popup e l'overlay quando si clicca sul pulsante di chiusura
        overlay.style.display = 'none';
        popupContainer.style.display = 'none';
    });
});
