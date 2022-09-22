import React, { useState } from 'react';
import { Button, InputField } from '../../../Styles/Styles';
import './Moviefinder.css';
import List from './List';
import Alert from './Alert';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { themeState } from '../../../Features/themeSlice';

function Moviefinder() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    color: '',
  });
  const theme = useSelector(themeState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alerter(true, 'Please enter a movie name', 'red');
    } else {
      const url = `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_MOVIE_KEY}/${name}`;

      alerter(true, 'LOADING', '#ccff99');

      try {
        (async () => {
          const resp = await axios.get(url);
          setData(resp.data.results);
          setLoading(false);
          setName('');
        })();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const alerter = (show = false, message = '', color = '') => {
    setAlert({ show, message, color });
  };

  const removeAlert = () => {
    alerter(false, '', '');
  };

  return (
    <div
      className="moviefinder"
      style={{ backgroundColor: theme.backgroundColor }}>
      <div className="header">
        <h1>IMDB APP</h1>
      </div>
      <div className="searcher">
        <form onSubmit={handleSubmit}>
          <InputField
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
            data={data}
            message={alert.message}
            color={alert.color}
            removeAlert={removeAlert}
          />
        )}
      </div>
      {loading ? (
        <h1 className="loading">
          Search for a movie. <br />
          This app is mobile friendly!
        </h1>
      ) : (
        <List data={data} />
      )}
    </div>
  );
}

export default Moviefinder;
