import Drag from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'drag',
  component: Drag,
  onEnter: checkLogin,
  onLeave: routerLeave
}
