import React, { FormEvent, useEffect, useState } from 'react';
import LoadingIndicator from '../../Components/LoadingIndicator';
import { trackPromise } from 'react-promise-tracker';
import api from '../../services/api';
import "./styles.css";

function MainPage (){

    const [formStep, setFormStep] = useState(0);
    const [color1, setColor1] = useState('#013220');
    const [color2, setColor2] = useState('#013220');
    const [color3, setColor3] = useState('#013220');
    const [color4, setColor4] = useState('#013220');
    const [color5, setColor5] = useState('#013220');
    const [color6, setColor6] = useState('#013220');
    const [color7, setColor7] = useState('#013220');

    const [prediction, setPrediction] = useState(0);

    const [PP_ALTURA_UTIL, setPP_ALTURA_UTIL] = useState(0);
    const [PP_FACE, setPP_FACE] = useState(0);
    const [PP_FUNDO, setPP_FUNDO] = useState(0);
    const [PP_FUNDO_INF, setPP_FUNDO_INF] = useState(0);
    const [PP_VALVULA, setPP_VALVULA] = useState(0);
    const [PP_FUROS_COLADEIRA, setPP_FUROS_COLADEIRA] = useState(0);
    const [PP_DIAMETRO_FUROS_COLADEI, setPP_DIAMETRO_FUROS_COLADEI] = useState(0);
    const [PP_NUMERO_FOLHAS, setPP_NUMERO_FOLHAS] = useState(0);
    const [PP_GRAMATURA_EXTERNO, setPP_GRAMATURA_EXTERNO] = useState(0);
    const [PP_GRAMATURA_2, setPP_GRAMATURA_2] = useState(0);
    const [PP_GRAMATURA_3, setPP_GRAMATURA_3] = useState(0);
    const [PP_GRAMATURA_4, setPP_GRAMATURA_4] = useState(0);
    const [PP_GRAMATURA_5, setPP_GRAMATURA_5] = useState(0);
    const [PP_GRAMATURA_INTERNO, setPP_GRAMATURA_INTERNO] = useState(0);
    const [PP_LARGURA_PEAD, setPP_LARGURA_PEAD] = useState(0);
    const [PP_VOLUME, setPP_VOLUME] = useState(0);
    const [PP_TIPO_SACO_COLADO, setPP_TIPO_SACO_COLADO] = useState("0");
    const [PP_PATCH, setPP_PATCH] = useState("0");
    const [PP_PERFURADO_TUBEIRA, setPP_PERFURADO_TUBEIRA] = useState("0");
    const [PP_PERFURADO_COLADEIRA, setPP_PERFURADO_COLADEIRA] = useState("0");
    const [PP_PAPEL_EXTERNO, setPP_PAPEL_EXTERNO] = useState("0");
    const [PP_PAPEL_2, setPP_PAPEL_2] = useState("0");
    const [PP_PAPEL_3, setPP_PAPEL_3] = useState("0");
    const [PP_PAPEL_4, setPP_PAPEL_4] = useState("0");
    const [PP_PAPEL_5, setPP_PAPEL_5] = useState("0");
    const [PP_PAPEL_INTERNO, setPP_PAPEL_INTERNO] = useState("0");
    const [PP_TIP_PERF_FOL_EXT, setPP_TIP_PERF_FOL_EXT] = useState("0");
    const [PP_TIP_PERF_FOL_2, setPP_TIP_PERF_FOL_2] = useState("0");
    const [PP_TIP_PERF_FOL_3, setPP_TIP_PERF_FOL_3] = useState("0");
    const [PP_TIP_PERF_FOL_4, setPP_TIP_PERF_FOL_4] = useState("0");
    const [PP_TIP_PERF_FOL_5, setPP_TIP_PERF_FOL_5] = useState("0");
    const [PP_TIP_PERF_FOL_INT, setPP_TIP_PERF_FOL_INT] = useState("0");

    const listaPapeis = ['BKI', 'CHN', 'CKI', 'EPE', 'ETE', 'PAF', 'PAS', 'PAX', 'PBI', 'PES', 
    'RFV', 'RLF', 'RVK', 'SAD', 'SAK', 'SBK', 'SCK', 'SDK', 'SDN', 'SHN', 
    'SHP', 'SKM', 'SKP', 'SLF', 'SLV', 'SNC', 'SNT', 'SPA', 'SPB', 'SPC', 
    'SPD', 'SPE', 'SPG', 'SSN' ]

    const listaPerfuracoes = ['CILI 1,5 TOT', 'CILI 2,5 TOT', 'CILIN 1 TOT', 'CILIN 2 LAT', 
    'CILIN 2 TOT', 'CILIN 3 TOT', 'MIC PER FRENTE', 'MIC PERF FACE', 'MIC PERF LAT', 
    'MIC PERF TOTAL', 'MIC PERF VERSO', 'NANO PER VERSO', 'NANO PERF TOT', 'NÃO PERFURAR', 
    'PERF 1 TOT', 'PÉ GAL 3 TOT']

    const multiStepForm = (step:number) => {
        switch(step){
            case 0:
                return(
                    <React.Fragment>
                        <label>PP_ALTURA_UTIL</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_ALTURA_UTIL}
                            onChange={(e)=>{setPP_ALTURA_UTIL(Number(e.target.value))}}
                        ></input>
                        <label>PP_FACE</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_FACE}
                            onChange={(e)=>{setPP_FACE(Number(e.target.value))}}
                        ></input>
                        <label>PP_FUNDO</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_FUNDO}
                            onChange={(e)=>{setPP_FUNDO(Number(e.target.value))}}
                        ></input>
                        <label>PP_FUNDO_INF</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_FUNDO_INF}
                            onChange={(e)=>{setPP_FUNDO_INF(Number(e.target.value))}}
                        ></input>
                        <label>PP_VOLUME</label> 
                        <label
                            style={{font: "400 1.4rem Montserrat"}}
                        >{PP_VOLUME}</label>
                    </React.Fragment>
                )
            case 1:
                return(
                    <React.Fragment>
                        <label>PP_FUROS_COLADEIRA</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_FUROS_COLADEIRA}
                            onChange={(e)=>{setPP_FUROS_COLADEIRA(Number(e.target.value))}}
                        ></input>
                        <label>PP_DIAMETRO_FUROS_COLADEI</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_DIAMETRO_FUROS_COLADEI}
                            onChange={(e)=>{setPP_DIAMETRO_FUROS_COLADEI(Number(e.target.value))}}
                        ></input>
                        <label>PP_NUMERO_FOLHAS</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_NUMERO_FOLHAS}
                            onChange={(e)=>{setPP_NUMERO_FOLHAS(Number(e.target.value))}}
                        ></input>
                        <label>PP_GRAMATURA_EXTERNO</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_EXTERNO}
                            onChange={(e)=>{setPP_GRAMATURA_EXTERNO(Number(e.target.value))}}
                        ></input>
                        <label>PP_GRAMATURA_2</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_2}
                            onChange={(e)=>{setPP_GRAMATURA_2(Number(e.target.value))}}
                        ></input>                        
                    </React.Fragment>
                    )
            case 2:
                return(
                    <React.Fragment>
                        <label>PP_GRAMATURA_3</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_3}
                            onChange={(e)=>{setPP_GRAMATURA_3(Number(e.target.value))}}
                        ></input>
                        <label>PP_GRAMATURA_4</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_4}
                            onChange={(e)=>{setPP_GRAMATURA_4(Number(e.target.value))}}
                        ></input>
                        <label>PP_GRAMATURA_5</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_5}
                            onChange={(e)=>{setPP_GRAMATURA_5(Number(e.target.value))}}
                        ></input>
                        <label>PP_GRAMATURA_INTERNO</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_GRAMATURA_INTERNO}
                            onChange={(e)=>{setPP_GRAMATURA_INTERNO(Number(e.target.value))}}
                        ></input>
                        <label>PP_LARGURA_PEAD</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_LARGURA_PEAD}
                            onChange={(e)=>{setPP_LARGURA_PEAD(Number(e.target.value))}}
                        ></input>
                    </React.Fragment>
                )
            case 3:
                return(
                    <React.Fragment>
                        <label>PP_VALVULA</label> 
                        <input 
                            type='Number'
                            required
                            value={PP_VALVULA}
                            onChange={(e)=>{setPP_VALVULA(Number(e.target.value))}}
                        ></input>
                        <label>PP_TIPO_SACO_COLADO</label> 
                        <select
                            required
                            value={PP_TIPO_SACO_COLADO}
                            onChange={(e)=>{setPP_TIPO_SACO_COLADO(e.target.value)}}>
                                <option value="0"></option>
                                {[
                                    'COLVA','COLMI','COLPB','COLBA','COLME'
                                ].map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PATCH</label> 
                        <select
                            required
                            value={PP_PATCH}
                            onChange={(e)=>{setPP_PATCH(e.target.value)}}>
                                <option value="0"></option>
                                {[
                                    'X','T','V','D','N','C','F'
                                ].map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PERFURADO_TUBEIRA</label> 
                        <select
                            required
                            value={PP_PERFURADO_TUBEIRA}
                            onChange={(e)=>{setPP_PERFURADO_TUBEIRA(e.target.value)}}>
                                <option value="0"></option>
                                {[
                                    'S','N'
                                ].map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PERFURADO_COLADEIRA</label> 
                        <select
                            required
                            value={PP_PERFURADO_COLADEIRA}
                            onChange={(e)=>{setPP_PERFURADO_COLADEIRA(e.target.value)}}>
                                <option value="0"></option>
                                {[
                                    'S','N'
                                ].map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                    </React.Fragment>
                )
            case 4:
                return(
                    <React.Fragment>
                        <label>PP_PAPEL_EXTERNO</label> 
                        <select
                            required
                            value={PP_PAPEL_EXTERNO}
                            onChange={(e)=>{setPP_PAPEL_EXTERNO(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PAPEL_2</label> 
                        <select
                            required
                            value={PP_PAPEL_2}
                            onChange={(e)=>{setPP_PAPEL_2(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PAPEL_3</label> 
                        <select
                            required
                            value={PP_PAPEL_3}
                            onChange={(e)=>{setPP_PAPEL_3(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PAPEL_4</label> 
                        <select
                            required
                            value={PP_PAPEL_4}
                            onChange={(e)=>{setPP_PAPEL_4(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_PAPEL_5</label> 
                        <select
                            required
                            value={PP_PAPEL_5}
                            onChange={(e)=>{setPP_PAPEL_5(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                    </React.Fragment>
                )
            case 5:
                return(
                    <React.Fragment>
                        <label>PP_PAPEL_INTERNO</label> 
                        <select
                            required
                            value={PP_PAPEL_INTERNO}
                            onChange={(e)=>{setPP_PAPEL_INTERNO(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPapeis.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_TIP_PERF_FOL_EXT</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_EXT}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_EXT(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_TIP_PERF_FOL_2</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_2}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_2(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_TIP_PERF_FOL_3</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_3}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_3(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_TIP_PERF_FOL_4</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_4}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_4(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                    </React.Fragment>
                )
            case 6:
                return(
                    <React.Fragment>
                        <label>PP_TIP_PERF_FOL_5</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_5}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_5(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <label>PP_TIP_PERF_FOL_INT</label> 
                        <select
                            required
                            value={PP_TIP_PERF_FOL_INT}
                            onChange={(e)=>{setPP_TIP_PERF_FOL_INT(e.target.value)}}>
                                <option value="0"></option>
                                {   listaPerfuracoes.map((valor:any, index)=>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })}
                        </select>
                        <div className='predictionDiv'>
                            <div className="resultDiv">
                                <p>A permeância prevista é</p>
                                {(prediction)===0?
                                    (<p style={{font: "600 0.8rem Montserrat", textAlign: "center"}}>
                                        Para prever a permeância clique em calcular</p>):(<label>{prediction}</label>)}
                            </div>
                            <div className='buttonPredictDiv'>
                                <button className="buttonPredict" onClick={(e)=>predict(e)}>Calcular</button>
                                <button className="buttonCancel">Limpar</button>
                            </div>    
                        </div>
                        
                    </React.Fragment>
                )
        }
    }

    const predict = async(e:FormEvent) => {
        e.preventDefault()
        let data:any = []
        data = {
            'PP_ALTURA_UTIL': PP_ALTURA_UTIL,
            'PP_FACE': PP_FACE ,
            'PP_FUNDO': PP_FUNDO ,
            'PP_FUNDO_INF': PP_FUNDO_INF ,
            'PP_VALVULA': PP_VALVULA ,
            'PP_FUROS_COLADEIRA': PP_FUROS_COLADEIRA ,
            'PP_DIAMETRO_FUROS_COLADEI': PP_DIAMETRO_FUROS_COLADEI ,
            'PP_NUMERO_FOLHAS': PP_NUMERO_FOLHAS ,
            'PP_GRAMATURA_EXTERNO': PP_GRAMATURA_EXTERNO ,
            'PP_GRAMATURA_2': PP_GRAMATURA_2 ,
            'PP_GRAMATURA_3': PP_GRAMATURA_3 ,
            'PP_GRAMATURA_4': PP_GRAMATURA_4 ,
            'PP_GRAMATURA_5': PP_GRAMATURA_5 ,
            'PP_GRAMATURA_INTERNO': PP_GRAMATURA_INTERNO ,
            'PP_LARGURA_PEAD': PP_LARGURA_PEAD ,
            'PP_TIPO_SACO_COLADO': PP_TIPO_SACO_COLADO ,
            'PP_PATCH': PP_PATCH ,
            'PP_PERFURADO_TUBEIRA': PP_PERFURADO_TUBEIRA ,
            'PP_PERFURADO_COLADEIRA': PP_PERFURADO_COLADEIRA ,
            'PP_PAPEL_EXTERNO': PP_PAPEL_EXTERNO ,
            'PP_PAPEL_2': PP_PAPEL_2 ,
            'PP_PAPEL_3': PP_PAPEL_3 ,
            'PP_PAPEL_4': PP_PAPEL_4 ,
            'PP_PAPEL_5 0': PP_PAPEL_5,
            'PP_PAPEL_INTERNO': PP_PAPEL_INTERNO ,
            'PP_TIP_PERF_FOL_EXT': PP_TIP_PERF_FOL_EXT ,
            'PP_TIP_PERF_FOL_2': PP_TIP_PERF_FOL_2 ,
            'PP_TIP_PERF_FOL_3': PP_TIP_PERF_FOL_3 ,
            'PP_TIP_PERF_FOL_4': PP_TIP_PERF_FOL_4 ,
            'PP_TIP_PERF_FOL_5': PP_TIP_PERF_FOL_5 ,
            'PP_TIP_PERF_FOL_INT': PP_TIP_PERF_FOL_INT ,
            'PP_VOLUME': PP_VOLUME ,
        }
        try{
            const response = await trackPromise(api.post("prediction/", data, {
                headers: {
                  'Content-Type':'application/json',
                  'Accept':'application/json',
                }
              }))
            setPrediction(Number(response.data.result))
        }catch(err){

        }
    }
    const mudaStep = (e:FormEvent,direction:string) => {
        e.preventDefault()
        if (direction==='decrementa'){
            setFormStep((formStep>0)?(formStep-1):(formStep))
        }
        if (direction==='incrementa'){
            setFormStep((formStep<6)?(formStep+1):(formStep))
        }
    }

    useEffect(()=>{
        switch(formStep){
            case 0:
                setColor1('#03C04A')
                setColor2('#013220')
                setColor3('#013220')
                setColor4('#013220')
                setColor5('#013220')
                setColor6('#013220')
                setColor7('#013220')
                break;
            case 1:
                setColor1('#013220')
                setColor2('#03C04A')
                setColor3('#013220')
                setColor4('#013220')
                setColor5('#013220')
                setColor6('#013220')
                setColor7('#013220')
                break;
            case 2:
                setColor1('#013220')
                setColor2('#013220')
                setColor3('#03C04A')
                setColor4('#013220')
                setColor5('#013220')
                setColor6('#013220')
                setColor7('#013220')
                break;
            case 3:
                setColor1('#013220')
                setColor2('#013220')
                setColor3('#013220')
                setColor4('#03C04A')
                setColor5('#013220')
                setColor6('#013220')
                break;
            case 4:
                setColor1('#013220')
                setColor2('#013220')
                setColor3('#013220')
                setColor4('#013220')
                setColor5('#03C04A')
                setColor6('#013220')
                setColor7('#013220')
                break;
            case 5:
                setColor1('#013220')
                setColor2('#013220')
                setColor3('#013220')
                setColor4('#013220')
                setColor5('#013220')
                setColor6('#03C04A')
                setColor7('#013220')
                break;
            case 6:
                setColor1('#013220')
                setColor2('#013220')
                setColor3('#013220')
                setColor4('#013220')
                setColor5('#013220')
                setColor6('#013220')
                setColor7('#03C04A')
                break;
        }
    },[formStep])

    useEffect(()=>{
        if(PP_FUNDO_INF!==0 && PP_FUNDO!==0 && PP_ALTURA_UTIL!==0 && PP_FACE!==0){
            setPP_VOLUME(Number(((((PP_ALTURA_UTIL*0.2452)+(((PP_FUNDO+PP_FUNDO_INF)/2)*0.3275)-(PP_FACE*0.1121))*(PP_FACE**2))/10**6).toFixed(2)))
        }
    },[PP_ALTURA_UTIL,PP_FACE,PP_FUNDO,PP_FUNDO_INF])

    return(
        <main>
            <div id='mainDiv'>
                <LoadingIndicator texto="Fazendo a predição..."/>
                <div className='formDiv'>
                    <form>
                        <div className='multistepForm'>
                            <button className='setaEsquerda' onClick={(e)=>mudaStep(e,'decrementa')}></button>
                            <div>
                                {multiStepForm(formStep)}
                            </div>
                            <button className='setaDireita' onClick={(e)=>mudaStep(e,'incrementa')}></button>
                        </div>
                        <div className='divDot'>
                            <span style={{backgroundColor:color1}}
                                            className='dot'></span>
                            <span style={{backgroundColor:color2}} 
                                            className='dot'></span>
                            <span style={{backgroundColor:color3}} 
                                            className='dot'></span>
                            <span style={{backgroundColor:color4}} 
                                            className='dot'></span>
                            <span style={{backgroundColor:color5}} 
                                            className='dot'></span>
                            <span style={{backgroundColor:color6}} 
                                            className='dot'></span>
                            <span style={{backgroundColor:color7}} 
                                            className='dot'></span>
                        </div>
                    </form> 
                </div>      
            </div>   
        </main>
        
    )

}

export default MainPage;