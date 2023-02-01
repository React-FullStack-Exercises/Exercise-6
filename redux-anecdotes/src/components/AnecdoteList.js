import { useSelector, useDispatch } from 'react-redux'

import { increaseVote } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if(!state.filter) {
      return state.anecdotes
    }
    return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => 
          dispatch(increaseVote(anecdote.id))}
        />  
      )}
    </div>
  )
}

export default AnecdoteList