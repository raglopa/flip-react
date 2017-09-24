import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

const mapStateToProps = state => ({
  topList: state.board.topList,
  gameMode: state.gameMode.selectedGameMode,
})

let TopList = ({topList, gameMode}) => {
  return (
    <div>
      top score: {topList[gameMode]
      ? topList[gameMode]
      : (<span>no score yet</span>)}
    </div>
  )
}

TopList = connect(mapStateToProps, null)(TopList)

export default TopList
