import React, { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Agra");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=277318090b8c68dbbe32fb5e8e3ce860`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="card">
        <div className="box">
          <div className="input-data">
            <input
              type="search"
              className="input-feild"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {!city || city.cod !== 200 ? (
            <p>No data found</p>
          ) : (
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.main.temp}°C</h1>
              <h3 className="tempmin-max">
                Min: {city.main.temp_min}°C | Max: {city.main.temp_max}°C
              </h3>
              <div className="weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                  alt={city.weather[0].description}
                />
              </div>
            </div>
          )}
        </div>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </div>
    </>
  );
};

export default TempApp;
