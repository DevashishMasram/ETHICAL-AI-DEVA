import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppBody.module.css';
import { CallMissedSharp } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { Link } from 'react-router-dom';

const AppBody = () => (
  <div className={styles.AppBody}>
    <p className={styles.h1}>Ethical AI</p>
    <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <img alt="Fairy" src={process.env.PUBLIC_URL + "/images/fairybig.png"} className={styles.fairy}/>
    <a href="#">Read More ⟶</a>
    <Link to="/secondslide"><button varient="outlined"boxShadow={1}>
              for demo click here
            </button>
    </Link>
    

  </div>
);

AppBody.propTypes = {};

AppBody.defaultProps = {};

export default AppBody;
