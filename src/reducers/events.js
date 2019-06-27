import { EVENTS_FETCHED, loadEvents } from '../actions/events';

const initialState = null

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events
    default:
      return state
  }
}
