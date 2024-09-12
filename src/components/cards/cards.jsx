import React, { Component } from 'react';

import Card from '../card/card.jsx';

class ConCards extends Component{
    render(){
      const arrayPhotos =[
        {title:'Dogs', image:imag1, price: '$10.00', id: 1},
        {title:'North American Birds', image:imag2, price: '$11.00', id: 2},
        {title:'New York, London, Paris', image:imag3, price: '$12.00', id: 3},
        {title:'Unicorns', image:imag4, price: '$13.00', id: 4},
        {title:'Ocean Life', image:imag5, price: '$14.00', id: 5},
        {title:'Sunflowers', image:imag6, price: '$15.00', id: 6}
      ]
        return(
            <>
            <div className="container-slider">

              
            </div>
          </>
        )
    }
}

export default ConCards