 import React, { Component } from 'react';
 class Counter extends Component {
     state = {  
         value:this.props.value,
         tag: ['max is 10','min is 0']
         
     };
     styles={
        fontSize:60,
        fontWeight:'bold'
     };
     renderTags(){
         if(this.state.tag.length===0) return<p>there are no elements</p>;
         return  <ul>{this.state.tag.map(tags => <ol >{tags}</ol>)} </ul>;
     }
     handleIncrement = () => {
         if(this.state.value<10)
         {
        this.setState({value: this.state.value + 1})
    }
     };
     handleReset = ()=>{
         this.setState({value:this.state.value-this.state.value+1})
     };
     handleDecrement=() =>{
         if(this.state.value>0)
         {
        this.setState({value:this.state.value-1})}
 };
     max(){
        if(this.state.value===10)
        {
        return <h2>This is max</h2>;
        }
    }
    min(){
        if(this.state.value===0)
        {
        return <h2>This is min</h2>;
        }
    }

     render() {   
        let classes = this.getBadgeClasses();
         return(
             <div> 
                 {this.props.children}
             <span style={ this.styles} className={this.getBadgeClasses()}>{this.state.value}</span>
             <br></br>
             <button onClick={this.handleReset}className="btn btn-primary m-2">Reset</button>
             <button onClick={this.handleDecrement} className="btn btn-info m-4">Decrement</button>
             <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
             <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger m-2">Delete</button>
            {this.max()}
            {this.min()}
            {this.renderTags()}
             </div>
         );
     }
     getBadgeClasses() {
         let classes = "badge m2 badge-";
         classes += (this.state.value === 0) ? "warning" : "primary";
         return classes;
     }
 }
  
 export default Counter;