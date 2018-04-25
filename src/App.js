import React, { PureComponent } from 'react'
import { Button } from 'reactstrap'

export default class App extends PureComponent {
  state = {
    isOpen: false
  }

  toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  render() {
    return (
      <section className="w-100 h-100 p-3 d-flex justify-content-end">
        <Button
          outline
          color="primary"
          className="mt-auto mr-3 p-0 rounded-circle"
          style={{ width: '60px', height: '60px' }}
          onClick={this.toggleModal}
        >
          <i className="fa fa-lg fa-envelope" />
        </Button>
      </section>
    )
  }
}
