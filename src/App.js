import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice(); //generates quotes when button clicked
    }

    //fetch quote from api by using State through fetchAdvice function
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip; //data that has been fetched held in advice object
                
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        // advice object
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    {/* onClick get a single advice with unique ID */}
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;