import Center from './container';
import {checkLogin, routerLeave} from '../../utils/util';

export default {
  path: '/center',
  component: Center,
  //onEnter: checkLogin,
  onLeave: routerLeave
}
