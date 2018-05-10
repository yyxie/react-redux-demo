import React from 'react';
import {hashHistory} from 'react-router';
import {setCurrentUser} from '../../../utils/util';

export default class Center extends React.Component {
  constructor(props) {
    super(props);
  }

  centerSelect = (item) => {
    setCurrentUser(item);

    hashHistory.push('/');
  }

  renderManagementCenter = () => {
    const staffList = this.props.staffList;
    const list = staffList.map((item) => {
      return <div key={item.id} onClick={this.centerSelect.bind(this, item)}>{item.orgName}</div>
    })
    return list;
  }

  render() {
    return <div>{this.renderManagementCenter()}</div>
  }
}
