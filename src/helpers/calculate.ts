export type faixa = {
        title: string;
        color: string;
        icon:'feliz' | 'indiferente' | 'entediado';
        dias: number[];
        anos:number[];
        valor:number[];
        atraso?:number;
        desconto:string;
        descontoAtualização:string;
        valorDesc:number;
        valorDescAtual:number;
        descTotal?:number;
        descTotalAtual?:number;
        valorPay?:number;
        valorPayAtual?:number;
        valorBase?:number;
        juros?:number;
        valorPay123?:number;
        descTotal123?:number;
        valorBol?:number;
        valorBol123?:number;
        descP50?:number;
        validPay?:number;
        descP100?:number;

    }
    
    export const faixas: faixa[] = [


        //faixa 0
        { title: 'Faixa 0', color: '#E05550',desconto:'30% nos juros',descontoAtualização:'15% nos juros' ,valorDesc:0.30,valorDescAtual:0.15, icon:'feliz', dias:[121,180],anos:[0.4,0.6],valor:[0.01,99999999999999999],},
        { title: 'Faixa 0', color: '#E05550',desconto:'50% nos juros',descontoAtualização:'20% nos juros' ,valorDesc: 0.50,valorDescAtual:0.20 ,icon:'feliz', dias:[181,270],anos:[0.6,1],valor:[0.01,99999999999999999]},
        { title: 'Faixa 0', color: '#E05550',desconto:'70% nos juros',descontoAtualização:'50% nos juros' ,valorDesc:0.70,valorDescAtual:0.50 ,icon:'feliz', dias:[271,360],anos:[1,1],valor:[0.01,99999999999999999]},
        { title: 'Faixa 0', color: '#E05550',desconto:'100% nos juros',descontoAtualização:'70% nos juros' ,valorDesc:1,valorDescAtual:0.7 ,icon:'feliz', dias:[361,480],anos:[1,1.5],valor:[0.01,99999999999999999]},
        { title: 'Faixa 0', color: '#E05550',desconto:'100% nos juros',descontoAtualização:'Não aplicado',valorDesc:1,valorDescAtual:0.0 ,icon:'feliz', dias:[481,720],anos:[1.5,2],valor:[0.01,99999999999999999]},
        //faixa 1
        { title: 'Faixa 1', color: '#F0011A',desconto:'30% no principal',descontoAtualização:'Não aplicado', valorDesc:0.3,valorDescAtual:0.0 ,icon:'indiferente', dias:[721,1080],anos:[2,3],valor:[0.01,99999999999999999]},
        { title: 'Faixa 1', color: '#F0011A',desconto:'50% no principal',descontoAtualização:'Não aplicado', valorDesc:0.5,valorDescAtual:0.0 ,icon:'indiferente', dias:[1081,1440],anos:[3,4],valor:[0.01,99999999999999999]},
        { title: 'Faixa 1', color: '#F0011A',desconto:'60% no principal',descontoAtualização:'Não aplicado', valorDesc:0.6,valorDescAtual:0.0 ,icon:'indiferente', dias:[1441,1800],anos:[4,5],valor:[0.01,99999999999999999]},
        { title: 'Faixa 1', color: '#F0011A',desconto:'80% no principal',descontoAtualização:'Não aplicado', valorDesc:0.8,valorDescAtual:0.0 ,icon:'indiferente', dias:[1801,3600],anos:[5,10],valor:[0.01,99999999999999999]},
        { title: 'Faixa 1', color: '#F0011A',desconto:'90% no principal',descontoAtualização:'Não aplicado', valorDesc:0.9,valorDescAtual:0.0 ,icon:'indiferente', dias:[3601,999999999999999999],anos:[10,9999],valor:[0.01,99999999999999999]},
        //faixa 2 
        
    ];
    
    export const calculate = (date:string, valor:number, Juros:number) => {
    
        const now = new Date(); // Data de hoje
        const past = new Date(date); // Outra data no passado
        const diffTime =  now.valueOf() - past.valueOf() -1;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        //const duration = duration(now.diff(past));
        let dias = diffDays - 1;
        let ano = dias / 365
        // Mostra a diferença em dias

        
        for(let i in faixas){
                if(dias >= faixas[i].dias[0]  && dias < faixas[i].dias[1]
                         && valor >= faixas[i].valor[0] && valor < faixas[i].valor[1]  ){
                    let levelCopy:faixa = {...faixas[i]};
                    levelCopy.atraso = parseFloat(dias.toFixed(2));
                    //valores
                    levelCopy.juros = Juros;//(valor * 0.0033) * levelCopy.atraso
                    levelCopy.valorBase = valor + Juros;
                    

                    //descontos nos juros
                    levelCopy.descTotal= levelCopy.juros * levelCopy.valorDesc;
                    levelCopy.descTotalAtual= levelCopy.juros * levelCopy.valorDescAtual;
                    levelCopy.descTotal123= Juros + ( valor * levelCopy.valorDesc);

                    levelCopy.validPay = levelCopy.valorBase - (levelCopy.valorBase * 0.95);
                    levelCopy.descP50 = levelCopy.valorBase - 50;
                    levelCopy.descP100 = levelCopy.valorBase - 100;
                    
                    levelCopy.valorPay = (levelCopy.juros -(levelCopy.juros * levelCopy.valorDesc)) + valor 
                    levelCopy.valorPayAtual = (levelCopy.juros -(levelCopy.juros * levelCopy.valorDescAtual)) + valor 

                    levelCopy.valorPay123 = valor - (valor * levelCopy.valorDesc);
                    levelCopy.valorBol= (levelCopy.valorPay+1);
                    levelCopy.valorBol123= (levelCopy.valorPay123+1)
                     
                    //Faixa 4
                        
                    return levelCopy;
                }
            }
            
        return null;
    }




