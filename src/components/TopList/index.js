import React from "react"
import { connect } from "react-redux"
import "./style.scss"

const mapStateToProps = state => ({
  topList: state.board.topList,
  gameMode: state.gameMode.selectedGameMode
})

let TopList = ({ topList, gameMode }) => {
  return (
    <div className="TopList">
      {topList[gameMode] ? (
        <div>
          <table className="table is-striped is-narrow">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {topList[gameMode].map((play, index) => (
                <tr key={index} className="is-size-5">
                  <td>{index + 1}.</td>
                  <td>{play.player}</td>
                  <td>{play.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span>no scores yet</span>
      )}
    </div>
  )
}

TopList = connect(
  mapStateToProps,
  null
)(TopList)

export default TopList
