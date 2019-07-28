import React, { useState, useEffect } from 'react'
import { ToastProvider, useToasts, usePrevious } from "../toast-manager";


export default function TextTransformer(props) {
    const [currentValue, setCurrentValue] = useState('');
    const toastController = useToasts();

    const handleChange = e => setCurrentValue(e.target.value)

    const handleSubmit = e => {
        const { transformToLowerCase, transformToUpperCase, mode } = props
        const action = mode === 'upper' ? transformToUpperCase : transformToLowerCase
        e.preventDefault()
        action(currentValue)
    }

    const prevStatus = usePrevious(props.status);

    useEffect(() => {
        if (props.status !== prevStatus && props.status !== null) {
            toastController.add(props.status)
        }
    })

    return (
        <ToastProvider toastController={toastController}>
            <div className="TextTransformer-container">
                <form onSubmit={handleSubmit}>
                    <input value={currentValue} type="text" placeholder="Enter text to transform" onChange={handleChange} />
                    <button type="submit">Transform Text</button>
                </form>
                <p>Transformed Text: {props.transformedValue}</p>
            </div>
        </ToastProvider>
    );
}