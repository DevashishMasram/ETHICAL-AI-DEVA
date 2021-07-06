import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppBody from './components/AppBody/AppBody';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  HorizontalLabelPositionBelowStepper from './components/AppBody/Second.js';
import DisableElevation from './components/back_button.js';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={AppBody} />
      <Route path="/secondslide" exact component={HorizontalLabelPositionBelowStepper } />
      <Route path="/FirstSlide" exact component={AppBody} />
      <DisableElevation />
    </Router>
  );
}
export default App;
