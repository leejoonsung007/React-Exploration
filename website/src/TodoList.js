import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreaters'

class TodoList extends Component{

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

   render() {
     return (
       <div>
         <div style={{marginTop: '10px', marginLeft: '10px'}}>
           <Input
             value={this.state.inputValue}
             placeholder='todo info'
             style={{width: '300px', marginRight: '10px'}}
             onChange={this.handleInputChange}>
           </Input>
           <Button type="primary" onClick={this.handleButtonClick}>Submit</Button>
         </div>
         <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '390px' }}
          bordered
          dataSource={this.state.list}
          renderItem={
            (item, index) =>
              (<List.Item onClick={this.handleItemDelete.bind(this, index)}>
            {item}
          </List.Item>)}
        />
       </div>
     )
   }

   handleInputChange(e){
     const action = getInputChangeAction(e.target.value);
     store.dispatch(action);
   }

   handleStoreChange(){
     this.setState(store.getState);
   }

   handleButtonClick(){
     const action = getAddItemAction();
     store.dispatch(action);
   }

   handleItemDelete(index){
     const action = getDeleteItemAction(index);
     store.dispatch(action);
   }

}

export default TodoList;