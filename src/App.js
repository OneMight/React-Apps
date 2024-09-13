import './App.css';
import Header from './components/header/header.jsx';
import Fooster from './components/footer/footer.jsx';
import Cards from './components/cards/cards.jsx'
import './styles/style.css'
import './styles/adaptivestyle.css'
import { Component } from 'react';


class App extends Component{
 render(){
   
    const entireWord = "Sign in";
    return (
  

        <div className="App">
        <Header entire = {entireWord}/>
        <Cards/>
        <Fooster/>
      </div>
  
  
  
);
}
}

export default App;
