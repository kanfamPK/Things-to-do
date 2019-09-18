import React, { Component } from 'react';
import classNames from 'classnames';

const RED = 0, ORANGE = 1, GREEN = 2;

class TrafficLight extends Component {
    constructor(){
        super();
        this.state = {
            currentColor: RED
        };
        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        },1000)
    }

    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render(){
        const currentColor = this.state.currentColor;
        return (
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {active: currentColor === RED})}/>
                <div className={classNames('bulb', 'orange', {active: currentColor === ORANGE})}/>
                <div className={classNames('bulb', 'green', {active: currentColor === GREEN})}/>
            </div>
        )
    }
}

export default TrafficLight;