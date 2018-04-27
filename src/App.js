import React, { PureComponent } from 'react'
import { Button } from 'reactstrap'

import MessageBox from './MessageBox'

export default class App extends PureComponent {
  state = {
    isOpen: false
  }

  toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  renderToggleButton() {
    return (
      <section className="m-auto d-flex flex-column align-items-center justify-content-center">
        <h5>Simple Message Box</h5>
        <Button
          outline
          id="targetButton"
          color="primary"
          className="mr-3 p-0 rounded-circle"
          style={{ width: '60px', height: '60px' }}
          onClick={this.toggleModal}
        >
          <i className="fa fa-lg fa-comments" />
        </Button>
      </section>
    )
  }

  render() {
    return (
      <section className="w-100 h-100 p-3 d-flex">
        {this.renderToggleButton()}
        <MessageBox isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
      </section>
    )
  }
}
