import IntroJs from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'introjs',
  component: IntroJs,
  onEnter: checkLogin,
  onLeave: routerLeave
}
