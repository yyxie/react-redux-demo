import axios from 'axios';
import {hashHistory} from 'react-router';
import qs from 'qs';
import {message} from 'antd';
import Common from './common';

//拦截发送请求
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers['access-token'] = token;
  //添加loading
  config.loadingEle && Common.setLoading(config.loadingEle);
  return config;
}, (error) => {
  return Promise.reject(error);
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  const data = response.data;
  //删除loading
  response.config.loadingEle && Common.removeLoading(response.config.loadingEle);
  // 根据返回的code值来做不同的处理（和后端约定）
  if (data.errorCode === -9999) { //无权限
    // 不显示提示消息
    data.description = '';
    localStorage.removeItem('token');
    hashHistory.push('/login');
    return Promise.reject(data);
  }
  return data;
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
  } else {
    err.message = '网络断了';
  }
  //删除loading
  err.config.loadingEle && Common.removeLoading(err.config.loadingEle);
  return Promise.reject(err);
});

//content-type 类型映射
const contentTypeMapping = {
  'key-value': 'application/x-www-form-urlencoded',
  'form-data': 'multipart/form-data',
  text: 'text/plain',
  json: 'application/json'
};

export const request = (url, param, method = 'get', loadingEle, dataType = 'key-value', option = {}) => {
  return axios({
    method: method,
    url: url,
    data: dataType === 'key-value' ? qs.stringify(param) : param,
    headers: {
      'Content-type': contentTypeMapping[dataType]
    },
    loadingEle: loadingEle,
    ...option
  }).catch(error => {
    message.error(error.message);
    return Promise.reject(error);
  })
}

