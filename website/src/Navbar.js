import React, { Component } from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'

export default class Navbar extends Component {

  render(){
    return (
      <Menu compact color={'blue'} attached='bottom' inverted>
        <Menu.Item 
        name = "home" active = {this.props.activeItem === 'home'}
        onClick = {this.props.handleClick}
        >
          Home
        </Menu.Item>
        <Dropdown item simple text='Team'>
          <Dropdown.Menu>
            <Dropdown.Item text = 'A. Rachel Leheny, Ph.D.'/>
            <Dropdown.Item text = 'Eric W. Roberts'/>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item 
        name = "portfolio" active = {this.props.activeItem === 'portfolio'}
        onClick = {this.props.handleClick}
        >
          Portfolio
        </Menu.Item>
        <Dropdown item simple text='Industry Advisory Board'>
          <Dropdown.Menu>
            <Dropdown.Item text = 'Dr. Dani P. Bolognesi, Ph.D.'/>
            <Dropdown.Item text = 'Robert R. Bonczek, J.D.'/>
            <Dropdown.Item text = 'Peter R. Dolan'/>
            <Dropdown.Item text = 'Dr. Henry A. McKinnell, Ph.D.'/>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item 
        name = "contact us" active = {this.props.activeItem === 'contact us'}
        onClick = {this.props.handleClick}
        >
          Contact Us
        </Menu.Item>
      </Menu>
    )
  }
}