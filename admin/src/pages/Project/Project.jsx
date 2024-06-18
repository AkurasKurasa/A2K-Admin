import './Project.css'

const Project = () => {
  return (
    <div id='project'>
        <div className="project-layout">
            <div className="project-header">
                <h1 className="project-heading">PROJECT NAME:</h1>
                <h1 className="project-project-name">A2K ADMIN PANEL</h1>
                <div className="project-socials">
                    <img src="../src/assets/github-icon.svg" alt="" />
                    <img src="../src/assets/figma-icon.svg" alt="" />
                </div>
            </div>
            <div className="project-highlight-container"></div>
            <div className="project-description-container">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus? Tempora corporis quia voluptatum dolorem soluta perspiciatis adipisci ex. Laborum illo ut, sequi tempore deserunt molestias tenetur architecto quisquam nihil.
                Aliquam placeat quam vitae eius hic veritatis veniam vel odit, iure voluptatem possimus totam eos qui iusto quidem in perspiciatis alias consequatur facilis aperiam non cupiditate! Dolorum earum consequatur distinctio!
                Consequuntur dolore est non dolor quod nihil nulla aspernatur saepe rem, quas provident sed, veniam deleniti, consectetur eum reprehenderit consequatur libero in odit?
            </div>
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