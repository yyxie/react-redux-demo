import React from 'react';
import {Button, Table} from 'antd';

const Column = Table.Column;
export default class HomeView extends React.Component {
  render() {
    const {list, requestDataEvent} = this.props;
    return <div>
      <Button onClick={requestDataEvent}>请求数据</Button>
      <Table dataSource={list}>
        <Column
          title="sumNumber"
          dataIndex="sumNumber"
          key="sumNumber"
        />

      </Table>
    </div>
  }
}
