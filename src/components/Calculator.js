import React from "react"
import BoilingVerdict from "./BolingVerdict"
import TemperatureInput from "./TemperatureInput"

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: ''
    }
  }
  handleChange(event){
    this.setState({
      temperature: event.target.value
    })
  }
  render(){
    return(
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

export default Calculator;