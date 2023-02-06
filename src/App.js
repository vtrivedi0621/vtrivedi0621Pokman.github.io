import React from "react";
import { useState } from "react";
import axios  from "axios";

function App() {

  const[pokemonName, setPokemonName] = useState("");
  const[pokemonChosen, setPokemonChosen] = useState(false);
  const[pokemon,setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type : "",
});

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  }

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
      // console.log(response);
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defence: response.data.stats[2].base_stat,
        type : response.data.types[0].type.name,
      });
      setPokemonChosen(true);
    });
  }

  return (
    <div className="App">
      <div className="Title">
      <h1>Pokemon</h1>
      <input type='text' onChange={handleChange}/>
      <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
        <h1>Please choose a Pokemon</h1>) : (
          <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} alt="pokemen"/>
          <h3>Species:{pokemon.species}</h3>
          <h3>Type:{pokemon.type}</h3>
          <h4>Hp: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defence: {pokemon.defence}</h4>
          </>
        )} 
      </div>
     
    </div>
  );
}

export default App;
