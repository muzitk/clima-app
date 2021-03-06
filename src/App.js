import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


const API_KEY = "93f89561c8e8ba9e45a3f2979c4fc65a"

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    desciption: "",
    error: ""
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description:data.weather[0].description,
        error: ""
      })
      }else{
        this.setState({
          temperature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "Please Enter A value"

        })
      }
}
  render(){
    return (
  <div className = "container">
    <div className = "titles">
      <Titles/>
      <div className = "form">
      <Form getWeather={this.getWeather}/>
      <div className = "weather">
      <Weather
        temperature={this.state.temperature}
        city = {this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
        </div>
      </div>
    </div>
    </div>
    )
  }


}
export default App
