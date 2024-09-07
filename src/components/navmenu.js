import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/adaptivestyle.css';
import mark from '../images/mark.svg';

class Navmenu extends Component{
    render(){
            const links = [
                {id:'shop', href:'../Shop/shopall.html'},
                {id:'about', href: '../Read article/ReadArticle.html'},
                {id:'sustainability', href: './Questions/Questions.html'},
                {id:'checkusers', href: '../Check All Users/checkallusers.html'}
            ]
            return(
              
                    <nav>
                        {
                            links.map(link =>(
                                <a id={link.id} href={link.href}>
                                <p i18n={link.id} className="i18n">
                                {link.id}
                                </p>
                                <img src={mark} alt="" />
                              </a> 
                            ))
                        }
                    </nav>
               
            )
        }
    }

    export default Navmenu