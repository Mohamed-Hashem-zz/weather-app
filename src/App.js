import React, { useState } from "react";
import WeatherData from "./Components/Users/WeatherDate";
import WeatherForm from "./Components/Users/WeatherForm";
import Background from "./Components/Background/Background";

function App() {
	const [weather, setWeather] = useState({});

	const getWeatherHandler = (weatherState) => {
		setWeather(weatherState);
	};

	return (
		<>
			<Background />
			<h1 className="animation">WEATHER APP</h1>
			<WeatherForm getWeather={getWeatherHandler} />
			<WeatherData weather={weather} />
		</>
	);
}

export default App;
