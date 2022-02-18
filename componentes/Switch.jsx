import styles from '../styles/Switch.module.css'

export default function Switch({isToggled, onToggle}){


    return(
        <div>
            <label className={styles.switch}>
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={styles.slider}/>
            </label>
        </div>       
        
      
    )
}