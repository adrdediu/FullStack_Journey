import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage.js"

import MainPage from "./ext-src/MainPage"
import SignupPage from "./ext-src/SignupPage"
import LoginPage from "./ext-src/LoginPage"


const router = (
  <Router>
    <div>
      <Route exact path="/" component={ createAuthRequiredPage(MainPage) }/>
      <Route exact path="/signup" component={ SignupPage }/>
      <Route exact path="/login" component={ LoginPage }/>

    </div>
  </Router>
)

export default router
