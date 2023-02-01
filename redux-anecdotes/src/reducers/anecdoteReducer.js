import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    increaseVote(state, action){
      const id = action.payload
      const selectedContent = state.find(n => n.id === id)
      const updatedVote = {
        ...selectedContent,
        votes: selectedContent.votes + 1
      }
      return state.map(n =>
        n.id !== id ? n : updatedVote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, increaseVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer