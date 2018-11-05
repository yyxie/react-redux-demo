import React from 'react';
import Animate from 'rc-animate';
import {Button} from 'antd';
import './fade.less';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: true,
      contents: [{
        title: 'tab1',
        content: '11ddddddddddddddddddddd11'
      }, {
        title: 'tab2',
        content: '22ddddddd2ddddddddddddddddddddddddddddd2'
      }],
      index: 0
    }
  }

  switchContent = () => {
    this.setState({
      enter: !this.state.enter,
    });
  }

  tabSwitch = (i) => {
    this.setState({
      index: i
    })
  }
  renderTabTitle = () => {
    const {contents} = this.state;
    return contents.map((item, index) => {
      return (
        <Button key={index} onClick={this.tabSwitch.bind(this, index)}> {item.title}</Button>
      );
    })
  }
  renderContent = () => {
    const {contents, index} = this.state;
    return contents.map((item, i) => {
      return (
        <Animate
          component=""
          transitionName="slide">
          {
            index === i ?
              <div
                key={index}
                style={{
                  width: '100px',
                  height: '200px',
                  overflow: 'hidden',
                  position: 'absolute',
                /*  background: 'yellow'*/
                }}>
                {item.content}
              </div> : null
          }
        </Animate>
      )
    })
  }

  render() {
    const style = {
      display: this.state.enter ? 'block' : 'none',
      marginTop: '20px',
      width: '200px',
      height: '200px',
      backgroundColor: 'red',
    };

    return (
      <div>
        <Button onClick={this.switchContent}>开启动画</Button>
        <div>
          <Animate
            component=""
            transitionName="test">
            {this.state.enter ? <div key="1" style={style}>ffff</div> : null}
          </Animate>
        </div>
        <h3>tab 切换</h3>
        <div>
          {this.renderTabTitle()}
        </div>
        <div style={{
          width: '100px',
          height: '200px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}
