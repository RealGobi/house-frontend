import React, { useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './TabPage.css';

const TabPage = ({ children, className, ...rest }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <div className={classNames('TabPage', className)} {...rest}>
      <div className="menu">
        {children.map(
          (child, idx) => (
            <button
              type="button"
              onClick={() => { setCurrentPageIndex(idx); }}
              key={idx}
              className={classNames('menu-item', { active: idx === currentPageIndex })}
            >
              {child.props.title ? child.props.title : `Page ${idx}`}
            </button>
          ),
        )}
      </div>
      <div className="content">
        {children[currentPageIndex]}
      </div>
    </div>
  );
};

TabPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

TabPage.defaultProps = {
  className: null,
  children: [],
};

export default TabPage;
