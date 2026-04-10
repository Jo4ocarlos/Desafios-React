//components
import Reasearcher from "./components/Researcher";

//hooks
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

//styles
import "./App.css";

function App() {
  const [userSearched, setUserSearched] = useState("");
  const url = `https://api.github.com/users/${userSearched}`;
  const { user, fetchData } = useFetch(url);

 
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
