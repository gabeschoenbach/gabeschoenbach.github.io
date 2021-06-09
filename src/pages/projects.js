import * as React from 'react'
import Navigation from '../components/navigation'
import Media from "../components/media"

const ProjectsPage = () => {
    return (
      <div>
        <Navigation pageTitle="projects">
        </Navigation>
        <div className="contentContainer">
          <h1>projects</h1>
        </div>
        <Media>
        </Media>
      </div>
    )
}

export default ProjectsPage