import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToastProvider, useToasts } from "../toast-manager";

function Demo() {
    const toastController = useToasts();
    return (
        <ToastProvider toastController={toastController}>
          <button onClick={() => toastController.add("Click to dismiss!")}>Add toast</button>
        </ToastProvider>
    )
}

export default class Home extends Component {
    render() {
        return (

            <div className="Home-container">
                <Demo />
                <h1>What would you like to do?</h1>
                <p><Link to="/lowercase">I want to make my strings lowercase</Link></p>
                <p><Link to="/uppercase">I want to make my strings UPPERCASE</Link></p>
            </div>
        )
    }
}