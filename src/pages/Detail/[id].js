import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import resGetDP from "../../service/resGetDP";

function DetailProduct() {
  const [tampilanPokemon, setTampilanPokemon] = useState("");
  const params = useParams();

  const initUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;

  useEffect(() => {
    async function detailPokemon() {
      let dataDP = await resGetDP(initUrl);
      // console.log({ nama: dataDP }); pengen dimunculin
    }
    detailPokemon();
  }, []);
}

export default DetailProduct;
