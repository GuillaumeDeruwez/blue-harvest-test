import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { questionAdded } from './testSlice'

export const AddQuestionForm = () => {
  const [question, setQuestion] = useState('')

  const dispatch = useDispatch();

  const onQuestionChanged = e => setQuestion(e.target.value)

  const onSaveQuestionClicked = () => {
    if (question) {
      dispatch(
        questionAdded({
          id: nanoid(),
          question,
          vote : 0
        })
      )

      setQuestion('')
    }
  }

  return (
    <section>
      <h2>Add a New question</h2>
      <form>
        <label htmlFor="questionTitle">Question Title:</label>
        <input
          type="text"
          id="questionTitle"
          name="questionTitle"
          value={question}
          onChange={onQuestionChanged}
        />
        <button type="button" onClick={onSaveQuestionClicked}  >Save Question</button>
      </form>
    </section>
  )
}