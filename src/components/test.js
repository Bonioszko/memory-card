class Pokemon {
  constructor(link, nr) {
    this._link = link;
    this._nr = nr;
  }
  get link() {
    return this._link;
  }
  get nr() {
    return this._nr;
  }
  set link(link) {
    this._link = link;
  }
  set nr(nr) {
    this._nr = nr;
  }
}

const getImgApi = async (id) => {
  const pokemon = new Pokemon("", "");
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { sprites } = await res.json();
    const image = sprites["front_default"];
    pokemon._link = image;
    pokemon.nr = id;
    return pokemon;
  } catch (err) {
    console.log(err);
    return null;
  }
};

getImgApi(2).then((result) => {
  console.log(result);
});
