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

  const now = new Date(); // Data de hoje
  const past = new Date(dateField); // Outra data no passado
  const diffTime =  now.valueOf() - past.valueOf() -1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //const duration = duration(now.diff(past));
  let dias = diffDays - 1;

  if(dias > 120 ){
    if(dateField && valorField && jurosField){
      setToShow(calculate(dateField,valorField,jurosField));
    }else{
      alert("Digite todos os campos!")
    }
  }else{
    alert("Atrasos menores que 121 dias não entram na NP!!!")
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
        <h1>Simulador de Quitações.</h1><br/>
        <p>Lembre-se!!! Informe a data de vecimento da <strong>PARCELA MAIS ATRASADA</strong>, ou seja que tem mais dias em atraso.</p>
        <input 
        type="date"
        placeholder="Informe a data do ultimo vencimento" 
        value={dateField != '' ? dateField : ''} 
        onChange={e => setdateField(e.target.value)}
        disabled={toShow ? true : false}
         />
         <input 
        type="number"
        placeholder="Informe o valor PRINCIPAL do debito em atraso Ex: 1500,50" 
        value={valorField > 0 ? valorField : ''} 
        onChange={e => setValorField(parseFloat(e.target.value))}
        disabled={toShow ? true : false}
         />
          <input 
        type="number"
        placeholder="Informe o valor do Juros Ex: 210,50" 
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

