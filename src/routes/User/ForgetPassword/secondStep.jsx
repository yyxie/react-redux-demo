import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {request} from '../../../utils/request';
import Api from '../../../config/api';
import constants from '../../../config/constants';
import './ForgetPassword.less';

const FormItem = Form.Item;
@Form.create()
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * 获取验证码
   */
  onGetCaptcha = () => {
    const {form} = this.props;
    form.validateFieldsAndScroll(['mobile'], {force: true}, (err, values) => {
      if (!err) {
        let count = 59;
        this.setState({count});
        this.interval = setInterval(() => {
          count -= 1;
          this.setState({count});
          if (count === 0) {
            clearInterval(this.interval);
          }
        }, 1000);
        //请求获取验证码接口
        request(Api.Login.sendSignupCode, {
          mobile: values.mobile,
          type: '00'
        }, 'post', 'root')
          .then(result => {
            message.success(constants.Message.MobileCodeMessage);
          })
          .catch(error => {
            clearInterval(this.interval);
            this.setState({count: 0});
            message.error(error.message);
          });
      }
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({force: true}, (err, values) => {
      if (!err) {
        //请求获取验证码接口
        request(Api.Login.resetpwd, {
          verifycode: values.checkCode,
          mobile: values.mobile,
          password: values.password,
          cardno: '1'
        }, 'post', 'root')
          .then(result => {
            message.success(result.message);
          })
          .catch(error => {
            clearInterval(this.interval);
            this.setState({count: 0});
            message.error(error.message);
          });
      }
    });
  };
  //两次密码校验
  checkConfirm = (rule, value, callback) => {
    const {form} = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  };
  /**
   * 密码校验
   * @param rule
   * @param value
   * @param callback
   */
  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        help: '请输入密码！',
        visible: !!value,
      });
      callback('error');
    } else {
      this.setState({
        help: '',
      });
      if (!this.state.visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], {force: true});
        }
        callback();
      }
    }
  };

  render() {
    const {form, submitting} = this.props;
    const {getFieldDecorator} = form;
    return (
      <div className="getBack-password-container">
        <h3>注册</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormItem help={this.state.help}>
            {getFieldDecorator('password', {
              rules: [
                {
                  validator: this.checkPassword,
                },
              ],
            })(<Input size="large" type="password" placeholder="至少6位密码，区分大小写" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认密码！',
                },
                {
                  validator: this.checkConfirm,
                },
              ],
            })(<Input size="large" type="password" placeholder="确认密码" />)}
          </FormItem>
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              className="submit"
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
            >
              提交
            </Button>
          </FormItem>
        </Form>
        <Button
          size="large"
          className="submit"
          type="primary"
          style={{width: '100%'}}
          onClick={this.props.prev}
        >
          上一步
        </Button>
      </div>
    );
  }
}
