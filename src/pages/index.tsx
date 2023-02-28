import Button from "../components/Button"


export default function HomePage() {
  return (
    
    <div className="home">
      <div className="bg-image"></div>  
      <h3>What Pokemon<br/>are you looking for?</h3>

      <div className="column">
        <div className="row">
          <Button color="green" content="Pokedex" link="/pokedex"/>        
          <Button color="red" content="Moves" link="#" />
        </div>

        <div className="row">
          <Button color="lightblue" content="Abilities" link="#" />
          <Button color="yellow" content="Items" link="#" />
        </div>

        <div className="row">
          <Button color="purple" content="Locations" link="#" />
          <Button color="brown" content="Type Charts" link="#" />
        </div>
  
      </div>

      <div className="news">
        <div className="title-news">
          <h4>Pokémon News</h4>
          <a href="/pokedex">View all</a>
        </div>

        <div className="column-news">
            <div className="row-title">
              <p className="title-news2">Pokémon Rumble Rush Arrives Soon</p>
              <p className="date-news">15 May 2019</p>
            </div>  
            <div className="image-news"><img></img></div>     
          
        </div>
    </div>
  </div>
  );
}
