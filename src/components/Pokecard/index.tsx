import { Link } from "react-router-dom";
import cx from "classnames";
import { IPokemonDetail } from "../../../interfaces/PokemonDetail";
import { IPokemonList } from "../../../interfaces/PokemonList";


interface PokeCard {
  name: string;
  id: number;
  types: string;
  content: string;
  link: string;

}

export default function Button({ name, id, types, content, link }: PokeCard) {
  return <Link to={link} className={cx("pokecard", id)}>{content}</Link>;
}
