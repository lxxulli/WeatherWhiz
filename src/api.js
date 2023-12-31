import fetch from "node-fetch";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";
const airPollutionURL =
  "https://api.openweathermap.org/data/2.5/air_pollution?";
const API_KEY = "6f519bd47eff56b36536a05bb4c15a38";
const lat = 35.15805555399276;
const lon = 129.0597635917639;

const getWeather =
  baseURL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const getDayData =
  forecastURL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const getAirData =
  airPollutionURL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const weatherApi = () => fetch(getWeather).then((res) => res.json());
export const forecastData = () => fetch(getDayData).then((res) => res.json());
export const AirData = () => fetch(getAirData).then((res) => res.json());
