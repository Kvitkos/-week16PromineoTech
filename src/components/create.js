import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import "./Members.css";

export default function Create() {
    let history = useHistory();
    const [dogName, setDogName] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [dogAbout, setDogAbout] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    
    const postData = () => {
        axios.post(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`, {
            dogName,
            dogBreed,
            ownerName,
            dogAbout,
            ownerEmail
        }).then(() => {
            history.push('/read')
        })
    }   

    return (
        <>
        <div class='container col-md-8 my-5'>
            <div className="card Enroll">
                <div class='card-header'>
                    <h2>Enroll</h2>
                </div>
                    <div class='card-body'>
                        <Form className="create-form">
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Dog's Name</label>
                                <input placeholder='Fluffy' onChange={(e) => setDogName(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                            <label>Dog's Breed</label>
                            <input placeholder='Poodle' onChange={(e) => setDogBreed(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                            <label>Owner's Name</label>
                            <input placeholder='Karen' onChange={(e) => setOwnerName(e.target.value)}/>
                            </Form.Field>
                        </Form.Group>
                            <Form.Field>
                                <label>About</label>
                                    <input placeholder='Fluffy loves cookies!' onChange={(e) => setDogAbout(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='klovesfluff@dogmail.com' onChange={(e) => setOwnerEmail(e.target.value)}/>
                            </Form.Field>
                            <Button onClick={postData} type='submit'>Submit</Button>
                        </Form>
                    </div>
            </div>
        </div>
        </>
    )
}
  
  