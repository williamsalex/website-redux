import React, {Component} from 'react'
import {Container, Form, Button} from 'semantic-ui-react'

export default class Contact extends Component {

    handleSubmit = () => {
        console.log()
    }

    render(){
        return(
            <div>
                <Container text>
                    <p>
                    Valence Advantage Life Sciences Fund
                    </p>
                    590 Madison Avenue
                    <br/>
                    21st Floor
                    <br/>
                    New York, NY 10022
                    <br/>
                    (212) 521-4379
                    <br/>
                    <br/>
                    You can also contact us directly by using the form below:
                </Container>
                <br/>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Field name='name'>
                        <label>Name:</label>
                        <input placeholder='Name'/>
                    </Form.Field>
                    <Form.Field name='company'>
                        <label>Company:</label>
                        <input placeholder='Company'/>
                    </Form.Field>
                    <Form.Field name='email'>
                        <label>Email:</label>
                        <input placeholder='Email'/>
                    </Form.Field>
                    <Form.Field name='phone'>
                        <label>Phone:</label>
                        <input placeholder='Phone'/>
                    </Form.Field>
                    <Form.TextArea name='message' label='Message:' placeholder='Message'/>
                    <Button type='submit'>Send</Button>
                </Form>
            </div>
        )
    }
}