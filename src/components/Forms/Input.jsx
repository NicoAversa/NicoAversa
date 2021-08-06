import React from 'react'
import styles from './Forms.css'
export const Inputs =({label, name, value, onInput})=>(
    <label className={styles.input}>
        {label}
        <input name={name} type='text' onChange={onInput.bind(this)} value={value}/><br></br>
    </label>
)