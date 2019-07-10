import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form onSubmit = {this.props.getWeather}>
        <label>       
           <input type="text" name="city" placeholder="City" />
        </label>
        <label>   
         <input type="text" name="country" placeholder="Country" />
        </label>
        <label>        
          <button className="button">Check Weather</button>
        </label>
      </form>
    )
  }
}
export default Form;


