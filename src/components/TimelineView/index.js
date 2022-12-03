import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(each => {
            const {categoryId} = each
            if (categoryId === 'PROJECT') {
              return <ProjectTimelineCard project={each} />
            }
            return <CourseTimelineCard project={each} />
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
