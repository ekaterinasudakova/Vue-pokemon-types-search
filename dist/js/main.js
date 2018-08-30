'use strict';

console.log('Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you\'re working in the right files.');

var API_BASE = 'http://circuslabs.net/proxies/pokeapi.co/?';

var app = new Vue({
    el: '#app',
    data: {
        pokemonData: []
    },
    methods: {
        doPokeSearch: function doPokeSearch() {
            axios.get(API_BASE + "type/" + 'fire').then(function (response) {
                // handle success
                console.log("pokeapi said: ", response.data);
                var pokemonTypesArray = response.data.pokemon;
                console.log("pokemonTypesArray: ", pokemonTypesArray);
                var pokemonData = [];
                //need help extracting pokemonData out of this forEach loop
                //or should this loop be happening in a separate component?
                pokemonTypesArray.forEach(function (pokemon) {
                    var pokemonData = pokemon.pokemon.name;
                    console.log('this is pokemonData: ', pokemonData);
                });
                console.log('pokemonData outside loop: ', pokemonData);
            }).catch(function (errors) {
                console.warn('something went wrong with pokeSearch!', errors);
            });
        }
    }

});
//# sourceMappingURL=main.js.map
