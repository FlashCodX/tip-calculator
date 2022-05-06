import styles from "../styles/app.module.css";

const dollar = require("../assets/icon-dollar.svg").default;
const person = require("../assets/icon-person.svg").default;

function App() {
  const {
    container,
    card,
    inputsContainer,
    inputContainer,
    tips,
    peopleContainer,
    resultsContainer,
    tipAmount,
    label,
    boxContainer,
    tipInfo,
  } = styles;
  return (
    <main className={container}>
      <h1>
        Spli <br /> tter
      </h1>
      <div className={card}>
        
        <div className={inputsContainer}>
          <div className={boxContainer}>
            <h1 className={label}>Bill</h1>
            <div className={inputContainer}>
              <img src={dollar} alt="dollar" />
              <input type="number" />
            </div>
          </div>

          <div className={boxContainer}>
            <h1 className={label}>Select Top %</h1>
            <div className={tips}>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button>Custom</button>
            </div>
          </div>

          <div className={peopleContainer}>
            <h1 className={label}>Number of People</h1>
            <div className={inputContainer}>
              <img src={person} alt="dollar" />
              <input type="number" />
            </div>
          </div>
        </div>

        <div className={resultsContainer}>
          <div className={tipAmount}>
            <div className={tipInfo}>
              <h1>Tip Amount</h1>
              <p>/ Person</p>
            </div>
            <p>$4.27</p>
          </div>

          <div className={tipAmount}>
            <div className={tipInfo}>
              <h1>Tip Amount</h1>
              <p>/ Person</p>
            </div>
            <p>$4.27</p>
          </div>

          <button>Reset</button>
        </div>
      </div>
      {/* <Preview /> */}
    </main>
  );
}

export default App;
