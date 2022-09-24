import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
      this.clickHandle=this.clickHandle.bind(this); // 3rd approch using constructor
    }
    clickHandle()
    {
        this.setState({     // without .bind(this) error:- this will not work because this is not binded
            message:"Hi from class component"
        })
    }

  render() {
    return (
      <div>
        <br></br>
        <div>{this.state.message}</div>
         {/* <button onClick={this.clickHandle.bind(this)}>click from C.C</button> */} {/* 1st approch using bind */}
         {/* <button onClick={()=>this.clickHandle()}>click from C.C</button>*/} {/* 2nd approch using arrow function */}
         <button onClick={this.clickHandle}>click from C.C</button> {/* 3rd approch using constructor & most use */}

      </div>
    )
  }
}

export default EventBind