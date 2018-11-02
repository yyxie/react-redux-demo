import IntroTest from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'intro',
  component: IntroTest,
  onEnter: checkLogin,
  onLeave: routerLeave
}
