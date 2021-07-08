import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppBody from './components/AppBody/AppBody';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  HorizontalLabelPositionBelowStepper from './components/AppBody/Second.js';
import DisableElevation from './components/back_button.js';
import Test from './components/card.js';
import ReactDOM from 'react-dom';
import Secondslide from './components/AppBody/Second';


function App() {
  return (
    <Router>
      <NavbarComponent />
     
      <Route path="/" exact component={AppBody} />
      
      <Route path="/FirstSlide" exact component={AppBody} />
      <Secondslide />
      
      
      <DisableElevation />
    </Router>
  );
}
export default App;

