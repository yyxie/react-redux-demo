import React from 'react';
import {Button} from 'antd';

export default class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      i: 0
    }
  }
  componentWillMount() {
    console.log('进入tab1的componentWillMount');
  }
  componentDidMount() {
    console.log('进入tab1的componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('进入tab1的componentWillReceiveProps');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('进入tab1的componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('进入tab1的componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('进入tab1的componentWillUnmount');
  }
  clickEvent = () => {
    debugger;
    let {i} = this.state;
    ++i;
    this.setState({
      txt: i,
      i: i
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.clickEvent}>点击</Button>
        <span>{this.state.txt}</span>
      </div>
    )
  }
}
