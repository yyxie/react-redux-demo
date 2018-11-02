import React from 'react';
/*import IntroJs from 'intro.js';*/
import {Steps, Hints} from 'intro.js-react';
import PropTypes from 'prop-types';
import {Avatar, Badge, Icon, Card, Button} from 'antd';
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
  }, {
    path: '/wrapper/editor',
    name: 'editor',
    key: '0000005'
  }, {
    path: '/wrapper/braft-editor',
    name: 'braftEditor',
    key: '0000006'
  }, {
    path: '/wrapper/intro',
    name: 'intro',
    key: '0000007'
  }, {
    path: '/wrapper/introjs',
    name: 'introjs',
    key: '0000008'
  }, {
    path: '/wrapper/drag',
    name: 'drag',
    key: '0000009'
  }]
}, {
  path: '/noFound',
  name: 404,
  key: '0000003'
}];
const buildData = [{name: '铺软'}, {name: '电银'}];
/*const startIntro = () => {
  // 获取包含引导元素的父容器, 并组成IntroJs
  const intro1 = IntroJs(document.getElementById('root'))
  intro1.setOptions({
    prevLabel: '上一步',
    nextLabel: '下一步',
    skipLabel: '跳过',
    doneLabel: '结束',
  })
    .oncomplete(() => {
      //点击跳过按钮后执行的事件
    })
    .onexit(() => {
      //点击结束按钮后， 执行的事件
    })
    .start();
}*/
/*const BasicLayout = ({children}) => (*/
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: '.hello',
          intro: 'Hello step',
        },
        {
          element: '.world',
          intro: 'World step',
        },
        {
          element: '.test',
          intro: 'test step',
        },
      ],
      hintsEnabled: true,
      hints: [
        {
          element: '.hello',
          hint: 'Hello hint',
          hintPosition: 'middle-right',
        }
      ]
    }
  }

  onExit = () => {
    this.setState(() => ({stepsEnabled: false}));
  };
  render() {
    const {stepsEnabled, steps, initialStep} = this.state;
    return (
      <div className="basic-container">
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
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
              {React.cloneElement(this.props.children, this.props)}
            </div>
          </div>
        </div>
      </div>)
  }
}
/*)*/

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired
}

