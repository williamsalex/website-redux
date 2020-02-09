import React, {Component} from 'react'
import { Card, Header, Icon } from 'semantic-ui-react'

export default class Sidebar extends Component {
    render(){
        return(
            <div>
                <Header block as='h1' size='large' align='center' color= 'blue' >Selected Valence News</Header>
                <Card.Group items = {this.props.news} centered itemsPerRow={1}/>
            </div>
        )
    }
}