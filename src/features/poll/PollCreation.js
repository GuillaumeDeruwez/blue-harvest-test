import React from 'react'
import { useSelector } from 'react-redux';
import { answerEdited, answerRemoved, nameEdited, reset, selectPollName, selectPollAnswers } from './pollSlice';
import { useDispatch } from 'react-redux'
import { AddAnswerForm } from './AddAnswerForm'

export function PollCreation() {
    const dispatch = useDispatch();
    const pollName = useSelector(selectPollName);
    const pollAnswers = useSelector(selectPollAnswers);

    const onNameChanged = e => {
        dispatch(nameEdited(e.target.value))
    }

    const onValueChanged = e => {
        dispatch(answerEdited({ id: e.target.id, value: e.target.value }))
    }

    const onRemoveQuestionClicked = (id) => {
        dispatch(
            answerRemoved(id)
        )
    }

    const onResetClicked = () => {
        dispatch(reset())
    }

    const renderPollAnswer = pollAnswers.map(answer => (
        <div key={answer.id}>
            <input type="text" value={answer.answer} maxLength="80" onChange={onValueChanged} id={answer.id} />
            <button onClick={() => onRemoveQuestionClicked(answer.id)} disabled={pollAnswers.length < 3 ? true : false}>X</button>
        </div>
    ))

    return (
        <>
            <div className="padded-input">
                <input type="text" maxLength="80" placeholder="name your poll" value={pollName} onChange={onNameChanged} />
            </div>



            {renderPollAnswer}
            <AddAnswerForm />


            <section className="bottom-col1">
        
                <p>{pollAnswers.length}/10 possible answers</p>
                <button onClick={onResetClicked}>Reset</button>

            </section>
        </>
    )
}