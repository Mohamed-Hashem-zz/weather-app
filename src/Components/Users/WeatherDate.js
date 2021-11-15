import React from "react";
import "./WeatherDate.css";

export default function WeatherData({ weather }) {
	return (
		<div>
			<table className="styled-table">
				<thead>
					{weather.main && (
						<tr className="active-row">
							<th>Temperature</th>
							<td>:</td>
							<td>{Math.floor(weather.main.temp) - 273} &#8451;</td>
						</tr>
					)}
				</thead>
				<tbody>
					{weather.sys && (
						<tr>
							<td>Country</td>
							<td>:</td>
							<td>{weather.sys.country}</td>
						</tr>
					)}
					{weather.name && (
						<tr className="active-row">
							<td>City</td>
							<td>:</td>
							<td>{weather.name}</td>
						</tr>
					)}
					{weather.main && (
						<tr>
							<td>Humidity</td>
							<td>:</td>
							<td>{weather.main.humidity}</td>
						</tr>
					)}
					{weather.weather && (
						<tr className="active-row">
							<td>Description</td>
							<td>:</td>
							<td>
								{String(weather.weather[0].description).replace(
									/(^\w|\s\w)/g,
									(m) => m.toUpperCase()
								)}
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
