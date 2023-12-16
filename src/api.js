import fetch from "node-fetch";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "6f519bd47eff56b36536a05bb4c15a38";
const lat = 35.15805555399276;
const lon = 129.0597635917639;

const getWeather =
  baseURL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const weatherApi = () => fetch(getWeather).then((res) => res.json());

export const imgIcon = (icon) => {
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return fetch(iconURL).then((res) => res.json());
};
