import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [actors, setActors] = useState([]);
  const male_actend = "https://lanciweb.github.io/demo/api/actors/";

  function handleClick() {
    axios
      .get(male_actend)
      .then((res) => {
        console.log(res);

        setActors(res.data);
      })

      .catch((err) => {
        console.error(err.message);
      });
  }
  useEffect(handleClick, []);

  return (
    <>
      <div>
        <h1>ATTORI E ATTRICI</h1>
        <div>
          <button onClick={handleClick}> Carica Attori </button>
          <ul>
            {actors.map((actor) => (
              <li key={actor.id}>
                <li>
                  {actor.name} {actor.birth_year}
                </li>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
