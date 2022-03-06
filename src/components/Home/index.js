import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="heading">Find The Job That Fits Your Life</h1>
      <p className="description">
        millions of people are searching for jobs,salary information,
        <br /> company reviews.Find the job that fits your abilities and
        potential
      </p>
      <Link to="/jobs">
        <div>
          <button type="button" className="find-job-btn">
            Find jobs
          </button>
        </div>
      </Link>
    </div>
  </>
)

export default Home
