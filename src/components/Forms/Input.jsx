import React from 'react'
import './Forms.css'
export const Inputs =({label, name, value, onInput})=>(
    <>
    <label htmlFor='name'>{label}</label>
    <input
    name={name}
    type='text'
    placeholder='Ingrese Nombre'
    onChange={onInput}
    >
    </input>
    </>
)