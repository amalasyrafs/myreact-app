import React, { useEffect, useState } from 'react';
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import keys from '../keys.js';

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const WeatherApp = () => {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState('New York');
  const [cuaca, setCuaca] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `${api.base}weather?q=${query}&units=metric&appid=${api.key}`,
      );
      const data = await response.json();
      console.log(data);
      setCuaca(data);
    };
    getWeather();
  }, [query]);

  // console.log(cuaca);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='body'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          type='text'
          className='search-bar'
          value={search}
          onChange={updateSearch}
          placeholder='Type your location here'
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      {typeof cuaca.main != 'undefined' ? (
        <div className='container'>
          <div className='row mt-5 col-12 col-md-6'>
            <h3>Welcome to the Weather Application</h3>
            <br />
            <p>Data is fetched from OpenWeatherMap.org</p>
          </div>
          <div className='row col-12 mt-3'>
            Today is {dateBuild(new Date())}.
          </div>
          <div className='row col-12 mt-2'>
            <h4>
              Your Location: {cuaca.name}, {cuaca.sys.country} (
              {cuaca.coord.lon}, {cuaca.coord.lat})
            </h4>
          </div>
          <div className='row col-12'>
            <div className='offset-3'>
              <Card className='mt-3 mb-5'>
                <CardImg
                  src='assets/images/sun-img.webp'
                  alt='Hot Weather'
                  id='img'
                />
                <CardHeader>
                  <CardTitle>
                    <h3>{cuaca.name}</h3>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <CardText>{cuaca.weather[0].main}</CardText>
                  <CardText>Temperature: {cuaca.main.temp}</CardText>
                  <CardText>
                    Feels Like: {cuaca.main.feels_like}
                  </CardText>
                  <CardText>Wind: {cuaca.wind.speed}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default WeatherApp;
