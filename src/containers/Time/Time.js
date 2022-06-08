import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date()
        }
    }
        tick = () => {
            this.setState({
                time : new Date()
            })
        }
        componentDidMount = () => {
            this.time1 = setInterval(() => this.tick(), 1000);
        }
        componentDidUpdate = (preprops , prestate) => {
            if(this.state.time !== prestate.time){
                console.log("componentDidUpdate");
            }
        }
        componentWillUnmount = () => {
            clearInterval();
        }
    render() {
        {
            let day = this.state.time.getDay();

            if(day === 1){
             document.getElementById('day').innerHTML = "Monday"
            } else if (day === 2) {
             document.getElementById('day').innerHTML = "tuesday"
            }
        }
        return (
            <div>
                <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
                {/* <h2 id='day'>{}</h2> */}
                <span id='day'></span>
            </div>
        );
    }
}

export default Time;