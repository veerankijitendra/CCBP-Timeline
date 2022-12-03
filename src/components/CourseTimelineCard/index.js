import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {project} = props
  const {courseTitle, duration, description, tagsList} = project

  return (
    <div className="course-timeline-card">
      <div className="title-duration-con">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-icon-con">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list-con">
        {tagsList.map(each => {
          const {id, name} = each
          return (
            <li key={id} className="tag-item">
              <p>{name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

CourseTimelineCard.defaultProps = {
  project: {
    id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
    categoryId: 'COURSE',
    title: '10 DECEMBER 2020',
    courseTitle: 'Static Website',
    description:
      'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
    duration: '10 days',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'HTML Elements',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'Class Attribute',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
        name: 'Text Properties',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
        name: 'Box Properties',
      },
      {
        id: 'c31b347e-f766-11eb-9a03-0242ac130003',
        name: 'Layout',
      },
      {
        id: 'c31b358c-f766-11eb-9a03-0242ac130003',
        name: 'Flexbox',
      },
    ],
  },
}
