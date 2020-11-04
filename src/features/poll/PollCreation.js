import React from 'react'
import { useSelector } from 'react-redux';
import { answerEdited, answerRemoved, nameEdited, selectPoll, reset } from './pollSlice';
import { useDispatch } from 'react-redux'
import { AddAnswerForm } from './AddAnswerForm'

export function PollCreation() {
    const dispatch = useDispatch();
    const poll = useSelector(selectPoll);

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

    const renderPollAnswer = poll.answers.map(answer => (
        <React.Fragment key={answer.id}>
            <input type="text" value={answer.answer} maxLength="80" onChange={onValueChanged} id={answer.id} />
            <button onClick={() => onRemoveQuestionClicked(answer.id)} disabled={poll.answers.length < 3 ? true : false}>X</button>
            <br />
        </React.Fragment>
    ))

    return (
        <div>
            <input type="text" maxLength="80" placeholder="name your poll" value={poll.pollName} onChange={onNameChanged} />
            <br />
            {renderPollAnswer}
            <AddAnswerForm />
            <div>
                {poll.answers.length}/10 possible answers
                <button onClick={onResetClicked}>Reset</button>
            </div>
        </div>
    )
}