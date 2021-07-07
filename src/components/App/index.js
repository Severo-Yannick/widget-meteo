import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import api from '../../api';
import './styles.scss';

const App = ({ city }) => {
  const [temp, setTemp] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);

  useEffect(() => {
    api.get('/weather', {
      params: {
        q: city,
      }
    }).then((result) => {
      if (result?.data?.main?.temp){
        setTemp(result.data.main.temp)
      }
      if (result?.data?.weather?.[0]?.icon){
        setWeatherCode(result.data.weather[0].icon)
      }
    }).catch((error) => {
      if (error?.response?.data?.message){
        alert(error.response.data.message);
      }
      else {
        alert(error.message);
      }
    })
  }, [city]);

  return (
    <div className="app">
      <div className="widget">
        <div className="widget__content">
        <div className="widget__city">
          {city}
        </div>
        <div className="widget__temp">
          {temp !== null ? `${temp.toFixed(1)}°C` : 'N/A'}
        </div>
        </div>
        <div className="widget__img">
          {weatherCode && (
            <img src={`http://openweathermap.org/img/wn/${weatherCode}@2x.png`} alt="weather-logo" />
          )}
        </div>
     </div>
    </div>
  );
}

App.propTypes = {
  city: PropTypes.string,
};

App.defaultProps = {
  city: 'Paris',
};

export default App;
