import Editor from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'editor',
  component: Editor,
  onEnter: checkLogin,
  onLeave: routerLeave
}
