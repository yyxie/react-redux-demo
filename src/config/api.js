const apiBaseUrl = '/saas20/api/2018020501/Apartment';

export default {
  Login: {
    signinUrl: apiBaseUrl + '/staff/authenticate',
    sendSignupCode: apiBaseUrl + '/message/sendcode',
    signup: apiBaseUrl + '/customer/register',
    authMobile: apiBaseUrl + '/customer/authen/mobile',
    resetpwd: apiBaseUrl + '/customer/resetpwd/mobile',

  },
  Home: {
    fristData: apiBaseUrl + '/free/largescreenview/energy/consumption',
  }
}
