import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem.js';
import './components/todoItem.css';
import TrafficLight from './components/TrafficLight.js';
import './components/TrafficLight.css';
import DownArrow from './img/down-arrow.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems:
        [
          { title: "Learn coding", isComplete: true },
          { title: "Watch twitch", isComplete: false },
          { title: "Play Poe", isComplete: false }
        ]
    };
  }

  onItemClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems; // tạo 1 todoItems ở đây để ko phải thay đổi todoItems gốc
      const index = todoItems.indexOf(item);
      console.log(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            // ...item,
            title: item.title, // có thể dùng ...item, để viết thay dòng này nhưng viết như thế này để dễ hiểu hơn
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      }, () => {
        console.log(this.state.todoItems);
      });
      // thay vì xài slice thì có thể xài map
      // todoItems: this.state.todoItems.map(i => i !== item ? {...i} : {...i, isCompleted: !item.isCompleted})
    };
  }

  onKeyUp(event) {
    let text = event.target.value;
    let todoItems = this.state.todoItems;
    if (!text) return;
    text = text.trim();
    if (!text) return;
    if (event.keyCode === 13) { // enter có keyCode là 13
      todoItems.unshift({ title: text, isComplete: false });
      this.setState({
        newItem: '',
        todoItems: todoItems
      });
      return;
    }
  }

  onChange(event) {
    this.setState({ newItem: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <p id="react-version">{React.version}</p>
        <div className="Header">
          <img src={DownArrow} width={32} />
          <input type="text" value={this.state.newItem} placeholder="Thêm việc cần làm ....." onKeyUp={this.onKeyUp.bind(this)} onChange={this.onChange.bind(this)} />
        </div>
        { // toán tử && : a && b , a truthy => trả b, a falsy => trả a
          this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => (<TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />))
        }
        {
          this.state.todoItems.length === 0 && 'Nothing'
        }
        <TrafficLight />
      </div>
    );
  }
}

export default App;
