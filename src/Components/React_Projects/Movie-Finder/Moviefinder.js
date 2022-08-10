import React, { useState } from "react";
import { Button, InputField } from "../../../Styles/Styles";
import "./Moviefinder.css";
import List from "./List";
import Alert from "./Alert";
import axios from "axios";

function Moviefinder() {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    color: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alerter(true, 'Please enter a movie name', 'red')
    } 
    
    else {
      const url = `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_MOVIE_KEY}/${name}`;
      
      alerter(true, 'LOADING', '#95CD41')

      axios.get(url)
        .then(resp => {
          const results = resp.data.results
          setData(results)
          setName('')
        })
        .catch(err => {
          console.log(err)
        })
    }
  };

  const alerter = (show = false, message = "", color = "") => {
    setAlert({ show, message, color });
  };

  const removeAlert = () => {
    alerter(false, "", "");
  };

  return (
    <div className="moviefinder">
      <div className="header">
        <h1>IMDB APP</h1>
      </div>
      <div className="searcher">
        <form onSubmit={handleSubmit}>
          <InputField
            color="#DA0037"
            width="20em"
            placeholder="Enter a keyword or name of the movie"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
          />
          <Button color="#DA0037">Search</Button>
        </form>
      </div>

      <div className="alertbox">
        {alert.show && (
          <Alert
            message={alert.message}
            color={alert.color}
            removeAlert={removeAlert}
          />
        )}
      </div>

      <List data={data} />

    </div>
  );
}

export default Moviefinder;
