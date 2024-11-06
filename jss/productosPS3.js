(() => {
    const gamesData = {
        "PS3": [
            { "titulo": "Assassins Creed", "precio": "4000", "img": "../utilities/juegosPS3/Assassins Creed.jpg" },
            { "titulo": "Dark Souls", "precio": "5000", "img": "../utilities/juegosPS3/Dark_Souls.jpg" },
            { "titulo": "God Of War 3", "precio": "3500", "img": "../utilities/juegosPS3/GodOfWar.jpg" },
            { "titulo": "Uncharted 2", "precio": "2500", "img": "../utilities/juegosPS3/Uncharted2.jpg" },
            { "titulo": "Red Dead Redemption", "precio": "4500", "img": "../utilities/juegosPS3/Red Dead Redemption.jpg" },
            { "titulo": "The Last Of Us", "precio": "5500", "img": "../utilities/juegosPS3/The Last of Us.jpg" }
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

    // Corrected function call
    renderizarGames(gamesData.PS3);

    $filterInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredGames = gamesData.PS3.filter(game =>
            game.titulo.toLowerCase().includes(searchText)
        );
        renderizarGames(filteredGames); // Ensure this matches the function name
    });
})();