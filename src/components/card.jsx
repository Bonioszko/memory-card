import React, { useState, useEffect } from "react";
import "../styles/card.css";
class Pokemon {
  constructor(link, nr, name) {
    this._link = link;
    this._nr = nr;
    this._name = name;
  }
  get link() {
    return this._link;
  }
  get nr() {
    return this._nr;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  set link(link) {
    this._link = link;
  }
  set nr(nr) {
    this._nr = nr;
  }
}

const getImgApi = async (id) => {
  const pokemon = new Pokemon("", "", "");
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites } = await res.json();
    const image = sprites["front_default"];
    pokemon.name = name;
    pokemon._link = image;
    pokemon.nr = id;
    return pokemon;
  } catch (err) {
    console.log(err);
    return null;
  }
};

function Card({ number, change, shufleCards, restart }) {
  const [pokemon, setPokemon] = useState(new Pokemon("", "", ""));
  const [clicked, setClicked] = useState(false);
  const [miss, setMiss] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getImgApi(number);
      if (result) {
        setPokemon(result);
      }
    };

    fetchData();
  }, [number]);
  const handleClick = () => {
    if (!clicked) {
      setClicked(!clicked);
      change();
      shufleCards();
    } else {
      restart();
    }
  };
  return (
    <div className={`card ${clicked ? "clicked" : ""}`} onClick={handleClick}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.link} alt="" />
    </div>
  );
}

export default Card;
