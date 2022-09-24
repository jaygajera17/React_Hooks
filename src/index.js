import React from 'react';
import ReactDOM from 'react-dom';
import './components/Props.js';
import Car from './components/Props.js';
import Message from './components/Class.js';
import Counter from './components/Counter.js';
import EventBind from './components/EventBind.js';
import FunctionClick from './components/FunctionClick.js';
import List from './components/List.js';
import Style from './components/Style.js'; 
import HookCounter from './hooks_js/hook_counter.js';
import Hook_MultiCounter from './hooks_js/Hook_MultiCounter.js';
import HookCounter2 from './hooks_js/hook_counter2.js';
import Hookcounter3 from './hooks_js/Hookcounter3.js';
import Time from './hooks_js/Time.js';
// ReactDOM.render(
//     <div>
//     <h1>hello world</h1>
//     <p>hey</p>
//     <Car/>
// </div>,
// document.getElementById('root'));

const e=(
    <>
    <Car brand="ferrari" prize="50 lakh"/>
<h1>hello world</h1>
<h1>hello</h1>

<h1>{(6)<10? "hello from ternary" : "Goodbye"}</h1> 
<input type="text" />
<h1 className='heading'>hello with className</h1>
<Message/>
<Counter/>
<FunctionClick/>
<EventBind/>

<br></br>

<List/>
<Style/>

<br></br>

<HookCounter name="Hook Counter "/>
<br></br>
<Hook_MultiCounter />
<br></br>
<HookCounter2/>
<br></br>
<Hookcounter3/>
<br></br>
<Time/>






</>
//can't use if else statement in jsx but can use ternary operator
// can't use for loop,switch in jsx but can use map function
// can't use class in jsx but can use className(react uses class internally and it will conflict with js class)
// 

);
if((6)<10){
ReactDOM.render(e,document.getElementById('root')); //it takes two arguments, the first is the element to be rendered and the second is the location 
}