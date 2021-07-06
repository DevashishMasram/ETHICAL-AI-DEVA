import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { classes } from 'istanbul-lib-coverage';
export default function DisableElevation() {
    return (
        <Link to="/FirstSlide"><Button variant="contained" color="primary" className= {classes.back_button} disableElevation>
        back
    
      </Button>
      </Link>
    );
  }