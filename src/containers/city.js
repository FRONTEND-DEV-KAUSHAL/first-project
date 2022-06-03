import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
            this.state = {
                CityName : 'surat'
            }
    }
    
    Change_City = () => {
        this.setState = {
            CityName : 'amreli'
        };
    }
    render() {
        return (
            <div>
                <p>{this.CityName}</p>
                <button>Change city</button>
            </div>
        );
    }
}

export default City;