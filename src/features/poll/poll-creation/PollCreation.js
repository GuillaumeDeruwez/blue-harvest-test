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
                <textarea rows="14" cols="10" wrap="soft" maxLength="80" placeholder="name your poll" value={pollName} onChange={onNameChanged} aria-label="poll-name" />
            </div>

            <PollAnswer />

            <AddAnswerForm />

            <div className="bottom-col1">
                <p>{pollAnswers.length}/10 possible answers</p>
                <button title="reset" onClick={onResetClicked}>Reset</button>
            </div>
        </>
    )
}