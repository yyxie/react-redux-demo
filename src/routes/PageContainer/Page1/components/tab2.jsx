import React from 'react';

export default class Tab2 extends React.Component {
  componentWillMount() {
    console.log('进入tab2的componentWillMount');
  }
  componentDidMount() {
    console.log('进入tab2的componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('进入tab2的componentWillReceiveProps');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('进入tab2的componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('进入tab2的componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('进入tab2的componentWillUnmount');
  }
  render() {
    return <div>{this.props.txt}</div>
  }
}
