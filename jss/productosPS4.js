(() => {
    const gamesData = {
        "PS4": [
            { "titulo": "The last of us 2", "precio": "11000", "img": "../utilities/juegosPS4/The Last of Us Part 2.jpg" },
            { "titulo": "Red Dead Redemption 2", "precio": "7000", "img": "../utilities/juegosPS4/RedDeadRedemption2.jpg" },
            { "titulo": "Uncharted 4", "precio": "6500", "img": "../utilities/juegosPS4/Uncharted4.jpg" },
            { "titulo": "God Of War", "precio": "8500", "img": "../utilities/juegosPS4/God of War.jpg" },
            { "titulo": "Elden Ring", "precio": "12500", "img": "../utilities/juegosPS4/Elden Ring.jpg" },
            { "titulo": "Bloodborne", "precio": "6900", "img": "../utilities/juegosPS4/Bloodborne.jpg" }
        ]
    };

    const $listado = document.getElementById('listado');
    const $filterInput = document.getElementById('game-filter');

    const renderizarGames = (games) => {
        $listado.innerHTML = ''; 
        const $fragmento = document.createDocumentFragment();

        games.forEach((game) => {
            const $card = document.createElement('div');
            $card.classList.add('games', 'bordes', 'bg-slate-300', 'p-8', 'text-center', 'space-y-10', 'mb-8');
            $card.innerHTML = `
                <img src="${game.img}" alt="${game.titulo}">
                <p class="roboto-medium">${game.titulo}</p>
                <p class="text-xl text-white bg-gray-900"><a href="#">Comprar - $${game.precio}</a></p>
            `;
            $fragmento.appendChild($card);
        });

        $listado.appendChild($fragmento);
    };

    
    renderizarGames(gamesData.PS4);

    
    $filterInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredGames = gamesData.PS4.filter(game =>
            game.titulo.toLowerCase().includes(searchText)
        );
        renderizarGames(filteredGames);
    });
})();