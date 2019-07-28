// @flow

import React, {useEffect, useRef} from "react";


// Styled Components
// ==============================

const ToastContainer = props => (
    <div style={{ position: "fixed", right: 0, top: 0 }} {...props} />
);

const Toast = ({ children, onDismiss }) => (
    <div
        style={{
            background: "LemonChiffon",
            cursor: "pointer",
            fontSize: 14,
            margin: 10,
            padding: 10
        }}
        onClick={onDismiss}
    >
        {children}
    </div>
);


export const useToasts = () => {
    const [toasts, setToasts] = React.useState([])
    const add = content => {
        const id = toastCount++;
        const toast = { content, id };
        setToasts([...toasts, toast]);
    };
    const remove = id => {
        const newToasts = toasts.filter(t => t.id !== id);
        setToasts(newToasts);
    };

    return {
        add,
        remove,
        toasts
    }
}

export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

// Provider
// ==============================

let toastCount = 0;

export function ToastProvider({ children, toastController}) {

    const {add, remove, toasts} = toastController

    // avoid creating a new fn on every render
    const onDismiss = id => () => remove(id);

    return (
        <div>
            {children}
            <ToastContainer>
                {toasts.map(({ content, id, ...rest }) => (
                    <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
                        {id + 1} &mdash; {content}
                    </Toast>
                ))}
            </ToastContainer>
        </div>
    );
}
