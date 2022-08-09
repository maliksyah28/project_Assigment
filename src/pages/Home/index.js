import { ChakraProvider, Flex } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import resGetdata from "../../service/resGetdata";
import getPokemon from "../../service/getPokemon";
import Card from "../../components/card";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);

  const initUrl = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    // buat nge GET data keseluruhan
    async function getData() {
      let dataAPI = await resGetdata(initUrl);
      // console.log(dataAPI);
      setNextPage(dataAPI.next);
      setPrevPage(dataAPI.previous);
      await loadPokemon(dataAPI.results);
      // console.log(onePokeData);
      setLoading(false);
    }
    getData();
  }, []);

  // nge get data /pokemon
  const loadPokemon = async (data) => {
    let _pokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRec = await getPokemon(pokemon.url);
        // console.log(pokemonRec);
        return pokemonRec;
      })
    );
    // console.log(_pokemon);
    setPokemonData(_pokemon);
  };

  // console.log(pokemonData);
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Flex wrap={"wrap"} margin={30}>
            {pokemonData.map((pokemon, i) => {
              //   console.log(pokemon);
              return <Card key={i} pokemon={pokemon} />;
            })}
          </Flex>
        </>
      )}
    </div>
  );
}

export default Home;
