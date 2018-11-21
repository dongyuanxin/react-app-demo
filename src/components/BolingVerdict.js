import React from "react"

class BolingVerdict extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  render(){
    if(this.props.celsius >= 100){
      return <p>水烧开</p>
    }else{
      return <p>水没烧开</p>
    }
  }
}

export default BolingVerdict;