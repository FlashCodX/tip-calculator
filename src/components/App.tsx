import { useState } from "react";
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
    customInput,
    label,
    boxContainer,
    customBtn,
    tipInfo,
  } = styles;


  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [tip, setTip] = useState(5);
  const [custom, setCustom] = useState(false);
  const [customTip, setCustomTip] = useState(0);



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
              <button onClick={()=>setTip(5)}>5%</button>
              <button onClick={()=>setTip(10)}>10%</button>
              <button onClick={()=>setTip(15)}>15%</button>
              <button onClick={()=>setTip(25)}>25%</button>
              <button onClick={()=>setTip(50)}>50%</button>
              <button className={customBtn} onClick={()=>setCustom(true)}>
                {!custom &&<div>Custom</div>}
                {custom && 
                    <input className={customInput}  
                    type="number" 
                    value={customTip}
                     onChange={(e)=>setCustomTip(parseInt(e.target.value))} />
                }
              </button>
            </div>
          </div>

          <div className={peopleContainer}>
            <h1 className={label}>Number of People</h1>
            <div className={inputContainer}>
              <img src={person} alt="dollar" />
              <input className={customInput} type="number" />
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
