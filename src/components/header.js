import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/adaptivestyle.css';
import Burgermenu from './burgermenu.js';
import Navmenu from './navmenu.js';

class Header extends Component{
    render(){
        return(
            <header>
            <a href="index.html">
              <div id="logo" />
            </a>
            <div className="nav_menu">
             <Navmenu/>
            </div>
            <select name="" id="languageSelect">
              <option value="en" id="translateEN" select="">
                en
              </option>
              <option value="ru" id="translateRU">
                ru
              </option>
            </select>
            <div className="toogle-switch">
              <label className="switch">
                <input type="checkbox" id="check" />
                <span className="slider round" />
              </label>
            </div>
            <div className="header-right">
              <p className="username" />
              <button id="Sign-up">
                <span i18n="signup" className="i18n signup">
                  Sign up
                </span>
              </button>
              <button id="Log-in">
               
                <span i18n="login" className="i18n login">
                  Log in
                </span>
              </button>
              <button id="logout">
                <span i18n="logout" className="i18n logout">
                  Log out
                </span>
              </button>
              <div>
                <img className="search-photo" src="../images/search.svg" alt="" />
              </div>
              <div className="basket">
                <div>
                  <img className="shoping" src="../images/shoping.svg" alt="" />
                </div>
                <p>0</p>
                <p></p>
              </div>
            </div>
            <input type="checkbox" id="menu_toogle" />
            <label className="btn" htmlFor="menu_toogle">
              <span />
            </label>
            <Burgermenu/>
          </header>
        );
    }
    
}

export default Header