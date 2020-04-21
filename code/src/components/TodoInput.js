import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const TodoInput = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const handleOnSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo({
      description: inputValue,
      done: false
    }))
    setInputValue('')
  }



  return (
    <form className='todo-input' onSubmit={handleOnSubmit}>
      <input
        Type='text'
        placeholder='Add Todo'
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
        className='todo-input-text'
      ></input>
      <input
        Type='submit'
        className='todo-input-button'
        value='+'
      ></input>

    </form>
  )
}