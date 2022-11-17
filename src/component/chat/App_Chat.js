import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './Chat/Chat'
import Join from './Join/Join'
import './Join/Join.css'

const App_Chat = () => {
  return (
 
    <Router>
      <Route path='' component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>

  )
}

export default App_Chat