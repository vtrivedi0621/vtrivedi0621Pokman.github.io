import React from "react";
import { useState } from "react";
import axios  from "axios";

function App() {

  const[pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  }

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <div className="Title">
      <h1>Pokemon</h1>
      <input type='text' onChange={handleChange}/>
      <button onClick={searchPokemon}>Search</button>
      </div>
     
    </div>
  );
}

export default App;
