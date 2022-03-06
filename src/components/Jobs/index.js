import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import Profile from '../Profile'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs-container">
      <form>
        <div className="search-container">
          <input type="search" placeholder="Search" className="search" />
          <button type="button" testid="searchButton" className="button">
            <BsSearch className="search-icon" />
          </button>
        </div>
      </form>
      <Profile />
      <hr className="line" />
    </div>
  </>
)

export default Jobs
