import Button from "../components/Button"

export default function HomePage() {
  return (
    <div className="home">
      <h3>What Pokemon are you looking for ?</h3>

      <div className="column">
        <div className="row">
          <Button color="green" content="Pokedex" link="/pokedex" />
          <Button color="red" content="moves" link="#" />
        </div>

        <div className="row">
          <Button color="lightblue" content="abilities" link="#" />
          <Button color="yellow" content="items" link="#" />
        </div>

        <div className="row">
          <Button color="purple" content="locations" link="#" />
          <Button color="brown" content="type-charts" link="#" />
        </div>
      </div>
    </div>
  );
}
