import React from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends React.Component {
  renderEvents = () => {
    if (!this.props.events) {
      return <span>loading...</span>
    }
    return this.props.events.map(this.renderEvent)
  }
  renderEvent = (event) => {
    return <li key={event.id}><Link to={`/events/${event.id}`}>{event.description}</Link></li>
  }
  render() {
    return (
      <ul>
        {this.renderEvents()}
      </ul>
    )
  }
}
