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
        NP Atualização: <strong>{item.descontoAtualização}</strong><br/>
        NP Quitação: <strong>{item.desconto}</strong><br/>
        Valor Total: R$ {item.valorBase?.toFixed(2)}<br/>
        
        {item.title === 'Faixa 0' &&
        <div className={styles.yorImc}>
            <hr />
            <br/>
            <p>Atualização:</p>
            {item.descTotalAtual === 0 ? (
                <p>para esse atraso não é possivel atualizar</p>
            ) : (
            <div>
                Valor do desconto: R${item.descTotalAtual?.toFixed(2)}<br/>
                Valor MINIMO a pagar: R$ <strong>{item.valorPayAtual?.toFixed(2)}</strong><br/>
            </div>
            )}

            <br/>
            <hr />
            <br/>
            <p>Quitação:</p>
            Valor do desconto: R${item.descTotal?.toFixed(2)}<br/>
            Valor MINIMO a pagar: R$ <strong>{item.valorPay?.toFixed(2)}</strong><br/>

        </div>
        }
                                    
        {item.title === 'Faixa 1' && (
        <div className={styles.yorImc}>
            {item.validPay !== undefined && item.valorPay123 < 50 ? (
                    <p>
                        Valor MÁXIMO do desconto: R${item.descP50?.toFixed(2)}<br/>
                        Valor a pagar: R$ <strong>50,00</strong><br/>
                    </p>
                    ) : ( 
                    <p>
                        Valor MÁXIMO do desconto: R${item.descTotal123?.toFixed(2)}<br/>        
                        Valor a pagar: R$ <strong>{item.valorPay123?.toFixed(2)}</strong><br/>
                    </p>
                    )}
            </div>
            )}
           
      
        <div className={styles.gridInfo}>
            <>
            Devedor de <strong>{item.anos[0]}</strong> a <strong>{item.anos[1]}</strong> anos
            </>
        </div>
            
        </div>
    );
}
