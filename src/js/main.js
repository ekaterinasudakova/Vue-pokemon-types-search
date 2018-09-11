console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)



const API_BASE = 'http://circuslabs.net/proxies/pokeapi.co/?';

var app = new Vue({
    el: '#app',
    data: {
      pokemonData: [],
      keyword: "dark"
    },
    created: function() {
        this.doPokeSearch()
    },
    watch: {
        hashtag: function(){
            this.doPokeSearch()
        }
        
    },
    methods:{
        doPokeSearch: function(keyword){
            axios
                .get(API_BASE + "type/" + this.keyword)
                .then((response) => {
                    // handle success
                    console.log("pokeapi said: ", response.data.pokemon);
                    this.pokemonData = response.data.pokemon;
                    // console.log("pokemonOfTypeArray: ", pokemonOfTypeArray);
                    // this.pokemonData=[];
                    //need help extracting pokemonData out of this forEach loop
                    //or should this loop be happening in a separate component?
                    for (var p in this.pokemonData) {
                        let pokemon = this.pokemonData[p];
                        
                        if (p > 10) {
                            return;
                        }
                        console.log('this is pokemonData: ', pokemon.pokemon)
                        // axios call to fetch that pokemon
                        axios
                            .get(pokemon.pokemon.url)
                            .then((response) => {
                                console.log('second axios get response: ', response)
                                Vue.set(pokemon.pokemon, "expanded", response.data)
                                console.log('this is new pokemonData: ', pokemon.pokemon)
                            })
                            .catch((err) => {
                                console.warn(err)
                            })
                    };

                })
                .catch((errors) => {
                    console.warn('something went wrong with pokeSearch!', errors);
                })
        }
    }

  })