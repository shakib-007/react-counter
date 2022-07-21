import React, { Component } from "react";

class Counter extends Component {
 /* state = {
    value: this.props.value
    //count: 0
    //tags : ['tag1','tag2','tag3']
    // imageUrl:'https://picsum.photos/200'  //<img src={this.state.imageUrl} alt="" />
  };

//   constructor(){
//     super();
//     // console.log("constructor",this);//use bind method so that in ouput it cannot show undefined
//     this.handleIncrement = this.handleIncrement.bind(this); 
//   }
  handleIncrement = () => {
    // console.log(product);
    this.setState({ value : this.state.value + 1}); //update count //update value
    //console.log("clicked",this.state.count++); // with arrow function dont need constructor handle bind method
  }*/
  
  render() {
    console.log("counter rendered");
    // console.log(this.props)
    // const {counter, onIncrement, onDelete} = this.props;
      return (
      <div>
        {/* <h4>Counter #{this.props.id}</h4> */}
        <span className={ this.getBadgeClass() }>{ this.formatCount() }</span>
        {/* <button onClick={ ()=>{this.handleIncrement({id:1})} } className="btn btn-secondary btn-sm">Increment</button>  //CALL FUNCTION REFERNECE*/}
        {/* <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm ">Increment</button> */}
        <button onClick={ ()=> this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm ">Increment</button>
        <button onClick={ ()=> this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
      
    );
    
  }

  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

//      renderTags(){
//        if(this.state.tags.length === 0){
//            return <p>There are no tags</p>;
//          }
//        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) } </ul>;
//      }
//      render() {
//            return (
//             <div>  
//                {(this.state.tags.length === 0 && "please create on tag")}
//                {this.renderTags()}
//                 <ul>
//                     { this.state.tags.map(tag => <li key={tag}>{tag}</li>) } {/* when using map to render list each item set to key attribute */}
                        
//                 </ul>
//              </div>
//           );
//     }

}

export default Counter;
