import React from "react"
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BolingVerdict"

const testStyle = {
  marginTop:"20px auto",
  display:"block"
}


function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
  const input = parseInt(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const numbers = [1, 2, 3, 4, 5];

class TestPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: (new Date()).getTime(),
      value: "",
      scale: 'c',
      temperature: ''
    };
    this.tick = this.tick.bind(this);
    this.listItems = numbers.map((number) => 
      <li key={number.toString()}>{number}</li>
    );
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  tick(){
    this.setState({
      date: (new Date()).getTime()
    })
  }
  handleClick(e){
    e.preventDefault()
    console.log("Click Event", e)
  }
  handleChange(e){
    console.log("e is", e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e){
    alert("A name is submitted: "+this.state.value);
    e.preventDefault();
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  componentDidMount(){
    this.timer = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale = 'c'
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}/>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default TestPanel;