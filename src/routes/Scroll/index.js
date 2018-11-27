import Scroll from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'follow-scroll',
  component: Scroll,
  onEnter: checkLogin,
  onLeave: routerLeave
}
