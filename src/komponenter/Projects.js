import React,{ useState, useEffect } from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from 'react-icons/io'
import {navigate} from '@reach/router'
import ScaleLoader from "react-spinners/ScaleLoader";




const Projects = (props) => {
    const [projects, setProjects] = useState([])


const addProject = () => {
    firebase.firestore().collection('projects').add(
        {
            title:'0 new project', 
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
    )
    .then( doc => navigate(process.env.PUBLIC_URL + '/edit/' + doc.id) )
}
    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title') 
        .onSnapshot(
            snapshot => setProjects(snapshot.docs)
            
        )
    }, [])

    return(
        <main className='projects'>
            {
            props.signedIn &&
            <div className='add'>
                <IoIosAddCircle  className='edit-icons' onClick={addProject} />
            </div>
            }

            {
            projects.length > 0
            ?
            <div className='projects-container'>
                {
                    projects.map(
                    project => <Project key={project.id} data={project.data()} id={project.id} signedIn={props.signedIn}/>
                    )
                }
            </div>
            :
            <ScaleLoader size='40' />
            }
        </main>
    )
}

export default Projects