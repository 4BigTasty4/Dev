import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    fetch("https://backend-hm2-d8c2fhgqhrdud2hy.polandcentral-01.azurewebsites.net/weatherforecast")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Weather forecast:", data); // Handle the response data
        setForecast(data);
      })
      .catch((error) => {
        console.error("Error fetching weather forecast:", error); // Handle errors
      });
  }, []);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Temperature (°F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecast.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
