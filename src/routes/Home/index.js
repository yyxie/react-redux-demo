/*import Home from './container'*/

export default {
  getComponent (nextState, cb) {
    const Home = require('./container').default;
    cb(null, Home)
  }
}
