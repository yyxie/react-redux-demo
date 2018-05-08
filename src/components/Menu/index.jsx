import React from 'react'
import {hashHistory, Link} from 'react-router'
import './Menu.less'

let menuCount = 0;

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondMenuData: [],
      meunSelectKeys: JSON.parse(sessionStorage.getItem('meunSelectKeys')) || ['000000']
    }
  }

  componentWillMount() {
    //this.isRenderSecond();
    let secondMenuData = this.getMenuChild();
    this.setState({
      secondMenuData: secondMenuData
    })
  }

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

  setMenuSelectKeyDefault() {
    const {menuData} = this.props;
    const path = window.location.hash.match(/#(\S*)\?/);
    menuData.forEach((item, index) => {
      /* if (!item.children) {
         hashHistory.push(item.path);
       } else {
         meunSelectKeys.push(item.key);
         this.setState({
           meunSelectKeys: meunSelectKeys
         })
         this.setMenuSelectDefault(item.children)
       }*/
    })
    debugger;
  }

  /**
   * 保存选中菜单key
   * @param menuData 菜单数据
   */
  setMenuSelecKey = (menuData) => {
    debugger;
    const {meunSelectKeys} = this.state;
    menuData.forEach((item, index) => {
      if (!item.children) {
        hashHistory.push(item.path);
        sessionStorage.setItem('meunSelectKeys', JSON.stringify(meunSelectKeys));
      } else {
        meunSelectKeys.push(item.key);
        this.setState({
          meunSelectKeys: meunSelectKeys
        })
        sessionStorage.setItem('meunSelectKeys', JSON.stringify(meunSelectKeys));
        this.setMenuSelectDefault(item.children)
      }
    })
  }
  /**
   * 渲染二级菜单
   * @param secondMenuData
   * @param key
   */
  renderSecondMenu = (secondMenuData, key, isOneLevelMenu) => {
    if (isOneLevelMenu) {
      this.setState({
        secondMenuData: secondMenuData
        //meunSelectKeys: [key]
      }, () => {
        // this.setMenuSelecKey(secondMenuData);
      })
    }
  }
  /**
   * link菜单点击事件
   * @param key 菜单key
   * @param isOneLevelMenu 是否是一级菜单
   */
  linkClick = (key, isOneLevelMenu) => {
    this.setState({
      secondMenuData: []
    })
    if (isOneLevelMenu) {
      this.setState({
        meunSelectKeys: []
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
    const {meunSelectKeys} = this.state;
    menuData.forEach((item, index) => {
      menuCount++;
      /* if (item.children) {
         result.push(
           <div
             count={menuCount}
             key={item.key}
             className={meunSelectKeys.indexOf(item.key) !== -1 ? 'route--active menu-item' : 'menu-item'}
             onClick={this.renderSecondMenu.bind(this, item.children, item.key)}
           >
             <span className="nav-text">{item.name}</span>
           </div>
         )
       } else {*/
      result.push(
        <Link
          key={item.key}
          className="menu-item"
          activeClassName="route--active"
          to={item.path}
          onClick={this.renderSecondMenu.bind(this, item.children, item.path, isOneLevelMenu)}
          //onClick={this.linkClick.bind(this, item.key, isOneLevelMenu)}
        >
          <span className="nav-text">{item.name}</span>
        </Link>
      )
      //}
    });
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
