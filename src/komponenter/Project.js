import React from 'react'
import './Project.css'
import { MdDelete, MdEdit } from "react-icons/md"
import firebase from './firebase'
import { Link, navigate } from '@reach/router'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaAdobe } from "react-icons/fa";



const Project = (props) => {



    const deleteProject = () => {
        if(window.confirm('Slette Prosjekt?')) {
            firebase.firestore()
            .collection('projects')
            .doc(props.id)
            .delete()
            .then( ref => console.log('Prosjektet ble slettet', ref) )
            .catch(error => console.log(error) )
        }
    }

    return(
       <div className='project'>
            {
                props.data.defaultImage &&
                <img onClick={ () => navigate('/projects/' + props.id) } src={props.data.defaultImage} alt ='defaul' />
            }
            <div className='project-content'>
                <h1>{props.data.title}</h1>
            
                {
                    props.data.javascript && 
                    <IoLogoJavascript size='25'/>
                }
                {
                    props.data.html && 
                    <IoLogoHtml5 size='25'/>
                }
                {
                    props.data.css && 
                    <IoLogoCss3 size='25'/>
                }
                {
                    props.data.adobe && 
                    <FaAdobe size='25'/>
                }
                

                <div className='year'>
                    {props.data.year}
                </div>
                <div className='byline'>
                    {props.data.byline}
                </div>

                <Link to={'/projects/' + props.id}>Les mer</Link>
            </div>
            {
            props.signedIn &&
            <div className='admin-icons'>
                <Link to={'/edit/' + props.id}> 
                    <MdEdit  className='edit-icons'/>
                </Link>
                <MdDelete onClick={deleteProject} className='edit-icons'/>
                
            </div>
  }
        </div>
    )
}

export default Project