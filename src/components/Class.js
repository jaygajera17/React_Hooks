import React,{Component} from "react";

class Message extends React.Component {

  constructor(){
    super();
    this.state={
      message:"hello from state message ",
      condition:true
    }
  }

  changeMessage(){
    this.setState({
      message:"HIIIII  from state after change"
    })
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.changeMessage()}> Click Me</button> 
    </div>
    );
  } 
}

export default Message;