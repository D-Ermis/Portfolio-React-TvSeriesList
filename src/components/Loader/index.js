import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
  <div>
    <img
      style={{ width: 50 }}
      className="loadingIcon"
      src={loaderSrc}
      alt="Loading icon"
    />
  </div>
);

export default Loader;
