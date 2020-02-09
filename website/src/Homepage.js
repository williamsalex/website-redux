import React, {Component} from 'react'
import {Container, Header, List} from 'semantic-ui-react'

export default class Homepage extends Component {
    render(){
        return(
            <Container>
                <List divided relaxed size='large' verticalAlign = 'middle'>
                    <List.Item>
                        <List.Content>
                            <List.Header style={{color: '#0E6EB8'}} as='h2'>Valence Life Sciences: Proprietary Investment Strategy</List.Header>
                            <List.Description as='p'>Valence Life Sciences is the only life sciences venture firm with a proven track record of success in late-stage investing.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header style={{color: '#0E6EB8'}} as='h2'>Experience</List.Header>
                            <List.Description as='p'>Experienced team has insight on what drives success from assessing management and clinical development plans for over 25 years.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header style={{color: '#0E6EB8'}} as='h2'>Discipline</List.Header>
                            <List.Description as='p'>Disciplined and successful approach that has established Valence Advantage's reputation as a preferred investor for late-stage private and micro-cap public companies</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header style={{color: '#0E6EB8'}} as='h2'>Insight</List.Header>
                            <List.Description as='p'>Insight on what drives success is key to assessing management and their clinical plan.</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        )
    }
}