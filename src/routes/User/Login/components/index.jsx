import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import {Checkbox, Alert, Form, Input, Button} from 'antd';
import './Login.less';

const FormItem = Form.Item;
@Form.create()
export default class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTabChange = type => {
    this.setState({type});
  };

  handleSubmit(e) {
    debugger;
    let {loginEvent} = this.props;
    e.preventDefault();
    this.props.form.validateFields({force: true}, (err, values) => {
      if (!err) {
        loginEvent({
          username: values.userName,
          pwd: values.passWord
        });
      }
    });
    /* request(Api.Login.signinUrl, {
       username: values.userName,
       pwd: values.passWord
     }, 'post', 'root')
       .then(result => {
         console.log('进入then方法');
         let redirectUrl = '/';
         let parms = {};
         if (result.errorCode === 0 && result.data) {
           localStorage.userInfo = JSON.stringify(result.data);
           if (result.data.staffList.length === 0) {
             message.error('未创建雇员, 请联系管理员!');
           } else if (result.data.staffList.length === 1) {
             redirectUrl = '/'
             parms = {id: result.data.person.id, staffId: result.data.staffList[0].id};
           } else if (result.data.staffList.length > 1) {
             redirectUrl = '/center';
             parms = {id: result.data.person.id};
           }

           if (preUrl) {
             redirectUrl = preUrl;
           }
           hashHistory.push({pathname: redirectUrl, query: parms});
         }
       })*/
  }

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => {
    return <Alert style={{marginBottom: 24}} message={content} type="error" showIcon />;
  };

  render() {
    const {login = {}, submitting, form} = this.props;
    const {type} = this.state;
    const {getFieldDecorator} = form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
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
            })(<Input size="large" placeholder="请输入常用手机号" />)}
          </FormItem>
          <FormItem help={this.state.help}>
            {getFieldDecorator('passWord', {
              rules: [
                {
                  validator: this.checkPassword,
                },
              ],
            })(<Input size="large" type="password" placeholder="请输入6-16位密码" />)}
          </FormItem>
          <div className="ant-form-item lf">
            <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
              一周之内免登录
            </Checkbox>
            <Link className="forget-password" to="/forget-password">
              忘记密码
            </Link>
          </div>
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
            >
              登录
            </Button>
          </FormItem>
        </Form>
        <Link className="to-register" to="/register">
          没有帐号，<span className="go-register">马上注册</span>
        </Link>
      </div>
    );
  }
}
