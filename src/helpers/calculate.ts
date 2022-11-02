export type faixa = {
        title: string;
        color: string;
        icon:'feliz' | 'indiferente' | 'entediado';
        dias: number[];
        valor:number[];
        atraso?:number;
        desconto:string;
        valorDesc:number;
        descTotal?:number;
        valorPay?:number;
        valorBase?:number;
        juros?:number;
        valorPay123?:number;
        descTotal123?:number;
        valorBol?:number;
        valorBol123?:number;

    }
    
    export const faixas: faixa[] = [


        //faixa 0
        { title: 'Faixa 0', color: '#F78907',desconto:'30% nos juros', valorDesc:0.30, icon:'feliz', dias:[0,180],valor:[0.01,99999999999999999],},
        { title: 'Faixa 0', color: '#F78907',desconto:'50% nos juros', valorDesc: 0.50, icon:'feliz', dias:[181,360],valor:[0.01,99999999999999999]},
        { title: 'Faixa 0', color: '#F78907',desconto:'100% nos juros', valorDesc:1, icon:'feliz', dias:[361,720],valor:[0.01,99999999999999999]},
        //faixa 1
        { title: 'Faixa 1', color: '#F0011A',desconto:'50% no Princiapal', valorDesc:0.50, icon:'indiferente', dias:[361,1440],valor:[0.01,99999999999999999]},
        { title: 'Faixa 2', color: '#F0011A',desconto:'60% no Princiapal', valorDesc:0.70, icon:'indiferente', dias:[1441,1800],valor:[0.01,9999999999999999]},
        { title: 'Faixa 3', color: '#F0011A',desconto:'70% no Princiapal', valorDesc:0.80, icon:'indiferente' , dias:[1801,3600],valor:[0.01,99999999999999]},
        //faixa 3
        { title: 'Faixa 4', color: '#A80C00',desconto:'Promocional Fixo de R$ 100,00', valorDesc:0, icon:'entediado', dias:[3601,5400],valor:[0.01,99999999999999]},
        { title: 'Faixa 4', color: '#A80C00',desconto:'Promocional Fixo de R$ 50,00', valorDesc:0, icon:'entediado', dias:[5401,999999999],valor:[0.01,999999999999999]},
        
    ];
    
    export const calculate = (date:string, valor:number, Juros:number) => {
    
        const now = new Date(); // Data de hoje
        const past = new Date(date); // Outra data no passado
        const diffTime =  now.valueOf() - past.valueOf() -1;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        //const duration = duration(now.diff(past));
        let dias = diffDays - 1;
        // Mostra a diferença em dias

        
        for(let i in faixas){
                if(dias >= faixas[i].dias[0]  && dias < faixas[i].dias[1]
                         && valor >= faixas[i].valor[0] && valor < faixas[i].valor[1]  ){
                    let levelCopy:faixa = {...faixas[i]};
                    levelCopy.atraso = parseFloat(dias.toFixed(2));
                    levelCopy.valorBase = valor + Juros;
                    levelCopy.juros = Juros;//(valor * 0.0033) * levelCopy.atraso
                    levelCopy.descTotal= levelCopy.juros * levelCopy.valorDesc;
                    levelCopy.descTotal123= (valor + levelCopy.juros) * levelCopy.valorDesc;
                    
                    levelCopy.valorPay=(levelCopy.juros -(levelCopy.juros * levelCopy.valorDesc)) + valor ;
                    levelCopy.valorPay123 = (valor + levelCopy.juros) - (valor + levelCopy.juros) * levelCopy.valorDesc;
                    levelCopy.valorBol= levelCopy.valorPay+1
                    levelCopy.valorBol123= levelCopy.valorPay123+1
                    return levelCopy;
                }
            }
            
        return null;
    }





