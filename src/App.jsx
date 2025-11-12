import { useState, useEffect } from "react";

function App() {
  const [actor, setActors] = useState([]);
  const [actress, setActress] = useState([]);
  const male_actend = "https://lanciweb.github.io/demo/api/actors/";
  const female_actend = "https://lanciweb.github.io/demo/api/actresses/";

  return (
    <>
      <div>
        <h1>ATTORI E ATTRICI</h1>
        <div>
          <ul>{}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
