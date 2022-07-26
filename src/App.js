import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:3},
            {id:3, value:2},
            {id:4, value:1}
        ]
     };
     constructor(){
        super();
        console.log("App - Constructor called");
     }

     componentDidMount(){
        console.log("app mounted");
     }
     handleIncrement = (counter)=>{
        //console.log(counter) // after click increment button pass counter object from counter class
        const counters = [...this.state.counters]; //clone counters array using spread operator
        const index = counters.indexOf(counter); // index of clicked object 
        counters[index] = {...counter}; // counter object clone in counters array
        counters[index].value++; //increment value
        this.setState({counters}); 
        
     }
     handleReset = ()=>{
       const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
     }
     handleDelete = (counterId) => {
        // console.log("hjkds",counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
     }
     render(){
        console.log("app rendered");
        return (
            <React.Fragment>
                <Navbar totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
                <main className='container'>
                    <Counters 
                        counters = {this.state.counters}
                        onReset = {this.handleReset} 
                        onIncrement = {this.handleIncrement}
                        onDelete = {this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
     }
}

export default App;
