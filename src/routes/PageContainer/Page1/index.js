import Page1 from './container';
import {checkLogin, routerLeave} from '../../../utils/util';

export default {
  path: 'path1',
  component: Page1,
  onEnter: checkLogin,
  onLeave: routerLeave
}
