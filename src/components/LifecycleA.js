import React, { Component } from 'react'
import LifecycleB from './LifecycleB.js'
export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jay'
      }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
  render() {
        console.log('LifecycleA render')
    return (
      <div>
     Life cycle A
     <LifecycleB/>  
      </div>
    )
  }
}
// A is parent of B
// componentdidmount is executes only once in the life cycle of the component

/* output 

without <lifecycleB/>:-
LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render 
LifecycleA componentDidMount

with <lifecycleB/>:-
LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render -> AFTER PARENT RENDER EXECUTES GO TO CHILD
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render
LifecycleB componentDidMount
LifecycleA componentDidMount
*/


/*
The constructor(): method is called before anything else, 
when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The getDerivedStateFromProps(): method is called right before rendering the element(s) in the DOM.

The render(): method is required, and is the method that actual outputs the HTML to the DOM.

The componentDidMount(): method is called after the component is rendered.

*/
export default LifecycleA