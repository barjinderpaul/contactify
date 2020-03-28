import React, { Component } from 'react'
import { Input, Container, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
        <Container textAlign='center' className = 'search-container' className='navbar'>
          <Input size='massive' icon='search' placeholder='Search...' onChange = {this.props.updateQuery}  /> {' '}
          <Link to="/create">
            <Button size = 'massive' circular icon = 'add user' color ='green'/>
          </Link>
        </Container>

    )
  }
}
