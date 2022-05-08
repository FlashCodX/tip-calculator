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
    peopleHeaderContainer,
    label,
    boxContainer,
    customBtn,
    tipInfo,
  } = styles;


  const [bill, setBill] = useState('142.55')
  const [people, setPeople] = useState('5')
  const [tip, setTip] = useState('0.15');
  const [custom, setCustom] = useState(false);
  const [customTip, setCustomTip] = useState(0);


const calculateTotal = ()=> 
{
 


  //check for valid inputs
  if (isNaN(parseFloat(bill)) || isNaN(parseInt(people)) || isNaN( parseFloat(tip))) return
  
  
console.log('hello')


    // const value = ((bill+(bill*tip))/parseInt(people)).toFixed(2)
    // return parseInt(value) ? value: 0 
}
const calculateTipAmount = () => {
  return 0
  // const value= (bill*tip/parseInt(people)).toFixed(2)
  // return parseFloat(value) ? value: 0 
}

const performReset=()=>{
  // setBill(142.55) 
  setPeople('5') 
  // setTip(0.15)
}


const handlePeopleInput = (value:any)=>{
  setPeople(value)
}



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
              <input type="number" value={bill} 
             />
            </div>
          </div>

          <div className={boxContainer}>
            <h1 className={label}>Select Tip %</h1>
            <div className={tips}>
              <button 
              style={tip===0.05 ?{background:'var(--app-background)'}:{background:'var(--card-background)'} } 
               onClick={()=>setTip(0.05)}>5%</button>
              <button 
               style={tip===0.1 ?{background:'var(--app-background)'}:{background:'var(--card-background)'} }
              onClick={()=>setTip(0.1)}>10%</button>
              <button 
              style={tip===0.15 ?{background:'var(--app-background)'}:{background:'var(--card-background)'} }
              onClick={()=>setTip(0.15)}>15%</button>
              <button 
              style={tip===0.25 ?{background:'var(--app-background)'}:{background:'var(--card-background)'} }
              
              onClick={()=>setTip(0.25)}>25%</button>
              <button
              style={tip===0.50 ?{background:'var(--app-background)'}:{background:'var(--card-background)'} }
              onClick={()=>setTip(0.5)}>50%</button>
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
            <div className={peopleHeaderContainer}>
            <h1 className={label}>Number of People</h1>
            {people==='0' &&<p>Can't be zero</p>
            
            }
            </div>
            <div className={inputContainer}>
              <img src={person} alt="dollar" />
              <input className={customInput} value={people} 
              onChange={(e)=>handlePeopleInput(e.target.value)} 
              type="number" />
            </div>
          </div>
        </div>

        <div className={resultsContainer}>
          <div className={tipAmount}>
            <div className={tipInfo}>
              <h1>Tip Amount</h1>
              <p>/ Person</p>
            </div>
            <p>${calculateTipAmount()}</p>
          </div>

          <div className={tipAmount}>
            <div className={tipInfo}>
              <h1>Total</h1>
              <p>/ Person</p>
            </div>
            <p>${calculateTotal()}</p>
          </div>
          <button onClick={()=>performReset()}>Reset</button>
        </div>
      </div>
    </main>
  );
}

export default App;
