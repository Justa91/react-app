import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`The temperature in ${props.city} is ${response.data.main.temp}!`);
  }

  let apiKey = `215576bab28022db35e6e64f040e1b56`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showTemperature);
  return <h1>It's working!!</h1>;
}
