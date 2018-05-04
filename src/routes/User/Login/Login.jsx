import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import {Checkbox, Alert, Icon, message} from 'antd';
import Login from '../../../components/Login';
import './Login.less';
import Api from '../../../config/api';
import {request} from '../../../utils/request';

const {Tab, UserName, Password, Mobile, Captcha, Submit} = Login;

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

  handleSubmit(err, values) {
    let {preUrl} = this.props.location.query;

    if (!err) {
      request(Api.Login.signinUrl, {
        username: values.userName,
        pwd: values.passWord
      }, 'post', 'root')
        .then(result => {
          console.log('进入then方法');
          if (result.errorCode === 0 && result.data) {
            localStorage.userInfo = JSON.stringify(result.data);

            let redirectUrl = '/';

            if (preUrl) {
              redirectUrl = preUrl;
            }

            hashHistory.push(redirectUrl);
          }
        })
    }
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
    const {login = {}, submitting} = this.props;
    const {type} = this.state;
    return (
      <div className="main">
        <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
          <Tab key="account" tab="账户密码登录">
            {login.status === 'error' &&
            login.type === 'account' &&
            !login.submitting &&
            this.renderMessage('账户或密码错误（admin/888888）')}
            <UserName name="userName" placeholder="admin/user" />
            <Password name="passWord" placeholder="888888/123456" />
          </Tab>
          <Tab key="mobile" tab="手机号登录">
            {login.status === 'error' &&
            login.type === 'mobile' &&
            !login.submitting &&
            this.renderMessage('验证码错误')}
            <Mobile name="mobile" />
            <Captcha name="captcha" />
          </Tab>
          <div>
            <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
              自动登录
            </Checkbox>
            <Link style={{float: 'right'}} to="/forget-password">
              忘记密码
            </Link>
          </div>
          <Submit loading={submitting}>登录</Submit>
          <div className="other">
            其他登录方式
            <Icon className="icon" type="alipay-circle" />
            <Icon className="icon" type="taobao-circle" />
            <Icon className="icon" type="weibo-circle" />
            <Link className="register" to="/register">
              注册账户
            </Link>
          </div>
        </Login>
      </div>
    );
  }
}
