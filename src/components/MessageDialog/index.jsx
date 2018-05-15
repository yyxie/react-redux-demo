import 'antd/lib/modal/style/index.less';
import {ModalFuncProps} from 'antd/lib/modal/Modal'
import confirm from './confirm';

const MessageDialog = {};
MessageDialog.info = function (props = ModalFuncProps) {
  const config = {
    type: 'info',
    iconType: 'info-circle',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

MessageDialog.success = function (props = ModalFuncProps) {
  const config = {
    type: 'success',
    iconType: 'check-circle',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

MessageDialog.error = function (props = ModalFuncProps) {
  const config = {
    type: 'error',
    iconType: 'cross-circle',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

MessageDialog.warning = function (props = ModalFuncProps) {
  const config = {
    type: 'warning',
    iconType: 'exclamation-circle',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

MessageDialog.confirm = function (props = ModalFuncProps) {
  const config = {
    type: 'confirm',
    okCancel: true,
    ...props,
  };
  return confirm(config);
};

export default MessageDialog;
