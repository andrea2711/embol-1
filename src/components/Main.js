import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Definitions from './Definitions/Definitions'
import Incident from './Definitions/Incident'
import Contacts from './Contacts'
import Anexo1 from './Anexos/Anexo1'
import Step1 from "./Incidents/step1"
import Step2 from "./Incidents/step2"
import Step3 from "./Incidents/step3"
import Step4 from "./Incidents/step4"
import Step5 from "./Incidents/step5"
import Step6 from "./Incidents/step6"
import Step7 from "./Incidents/step7"
import Step8 from "./Incidents/step8"



const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Definitions' component={Definitions}/>
        <Route path='/Incident' component={Incident}/>
        <Route path='/Anexo1' component={Anexo1}/>
      <Route path='/schedule' component={Contacts}/>
        <Route path='/Step1' component={Step1}/>
        <Route path='/Step2' component={Step2}/>
        <Route path='/Step3' component={Step3}/>
        <Route path='/Step4' component={Step4}/>
        <Route path='/Step5' component={Step5}/>
        <Route path='/Step6' component={Step6}/>
        <Route path='/Step7' component={Step7}/>
        <Route path='/Step8' component={Step8}/>
    </Switch>
  </main>
)

export default Main
