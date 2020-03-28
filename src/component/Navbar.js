import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='List view'
          active={activeItem === 'listView'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Add contact'
          active={activeItem === 'addContact'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search contacts' onChange = {this.props.updateQuery} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
