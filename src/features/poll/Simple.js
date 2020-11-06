import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectPollName } from './pollSlice';

export function Simple() {
    const pollName = useSelector(selectPollName);
    const [state, setState] = useState("")

    const click = () => {
        setState("Hello");
    }

    return (
        <>
            <div>{pollName}</div>
            <di>{state}</di>
            <button onClick={click}>click me</button>
        </>

    )
}