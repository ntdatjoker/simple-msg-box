import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Alert, ModalBody } from 'reactstrap'

export default class MessageContainer extends PureComponent {

  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    if (this.msgEnd) {
      this.msgEnd.scrollIntoView({ behavior: 'smooth' })
    }
  }

  renderMsg = (msg, index) => {
    return (
      <Alert
        color="primary"
        className="text-right"
        key={msg + index}
      >
        {msg}
      </Alert>
    )
  }

  render() {
    return (
      <ModalBody>
        {this.props.messages.map(this.renderMsg)}
        <div ref={msgEnd => this.msgEnd = msgEnd} />
      </ModalBody>
    )
  }
}
