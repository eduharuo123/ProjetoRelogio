
import { useEffect, useState } from "react";
import styles from "../styles/RenderRelogio.module.css"


export default function RelogioBrasilia(){
    const [h, setH] = useState(0); 
    const [angH, setAngH] = useState(0);
    const [angM, setAngM] = useState(0);
    const [angS, setAngS] = useState(0);

    function horario(variacao){
        const Horario = new Date()
        const utc = Horario.getTime()+(Horario.getTimezoneOffset()*60000)
        const HorarioAjustado = new Date(utc+(3600000*variacao))
        return HorarioAjustado
    }
 




  
        useEffect(() => {
            const intervalo = setInterval(() =>{
                const HorarioAtual = horario(-3)
                const horasAtual = HorarioAtual.getHours() 
                setH(horasAtual)
                const minutosAtual = HorarioAtual.getMinutes()
                const segundosAtual = HorarioAtual.getSeconds() 
                const angSegundos = segundosAtual*6 
                setAngS(angSegundos)
                const angMinutos = minutosAtual*6
                setAngM(angMinutos) 
                const angHoras = horasAtual*30
                setAngH(angHoras)
            }, 1000);
            return () => clearInterval(intervalo)
        }, []);
  
   

        function verificarAmPm(){
            if(h < 12){
                return (
                    <h3>Am</h3>
                )
            } else {
                return(
                    <h3>Pm</h3>
                )
            }
        }



 
        return(
            <div>
                    <div className={styles.display}>{verificarAmPm()}</div>
                    <div className={styles.relogio}>
                    <div className={styles.centro}></div>
                    <div className={styles.horas} style={{transform: `rotate(${angH}deg)`}}></div>
                    <div className={styles.minutos} style={{transform: `rotate(${angM}deg)`}}></div>
                    <div className={styles.segundos} style={{transform: `rotate(${angS}deg)`}}></div>
                    <div className={`${styles.numb} ${styles.num1} `}>1</div>
                    <div className={`${styles.numb} ${styles.num2} `}>2</div>
                    <div className={`${styles.numb} ${styles.num3} `}>3</div>
                    <div className={`${styles.numb} ${styles.num4} `}>4</div>
                    <div className={`${styles.numb} ${styles.num5} `}>5</div>
                    <div className={`${styles.numb} ${styles.num6} `}>6</div>
                    <div className={`${styles.numb} ${styles.num7} `}>7</div>
                    <div className={`${styles.numb} ${styles.num8} `}>8</div>
                    <div className={`${styles.numb} ${styles.num9} `}>9</div>
                    <div className={`${styles.numb} ${styles.num10} `}>10</div>
                    <div className={`${styles.numb} ${styles.num11} `}>11</div>
                    <div className={`${styles.numb} ${styles.num12} `}>12</div>
                </div>
              
            </div>
             
            
            
        
        
    )
    

    
    
}