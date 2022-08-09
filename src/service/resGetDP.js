export default async function resGetDP(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((Res) => Res.json())

      .then((dat) => {
        resolve(dat);
      });
    // console.log(resolve);
  });
}
