(() => {
    const gamesData = {
        "PC": [
            { "titulo": "Counter Strike 2", "precio": "4500", "img": "../utilities/juegosPC/Counter-Strike2.jpg" },
            { "titulo": "Half Life 2", "precio": "3400", "img": "../utilities/juegosPC/HalfLife.jpg" },
            { "titulo": "Halo", "precio": "3500", "img": "../utilities/juegosPC/Halo_ CE Anniversary (PC).jpg" },
            { "titulo": "Hollow Knight", "precio": "1500", "img": "../utilities/juegosPC/HollowKnight.jpg" },
            { "titulo": "Left 4 Dead 2", "precio": "2500", "img": "../utilities/juegosPC/Left4Dead2.jpg" },
            { "titulo": "Portal 2", "precio": "2600", "img": "../utilities/juegosPC/Portal2.jpg" }
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

    // Initial rendering of games
    renderizarGames(gamesData.PC);

    // Filter functionality
    $filterInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredGames = gamesData.PC.filter(game =>
            game.titulo.toLowerCase().includes(searchText)
        );
        renderizarGames(filteredGames);
    });
})();