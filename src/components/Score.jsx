import { useNavigate } from "react-router-dom";

export default function Score({ points, onStart, isPoint }) {
  const navigate = useNavigate();

  return (
    <div className="game-not-started">
      {isPoint ? <h2>Punteggio: {points}</h2> : (<h2>Hai vinto!</h2>)}
      <div className="buttons-row">
        <button className="btn" onClick={onStart}>
          Gioca ancora
        </button>
        <button className="btn" onClick={() => navigate("/")}>
          Menu principale
        </button>
      </div>
    </div>
  );
}
