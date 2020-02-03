import React, {useEffect, useState} from 'react'
import firebase from './firebase'
import { Link } from "@reach/router"
import './ProjectDetails.css'
import parse from 'html-react-parser'

const ProjectDetail = props => {  
    const [project, setProject] = useState()
    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(0)

    window.scrollTo(0,0)

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
            .onSnapshot( snapshot => setProject(snapshot.data()) )

    }, [props.id])

    useEffect(()=>{
        firebase.firestore().collection('projects')
            .orderBy('year', 'desc')
            .get()
            .then( projects => {
                const array = projects.docs.map( p => p.id )
                const myPos = array.indexOf(props.id)
                setNext( myPos + 1 === array.length ? array[0] : array[myPos + 1])
                setPrev( myPos === 0 ? array[array.length - 1] : array[myPos - 1])
            } )
    }, [props.id])

    let styles = {}
    if(project){
        styles = {
            parallax:{
                height:'100vh',
                width:'100vw',
                backgroundImage: 'url(' + project.parallax + ')',
                backgroundAttachment:'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            },
        }
    } 
    return (
        <main className="project-detail">
            {
            project 
            ?
            <div>
                {
                    project.parallax &&
                    <div style={styles.parallax}>
                        <div className='parallax-overlay'>
                            <div>
                                <h1>{project.title}</h1>
                                <p>{project.year}</p>
                                <div className='project-features'>
                                    {project.javascript && <li>Javascript</li>}
                                    {project.ux && <li>UX</li>}
                                    {project.userOrientedDesign && <li>User oriented design</li>}
                                    {project.html && <li>Html</li>}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className='project-content'>

                {
                    false && 
                    <div className='pager'>
                        <Link to={process.env.PUBLIC_URL + '/projects/' + prev}>prev</Link>
                        <Link to={process.env.PUBLIC_URL + '/projects/' + next}>next</Link>
                    </div>
                }

                    <div className='project-images'>                    
                        {project.defaultImage && <img src={project.defaultImage} alt='hei' />}
                        {project.displayImage && <img src={project.displayImage} alt='hei' />}

                        {project.displayImage1 && <img src={project.displayImage1} alt='hei' />}
                        {project.displayImage2 && <img src={project.displayImage2} alt='hei' />}
                        {project.displayImage3 && <img src={project.displayImage3} alt='hei' />}
                        {project.displayImage4 && <img src={project.displayImage4} alt='hei' />}
                        {project.displayImage5 && <img src={project.displayImage5} alt='hei' />}
                        {project.displayImage6 && <img src={project.displayImage6} alt='hei' />}
                        {project.displayImage7 && <img src={project.displayImage7} alt='hei' />}
                        {project.displayImage8 && <img src={project.displayImage8} alt='hei' />}
                        {project.displayImage9 && <img src={project.displayImage9} alt='hei' />}
                        {project.displayImage10 && <img src={project.displayImage10} alt='hei' />}
                    </div>                    

                    <div className='description'>
                        {project.description && parse(project.description)}
                    </div>
                </div>
            </div>
            :
            <h2 style={{textAlign:'center'}}>Fetching project, hold on...</h2>
            }
        </main>
    )
} 
export default ProjectDetail