import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { answerVoted, selectPoll } from './pollSlice';
import { useDispatch } from 'react-redux'

export function PollVoting() {
    const [selectedOption, setSelectedOption] = useState('')
    const dispatch = useDispatch();
    const poll = useSelector(selectPoll);

    const onRadioChange = e => {
        setSelectedOption(e.target.value)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(answerVoted(selectedOption))
    }

    const renderPollOptions = poll.answers.map(option => (
        <React.Fragment key={option.id}>
            <input type="radio" id={`radioId${option.id}`} name={option.answer} value={option.id} checked={selectedOption === option.id} onChange={onRadioChange} />
            <label htmlFor={option.answer}>{option.answer}</label><br />
        </React.Fragment>
    ))

    return (
        <div>
            {poll.pollName}
            <br />
            <form onSubmit={onFormSubmit}>
                {renderPollOptions}
                <button type="submit">Vote</button>
            </form>
        </div>
    )
}