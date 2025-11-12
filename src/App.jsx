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
        <h1 className="text-center my-3">ATTORI E ATTRICI</h1>
        <div>
          {/* <button onClick={handleClick}> Carica Attori </button> */}
          <div className="content">
            <div className="row g-2 justify-content-center">
              {actors.map((actor) => (
                <div
                  key={actor.id}
                  class="card col-12 col-md-3 col-lg-2 mx-1 align-items-center"
                >
                  <img
                    src={actor.image}
                    className="img-fluid"
                    style={{
                      width: "150px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="col">
                    <div class="card-body">
                      <h5 class="card-title">{actor.name}</h5>
                      <p>{actor.biography}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{actor.birth_year}</li>
                      <li class="list-group-item">{actor.nationality}</li>
                      <li class="list-group-item">{actor.awards}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
