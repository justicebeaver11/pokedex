import React from 'react';
import './PokeSearchResult.css';
import { PokemonSchema } from '../../types/PokemonSchems';

interface PokeSearchResultProps{
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon}: PokeSearchResultProps) => {
    const {name, id, height, weight, base_experience , sprites } = selectedPokemon || {};
  return (
    <div className='poke-result-card'>
        {
            selectedPokemon
            ?(
                <div>
                    <img className='pokemon-animation' src={sprites?.animated || sprites?.normal } alt='pokemon' />
                    <p>Name: {name}</p>
                    <p>Id: {id}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Base Exp: {base_experience}</p>
                    
                    </div>

            )
            : (
                <h2>Welcome to the Pokedex</h2>
            )
        }
      
    </div>
  )
}

export default PokeSearchResult
