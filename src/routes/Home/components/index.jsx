/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {Button, Table, Icon} from 'antd';
import '../home.less';
import Notify from '../../../components/Notify';
import {TopNotify, TopNotifyContainTitle} from '../../../components/TopNotify';
import {request} from '../../../utils/request';
import Api from '../../../config/api';

const Column = Table.Column;
export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* list: []*/
    }
  }

  componentWillMount() {
    console.log('进入willMount');
    setTimeout(() => {
      this.setState({
        list: [{sumNumber: '5555'}]
      })
    }, 0)
  }

  componentDidMount() {
    console.log('进入didMount');
    /* request(Api.Home.fristData, {}, 'post', 'root', 'json')
       .then((result) => {
         console.log('请求结束')
         this.setState({
           list: result.data
         })
       })*/
  }

  showTip = () => {
    Notify.success({
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
    });
  }
  showDialog = () => {
    Notify.info({
      content: '文字说明',
      duration: 3000
    });
  }
  showTopTip = () => {
    debugger;
    TopNotify.error('文字说明', '文字title');
  }
  showTopTipContainTitle = () => {
    debugger;
    TopNotifyContainTitle.error('文字说明', '文字title');
  }

  render() {
    const {requestDataEvent} = this.props;
    const {list} = this.state;
    console.log('渲染')
    return (
      <div>
        <Button type="primary" onClick={requestDataEvent}>请求数据</Button>
        <Table dataSource={list}>
          <Column
            title="sumNumber"
            dataIndex="sumNumber"
            key="sumNumber"
          />
        </Table>
        <Button type="primary" onClick={this.showTip}>成功提示</Button>
        <Button type="primary" onClick={this.showDialog}>确认框(自动消失)</Button>
        <Button type="primary" onClick={this.showTopTip}>提示框(自动消失)</Button>
        <Button type="primary" onClick={this.showTopTipContainTitle}>提示框含有title(自动消失)</Button>
        <Button type="primary">Backward <Icon type="right" /></Button>
        <div style={{
          background: 'red',
          display: 'inline-block'
        }}>888
        </div>
      </div>
    )
  }
}
