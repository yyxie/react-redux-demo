import * as React from 'react';
import Notification from 'rc-notification';
import {Icon} from 'antd';
import './index.less';

let defaultDuration = 3;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'top-notification';
let transitionName = 'move-up';
let getContainer
let maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification.newInstance({
    prefixCls,
    transitionName,
    getContainer,
    maxCount,
    style: {top: '20px', left: '50%'},
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}

function notice(content, duration, type, onClose) {
  let iconType = ({
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
  })[type];

  const target = key++;
  getMessageInstance((instance) => {
    instance.notice({
      key: target,
      duration: null,
      content: (
        <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
          {iconType ? <Icon type={iconType} /> : null}
          <div>{content}</div>
        </div>
      ),
      onClose,
      closable: true
    });
  });
  return () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
}

function noticeContainTitle(content, title, duration, type, onClose) {
  let iconType = ({
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
  })[type];

  const target = key++;
  getMessageInstance((instance) => {
    instance.notice({
      key: target,
      duration: null,
      content: (
        <div className={`${prefixCls}-custom-container ${prefixCls}-${type}`}>
          {iconType ? <Icon type={iconType} /> : null}
          <div>
            <div className={`${prefixCls}-custom-title`}>{title}</div>
            <div className={`${prefixCls}-custom-content`}>{content}</div>
          </div>
        </div>
      ),
      onClose,
      closable: true
    });
  });
  return () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
}

const TopNotify = {
  info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
// Departed usage, please use warning()
  warn(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  pure(content, duration, onClose) {
    return notice(content, duration, '', onClose);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }
    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
const TopNotifyContainTitle = {
  info(content, title, duration, onClose) {
    return noticeContainTitle(content, title, duration, 'info', onClose);
  },
  success(content, title, duration, onClose) {
    return noticeContainTitle(content, title, duration, 'success', onClose);
  },
  error(content, title, duration, onClose) {
    return noticeContainTitle(content, title, duration, 'error', onClose);
  },
  warn(content, title, duration, onClose) {
    return noticeContainTitle(content, duration, 'warning', onClose);
  },
  warning(content, title, duration, onClose) {
    return noticeContainTitle(content, duration, 'warning', onClose);
  },
  loading(content, title, duration, onClose) {
    return noticeContainTitle(content, title, duration, 'loading', onClose);
  },
  pure(content, title, duration, onClose) {
    return noticeContainTitle(content, title, duration, '', onClose);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }
    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
}
export {
  TopNotify,
  TopNotifyContainTitle
};
