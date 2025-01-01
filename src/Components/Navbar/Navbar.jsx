import './Navbar.css'
import { Link } from 'react-router-dom'

/* import Logo from '../../assets/images/background-abstract-1.jpg' */

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <ul className='navbarList'>
        <li className='navbarListItem'>
          <Link className='link' to='/'>HOME</Link>
        </li>
        <li className='navbarListItem'>
          <Link className='link' to='/journal'>JOURNAL</Link>
        </li>
        <li className='navbarListItem'>
          <Link className='link' to='/tradesData'>TradesData</Link>
        </li>
        <li className='navbarListItem'>
          <Link className='link' to='/record'>Record Trade</Link>
        </li>
        {/* <li className='navbarListItem'>
          <Link className='link' to='/screenshots'>SCREENSHOTS</Link>
        </li> */}
        {/* <li className='navbarListItem'>
          <Link className='link' to='/signup'>SIGNUP</Link>
        </li> */}
        {/* <li className='navbarListItem'>
          <Link className='link' to='/login'>LOGIN</Link>
        </li> */}
        <li className='navbarListItem'>
          <Link className='link' to='/about'>ABOUT</Link>
        </li>
        <li className='navbarListItem'>
          <Link className='link' to='/contact'>CONTACT</Link>
        </li>                   
      </ul>
    </div>
  )
  
}

export default Navbar