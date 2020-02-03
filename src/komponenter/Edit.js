import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import './Edit.css'
import FileUploader from "react-firebase-file-uploader"


const Edit = (props) => {

    const [project, setProject] = useState({})
    const [status, setStatus] = useState('')
    const [imageName, setImageName] = useState('defaultimage')

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
        .onSnapshot( snapshot => 
            setProject( snapshot.data() )    
        )
    }, [props.id] )

    const saveProject = (e) => {
        setStatus('Updating project, please hold')
        e.preventDefault()
        firebase.firestore().collection('projects').doc(props.id)
        .update(project)
        .then( () => setStatus('project updated') )
        .catch( error => {console.log(error.message)} )
    }


    const uploadStart = () => {
        setStatus('Uploading image, please hold')
    }
    const uploadError = (error) => {
        setStatus(error)
    }
    const handleProgress = (percentage) => {
        console.log(percentage)
    }

    const uploadSuccess = filename => {
        firebase
        .storage()
        .ref('images')
        .child(filename)
        .getDownloadURL()
        .then(
            url => setProject( existingProject => ( {
                ...existingProject,
                [imageName]: url
            } ) )
        )
        setStatus('image uploaded')

    }

    const updateValue = 
    e => {
    e.persist()
    
    // if(e.target.type === 'checkbox') obj[e.target.name : e.target.checked
    if(e.target.type === 'text') {
        setProject( 
            existingProject => ({
            ...existingProject, [e.target.name]: e.target.value            
        }))
    }
    if(e.target.type === 'checkbox') {
        setProject( 
            existingProject => ({
            ...existingProject, [e.target.name]: e.target.checked            
        }))
    }
    console.log(project)
}


    return(
        <main>
        {project 
        ?
        <>
        <h1>Edit Project: {props.id}</h1>
            <form onSubmit={saveProject}>
                <input type='text' onChange={updateValue} name='title' value={project.title} />

                <input type='text' onChange={updateValue} name='year' placeholder='year' value={project.year} />

                <input type='text' onChange={updateValue} name='byline' placeholder='short description' value={project.byline} />
                
                <div className='checkbox'>
                    <label htmlFor='javascript'>Javascript</label>
                    <input onChange={updateValue} id='javascript' type='checkbox' name='javascript' value={project.javascript} />

                    <label htmlFor='html'>HTML</label>
                    <input onChange={updateValue} id='html' type='checkbox' name='html' value={project.html} />

                    <label htmlFor='css'>CSS</label>
                    <input onChange={updateValue} id='css' type='checkbox' name='css' value={project.css} />

                    <label htmlFor='adobe'>Adobe</label>
                    <input onChange={updateValue} id='adobe' type='checkbox' name='adobe' value={project.adobe} />
                </div>

                <textarea onChange={updateValue} name='description' value={project.description} />


<div className='project-images'>
                {
                project.defaultImage &&
                <div>
                   <img className='ProsjektDef' src={project.defaultImage} alt='default'></img>
                   <h3>Default</h3>
                </div>
                }
                  {
                
                project.displayImage &&
                <div>
                <img className='displayImage' src={project.displayImage} alt='display'></img>
                <h3>Display</h3>
                </div>
                }
                  {
                project.parallax &&
                <div>
                <img className='parallax' src={project.parallax} alt='parallax'></img>
                <h3>Parallax</h3>
                </div>
                }
                {
                project.displayImage1 &&
                <div>
                <img className='displayImage1' src={project.displayImage1} alt='displayImage1'></img>
                <h3>Image 1</h3>
                </div>
                }
                {
                project.detailImage2 &&
                <div>
                <img className='displayImage2' src={project.detailImage2} alt='detailImage2'></img>
                <h3>Image 2</h3>
                </div>
                }
                {
                project.detailImage3 &&
                <div>
                <img className='displayImage3' src={project.detailImage3} alt='detailImage3'></img>
                <h3>Image 3</h3>
                </div>
                }
                {
                project.detailImage4 &&
                <div>
                <img className='displayImage4' src={project.detailImage4} alt='detailImage4'></img>
                <h3>Image 4</h3>
                </div>
                }
                {
                project.detailImage5 &&
                <div>
                <img className='displayImage5' src={project.detailImage5} alt='detailImage5'></img>
                <h3>Image 5</h3>
                </div>
                }
                {
                project.detailImage6 &&
                <div>
                <img className='displayImage2' src={project.detailImage6} alt='detailImage6'></img>
                <h3>Image 6</h3>
                </div>
                }
                {
                project.detailImage7 &&
                <div>
                <img className='displayImage7' src={project.detailImage7} alt='detailImage7'></img>
                <h3>Image 7</h3>
                </div>
                }
                {
                project.detailImage8 &&
                <div>
                <img className='displayImage8' src={project.detailImage8} alt='detailImage8'></img>
                <h3>Image 8</h3>
                </div>
                }
                {
                project.detailImage9 &&
                <div>
                <img className='displayImage9' src={project.detailImage9} alt='detailImage9'></img>
                <h3>Image 9</h3>
                </div>
                }
                {
                project.detailImage10 &&
                <div>
                <img className='displayImage10' src={project.detailImage10} alt='detailImage10'></img>
                <h3>Image 10</h3>
                </div>
                }
                 

</div>

        <select name='imageName' onChange={ e => setImageName(e.target.value) }>
                <option name='defaultImage' value='defaultImage'>Default</option>
                <option name='displaytImage' value='displayImage'>Display</option>
                <option name='parallax' value='parallax'>Parallax</option>

                <option name='displayImage1' value='displayImage1'>displayImage1</option>
                <option name='displayImage2' value='displayImage2'>displayImage2</option>
                <option name='displayImage3' value='displayImage3'>displayImage3</option>
                <option name='displayImage4' value='displayImage4'>displayImage4</option>
                <option name='displayImage5' value='displayImage5'>displayImage5</option>
                <option name='displayImage6' value='displayImage6'>displayImage6</option>
                <option name='displayImage7' value='displayImage7'>displayImage7</option>
                <option name='displayImage8' value='displayImage8'>displayImage8</option>
                <option name='displayImage9' value='displayImage9'>displayImage9</option>
                <option name='displayImage10' value='displayImage10'>displayImage10</option>
        </select>    
        <label>     
            <div className='button'>{project.defaultImage ? 'Erstatt bilde' : 'Last opp'}</div>

                <FileUploader
                  hidden
                  accept="image/*"
                  storageRef={firebase.storage().ref('images')}
                  onUploadStart={uploadStart}
                  onUploadError={uploadError}
                  onUploadSuccess={uploadSuccess}
                  onProgress={handleProgress}
                />
                <button type='submit'>Lagre</button>
        </label>
            </form>
            <p>{status}</p>
        </>
        :
        <h2>Fetching project</h2>
        }
    </main>
    )
}

export default Edit