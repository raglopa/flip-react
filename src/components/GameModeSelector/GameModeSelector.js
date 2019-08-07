import React from "react"
import classNames from "classnames"

export const GameModeSelector = ({ gameMode, selectGameMode }) => (
  <div className="buttons has-addons">
    {gameMode.gameModes.map(mode => {
      const buttonClass = classNames({
        button: true,
        "is-medium": true,
        "is-outlined": gameMode.selectedGameMode !== mode,
        "is-primary": gameMode.selectedGameMode === mode
      })

      return (
        <button
          key={mode}
          className={buttonClass}
          onClick={() => selectGameMode(mode)}
        >
          <span>{mode}</span>
        </button>
      )
    })}
  </div>
)
