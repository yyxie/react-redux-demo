import React, {Component} from 'react';
import {Form, Input, Button, Row, Col, message} from 'antd';
import {request} from '../../../utils/request';
import Api from '../../../config/api';
import constants from '../../../config/constants';
import './ForgetPassword.less';

const FormItem = Form.Item;
@Form.create()
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      confirmDirty: false,
      visible: false,
      help: '',
      prefix: '86',
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

  handleSubmit = e => {
    e.preventDefault();
    const {next} = this.props;
    this.props.form.validateFields({force: true}, (err, values) => {
      if (!err) {
        /*  //请求获取验证码接口
          request(Api.Login.resetpwd, {
            verifycode: values.checkCode,
            mobile: values.mobile,
            password: values.password,
            cardno: '1'
          }, 'post', 'root')
            .then(result => {
              message.success(result.message);*/
        next();
        /*  })
          .catch(error => {
            clearInterval(this.interval);
            this.setState({count: 0});
            message.error(error.message);
          });*/
      }
    });
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

  /**
   * 更新图片
   */
  changeImgCode = () => {
    this.setState({
      codeImgUrl: `http://img.zcool.cn/community/01d4f75af411f3a80121604567f3b6.jpeg@520w_390h_1c_1e_1o_100sh.jpg?i=${Math.random() * 10}`
    })
  }

  render() {
    const {form, submitting} = this.props;
    const {getFieldDecorator} = form;
    const {count, codeImgUrl} = this.state;
    return (
      <div className="getBack-password-container">
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
            })(<Input size="large" style={{width: '100%'}} placeholder="请输入注册时候使用的手机" />)}
          </FormItem>
          <FormItem>
            <Row gutter={8}>
              <Col span={16}>
                {getFieldDecorator('checkCode2', {
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
              <Col span={16}>
                {getFieldDecorator('checkCode', {
                  rules: [
                    {
                      required: true,
                      message: '请输入短信验证码！',
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
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              className="submit"
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
            >
              下一步
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
