import React from 'react';
import {hashHistory} from 'react-router';

export default class Center extends React.Component {
  constructor(props) {
    super(props);
  }
  centerSelect = (item) => {
    localStorage.setItem('currentStaff_upms', JSON.stringify(item));
    hashHistory.push('/');
  }
  renderManagementCenter = () => {
    const {staffList = []} = this.props;
    console.log(staffList);
    let list = staffList.map((item) => {
      return <div key={item.id} onClick={this.centerSelect.bind(this, item)} >{item.orgName}</div>
    })
    return list;
  }

  render() {
    return <div>{this.renderManagementCenter()}</div>
  }
}
