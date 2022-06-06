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
            } else if(day === 2){
                document.getElementById('day').innerHTML = "tuesday"
            } else if(day === 3){
                document.getElementById('day').innerHTML = "wednesday"
            } else if(day === 4){
                document.getElementById('day').innerHTML = "thursday"
            } else if(day === 5){
                document.getElementById('day').innerHTML = "friday"
            } else if(day === 6){
                document.getElementById('day').innerHTML = "saturday"
            } else if(day === 7){
                document.getElementById('day').innerHTML = "sunday"
            }
        }
        return (
            <div>
                <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
                <h6 id='day'>{}</h6>
            </div>
        );
    }
}

export default Time;