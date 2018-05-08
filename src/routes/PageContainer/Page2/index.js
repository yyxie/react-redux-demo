import Page2 from './container';
import {checkLogin, routerLeave} from '../../../utils/util';

export default {
  path: 'path2',
  component: Page2,
  onEnter: checkLogin,
  onLeave: routerLeave
}
