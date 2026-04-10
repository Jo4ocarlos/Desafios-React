import Reasearcher from "./components/Researcher";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import "./App.css";

function App() {
  const [userSearched, setUserSearched] = useState("");
  const url = `https://api.github.com/users/${userSearched}`;
  const { user, fetchData } = useFetch(url);

  console.log(userSearched)
  return (
    <>
      <label>
        <input type="text" onChange={(e) => setUserSearched(e.target.value)} />
        <button onClick={fetchData}>buscar</button>
      </label>

      <Reasearcher user={user} />
    </>
  );
}

export default App;
