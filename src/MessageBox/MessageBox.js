import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'

export default class MessageBox extends PureComponent {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  }

  render() {
    const { isOpen, toggleModal} = this.props
    return (
      <Modal isOpen={isOpen} backdrop="static">
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
