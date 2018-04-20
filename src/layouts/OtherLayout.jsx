import React from 'react';
import PropTypes from 'prop-types';

const OtherLayout = ({children}) => (
  <div className="container text-center">
    otherLayout
    <div className="core-layout__viewport">
      {children}
    </div>
  </div>
)

OtherLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default OtherLayout
