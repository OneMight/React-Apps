import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/adaptivestyle.css';
import imag1 from '../images/imag1.png';
import imag2 from '../images/imag2.png';
import imag3 from '../images/imag3.png';
import imag4 from '../images/imag5.png';
import imag5 from '../images/imag7.png';
import imag6 from '../images/imag8.png';

class Card extends Component{
    render()
    {
        const arrayPhotos =[
            {title:'Dogs', image:imag1, price: '$10.00', id: 1},
            {title:'North American Birds', image:imag2, price: '$11.00', id: 2},
            {title:'New York, London, Paris', image:imag3, price: '$12.00', id: 3},
            {title:'Unicorns', image:imag4, price: '$13.00', id: 4},
            {title:'Ocean Life', image:imag5, price: '$14.00', id: 5},
            {title:'Sunflowers', image:imag6, price: '$15.00', id: 6}
        ]

       
        return(
        
            <div className='slider-images'>
                {arrayPhotos.map(photo => (
                    
                    <div className="images" key={photo.id}>
                        <img src={photo.image} className='imagewidth' alt=""/>
                        <p className="title-card">
                            {photo.title}
                        </p>
                        <p className="price">{photo.price}</p>
                    </div>
            ))  }
            </div>
        
        )
    }
}

export default Card