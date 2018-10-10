import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Definitions from './Definitions'
import Contacts from './Contacts'
import Incidents from "./Incidents";


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Definitions' component={Definitions}/>
      <Route path='/schedule' component={Contacts}/>
        <Route path='/Incidents' component={Incidents}/>
    </Switch>
  </main>
)

export default Main
