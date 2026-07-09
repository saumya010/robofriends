import { useEffect, useState } from "react";
import { apiCall } from "../api/api.js";

import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    apiCall("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setRobots(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="page">
      <div className="backdrop" />
      <header className="header">
        <h1 className="title">RoboFriends</h1>
        <p className="subtitle">Search a directory of robot friends</p>
        <SearchBox searchField={searchField} searchChange={(e) => setSearchField(e.target.value)} />
      </header>

      {isPending && <p className="status-text">Loading robots...</p>}
      {error && <p className="status-text error">Couldn't load robots. Please try again.</p>}
      {!isPending && !error && filteredRobots.length === 0 && (
        <p className="status-text">No robots match "{searchField}"</p>
      )}
      {!isPending && !error && filteredRobots.length > 0 && (
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      )}
    </div>
  );
};

export default App;
