import { Link } from 'react-router-dom'


export default function MainNav() {
  return (
     <header className='header'>
        <nav>
            <ul className='list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}
