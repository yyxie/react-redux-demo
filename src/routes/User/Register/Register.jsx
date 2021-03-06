import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import {Form, Input, Button, Row, Col, message, Checkbox, Modal} from 'antd';
import './Register.less';
import {request} from '../../../utils/request';
import Api from '../../../config/api';
import constants from '../../../config/constants';
import AgreementTxt from './AgreementTxt';

const FormItem = Form.Item;

@Form.create()
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showAgreementModal: false,
      codeImgUrl: 'http://img.zcool.cn/community/01d4f75af411f3a80121604567f3b6.jpeg@520w_390h_1c_1e_1o_100sh.jpg'
    };
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
  /**
   * 更新图片
   */
  changeImgCode = () => {
    this.setState({
      codeImgUrl: `http://img.zcool.cn/community/01d4f75af411f3a80121604567f3b6.jpeg@520w_390h_1c_1e_1o_100sh.jpg?i=${Math.random() * 10}`
    })
  }
  /**
   * 注册提交
   * @param e
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({force: true}, (err, values) => {
      if (!err) {
        //请求获取验证码接口
        request(Api.Login.signup, {
          checkCode: values.checkCode,
          mobile: values.mobile,
          password: values.password
        }, 'post', 'root')
          .then(result => {
            message.success(constants.Message.MobileCodeMessage);
            setTimeout(() => {
              hashHistory.push('/login');
            }, 3000)
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
        help: '请设置密码！',
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

  onAgreementClick = (e) => {
    e.preventDefault();
    this.setState({showAgreementModal: true})
  };

  setAgreementVisible = (isVisible) => {
    this.setState({
      showAgreementModal: isVisible
    })
  }

  render() {
    const {form, submitting} = this.props;
    const {getFieldDecorator} = form;
    const {count, codeImgUrl} = this.state;
    return (
      <div className="register">
        <h3>注册</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('mobile', {
              rules: [
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ],
            })(<Input size="large" placeholder="请输入常用手机号" maxLength={11} />)}
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col span={16}>
                {getFieldDecorator('checkCode', {
                  rules: [
                    {
                      required: true,
                      message: '请输入图片验证码！',
                    },
                  ],
                })(<Input size="large" placeholder="请输入图片验证码" />)}
              </Col>
              <Col span={8}>
                <img alt="获取图片验证码失败"
                     style={{
                       width: '100%',
                       height: '50px'
                     }}
                     src={codeImgUrl}
                     onClick={this.changeImgCode} />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col
                span={16}>
                {getFieldDecorator('checkCode', {
                  rules: [
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ],
                })(<Input size="large" placeholder="请输入短信验证码" />)}
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  disabled={count}
                  className="getCaptcha"
                  onClick={this.onGetCaptcha}
                >
                  {count ? `${count} s` : '获取验证码'}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem help={this.state.help}>
            {getFieldDecorator('password', {
              rules: [
                {
                  validator: this.checkPassword,
                },
              ],
            })(<Input size="large" type="password" placeholder="请输入6-16位密码" maxLength={16} />)}
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
            })(<Input size="large" type="password" placeholder="确认密码" maxLength={16} />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm2')(<Checkbox>已阅读并同意</Checkbox>)}
            <span onClick={this.onAgreementClick} className="agreen-txt-link">《使用条款及隐私说明》</span>
          </FormItem>
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
            >
              注册
            </Button>
          </FormItem>
        </Form>
        <Link className="direct-login" to="/login">
          已有账户,马上登录
        </Link>
        <Modal
          visible={this.state.showAgreementModal}
          cancelText="关闭"
          onCancel={() => this.setAgreementVisible(false)}
        >
          <AgreementTxt />
        </Modal>
      </div>
    );
  }
}
