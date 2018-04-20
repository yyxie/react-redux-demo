import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import './BasicLayout.css'
/*import '../../styles/core.scss'*/

const BasicLayout = ({children}) => (
  <div className="container text-center">
    <Header />
    <div className="core-layout__viewport">
      {children}
    </div>
  </div>
)

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default BasicLayout
