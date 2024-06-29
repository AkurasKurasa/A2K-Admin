import './Project.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../config/supabase'

const Project = () => {

    const { id } = useParams()
    const [ projectData, setProjectData ] = useState()
    const fetchProject = async () =>  {
        const { data, error } = await supabase.from('projects').select().eq('project_id', id).single()
        setProjectData(data)
    }

    useEffect(() => {
      fetchProject()
    }, [id])
    

  return (
    <div id='project'>
        <div className="project-layout">
            <div className="project-header">
                <h1 className="project-heading">PROJECT NAME:</h1>
                { projectData && <h1 className="project-project-name">{projectData.project_name}</h1> }
                <div className="project-socials">
                    <img src="../src/assets/github-icon.svg" alt="" />
                    <img src="../src/assets/figma-icon.svg" alt="" />
                </div>
            </div>
            <div className="project-highlight-container">
                <Slider />
            </div>
            { projectData &&
                <div className="project-description-container">
                    {projectData.project_description}
                </div>
            }
            <div className="project-info-container">

                <div className="project-personnel-container">
                    <h1 className="project-info-heading">ASSIGNED PERSONNEL AND ROLES:</h1>

                    <div className="project-personnel">
                        <h2 className="project-personnel-name">ANDREI CALMA</h2>
                        <p className="project-personnel-role">Frontend</p>
                        <p className="project-personnel-role">Backend</p>
                        <p className="project-personnel-role">UI</p>
                    </div>

                    <div className="project-personnel">
                        <h2 className="project-personnel-name">RASTAFARI SARZONA</h2>
                        <p className="project-personnel-role">Hardware</p>
                    </div>

                    <div className="project-personnel">
                        <h2 className="project-personnel-name">ASHLEY SILOS</h2>
                        <p className="project-personnel-role">Hardware</p>
                    </div>
                </div>

                <div className="project-personnel-container">
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT STARTED:</h1>
                        <h1 className="project-date">June 10, 2024</h1>
                    </div>
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT FINISHED:</h1>
                        <h1 className="project-date">--/--/--</h1>
                    </div>
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT DEADLINE:</h1>
                        <h1 className="project-date">--/--/--</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project