import Home from './Home';
import Page1 from './PageContainer/Page1';
import Page2 from './PageContainer/Page2';
import Center from './Center';
import BasicLayout from '../layouts/BasicLayout';
import Login from './User/Login';
import Register from './User/Register';
import ForgetPassword from './User/ForgetPassword';
import Editor from './Editor';
import BraftEditor from './BraftEditor';
import Intro from './Intro';
import IntroJs from './IntroJs';
import Drag from './Drag';
import Animate from './Animate';

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
    Page2,
    Intro,
    IntroJs,
    Drag
  ]
}, {
  path: '/editor',
  component: BasicLayout,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/editor/editor')
  },
  childRoutes: [
    Editor,
    BraftEditor
  ]
}, {
  path: '/intro',
  component: BasicLayout,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/intro/intro')
  },
  childRoutes: [
    Intro,
    IntroJs,
  ]
}, {
  path: '/animate',
  component: BasicLayout,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/animate/rc-animate')
  },
  childRoutes: [Animate]
}, Login, Register, Center, ForgetPassword])


export default createRoutes
