import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   /* state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:3},
            {id:3, value:2},
            {id:4, value:1}
        ]
     };
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
     }*/
    render() { 
        console.log("counters rendered");
        const { counters, onDelete, onIncrement, onReset } = this.props; //object destructing arguments with this donot need use this.props.counters etc
        return (<div>
            
            <button onClick={ onReset } className="btn btn-primary btn-sm ">Reset</button>
           {counters.map(counter => 
        //    <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}/>
              <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDelete={onDelete}/>
           )}
        </div>);
    }
}
 
export default Counters;