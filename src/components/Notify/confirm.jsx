import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import {Icon} from 'antd';
import Dialog from 'antd/lib/modal/Modal';

const IS_REACT_16 = !!ReactDOM.createPortal;

const ConfirmDialog = (props) => {
  const {close, zIndex, afterClose, visible, keyboard} = props;
  const iconType = props.iconType || 'question-circle-o';
  const prefixCls = props.prefixCls || 'custom-notify';
  const width = props.width || 416;
  const style = props.style || {};
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;

  const classString = classNames(
    prefixCls,
    `${prefixCls}-${props.type}`,
    props.className
  );

  return (
    <Dialog
      className={classString}
      onCancel={close.bind(this, {triggerCancel: true})}
      visible={visible}
      title=""
      animation="zoom"
      maskAnimation="fade"
      transitionName="zoom"
      footer=""
      maskTransitionName="fade"
      maskClosable={maskClosable}
      style={style}
      width={width}
      zIndex={zIndex}
      afterClose={afterClose}
      keyboard={keyboard}
    >
      <div className={`${prefixCls}-body-wrapper`}>
        <div className={`${prefixCls}-body`}>
          <Icon type={iconType} />
          <div className={`${prefixCls}-content`}>{props.content}</div>
        </div>
      </div>
    </Dialog>
  );
};
export default function confirm(config) {
  let div = document.createElement('div');
  document.body.appendChild(div);

  function destroy(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args && args.length &&
      args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
  }

  function render(props) {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  }

  function close(...args) {
    if (IS_REACT_16) {
      render({
        ...config,
        close,
        visible: false,
        afterClose: destroy.bind(this, ...args)
      });
    } else {
      destroy(...args);
    }
  }

  if (config && config.duration) {
    setTimeout(() => {
      if (IS_REACT_16) {
        render({
          ...config,
          close,
          visible: false,
        });
      } else {
        destroy();
      }
    }, config.duration);
  }
  render({
    ...config,
    visible: true,
    close
  });
  return {
    destroy: close,
  };
}
