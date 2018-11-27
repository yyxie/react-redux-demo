import React from 'react'
import './style.less';

const newsList = [
  {
    title: '作者声明',
    content: 'jquery纵向定位滚屏特效代码,是个人业余兴趣爱好写的，是基于jquery一个特效，没有任何封装，只是提供一种思考方式和实现方法，代码共享可随便使用，可能存在bug，但本人不承担任何修复bug的责任。'
  },
  {
    title: '电影新闻',
    content: `乔治·R·R·马丁用一部奇幻巨著笼络了亿万粉丝，终使得它被搬上小荧屏，却炮制出了瑰丽如电影的史诗之作。紧接着，它创造高收视，成为金球与艾美的常客，以大投资获得大回报，更吊足了“冰火迷”的胃口。
  自2011年暖春推出《权力的游戏》以来，第一季的浩瀚铺陈，第二季的华丽发展，至今年第三季的彪悍回归，HBO缔造了美剧史上的一段奇迹，赢得口碑与收视的大高潮。七国争战的壮烈、宫廷权谋的迂回、人性与兽性的激烈碰撞，以及活色生香的
  情色场面，使得它光彩熠熠，且一直呈“渐入佳境”的趋势。如今《权力的游戏》带着它浩荡的异鬼军团，以及错综复杂的人际关系脉络，再次让观众一同见证辉煌，以彰显其恢弘与细腻，美丽与残酷。让我们在此用图解的形式回溯这部神作的“前世今生”
  ，解读它的伟大，并且一同期待它华丽的后续吧！`
  },
  {
    title: '人物新闻',
    content: `乔治·R·R·马丁用一部奇幻巨著笼络了亿万粉丝，终使得它被搬上小荧屏，却炮制出了瑰丽如电影的史诗之作。紧接着，它创造高收视，成为金球与艾美的常客，以大投资获得大回报，
    更吊足了“冰火迷”的胃口。 自2011年暖春推出《权力的游戏》以来，第一季的浩瀚铺陈，第二季的华丽发展，至今年第三季的彪悍回归，HBO缔造了美剧史上的一段奇迹，赢得口碑与收视的大高潮。
    七国争战的壮烈、宫廷权谋的迂回、人性与兽性的激烈碰撞，以及活色生香的情色场面，使得它光彩熠熠，且一直呈“渐入佳境”的趋势。如今《权力的游戏》带着它浩荡的异鬼军团，以及错综复杂的
    人际关系脉络，再次让观众一同见证辉煌，以彰显其恢弘与细腻，美丽与残酷。让我们在此用图解的形式回溯这部神作的“前世今生”，解读它的伟大，并且一同期待它华丽的后续吧！这场“权力的游戏”，
    观众将奉陪到底！本专题将图解“冰火”数字图腾，换个轻松的角度，迎接冰火的回归。`
  }, {
    title: '电视新闻',
    content: `乔治·R·R·马丁用一部奇幻巨著笼络了亿万粉丝，终使得它被搬上小荧屏，却炮制出了瑰丽如电影的史诗之作。紧接着，它创造高收视，成为金球与艾美的常客，以大投资获得大回报，
    更吊足了“冰火迷”的胃口。自2011年暖春推出《权力的游戏》以来，第一季的浩瀚铺陈，第二季的华丽发展，至今年第三季的彪悍回归，HBO缔造了美剧史上的一段奇迹，赢得口碑与收视的大高潮。
    七国争战的壮烈、宫廷权谋的迂回、人性与兽性的激烈碰撞，以及活色生香的情色场面，使得它光彩熠熠，且一直呈“渐入佳境”的趋势。如今《权力的游戏》带着它浩荡的异鬼军团，以及错综复杂的
    人际关系脉络，再次让观众一同见证辉煌，以彰显其恢弘与细腻，美丽与残酷。让我们在此用图解的形式回溯这部神作的“前世今生”，解读它的伟大，并且一同期待它华丽的后续吧！这场“权力的游戏”，
    观众将奉陪到底！本专题将图解“冰火”数字图腾，换个轻松的角度，迎接冰火的回归。`
  }, {
    title: 'wzh',
    content: `如今《权力的游戏》带着它浩荡的异鬼军团，以及错综复杂的人际关系脉络，再次让观众一同见证辉煌，以彰显其恢弘与细腻，美丽与残酷。让我们在此用图解的形式回溯这部神作的“前世今生”，'
    解读它的伟大，并且一同期待它华丽的后续吧！这场“权力的游戏”，观众将奉陪到底！本专题将图解“冰火”数字图腾，换个轻松的角度，迎接冰火的回归。如今《权力的游戏》带着它浩荡的异鬼军团，以及
    错综复杂的人际关系脉络，再次让观众一同见证辉煌，以彰显其恢弘与细腻，美丽与残酷。让我们在此用图解的形式回溯这部神作的“前世今生”，解读它的伟大，并且一同期待它华丽的后续吧！这场“权力的游戏”
    ，观众将奉陪到底！本专题将图解“冰火”数字图腾，换个轻松的角度，迎接冰火的回归。`
  }]

class FollowScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount() {
    /* 滚轮事件 */
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  }

  scrollFunc = (e) => {
    debugger;
    const heightArr = [0];
    let height = 0;
    for (let i = 1, len = $('.con').length; i < len; i++) {
      height += Math.abs($($('.con')[i - 1])
        .height());
      heightArr.push(height);
    }
    console.log(heightArr);
    for (let l = heightArr.length, j = 0; j < l; j++) {
      if (j + 1 === l) {
        this.setState({
          currentIndex: j
        })
        break;
      } else if (Math.abs($('#content')
        .scrollTop()) >= heightArr[j] && Math.abs($('#content')
        .scrollTop()) < heightArr[j + 1]) {
        this.setState({
          currentIndex: j
        })
        break;
      }
    }
  }
  goToFun = (index) => {
    let direct = 0;
    const len = document.getElementById('box' + index).offsetTop;//获取div层到页面顶部的高度
    direct = 0;
    $('#content')
      .stop()
      .animate({scrollTop: len}, 300, 'swing', () => {
        direct = 0;
      });
    this.setState({
      currentIndex: index
    })
  }

  renderContent = () => {
    return newsList.map((item, index) => {
      return (
        <div
          className="con"
          id={`box${index}`}>
          <h3> {item.title}</h3>
          <p>{item.content}</p>
        </div>
      )
    })
  }

  renderMenu = () => {
    const {currentIndex} = this.state;
    return newsList.map((item, index) => {
      return (
        <li onClick={this.goToFun.bind(this, index)} className={currentIndex === index ? 'on' : ''}><a>{item.title}</a></li>
      )
    })
  }

  // render
  // 关键是data-step 和 data-intro
  render() {
    return (
      <div>
        <h1 style={{
          width: '100%',
          height: '100px',
          textAlign: 'center',
          background: '#e46239',
          lineHeight: '100px'
        }}>
          title 标题
        </h1>
        <div
          id="wrapper"
          style={{
            position: 'relative',
          }}>
          <div
            id="content">
            {this.renderContent()}
          </div>
          <div className="hside">
            <h3>导航</h3>
            <div className="sideGuide">
              <ul>
                {this.renderMenu()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowScroll
