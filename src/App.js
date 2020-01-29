import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navigations from './components/Navigations'
import Home from './pages/Home'


const App = () => {
  return (
    <div className='App'>
      <Navigations />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
    </div>
  )
}

export default App
