import { connect } from "react-redux"

import { GameModeSelector } from "./GameModeSelector"
import { selectGameMode } from "./reducers"

const mapStateToProps = state => ({ gameMode: state.gameMode })
const mapDispatchToProps = { selectGameMode }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameModeSelector)
