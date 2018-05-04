import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import './BasicLayout.less';
import Build from './components/build'
/*import '../../styles/core.scss'*/
const menuData = [{
  path: '/',
  name: 'Home'
}, {
  path: '/path1',
  name: 'path1'
}, {
  path: '/path2',
  name: 'path2'
}, {
  path: '/noFound',
  name: 404
}];
const buildData = [{name: '铺软'}, {name: '电银'}];
const BasicLayout = ({children}) => (
  <div className="basic-container">
    <div className="left-layout">
      <h2>
        <a href="https://bodyno.com" target="_blank">bodyno</a>
      </h2>
      <Build buildData={buildData} />
    </div>
    <div className="right-layout">
      <Menu menuData={menuData} />
      <div className="core-layout__viewport">
        {children}
      </div>
    </div>
  </div>
)

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default BasicLayout
