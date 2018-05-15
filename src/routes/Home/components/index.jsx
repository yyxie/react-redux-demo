import React from 'react';
import {Button, Table} from 'antd';
import '../home.less';
import Notify from '../../../components/Notify';

const Column = Table.Column;
export default class HomeView extends React.Component {
  showTip = () => {
    Notify.success({
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
    });
  }
  showDialog = () => {
    Notify.info({
      content: <div>fffff</div>,
      duration: 3000
    });
  }
  render() {
    const {list, requestDataEvent} = this.props;
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
      </div>
    )
  }
}
