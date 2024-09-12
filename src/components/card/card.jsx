import React, { Component } from 'react';

import imag1 from '../../images/imag1.png';
import imag2 from '../../images/imag2.png';
import imag3 from '../../images/imag3.png';
import imag4 from '../../images/imag4.png';
import imag5 from '../../images/imag5.png';
import imag6 from '../../images/imag6.png';

class Card extends Component{
    render()
    {
       
        

       
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