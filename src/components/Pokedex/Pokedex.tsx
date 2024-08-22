import React from 'react';
import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import PokeList from '../PokeList/PokeList';
import { PokemonSchema } from '../../types/PokemonSchems';

interface PokedexProps {
  searchPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onInputChange: (inputValue: string) => void;
  onPokemonClick: (pokemonName: string) => void;
}
const Pokedex = ({searchPokemons, onInputChange, onPokemonClick, selectedPokemon}: PokedexProps) => {
  return (
    <div className='pokedex-container'>
        <div className='pokelist-container'>
            <SearchBox onInputChange={onInputChange} />
            <PokeList searchPokemons = {searchPokemons} onPokemonClick={onPokemonClick} />
        </div>
        <div className='pokesearchresult-container'>
          <PokeSearchResult selectedPokemon={selectedPokemon} />
        </div>
       
    </div>
  )
}

export default Pokedex
