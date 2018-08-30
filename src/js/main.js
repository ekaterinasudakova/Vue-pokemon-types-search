console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



const API_BASE = 'http://circuslabs.net/proxies/pokeapi.co/?';

var app = new Vue({
    el: '#app',
    data: {
      pokemonData: []
    },
    methods:{
        doPokeSearch: function(){
            axios
                .get(API_BASE + "type/" + 'fire')
                .then((response) => {
                    // handle success
                    console.log("pokeapi said: ", response.data);
                    let pokemonTypesArray = response.data.pokemon;
                    console.log("pokemonTypesArray: ", pokemonTypesArray);
                    let pokemonData=[];
                    //need help extracting pokemonData out of this forEach loop
                    //or should this loop be happening in a separate component?
                    pokemonTypesArray.forEach(pokemon => {
                        let pokemonData = pokemon.pokemon.name;
                        console.log('this is pokemonData: ', pokemonData)
                    });
                    console.log('pokemonData outside loop: ', pokemonData);
                })
                .catch((errors) => {
                    console.warn('something went wrong with pokeSearch!', errors);
                })
        }
    }

  })