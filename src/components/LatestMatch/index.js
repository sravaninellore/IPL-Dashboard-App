// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-details">
      <div className="first-section">
        <div className="first-box">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="second-box">
        <p className="side-heading">First Innings</p>
        <p>{firstInnings}</p>
        <p className="side-heading">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="side-heading">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="side-heading">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
