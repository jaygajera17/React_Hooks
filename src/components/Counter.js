import React, { Component } from 'react'


 class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count:0
        }
    }

    increment(){
       // this.state.count=this.state.count+1; // it will not show in ui  because react does not know that state has changed
        //  this.setState({
        //         count:this.state.count+1
        //     },()=>{console.log("callback value",this.state.count)}) // it will show in ui  because react does know that state has changed
     
        /*** using prev state *****/
        this.setState((prevState)=>(
        {
            count:prevState.count+1 
        }))
        console.log(this.state.count);
    }

  render() {
    return (
     <div>
      <button onClick={()=>this.increment()}>Increment</button>
      Count - {this.state.count}
      </div>
    )
  }
}

export default Counter