import React, {Component} from 'react';
import {Form} from 'antd';
import './ForgetPassword.less';
import FristStep from './fristStep';
import SecondStep from './secondStep';

@Form.create()
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  /**
   * 渲染内容
   * @returns {*}
   */
  renderContent = () => {
    const steps = [{
      title: 'First',
      content: <FristStep next={this.next} />
    }, {
      title: 'Second',
      content: <SecondStep next={this.next} prev={this.prev} />,
    }]
    return steps[this.state.current].content;
  }
  /**
   * 下一步
   */
  next = () => {
    const current = this.state.current + 1;
    this.setState({current});
  }
  /**
   * 上一步
   */
  prev = () => {
    const current = this.state.current - 1;
    this.setState({current});
  }

  render() {
    return (
      <div>
        <div className="steps-content">{this.renderContent()}</div>
      </div>
    );
  }
}
