import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import EventList from './EventList'

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return <EventList events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventListContainer)