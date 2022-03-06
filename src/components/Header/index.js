import {Link, withRouter} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'
import {FaEnvelope} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {Cookies} from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container header">
          <div>
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="header-icons">
            <ul className="nav-menu-list-mobile list-icon">
              <li className="nav-menu-item-mobile list-item">
                <Link to="/" className="nav-link">
                  <HiHome className="icons" />
                </Link>
              </li>

              <li className="nav-menu-item-mobile list-item">
                <Link to="/jobs" className="nav-link">
                  <FaEnvelope className="icons" />
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onClickLogout}
            >
              <FiLogOut className="icons" />
            </button>
          </div>
        </div>
        <div className="nav-bar-large-container">
          <div>
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <div>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/jobs" className="nav-link">
                  jobs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
