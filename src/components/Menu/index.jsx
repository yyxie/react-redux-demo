import React from 'react'
import {Link, hashHistory} from 'react-router'
import './Menu.less'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondMenuData: [],
      meunSelectKeys: JSON.parse(sessionStorage.getItem('meunSelectKeys')) || ['000000']
    }
  }
  componentWillMount() {
    let secondMenuData = this.getMenuChild();
    this.setState({
      secondMenuData: secondMenuData
    })
  }
  /**
   * 获取二级菜单数据
   * @returns {Array}
   */
  getMenuChild = () => {
    const {menuData} = this.props;
    let children = [];
    let path = window.location.hash.match(/\/(\S*)\//) ? `/${window.location.hash.match(/\/(\S*)\//)[1]}` : '';
    if (path) {
      menuData.forEach((item, index) => {
        if (item.path === path) {
          children = item.children;
        } else if (item.children) {
          this.getMenuChild(item.children)
        }
      })
    }
    return children;
  }
  /**
   * 渲染二级菜单
   * @param isNeedRenderChildMenu 是否应该渲染子菜单
   * @param key
   */
  renderSecondMenu = (secondMenuData, key, isNeedRenderChildMenu) => {
    if (isNeedRenderChildMenu) {
      this.setState({
        secondMenuData: secondMenuData
      })
    }
  }
  /**
   * 渲染菜单
   * @param menuData
   * @param isOneLevelMenu
   * @returns {Array}
   */
  renderMenuItem = (menuData, isOneLevelMenu) => {
    const result = [];
    if (menuData) {
      menuData.forEach((item, index) => {
        result.push(
          <Link
            key={item.key}
            className="top-menu-item"
            activeClassName="route--active"
            to={item.path}
            onClick={this.renderSecondMenu.bind(this, item.children, item.path, isOneLevelMenu)}
          >
            <span className="nav-text">{item.name}</span>
          </Link>
        )
      });
    }
    return result;
  }
  render() {
    const {menuData} = this.props;
    const {secondMenuData} = this.state;
    return (
      <div>
        <div className="fristMenu">{this.renderMenuItem(menuData, true)}</div>
        <div className="scondMenu">{this.renderMenuItem(secondMenuData)}</div>
      </div>
    )
  }
}

export default Menu
