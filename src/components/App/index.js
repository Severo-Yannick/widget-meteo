import { useEffect, useState } from 'react';
import api from '../../api';
import './styles.scss';

const App = () => {
  const [city, setCity] = useState('Paris');
  const [temp, setTemp] = useState(12);

  useEffect(() => {
    api.get('/weather', {
      params: {
        q: city,
      }
    }).then((result) => {
      if (result?.data?.main?.temp){
        setTemp(result.data.main.temp)
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
         <img src="https://image.flaticon.com/icons/png/512/146/146199.png" alt="weather-logo" />
       </div>
     </div>
    </div>
  );
}

export default App;
