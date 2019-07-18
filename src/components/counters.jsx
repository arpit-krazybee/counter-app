import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:1}
        ]
     };

     handleDelete=counterId =>{
       const counters=this.state.counters.filter(c=>c.id !== counterId);
       this.setState({counters});
     };

     handleReset = () => {
    this.state.value=0;
    
     };
    render() { 
        return (<div>
            
           { this.state.counters.map(counter =>(
             <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}/>))}
        </div>  );
    }
}
 
export default Counters;