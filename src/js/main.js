console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



const API_BASE = 'http://circuslabs.net/proxies/pokeapi.co/?';

var app = new Vue({
    el: '#app',
    data: {
      pokemonData: []
    },
    created: function() {
        this.doPokeSearch()
    },
    methods:{
        doPokeSearch: function(){
            axios
                .get(API_BASE + "type/" + 'fire')
                .then((response) => {
                    // handle success
                    console.log("pokeapi said: ", response.data);
                    this.pokemonData = response.data;
                    // console.log("pokemonOfTypeArray: ", pokemonOfTypeArray);
                    // this.pokemonData=[];
                    //need help extracting pokemonData out of this forEach loop
                    //or should this loop be happening in a separate component?
                    for (var p in this.pokemonData.pokemon) {
                        let pokemon = this.pokemonData.pokemon[p];
                        
                        if (p > 10) {
                            return;
                        }
                        console.log('this is pokemonData: ', pokemon.pokemon)
                        // axios call to fetch that pokemon
                        axios
                            .get(pokemon.pokemon.url)
                            .then((response) => {
                                console.log(response)
                                Vue.set(pokemon.pokemon, "expanded", response.data)
                                console.log('this is pokemonData: ', pokemon.pokemon)
                            })
                            .catch((err) => {
                                console.warn(err)
                            })
                    };
                    console.log('pokemonData outside loop: ', pokemonData);
                })
                .catch((errors) => {
                    console.warn('something went wrong with pokeSearch!', errors);
                })
        }
    }

  })