// data /pokemon
export default async function getPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((Res) => Res.json())
        .then((dat) => {
          resolve(dat);
        });
    });
}