import { useNavigate, useParams } from "react-router";
import usePokeApi from "../../utils/hooks/usePokeApi";
import { convertDmtoM, convertHgtoKg } from "../../utils/converter";
import { IPokemonDetail } from "../../../interfaces/PokemonDetail";

export default function PokemonDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = usePokeApi<IPokemonDetail>(
    `/pokemon/${params.name}`
  );

  return (
    <div className="pokemon-details">
      <button onClick={() => navigate(-1)}>Retour au Pokedex</button>
      {loading ? <p>Chargement du pokemon...</p> : null}
      {error ? <p>Erreur lors du chargement du pokemon...</p> : null}
      {data ? (
        <div>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>{data.name}</p>
          <p>Taille : {convertDmtoM(data.height)}m</p>
          <p>Poids : {convertHgtoKg(data.weight)}kg</p>
        </div>
      ) : null}
    </div>
  );
}
