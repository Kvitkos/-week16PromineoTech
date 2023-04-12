import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import "./Members.css";

export default function Create() {
    let history = useHistory();
    const [playerName, setPlayerName] = useState('');
    const [playerNationality, setPlayerNationality] = useState('');
    const [playerAbout, setPlayerAbout] = useState('');
    const [playerEmail, setPlayerEmail] = useState('');
    
    const postData = () => {
        axios.post(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`, {
            playerName,
            playerNationality, 
            playerAbout,
            playerEmail
        }).then(() => {
            history.push('/read')
        })
    }   

    return (
        <>
        <div class='container col-md-8 my-5'>
            <div className="card Enroll">
                <div class='card-header'>
                    <h2>Request Membership</h2>
                </div>
                    <div class='card-body'>
                        <Form className="create-form">
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Kory Vitkos' onChange={(e) => setPlayerName(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                            <label>Nationality</label>
                            <input placeholder='United States' onChange={(e) => setPlayerNationality(e.target.value)}/>
                            </Form.Field>
                        </Form.Group>
                            <Form.Field>
                                <label>PGA Tour Wins</label>
                                    <input placeholder='0' onChange={(e) => setPlayerAbout(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Kvitkos99@yahoo.com' onChange={(e) => setPlayerEmail(e.target.value)}/>
                            </Form.Field>
                            <Button onClick={postData} type='submit'>Submit</Button>
                        </Form>
                    </div>
            </div>
        </div>
        </>
    )
}
  
  