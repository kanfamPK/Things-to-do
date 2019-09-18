import React, { Component } from 'react';
import checkIcon from '../img/check.svg';
import checkDoneIcon from '../img/check-done.svg';

class TodoItem extends Component {

    render() {
        const item = this.props.item,
            onClick = this.props.onClick;
        let className = 'TodoItem';
        let url = checkIcon;
        if (item.isComplete){
            url = checkDoneIcon;
        }
        if (item.isComplete){
            className += ' TodoItem-complete';
        }
        return (
            <div className={className}>
                <img onClick={onClick} src={url} width={32}/>
                <p>{this.props.item.title}</p>
            </div>      
        );
    }
}

export default TodoItem;