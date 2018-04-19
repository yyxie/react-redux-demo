import Home from './Home';
import Page1 from './PageContainer/Page1';
import Page2 from './PageContainer/Page2';
import BasicLayout from '../layouts/BasicLayout';
import OtherLayout from '../layouts/OtherLayout'
import Login from './User/Login';

export const createRoutes = (store) => ([{
  path: '/',
  component: OtherLayout,
  indexRoute: Home,
  childRoutes: [
    Login
  ]
}, {
  path: '/wrapper',
  component: BasicLayout,
  childRoutes: [
    Page1,
    Page2,
  ]
}])


export default createRoutes
