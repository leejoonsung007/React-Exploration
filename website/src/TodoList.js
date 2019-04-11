import React, {Component, Fragment} from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './style.css';

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
            ref={(input) => {this.input = input}}
            />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount(){
  axios.get('/api/todolist').then((res) =>
  {
  this.setState(() => ({
    list: [...res.data]
    }));
  })
  .catch(() => {console.log('error')})
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
      return <TodoItem
        key={index}
        content={item}
        index={index}
        deleteItem={this.handleItemDelete}/>
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
    // const value = this.input.value;
    // this.setState(() => ({
    //   inputValue: value,
    // })
  // );
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
