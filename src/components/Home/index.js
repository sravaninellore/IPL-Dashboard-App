// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamCardsData = await response.json()
    const {teams} = teamCardsData
    console.log(teams)

    const updatedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teams: updatedTeams, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="ipl-logo-heading">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1 className="ipl-heading">IPL Dashboard</h1>
              </div>
              <ul className="team-cards-container">
                {teams.map(eachTeam => (
                  <TeamCard key={eachTeam.id} teamCardDetails={eachTeam} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
