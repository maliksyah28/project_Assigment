// data keseluruhan dari API
export async function resGetdata(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((Respon) => Respon.json())
      .then((data) => {
        resolve(data);
      });
  });
}

// data /pokemon
export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((Res) => Res.json())
      .then((dat) => {
        resolve(dat);
      });
  });
}
