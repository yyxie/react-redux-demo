import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.css'

export const Header = () => (
  <div>
    <h2><a href='https://bodyno.com' target='_blank'>bodyno</a></h2>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/path1' activeClassName='route--active'>
      path1
    </Link>
    {' · '}
    <Link to='/path2' activeClassName='route--active'>
      path2
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName='route--active'>
      404
    </Link>
  </div>
)

export default Header
