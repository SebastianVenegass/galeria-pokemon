import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonGallery = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonIds = [1, 4, 7, 25, 39, 52];
      const promises = pokemonIds.map(id =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      );
      const results = await Promise.all(promises);
      setPokemons(results.map(result => result.data));
    };

    fetchPokemons();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {pokemons.map(pokemon => (
        <div key={pokemon.id} style={{ margin: '10px', textAlign: 'center', border: '1px solid gray', fontSize: '50px', borderRadius: '50px', boxShadow: '0px 0px 10px gray' }}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonGallery;
