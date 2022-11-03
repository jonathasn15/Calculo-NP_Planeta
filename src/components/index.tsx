import { faixa } from "../helpers/calculate";
import styles from "./GridItem.module.css";
import felizImage from "../assets/feliz.png";
import indiImage from "../assets/indiferente.png"
import tedioImage from "../assets/entediado.png"
import {calculate} from "../helpers/calculate"

type Props = {
    item: faixa;
};

export const GridItem = ({ item }: Props) => {
    return(
        <div className={styles.main} style={{ backgroundColor: item.color}}>

        <div className={styles.gridIcon}>
            <img src={
                item.icon === 'feliz' ? felizImage : item.icon === 'entediado' ? tedioImage : indiImage} 
                alt="" width="25" />
        </div>
        <div className={styles.gridTitle}>
            {item.title}
        </div>
        {item.atraso && 
        <div className={styles.yorImc}> Dias em atraso: {item.atraso} dias<br/>
        Desconto de: <strong>{item.desconto}</strong><br/>
        Valor base é: R$ {item.valorBase}<br/>
        
        {item.title === 'Faixa 0' &&
        <div className={styles.yorImc}>
            Valor do desconto: R${item.descTotal}<br/>
            Valor MINIMO a pagar: R$ <strong>{item.valorPay}</strong><br/>
            Valor do boleto: R$ <strong>{item.valorBol}</strong>
        </div>
        }
                    
        {item.title === 'Faixa 1' &&
        <div className={styles.yorImc}>
            Valor MÁXIMO do desconto: R${item.descTotal123}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123}</strong>
        </div>
        }
                    
         {item.title === 'Faixa 2' &&
        <div className={styles.yorImc}>
            Valor MÁXIMO do desconto: R${item.descTotal123}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123}</strong>
        </div>
        }
                    
         {item.title === 'Faixa 3' &&
        <div className={styles.yorImc}>
         Valor MÁXIMO do desconto: R${item.descTotal123}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123}</strong>
        </div>
                  }      
      {item.title === 'Faixa 4' &&
            item.atraso <= 5400 &&
                <div className={styles.yorImc}>
                Valor MÁXIMO do desconto: R${item.descP50}<br/>
                Valor a pagar: R$ <strong>100,00</strong><br/>
                Valor do boleto: R$ <strong>101,00</strong>
                </div>
        }
        {item.title === 'Faixa 4' &&
            item.atraso >= 5401 &&
                <div className={styles.yorImc}>
                Valor MÁXIMO do desconto: R${item.descP50}<br/>
                Valor a pagar: R$ <strong>50,00</strong><br/>
                Valor do boleto: R$ <strong>51,00</strong>
                </div>
        }
                    
        </div>
        
        }
        <div className={styles.gridInfo}>
            <>
            Devedor de <strong>{item.anos[0]}</strong> a <strong>{item.anos[1]}</strong> anos
            </>
        </div>
            
        </div>
    );
}
