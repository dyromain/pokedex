import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import usePokeApi from '../../utils/hooks/usePokeApi';
import { convertDmtoM, convertHgtoKg } from '../../utils/converter';
import { IPokemonDetail } from "/../../../interfaces/PokemonDetail";


const searchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const pokemonresults = [

  { name: "", move: "", ability:"" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    pokemonresults.filter((pokemonresult) => {
    return pokemonresult.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>Country</th>
    <th>Move</th>
    <th>Ability</th>
  </tr>

{pokemonresults.map((pokemonresult, *index*) => {

<div>
  <tr>
    <td>{pokemonresult.name}</td>
    <td>{pokemonresult.move}</td>
    <td>{pokemonresult.ability}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default searchBar;