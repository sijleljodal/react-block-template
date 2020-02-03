import React from 'react'
import firebase from './firebase'
import './Login.css'

const Login = (props) => {
    const loginWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        firebase.auth()
        .signInWithPopup(provider)
        .catch(  (error ) =>  {
            console.log(error)
        })
        
    }
    const logout = () => {
        firebase.auth().signOut()
    }
    return(
        <main className='login'>
            {
                !props.signedIn &&
                <button onClick={loginWithGoogle}>sign in</button>
            }
            {
                props.signedIn && 
                <>
                <h1>Du er innlogget</h1>
            <p>{firebase.auth().currentUser.displayName}</p>
            {
                firebase.auth().currentUser.photoURL &&
                <img alt='profile img' src={firebase.auth().currentUser.photoURL}/>
            }
                <button onClick={logout}>Logg ut</button>
                </>

            }

        </main>
    )
}

export default Login
