import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Join from './components/Join'

const Community2 = () => {
  return (
    <Router>
      <Route path='/' component={Join} />
      <Route path='/chat' component={Chat} />
    </Router>
  )
}

export default Community2