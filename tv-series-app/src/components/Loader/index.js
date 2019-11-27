import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './index.css';

const Loader = props => (
  <div>
    <img className="loadingCircle" src={loaderSrc} alt="Loading circle" />
  </div>
);

export default Loader;
