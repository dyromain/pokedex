import { Link, useNavigate } from 'react-router-dom';
import { IPokemonList } from "../../interfaces/PokemonList"
import usePokeApi from '../utils/hooks/usePokeApi';
import Pagination from '../components/Pagination';
import { useState } from 'react';
import useQueryParam from '../utils/hooks/useQueryParam';
import styles from "../home.module.scss";
import Button from '../components/button';


const POKEMON_PER_PAGE = 20;

function getPokeApiUrl(page: number) {
  const offset = (page -1) * POKEMON_PER_PAGE;
  return '/pokemon?offset=${offset}&limit=${POKEMON_PER_PAGE}';
}

export default function HomePage() {
const queryParams = useQueryParam();
const navigate = useNavigate();
let initialPage = Number(queryParams.get('page')) || 1;

const [currentPage, setCurrentPage] = useState(initialPage);
const [url, setUrl] = useState(getPokeApiUrl(initialPage));
const { data: pokemonList, loading, error } = usePokeApi<IPokemonList>(url);

  function onPageClick(page: number) {
    setCurrentPage(page);
    const newUrl = getPokeApiUrl(page);
    setUrl(newUrl);
    navigate({
      pathname: '/',
      search: '?page=${page}',
    });
  }

  return (
    <div className={styles.home}>
      <h3>What Pokemon are you looking for ?</h3>

      <Button color="green" content="pokedex" link="/pokedex"/>
      <Button color="red" content="moves" link="#"/>
      <Button color="lightblue" content="abilities" link="#"/>
      <Button color="yellow" content="items" link="#"/>
      <Button color="purple" content="locations" link="#"/>
      <Button color="brown" content="type-charts" link="#"/>
      
    </div>
  );
}

