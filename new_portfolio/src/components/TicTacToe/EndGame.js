import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O WON" : "X WON"}</span>}
      {draw && <span className="win-text">DURRANG </span>}

      <span className="win-history">
        X yutdi: {winCount.X}
        <br />O yutdi: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        Qaytadan boshlash
      </button>
      <button className="btn" onClick={clearHistory}>
        Tarixni o'chirish
      </button>
    </div>
  );
}

export default EndGame;
