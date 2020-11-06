import React from 'react'
import { useSelector } from 'react-redux';
import { nameEdited, reset, selectPollName, selectPollAnswers } from '../pollSlice';
import { useDispatch } from 'react-redux'
import { AddAnswerForm } from './AddAnswerForm'
import { PollAnswer } from './PollAnswer'

export function PollCreation() {
    const dispatch = useDispatch();
    const pollName = useSelector(selectPollName);
    const pollAnswers = useSelector(selectPollAnswers);

    const onNameChanged = e => {
        dispatch(nameEdited(e.target.value))
    }

    const onResetClicked = () => {
        dispatch(reset())
    }

    return (
        <>
            <div className="padded-input">
                <input type="text" maxLength="80" placeholder="name your poll" value={pollName} onChange={onNameChanged} />
            </div>

            <PollAnswer />

            <AddAnswerForm />

            <div className="bottom-col1">
                <p>{pollAnswers.length}/10 possible answers</p>
                <button onClick={onResetClicked}>Reset</button>
            </div>
        </>
    )
}