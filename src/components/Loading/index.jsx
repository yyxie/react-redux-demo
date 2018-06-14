import React from 'react';
import ReactDom from 'react-dom';
import {Spin} from 'antd';
import './ajaxloading.less';

/*class Loading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Spin />
     /!* <div className="ajax-async-spin-container">
        <p>
          <i className="fa fa-spinner fa-pulse fa-2x fa-fw margin-bottom ajax-async-spin" />
        </p>
      </div>*!/
    )
  }
}*/

//存放loading
let loadingObjects = {};

/**
 * 根据loadding父节点的id进行删除loading
 * @param id 父节点id
 */
export const removeLoading = (id) => {
  if (loadingObjects[id]) {
    // 效果处理
    const loadingObj = loadingObjects[id].parentNode;
    loadingObj.style.webkitFilter = '';
    loadingObj.style.filter = '';
    loadingObj.style.opacity = '';

    loadingObjects[id].parentNode.removeChild(loadingObjects[id]);
    delete loadingObjects[id];
  }
}

/**
 * 渲染loadding到指定父节点下
 * @param id 父节点id
 */
export const renderLoading = (id) => {
  let ele;
  let loadingStyles = 'ajax-async-loading';
  if (id !== 'body') {
    // 局部
    ele = document.getElementById(id);
    const computedStyle = getComputedStyle(ele, null);
    if (!computedStyle || !computedStyle.position || computedStyle.position !== 'absolute') {
      ele.style.position = 'relative';
      ele.style.height = '100%';
    }

    loadingStyles += ' load-child';

    // 效果处理
    ele.style.webkitFilter = 'blur(1px)';
    ele.style.filter = 'blur(1px)';
    ele.style.opacity = '0.7';
  } else {
    // 全局
    ele = document.body;

    loadingStyles += ' load-body';
    // 删除其他所有
    Object.keys(loadingObjects)
      .forEach((key) => {
        removeLoading(key);
      });
  }
  const loadingEle = document.createElement('div');
  loadingEle.setAttribute('class', loadingStyles);
  ele.appendChild(loadingEle);
  loadingObjects[id] = loadingEle;
  ReactDom.render(<Spin />, loadingEle)
}
