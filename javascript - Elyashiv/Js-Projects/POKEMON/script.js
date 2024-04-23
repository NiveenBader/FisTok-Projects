document.addEventListener("DOMContentLoaded", function () {
    const pokemonCards = document.getElementById("pokemon-cards");

    function fetchAllPokemon(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pokemonList = data.results;
                pokemonList.forEach(pokemon => {
                    fetchPokemonDetails(pokemon.url);
                });
                if (data.next) {
                    fetchAllPokemon(data.next);
                }
            })
            .catch(error => {
                console.log("Error fetching data:", error);
                pokemonCards.innerHTML = "<p>Error fetching data. Please try again later.</p>";
            });
    }

    fetchAllPokemon("https://pokeapi.co/api/v2/pokemon/");

    function fetchPokemonDetails(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
                const types = data.types.map(type => type.type.name).join(', ');

                const pokemonCard = document.createElement("div");
                pokemonCard.classList.add("pokemon-card");
                pokemonCard.innerHTML = `
          <h2>${data.name}</h2>
          <p><strong>Height:</strong> ${data.height}</p>
          <p><strong>Weight:</strong> ${data.weight}</p>
          <p><strong>Abilities:</strong> ${abilities}</p>
          <p><strong>Types:</strong> ${types}</p>
          <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
                pokemonCards.appendChild(pokemonCard);
            })
            .catch(error => {
                console.log("Error fetching Pokemon details:", error);
            });
    }
});
