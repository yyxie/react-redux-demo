import Home from './Home'

export const createRoutes = (store) => ({
  path: '/',
  // component: CoreLayout,
  indexRoute: Home,
  /* childRoutes: [
       HomeRoute(store)
   ]*/
})


export default createRoutes
