import Page1 from './container';
import {checkLogin} from '../../../utils'

console.log(checkLogin);

export default {
  path: '/path1',
  component: Page1,
  onEnter: checkLogin
}
