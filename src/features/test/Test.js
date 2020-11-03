import React from 'react'
import {useSelector} from 'react-redux';
import { selectQuestions, questionRemoved, questionChanged} from './testSlice';
import { useDispatch } from 'react-redux'

export function Test() {
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);

    const onRemoveQuestionClicked = (id) => {
        dispatch(
            questionRemoved(id)
        )
    }

    const onValueChanged = e => {
        dispatch(
            questionChanged({id: e.target.id, value: e.target.value})
        )
    }

    const renderQuestions = questions.map(question => (
        <div key={question.id}>
            <input type="text" value={question.question} maxLength="80" onChange={onValueChanged} id={question.id}/>
            <button onClick={() => onRemoveQuestionClicked(question.id)} disabled={questions.length < 3 ? true : false}>remove</button>
        </div>
    ))

    return (
        <div>
            {renderQuestions}
        </div>
    )
}