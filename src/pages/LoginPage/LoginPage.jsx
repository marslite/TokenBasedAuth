import React from 'react';
import './LoginPage.css';
import {useState} from 'react';
import userService from '../../utils/userService'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom';

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react"
import { unstable_renderSubtreeIntoContainer } from 'react-dom';



export default function LoginPage({handler}){

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  function handleChange(e){
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const login = await userService.login(state);
      console.log(login, "LOGIN");
      navigate('/');
      handler();
    } catch (err) {
      console.log(err,"Error in Login Handlesubmit");
      setError('Check in the console')
      
    }

  }
   

    return (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" value={state.email} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            name = 'password'
            placeholder='Password'
            type='password'
            value = {state.password}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
      );
}

