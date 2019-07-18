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
    const counters= this.state.counters.map( c => {
        c.value=0;
        return c;
    });
    this.setState({counters}); 
     };
    render() { 
        return (<div>
            <button onClick={this.handleReset}className="btn btn-primary m-2">Reset</button>
           { this.state.counters.map(counter =>(
             <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}/>))}
        </div>  );
    }
}
 
export default Counters;