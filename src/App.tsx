import React, { useState } from 'react';
import styles from './App.module.css'
import PlanetaImage from './assets/Planeta-removebg-preview.png';
import {faixas, calculate, faixa} from './helpers/calculate';
import { GridItem } from './components/index';
import leftArrowImage from './assets/leftarrow.png';

const App = () => {

const [dateField, setdateField] = useState<string>('');
const [valorField, setValorField] = useState<number>(0);
const [jurosField, setJurosField] = useState<number>(0);
const [toShow, setToShow] = useState<faixa| null>(null);

const handleCalculeteButton = () =>{
  if(dateField && valorField && jurosField ){
    setToShow(calculate(dateField,valorField,jurosField));
  }else{
    alert("Digite todos os campos!")
  }
}

const handleBackButton = () =>{
  setToShow(null);
  setdateField('');
  setValorField(0);
  setJurosField(0);

}
  return(
 <div className={styles.main}>
   <header>
     <div className={styles.headerContainer}>
       <img src={PlanetaImage} alt="" width={150} />
     </div>
   </header>
   <div className={styles.container}>

      <div className={styles.leftSide}>
        <h1>Quitação de Debitos.</h1>
        <input 
        type="date"
        placeholder="Informe a data do ultimo vencimento" 
        value={dateField != '' ? dateField : ''} 
        onChange={e => setdateField(e.target.value)}
        disabled={toShow ? true : false}
         />
         <input 
        type="number"
        placeholder="Informe o valor do debito" 
        value={valorField > 0 ? valorField : ''} 
        onChange={e => setValorField(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
         />
          <input 
        type="number"
        placeholder="Informe o valor do Juros" 
        value={jurosField > 0 ? jurosField : ''} 
        onChange={e => setJurosField(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
         />

         <button onClick={handleCalculeteButton}
          disabled={toShow ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!toShow &&
        <div className={styles.grid}>
          {faixas.map((item,key)=>(
            <GridItem key={key} item={item}/>
          ))}
        </div>}
        {toShow &&
        <div className={styles.gridBig}>
          <div className={styles.rightArrow} onClick={handleBackButton}>
            <img src={leftArrowImage} alt="" width={25} />
          </div>
          <GridItem item={toShow} />
        </div>}
     
      </div>

   </div>
   
 </div>
  )
}

export default App;

