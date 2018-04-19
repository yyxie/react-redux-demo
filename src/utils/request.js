import axios from 'axios';
import {browserHistory} from 'react-router';
import Common from '../common/common';
import {message} from 'antd';

var CancelToken = axios.CancelToken;
var source = CancelToken.source();
//拦截发送请求
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers['access-token'] = token;
  config.loadingEle && Common.setLoading(config.loadingEle);
  return config;
}, function (error) {
  return Promise.reject(error);
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  const data = response.data;
  response.config.loadingEle && Common.removeLoading(response.config.loadingEle);
// 根据返回的code值来做不同的处理（和后端约定）
  if (data.errorCode === 0) {
    // 不显示提示消息
    data.description = '';
    localStorage.removeItem('token');
    browserHistory.push('/login');
    return data;
  }

}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误';
        break;

      case 401:
        err.message = '未授权，请登录';
        break;

      case 403:
        err.message = '拒绝访问';
        break;

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`;
        break;

      case 408:
        err.message = '请求超时';
        break;

      case 500:
        err.message = '服务器内部错误';
        break;

      case 501:
        err.message = '服务未实现';
        break;

      case 502:
        err.message = '网关错误';
        break;

      case 503:
        err.message = '服务不可用';
        break;

      case 504:
        err.message = '网关超时';
        break;

      case 505:
        err.message = 'HTTP版本不受支持';
        break;

      default:
    }
  }
  err.config.loadingEle && Common.removeLoading(err.config.loadingEle);
  message.error(err.message);
  return Promise.reject(err);
})

export const request = (url, param, method = 'get', loadingEle, option = {}) => {
  return axios({
    method: method,
    url: url,
    data: param,
    loadingEle: loadingEle,
    ...option
  })
}
