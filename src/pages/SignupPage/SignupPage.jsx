import React, { useState } from 'react'
import userService from '../../utils/userService'

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react"


import { useNavigate } from 'react-router-dom';


export default function SignupPage({handler}){

    const [state,setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        bio: ''
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
            const signUp = await userService.signup(state);
            console.log(signUp, "Signup Handlechange");
            navigate('/');
            handler();

        } catch (err) {
            console.log(err, "ERROR in handlechange");
            setError('Check in the console');
            
        }



    }





    return(
        <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			 <Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="orange" textAlign="center">
				 <Image src="https://i.imgur.com/TM4eA5g.jpg" /> Sign Up
			   </Header>
			   <Form autoComplete="off" onSubmit={handleSubmit} >
				 <Segment stacked>
				   <Form.Input
                     name="username"
					 placeholder="username"
                     value={state.username}
                     onChange={handleChange}
					 required
				   />
				   <Form.Input
					 type="email"
                     name= "email"
                     value= {state.email}
					 placeholder="email"
                     onChange={handleChange}
					 required
				   />
				   <Form.Input
					 type="password"
                     name= "password"
                     value= {state.password}
                     onChange={handleChange}
					 placeholder="password"
					 required
				   />
				   <Form.Input
					 type="password"
                     name="passwordConf"
                     value = {state.passwordConf}
                     onChange={handleChange}
					 placeholder="Confirm Password"
					 required
				   />
				   <Form.TextArea
					 label="bio"
                     name="bio"
                     value = {state.bio}
                     onChange={handleChange}
					 placeholder="Tell us more about your dogs..."
				   />
				   <Form.Field>
					 <Form.Input
					   type="file"
					   name="photo"
					   placeholder="upload image"
					 />
				   </Form.Field>
				   <Button type="submit" className="btn" >
					 Signup
				   </Button>
				 </Segment>
				 {error ? <ErrorMessage error={error} /> : null}
			   </Form>
			 </Grid.Column>
		   </Grid>
			 );


}