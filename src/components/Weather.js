import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
        {this.props.city && this.pros.country && <p>Location: {this.props.city}, {this.props.country} </p>}
        {this.props. temperature && <p>Temperature:  {this.props.temperature}, {this.props.humidity}</p>}
        {this.props.desciption && <p>Description: {this.props.desciption}</p>}
        {this.props.error && <p>Error: {this.props.error}</p>}

      </div>
    )
  }
}
export default Weather;
