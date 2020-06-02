import React from 'react';
import './App.css';

class App extends React.Component{
    state = {
      counter: 0
    }

  addCount = () => {
    this.setState(prevState => ({counter: prevState.counter+1}))

  }

  removeCount = () => {
    this.setState(prevState => ({counter: prevState.counter-1}))
  }

  render(){
    return(
      <div>
        <h4>BootCamp Counter App</h4>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addCount}>Add Count</button>
        <button onClick={this.removeCount}>Remove Count</button>
      </div>
    )
  }
}

export default App;
