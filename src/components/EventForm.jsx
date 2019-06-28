import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    return (
      <form>
        name:
        <input type='text' name='name' />
        <br />
        date:
        <input type='text' name='date' />
        <br />
        description:
        <input type='text' name='description' />
      </form>
    )
  }
}
