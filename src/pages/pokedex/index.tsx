import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IPokemonList } from "../../../interfaces/PokemonList";
import usePokeApi from "../../utils/hooks/usePokeApi";
import Pagination from "../../components/Pagination";
import useQueryParam from "../../utils/hooks/useQueryParam";

const POKEMON_PER_PAGE = 20;

function getPokeApiUrl(page: number) {
  const offset = (page - 1) * POKEMON_PER_PAGE;
  return `/pokemon?offset=${offset}&limit=${POKEMON_PER_PAGE}`;
}

export default function Pokedex() {
  const queryParams = useQueryParam();
  const navigate = useNavigate();
  const initialPage = Number(queryParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [url, setUrl] = useState(getPokeApiUrl(initialPage));
  const { data: pokemonList, loading, error } = usePokeApi<IPokemonList>(url);

  function onPageClick(page: number) {
    setCurrentPage(page);
    const newUrl = getPokeApiUrl(page);
    setUrl(newUrl);
    navigate({
      pathname: "/pokedex",
      search: `?page=${page}`,
    });
  }

  return (
    <div className="home">
      <h3>Pokedex</h3>

      <ul>
        {loading ? <p>Chargement de la liste...</p> : null}
        {error ? <p>Erreur lors du chargement de la liste...</p> : null}
        {pokemonList
          ? pokemonList.results.map((pokemon) => (
              <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))
          : null}
      </ul>
      {pokemonList && (
        <Pagination
          currentPage={currentPage}
          onPageClick={onPageClick}
          maxPage={pokemonList.count / POKEMON_PER_PAGE}
        />
      )}
    </div>
  );
}
