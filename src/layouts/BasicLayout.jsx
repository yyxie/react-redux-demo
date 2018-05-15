import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Badge, Icon} from 'antd';
import Menu from '../components/Menu';
import './BasicLayout.less';
import Build from './components/build';

const menuData = [{
  path: '/',
  name: 'Home',
  leaf: true,
  key: '000000'
}, {
  path: '/wrapper',
  name: 'wrapper',
  key: '0000001',
  children: [{
    path: '/wrapper/path1',
    name: 'path1',
    key: '0000003'
  }, {
    path: '/wrapper/path2',
    name: 'path2',
    key: '0000004'
  }]
}, {
  path: '/noFound',
  name: 404,
  key: '0000003'
}];
const buildData = [{name: '铺软'}, {name: '电银'}];
const BasicLayout = ({children}) => (
  <div className="basic-container">
    <div className="left-layout">
      <h2 className="logo-container">
        <a href="https://bodyno.com" target="_blank">bodyno</a>
      </h2>
      <Build buildData={buildData} />
    </div>
    <div className="right-layout">
      <div className="right-top-layout">
        <Badge className="task-notification" count={5}>
          <Icon type="notification" />
        </Badge>
        <Icon className="question-icon" type="question-circle" />
        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
        <span className="user-name">张三</span>
      </div>
      <div className="main-container">
        <Menu menuData={menuData} />
        <div className="core-layout__viewport">
          {children}
        </div>
      </div>
    </div>
  </div>
)

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default BasicLayout
