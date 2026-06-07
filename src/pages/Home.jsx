import CardGame from "../components/CardGame";
import mascotte from '../assets/mascotte.png'
import mathGame from '../assets/math_game.png'
import colorGame from '../assets/color_game.png'
export default function Home() {
  return (
    <>
      <section className="first-section">
        <div className="container">
          <div className="content-left">
            <h2>Ciao! A cosa giochiamo oggi?</h2>
            <p>Scegli un gioco per iniziare il divertimento!</p>
          </div>
          <div className="content-right">
            <img className="mascotte" src={mascotte} alt="Mascotte" />
          </div>
        </div>
      </section>

      <section className="second-section">
        <h3>Giochi</h3>
        <div className="cards-container">
          <CardGame
            imgGame={mathGame}
            title="Math Game"
            desc="Risolvi operazioni aritmetiche il più veloce possibile."
            link="/math"
            btnColor="#FFD200"
          />
          <CardGame
            imgGame={colorGame}
            title="Indovina il colore"
            desc="Riconosci il colore giusto prima che il tempo finisca."
            link="/color"
            btnColor="#A8E6CF"
          />
        </div>
      </section>
    </>
  );
}
