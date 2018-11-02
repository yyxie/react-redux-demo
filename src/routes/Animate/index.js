import Animate from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'rc-animate',
  component: Animate,
  onEnter: checkLogin,
  onLeave: routerLeave
}
