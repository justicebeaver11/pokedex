import React from 'react';
import './PokeList.css';
import Pokecard from '../Pokecard/Pokecard';
import { PokemonSchema } from '../../types/PokemonSchems';

interface PokeListProps {
    searchPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}

const PokeList = ({searchPokemons, onPokemonClick}: PokeListProps) => {
  return (
    <div className='pokelist'>
       {
        searchPokemons.map((pokemon) => {
           return (
            pokemon.name && (
            <Pokecard
            onPokemonClick = {onPokemonClick}
            key={pokemon.id}
            name={pokemon.name}
            spriteUrl={pokemon.sprites.normal} />
            )
           )
        })
       } 
    </div>
  );
};

export default PokeList
