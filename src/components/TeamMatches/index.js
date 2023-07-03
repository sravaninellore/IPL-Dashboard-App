// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = [await response.json()]
    console.log(matchData)

    const updatedData = matchData.map(eachObj => ({
      latestMatchDetails: eachObj.latest_match_details,
      recentMatches: eachObj.recent_matches,
      teamBannerUrl: eachObj.team_banner_url,
    }))

    console.log(updatedData)

    let {latestMatchDetails, recentMatches} = updatedData[0]
    const {teamBannerUrl} = updatedData[0]

    latestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    recentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      matchDetails: {latestMatchDetails, recentMatches, teamBannerUrl},
      isLoading: false,
    })
  }

  getBackgroundClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'KXP':
        return 'kxp'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'srh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  render() {
    const backgroundClassName = this.getBackgroundClassName()
    const {matchDetails, isLoading} = this.state

    console.log(matchDetails)

    const {latestMatchDetails, recentMatches, teamBannerUrl} = matchDetails

    return (
      <div className={`${backgroundClassName} bg-container`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <p className="latest-matches-label">Latest Matches</p>
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatchDetails={latestMatchDetails}
            />
            <ul className="recent-matches">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} recentMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
