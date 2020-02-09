import React from 'react'
import Homepage from './Homepage.js'
import Team from './Team.js'
import Industry from './Industry.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'


function SelectiveRender(props){
        if ( props.activeItem === 'home' ) {
          return(
            <Homepage/>
          )
        } else if ( props.activeItem === 'team') {
          return(
            <Team />
          )
        }  else if ( props.activeItem === 'portfolio') {
          return(
            <Portfolio />
          )
        } else if ( props.activeItem === 'industry advisory board') {
          return(
            <Industry />
          )
        } else if ( props.activeItem === 'contact us') {
          return(
            <Contact />
          )
        } else {
          return 'Something horrible has happened. An error has appeared!'
        }
}

export default SelectiveRender