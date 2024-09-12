import React, { Component } from 'react';


class Burgermenu extends Component{
    render(){
        return(
            <div className="burger-menu">
              <p className="username" />
              <button id="burgerlogout">
                <span i18n="logout" className="i18n logout">
                  Log out
                </span>
              </button>
              <div className="log">
                <button id="burgerLog">
                  <span i18n="login" className="i18n login">
                    Log in
                  </span>
                </button>
                <button id="burgerSign">
                  <span i18n="signup" className="i18n signup">
                    Sign up
                  </span>
                </button>
              </div>
              <a href="../Shop/shopall.html" i18n="shop" className="i18n shop">
                Shop
              </a>
              <a href="../Read article/ReadArticle.html" i18n="about" className="i18n about">
                About
              </a>
              <a
                href="../Questions/Questions.html"
                i18n="sustainability"
                className="i18n sustainability"
              >
                Sustainability
              </a>
              <div className="theme"></div>
            </div>
        )
    }
}

export default Burgermenu