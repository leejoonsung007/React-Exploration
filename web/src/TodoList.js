import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">Input something</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
      return <TodoItem
        key={index}
        content={item}
        ndex={index}
        deleteItem={this.handleItemDelete}/>
    })
  }

  handleInputChange(e) {
    // this.setState({
    //   ...this.state,
    //   inputValue: e.target.value,
    // })
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    })
  );
}

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  );
}

  handleItemDelete(index){
    // const list = [...this.state.list];
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1);
      return {list}
    });
    //
    // this.setState( {
    //   list: list
    // })

  }
}

export default TodoList;
