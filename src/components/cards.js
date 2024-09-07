import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/adaptivestyle.css';
import Card from './card.js';

class ConCards extends Component{
    render(){
        return(
            <>
            <div className="container-slider">
            
              <Card/>
            </div>
          </>
        )
    }
}

export default ConCards