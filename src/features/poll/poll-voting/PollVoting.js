import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { answerVoted, selectPollName, selectPollAnswers } from '../pollSlice';
import { useDispatch } from 'react-redux'

export function PollVoting() {
    const [selectedOption, setSelectedOption] = useState('')
    const dispatch = useDispatch();
    const pollName = useSelector(selectPollName);
    const pollAnswers = useSelector(selectPollAnswers);

    const onRadioChange = e => {
        setSelectedOption(e.target.value)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(answerVoted(selectedOption))
    }

    const renderPollOptions = pollAnswers.map(option => (
        <div key={option.id} className="radio-margin">
            <input type="radio" className="radio-input" id={`radioId${option.id}`} name={option.answer} value={option.id} checked={selectedOption === option.id} onChange={onRadioChange} />
            <label htmlFor={option.answer}>{option.answer}</label><br />
        </div>
    ))

    return (
        <>
            <div className="padded-input">
                <h2>{pollName}</h2>
            </div>

            <form onSubmit={onFormSubmit} className="poll-form">
                <div>
                    {renderPollOptions}
                </div>

                <button type="submit">Vote</button>
            </form>
        </>
    )
}