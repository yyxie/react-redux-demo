import React from 'react';
import {Tabs, Button} from 'antd';
import Tab1 from './tab1';
import Tab2 from './tab2';

const TabPane = Tabs.TabPane;

export default class Page1 extends React.Component {
  constructor(props) {
    console.log('进入主页面的constructor')
    super(props);
    this.state = {
      i: 0
    }
  }
  componentWillMount() {
    console.log('进入主页面的componentWillMount');
  }
  componentDidMount() {
    console.log('进入主页面的componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('进入主页面的componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('进入主页面的shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('进入主页面的componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('进入主页面的componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('进入主页面的componentWillUnmount');
  }
  clickEvent = () => {
    let {i} = this.state;
    ++i;
    this.setState({
      i: i
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.clickEvent}>点击</Button>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1"><Tab1 /></TabPane>
          <TabPane tab="Tab 2" key="2"><Tab2 txt={this.state.i} /></TabPane>
        </Tabs>
      </div>
    )
  }
}
