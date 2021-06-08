import * as React from 'react'
import Navigation from '../components/navigation'
import {
  container,
  contentContainer,
} from './style.css'

const ProjectsPage = () => {
    return (
      <div className="container">
        <Navigation pageTitle="projects">
        </Navigation>
        <div className="contentContainer">
          <p>I swear I have some projects.</p>
        </div>
      </div>
    )
}

export default ProjectsPage