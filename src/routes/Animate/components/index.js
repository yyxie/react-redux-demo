import React from 'react';
import Animate from 'rc-animate';
import {Button} from '@unovo/antd';
import './style.less';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: true,
    }
  }

  switchContent = () => {
    this.setState({
      enter: !this.state.enter,
    });
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
        <Button onClick={this.switchContent}>点我</Button>
        <div>
          <Animate
            component=""
            transitionName="test">
            {this.state.enter ? <div key="1" style={style}/> : null}
          </Animate>
        </div>
      </div>
    )
  }
}
