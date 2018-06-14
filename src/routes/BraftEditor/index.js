import BraftEditor from './components'
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: 'braft-editor',
  component: BraftEditor,
  onEnter: checkLogin,
  onLeave: routerLeave
}
