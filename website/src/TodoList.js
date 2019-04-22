import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleClick } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>submit</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        }
      </ul>
    </div>
  )
}

// map store state to component props
const mapStateToProps = ( state ) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props - how to change the value in component
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_intput_value',
        value: e.target.value,
      }
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
