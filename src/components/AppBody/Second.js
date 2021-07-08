import React,{useStyles}from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Test from '../card.js';
import { render } from '@testing-library/react';
import  './AppBody.module.css';
import '../card.css';




class Secondslide extends React.Component {
constructor(){
super();
 
this.state = {
black: false
}

}
 
changeColor(){
this.setState({black: !this.state.black})
}
 
render(){
let btn_class = this.state.black ? "blackButton" : "whiteButton";
let btn_class_2 = this.state.black ? "whiteButton" : "blackButton";
 
return (
<div className="container-fluid">
<div class="jumbotron">
<div className="col-lg-6">
<button className={btn_class}
onClick={this.changeColor.bind(this)}>
  <img src={process.env.PUBLIC_URL + "/images/data1.png"} /> 
</button>

</div>
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className="col-lg-6">

<button className= {btn_class_2}
onClick={this.changeColor.bind(this)}>
  <img src={process.env.PUBLIC_URL + "/images/model1.png"} />
  </button>
  </div>
  </div>
  </div>





)
}
}
export default Secondslide;
