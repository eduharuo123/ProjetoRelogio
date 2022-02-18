
import RelogioBrasilia from '../componentes/RelogioBrasilia'
import RelogioGw from '../componentes/RelogioGw'
import RelogioJp from '../componentes/RelogioJp'
import styles from '../styles/Home.module.css'
import Switch from '../componentes/Switch'
import { useEffect, useState } from 'react'



export default function Home() {
  const [isToggledBr, setIsToggledBr] =useState(true);
  const [isToggledGw, setIsToggledGw] =useState(false);
  const [isToggledJp, setIsToggledJp] =useState(false);
 

  function setarRelogioBr() {
      setIsToggledBr(!isToggledBr)
      setIsToggledGw(false)
      setIsToggledJp(false)
      }
  
   
  function setarRelogioGw() {
    setIsToggledGw(!isToggledGw)
   
      setIsToggledBr(false)
      setIsToggledJp(false)
    
 }
  function setarRelogioJp() {
    setIsToggledJp(!isToggledJp)
    
      setIsToggledGw(false)
      setIsToggledBr(false)
    
  }

  function setarRelogio(){

  }
  

  return (
    <div className={styles.container}>
      <div className={styles.botoes}>
        <div className={styles.btnFuso}>
          <h2>Fuso horário de Brasilia</h2>
          <Switch className=" Df" isToggled={isToggledBr} onToggle={() => setarRelogioBr()}/>
        </div>
        <div className={styles.btnFuso}>
          <h2>Fuso horário de Greenwich</h2>
          <Switch className=" Gw" isToggled={isToggledGw} onToggle={() => setarRelogioGw()}/>
        </div>
        <div className={styles.btnFuso}>
          <h2>Fuso horário do Japão</h2>
          <Switch className=" Jp" isToggled={isToggledJp} onToggle={() =>setarRelogioJp()}/>
        </div>
        
      </div>
      <div className={styles.relogioContainer}>
        {isToggledBr== true && (
          <RelogioBrasilia />
        )}
         {isToggledGw== true && (
          <RelogioGw />
        )}
         {isToggledJp== true && (
          <RelogioJp />
        )}
      </div>      
    </div>
  )

  
}

