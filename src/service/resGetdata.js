// data keseluruhan dari API
export default async function resGetdata(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((Respon) => Respon.json())
      .then((data) => {
        resolve(data);
      });
  });
}

// data /pokemon
