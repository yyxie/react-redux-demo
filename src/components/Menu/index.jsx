import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Menu.less'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  openUrl = () => {
    window.open('http://localhost:8889/#/home');
  }
  renderMenuItem = (menuData) => {
    const openUrl = this.openUrl;
    return menuData.map((i, index) => {
      let item = null;
      if (index === 0) {
        item = <IndexLink key={index} className="menu-item" to={i.path} activeClassName="route--active">{i.name}</IndexLink>;
      } else if (index === menuData.length - 1) {
       item = <a key={index} className="menu-item" onClick={openUrl}>{i.name}</a>
      } else {
        item = <Link key={index} className="menu-item" to={i.path} activeClassName="route--active">{i.name}</Link>;
      }
      return item;
    })
  }

  render() {
    const {menuData} = this.props;
    return (
      <div>
        {this.renderMenuItem(menuData)}
      </div>
    )
  }
}

export default Menu
