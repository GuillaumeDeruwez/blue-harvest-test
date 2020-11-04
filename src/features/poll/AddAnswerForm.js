import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { answerAdded, selectPoll } from './pollSlice'

export const AddAnswerForm = () => {
    const [answer, setAnswer] = useState('')
    const poll = useSelector(selectPoll);

    const dispatch = useDispatch();

    const onAnswerChanged = e => setAnswer(e.target.value)

    const onSaveAnswerClicked = () => {
        if (answer) {
            dispatch(
                answerAdded({
                    id: nanoid(),
                    answer,
                    vote: 0
                })
            )
            setAnswer('')
        }
    }

    return (
        <section>
            <form>
                <input
                    type="text"
                    id="answerTitle"
                    name="answerTitle"
                    value={answer}
                    placeholder="Type an answer"
                    onChange={onAnswerChanged}
                />
                <button type="button" onClick={onSaveAnswerClicked} disabled={poll.answers.length < 10 ? false : true}  >Add</button>
            </form>
        </section>
    )
}