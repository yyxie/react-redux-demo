import Home from './container'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  component: Home,
  onEnter: checkLogin,
  onLeave: routerLeave
}
