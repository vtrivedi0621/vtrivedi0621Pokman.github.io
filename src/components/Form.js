import React from 'react'
import { useState } from 'react';

function Form() {
    const[pokemonName, setPokemonName] = useState("");

    const handleChange = (event) => {
    setPokemonName(event.target.value);
    }
  return (
    <div className='form'>
        <h1>Pokemon</h1>
        <div className="Title">
        <form>
        <input type='text' onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
    </div>
    
  )
}

export default Form;