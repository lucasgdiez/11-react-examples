import React, { Component } from 'react';
import Header from './Header';


export default class App extends Component {

    constructor() {
        super();
    
        this.state = {
            title: 'React Clock'
        };
    
    }

    render() {
        return (
            <div className='container'>
                <Header title={this.state.title}/>
            </div>
        );
    }
}