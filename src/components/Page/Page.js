import React from 'react';
import PropTypes from 'prop-types';

import './Page.css';

const Page = ({ children }) => (
  <div className="page">
    <div className="content">
      { children }
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
