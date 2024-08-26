import React from "react";
export default function Background(props) {
const codeMapping = {
"01d": "clear-sky-day",
"01n": "clear-sky-night",
"02d": "cloudy-day",
"02n": "cloudy-night",
"03d": "cloudy-day",
"03n": "cloudy-night",
"04d": "cloudy-day",
"04n": "cloudy-night",
"09d": "shower-rain-day",
"09n": "shower-rain-night",
"10d": "rain-day",
"10n": "rain-night",
"11d": "thunderstorm-day",
"11n": "thunderstorm-night",
"13d": "snow-day",
"13n": "snow-night",
"50d": "fog-day",
"50n": "fog-night",
};
let name = codeMapping[props.code];
return (
<img
  className="background"
  src={`background/${name}.jpg`}
  alt={props.alt}
  size="cover"
/>
);
}