import React, { Component } from 'react';
import connect from 'react-redux';

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue}/>
          <button>submit</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    inputValue: state.inputValue
  }
}
export default connect(mapStateToProps, null)(TodoList);
