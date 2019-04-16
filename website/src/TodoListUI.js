import React, { Component } from  'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render(){
    return (
      <div>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input
            value={this.props.inputValue}
            placeholder='todo info'
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleInputChange}>
          </Input>
          <Button type="primary" onClick={this.props.handleButtonClick}>Submit</Button>
        </div>
        <List
         style={{ marginTop: '10px', marginLeft: '10px', width: '390px' }}
         bordered
         dataSource={this.props.list}
         renderItem={
           (item, index) =>
             (<List.Item onClick={(index) => this.props.handleItemDelete(index)}>
           {item}
         </List.Item>)}
       />
      </div>
    )
  }
}
export default TodoListUI;