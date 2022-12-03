import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, imageUrl, duration, description, projectUrl} = project

  return (
    <div className="ptl-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-duration-con">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-icon-con">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-button">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

ProjectTimelineCard.defaultProps = {
  project: {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: '15 FEBRUARY 2021',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://wikiseaarch.ccbp.tech/',
  },
}
