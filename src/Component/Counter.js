import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
      this.props.dispatch({type: "INCREMENT"})
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  decrement = () => {
    this.props.dispatch({type: "DECREMENT"})
    // this.setState({
    //   count: this.state.count - 1
    // });
  }
 

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="button">
          <button  onClick={this.decrement}>Decrement</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
        count: state.count
})

export default connect (mapStateToProps) (Counter);


//reference : https://daveceddia.com/how-does-redux-work/