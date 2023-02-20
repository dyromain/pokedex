import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import usePokeApi from '../../utils/hooks/usePokeApi';
import { convertDmtoM, convertHgtoKg } from '../../utils/converter';
import { IPokemonDetail } from "/../../../interfaces/PokemonDetail";


const searchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const pokemonresults = [

  { name: "", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },

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
    <th>Continent</th>
  </tr>

{pokemonresults.map((pokemonresult, *index*) => {

<div>
  <tr>
    <td>{pokemonresult.name}</td>
    <td>{pokemonresult.continent}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default searchBar;