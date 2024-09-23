import React, { Component } from 'react';
import './cards.css';
import Card from '../card/card.jsx';
import '../../styles/adaptivestyle.css';


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