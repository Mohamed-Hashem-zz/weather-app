import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./WeatherForm.css";
import axios from "axios";
import Card from "../UI/Card";

export default function WeatherForm(props) {
	const enteredCity = useRef("");

	const [error, serError] = useState("");

	const getWeatherHandler = async (event) => {
		event.preventDefault();

		const city = enteredCity.current.value;

		if (city.trim().length === 0) {
			serError({
				title: "Invalid Inputs",
				message: "Please Enter Valid City (non-empty values)",
			});
			return;
		} else {
			await axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0fe58708e6d694a289790f09cf8e633`
				)
				.then(({ data }) => {
					props.getWeather(data);
				})
				.catch((error) => {
					serError({
						title: "Something Error",
						message: "Invalid Input or Fail in Network",
					});
				});
		}
		enteredCity.current.value = "";
	};

	const errorHandler = () => {
		serError("");
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					errorHandler={errorHandler}
				/>
			)}

			<Card className="input">
				<form onSubmit={getWeatherHandler}>
					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						ref={enteredCity}
						placeholder="Enter City Name ... (cairo)"
					/>
					<Button type="submit">Get Weather</Button>
				</form>
			</Card>
		</>
	);
}
