import React from 'react';
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { pokemonData } from '../../data/pokeData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchems';

interface AppState {
    searchFeild: string;
    allPokemons: PokemonSchema[];
    searchPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}
class App extends React.Component<any, AppState>  {
    state = {
        searchFeild: "",
        allPokemons: [],
        searchPokemons: [],
        selectedPokemon: undefined
    };
    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    };
    componentDidMount(){
          
          const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

    

    
        this.setState({
            allPokemons: patchedPokemons,
            searchPokemons: patchedPokemons,
        });
    }

    
  handleInputChange = (inputValue: string) => {
    const { allPokemons } = this.state;
    const searchPokemons = allPokemons.filter(
        (pokemon: PokemonSchema) => {
            return(
                pokemon.name &&
                pokemon.name
                .toLowerCase()
                .includes(inputValue.toLowerCase())
            );
        }
);

this.setState({
    searchFeild: inputValue,
    searchPokemons: searchPokemons
});
  };


  handleClick = (pokemonName: string) => {
    const { allPokemons} = this.state;

    const selectedPokemon = allPokemons.find(
        (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );
    this.setState({selectedPokemon});
  } 

             
render() {
  return <div className='App'>
    <h1>Pokedex</h1>
    <Pokedex
    searchPokemons={this.state.searchPokemons}
    onInputChange = {this.handleInputChange}
    selectedPokemon = {this.state.selectedPokemon}
    onPokemonClick = {this.handleClick}
    
    />
    </div>
}
}

export default App;

