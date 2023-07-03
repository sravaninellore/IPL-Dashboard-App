// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentMatch

  const matchStatusClassName =
    matchStatus === 'Won' ? 'match-won' : 'match-lose'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-recent-team-logo"
      />
      <p className="recent-competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
