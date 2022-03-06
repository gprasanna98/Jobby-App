import {Component} from 'react'
import {Cookies} from 'js-cookie'
import './index.css'

class Profile extends Component {
  // state = {
  //  profile: [],
  // }

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
    } else {
      console.log('does not fetch data')
    }
  }

  render() {
    return (
      <>
        <h1>profile data</h1>
      </>
    )
  }
}

export default Profile
