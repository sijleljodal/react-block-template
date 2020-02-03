import React, { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router'
import './App.css';
import Projects from './komponenter/Projects'
import ProjectDetails from './komponenter/ProjectDetails'
import Contact from './komponenter/Contact'
import Header from './komponenter/Header'
import Login from './komponenter/Login'
import Cv from './komponenter/Cv'
import firebase from './komponenter/firebase'
import Edit from './komponenter/Edit'
import Footer from './komponenter/Footer'

const Default = () => {
  navigate('/projects')
  return(<></>)
}


const App = () => {

  const [signedIn, setSignedIn] =useState(false)

  useEffect( ()  => {
    firebase.auth().onAuthStateChanged(
      user => {
        if(user) {
          setSignedIn(true)
        }else{
          setSignedIn(false)
        }
      }
    ) 
  })

  return(
      <div>
      <Header signedIn={signedIn}/>
        <Router>
          <Default path='/' Default />
          <Projects signedIn={signedIn} path='/projects' />
          <Contact path='/contact' />
          <ProjectDetails path='/projects/:id' />
          <Cv path='/cv' />
          <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login' />
          <Edit path='/edit/:id' />
        </Router>
        <Footer />
      </div>
  )
}

export default App;
