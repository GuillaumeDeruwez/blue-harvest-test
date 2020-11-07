import React from 'react'
import { useSelector } from 'react-redux';
import { answerEdited, answerRemoved, selectPollAnswers } from '../pollSlice';
import { useDispatch } from 'react-redux'

export function PollAnswer() {
    const dispatch = useDispatch();
    const pollAnswers = useSelector(selectPollAnswers);

    const onValueChanged = e => {
        dispatch(answerEdited({ id: e.target.id, value: e.target.value }))
    }

    const onRemoveQuestionClicked = (id) => {
        dispatch(
            answerRemoved(id)
        )
    }

    const renderPollAnswer = pollAnswers.map(answer => (
        <div key={answer.id}>
            <textarea rows="14" cols="10" wrap="soft" value={answer.answer} maxLength="80" onChange={onValueChanged} id={answer.id} />
            <button onClick={() => onRemoveQuestionClicked(answer.id)} disabled={pollAnswers.length < 3 ? true : false}>X</button>
        </div>
    ))

    return (
        <>
            {renderPollAnswer}
        </>
    )
}