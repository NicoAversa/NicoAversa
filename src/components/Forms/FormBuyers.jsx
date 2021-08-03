import React from 'react'
import {Inputs} from './Input'
import './Forms.css'

export const Form =({inputs, onInput, onSubmit, isSubmitDisabled})=>(

<form>
{inputs.map(({ label, name, value }) => {
            <Inputs label={label} name={name} onInput={onInput} value={value} />
            })} 
            <input type='submit' onClick={onSubmit} disabled={isSubmitDisabled} /> 
</form>
)
