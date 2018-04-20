const common = {};
common.loadingObjects = {};

// 参数 id: 需要loading遮罩覆盖的元素 id ,body 元素直接传入body字符串即可
// 作用：会在 id所对应的元素/body  上添加loading效果
common.setLoading = (id = 'body') => {
  common.removeLoading(id);

  let ele,
    loadingStyles = 'ajax-async-loading';
  if (id !== 'body') {
    // 局部
    ele = document.getElementById(id);
    const computedStyle = getComputedStyle(ele, null);
    if (!computedStyle || !computedStyle.position || computedStyle.position != 'absolute') {
      ele.style.position = 'relative';
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
    Object.keys(common.loadingObjects)
      .forEach((key) => {
        common.removeLoading(key);
      });
  }

  const loadingEle = document.createElement('div');
  loadingEle.setAttribute('class', loadingStyles);

  loadingEle.innerHTML = '<div class="ajax-async-spin-container">'
    + '  <p>'
    + '    <i class="fa fa-spinner fa-pulse fa-2x fa-fw margin-bottom ajax-async-spin"></i>'
    + '  </p>'
    + '</div>';

  ele.appendChild(loadingEle);
  common.loadingObjects[id] = loadingEle;
};


// 参数 id: 需要loading遮罩覆盖的元素 id ；body 为 'body'
// 作用：删除 id所对应的元素/body上的loading效果
common.removeLoading = (id = 'body') => {
  if (common.loadingObjects[id]) {
    // 效果处理
    const loadingObj = common.loadingObjects[id].parentNode;
    loadingObj.style.webkitFilter = '';
    loadingObj.style.filter = '';
    loadingObj.style.opacity = '';

    common.loadingObjects[id].parentNode.removeChild(common.loadingObjects[id]);
    delete common.loadingObjects[id];
  }
};

export default common;
