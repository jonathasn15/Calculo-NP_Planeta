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
        NP permite: <strong>{item.desconto}</strong><br/>
        Valor Total: R$ {item.valorBase?.toFixed(2)}<br/>
        
        {item.title === 'Faixa 0' &&
        <div className={styles.yorImc}>
            Valor do desconto: R${item.descTotal?.toFixed(2)}<br/>
            Valor MINIMO a pagar: R$ <strong>{item.valorPay?.toFixed(2)}</strong><br/>
            Valor do boleto: R$ <strong>{item.valorBol?.toFixed(2)}</strong>
        </div>
        }
                    
        {item.title === 'Faixa 1' &&
        <div className={styles.yorImc}>
            Valor MÁXIMO do desconto: R${item.descTotal123?.toFixed(2)}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123?.toFixed(2)}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123?.toFixed(2)}</strong>
        </div>
        }
                    
         {item.title === 'Faixa 2' &&
        <div className={styles.yorImc}>
            Valor MÁXIMO do desconto: R${item.descTotal123?.toFixed(2)}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123?.toFixed(2)}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123?.toFixed(2)}</strong>
        </div>
        }
                    
         {item.title === 'Faixa 3' &&
        <div className={styles.yorImc}>
         Valor MÁXIMO do desconto: R${item.descTotal123?.toFixed(2)}<br/>
         Valor a pagar: R$ <strong>{item.valorPay123?.toFixed(2)}</strong><br/>
         Valor do boleto: R$ <strong>{item.valorBol123?.toFixed(2)}</strong>
        </div>
        }
                    
        {item.title === 'Faixa 4' &&
            
                <div className={styles.yorImc}>
                Valor MÁXIMO do desconto: R${item.descP100?.toFixed(2)}<br/>
                Valor pagar: R$ <strong>100,00</strong><br/>
                Valor do boleto: R$ <strong>101,00</strong>
                </div>}
                    
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
