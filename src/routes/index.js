import Home from './Home';
import Page1 from './PageContainer/Page1';
import Page2 from './PageContainer/Page2';
import Center from './Center';
import BasicLayout from '../layouts/BasicLayout';
import Login from './User/Login';
import Register from './User/Register';

export const createRoutes = (store) => ([{
  path: '/',
  component: BasicLayout,
  indexRoute: Home
}, {
  path: '/wrapper',
  component: BasicLayout,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/wrapper/path1')
  },
  childRoutes: [
    Page1,
    Page2
  ]
}, Login, ...Register, Center])


export default createRoutes
