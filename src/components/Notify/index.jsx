import 'antd/lib/modal/style/index.less';
import {ModalFuncProps} from 'antd/lib/modal/Modal'
import confirm from './confirm';
import './index.less';

const Notify = {};
Notify.info = function (props = ModalFuncProps) {
  const config = {
    type: 'info',
    iconType: 'info-circle-o',
    ...props,
  };
  return confirm(config);
};

Notify.success = function (props = ModalFuncProps) {
  const config = {
    type: 'success',
    iconType: 'check-circle-o',
    ...props,
  };
  return confirm(config);
};

Notify.error = function (props = ModalFuncProps) {
  const config = {
    type: 'error',
    iconType: 'cross-circle-o',
    ...props,
  };
  return confirm(config);
};

Notify.warning = function (props = ModalFuncProps) {
  const config = {
    type: 'warning',
    iconType: 'exclamation-circle-o',
    ...props,
  };
  return confirm(config);
};

Notify.confirm = function (props = ModalFuncProps) {
  const config = {
    type: 'confirm',
    ...props,
  };
  return confirm(config);
};

export default Notify;
