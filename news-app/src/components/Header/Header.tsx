import './Header.css'
import {Link} from 'react-router-dom'
export default function Header() {

  return (
    <div className="header-wrapper">
        <div className='header-news-info-title'><Link className='home-link' to={'/'}>News-info</Link></div>
        <div className="header-banner">NEWS</div>
    </div>
  )
}
