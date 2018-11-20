import React from "react"

const testStyle = {
  marginTop:"20px auto",
  display:"block"
}


const numbers = [1, 2, 3, 4, 5];

class TestPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: (new Date()).getTime(),
      value: ""
    };
    this.tick = this.tick.bind(this);
    this.listItems = numbers.map((number) => 
      <li key={number.toString()}>{number}</li>
    );
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  componentDidMount(){
    this.timer = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render(){
    return (
      <div  style={testStyle}>
        { this.props.content }
        时间是：{ this.state.date }
        <ul>
          {this.listItems}
        </ul>
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <label>
            Name: <input type="text" value={this.state.value} onChange={ this.handleChange}/>
          </label>
          <input type = "submit" value = "Submit"/>
        </form>

      </div>
    )
  }
}

export default TestPanel;