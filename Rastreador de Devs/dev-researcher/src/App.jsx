//components
import Reasearcher from "./components/Researcher";

//hooks
import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";

//styles
import "./App.css";

function App() {
  const [userSearched, setUserSearched] = useState("");
  const url = `https://api.github.com/users/${userSearched}`;
  const { user, fetchData, loading, error } = useFetch(url);

  return (
    <>
      <label>
        <input type="text" onChange={(e) => setUserSearched(e.target.value)} />
        <button onClick={fetchData}>buscar</button>
      </label>

      <Reasearcher user={user} loading={loading} error={error} />
    </>
  );
}

export default App;
