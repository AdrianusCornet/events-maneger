import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            onChange={this.props.onChange} />
        </label>
        <br/>
        <label>
          date:
          <input
            type='date'
            name='date'
            onChange={this.props.onChange} />
        </label>
        <br/>
        <label>
          description:
          <input
            type='text'
            name='description'
            onChange={this.props.onChange} />
        </label>
        <br/>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
