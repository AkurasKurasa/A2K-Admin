import './Project.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../config/supabase'
import { Link } from 'react-router-dom'

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
                    { projectData && <Link style={{ content: "url('../src/assets/github-icon.svg')"}} to={projectData.project_github} target='_blank'></Link> }
                    { projectData && <Link style={{ content: "url('../src/assets/figma-icon.svg')"}} to={projectData.project_figma} target='_blank'></Link> }
                    { projectData && <Link style={{ content: "url('../src/assets/jira-icon.svg')"}} to={projectData.project_jira} target='_blank'></Link> }
                </div>
            </div>
            <div className="project-highlight-container">
                { projectData && <Slider images={projectData.images}/> }
            </div>
            { projectData &&
                <div className="project-description-container">
                    {projectData.project_description}
                </div>
            }
            <div className="project-info-container">

                <div className="project-personnel-container">
                    <h1 className="project-info-heading">ASSIGNED PERSONNEL:</h1>

                    {   projectData && 
                        projectData.assigned.map((name, index) => {
                            return <div className="project-personnel" key={index}>
                            <h2 className="project-personnel-name">{name}</h2>
                        </div>
                        })
                    }

                </div>

                <div className="project-personnel-container">
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT STARTED:</h1>
                        { projectData && <h1 className="project-date">{projectData.project_start}</h1> }
                    </div>
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT FINISHED:</h1>
                        { projectData && <h1 className="project-date">{projectData.project_end}</h1> }
                    </div>
                    <div className="project-date-container">
                        <h1 className="project-date-heading">PROJECT DEADLINE:</h1>
                        { projectData && <h1 className="project-date">{projectData.project_deadline}</h1> }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project