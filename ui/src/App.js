import {useEffect, useState} from 'react';
import Weather from "./Weather";
import Form from "./Form";
import './Styles/App.css'


function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const grabCity = (value) => {
      setCity(value);
  }
  const locationWeather = (value) => {
     setTemp(value);
  }
  return (
    <div className="App">
      <Weather grabTemp={locationWeather} sendLocation={city}/>
      <Form getTemp={temp} locationForm={grabCity}/>
    </div>
  );
}

export default App;
