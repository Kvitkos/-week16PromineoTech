import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import "./Members.css";
import '../App.css'

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [playerName, setplayerName] = useState('');
    const [playerNationality, setplayerNationality] = useState('');
    const [winsNumber, setwinsNumber] = useState('');
    const [playerAbout, setplayerAbout] = useState('');
    const [PlayersEmail, setPlayersEmail] = useState('');

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setplayerName(localStorage.getItem('player Name'));
        setplayerNationality(localStorage.getItem('player Nationality'));
        setwinsNumber(localStorage.getItem('winsNumber'))
        setplayerAbout(localStorage.getItem('About player'))
        setPlayersEmail(localStorage.getItem('player email'))
}, []);

const updateAPIData = () => {
    axios.put(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs/${id}`, {
        playerName,
        playerNationality,
        winsNumber,
        playerAbout,
        PlayersEmail
	}).then(() => {
        history.push('/read')
    })
}

    return (
        <>
        <div className='container col-md-8 my-5'>
            <div className='card Update'>
                <div className='card-header'>
                    <h2>Update Your Entry</h2>
                </div>
                <div className="container">
                    <div className="card-body mb-3">
                        <Form className="create-form">
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>player Name</label>
                                    <input placeholder='Kory Vitkos' value={playerName} onChange={(e) => setplayerName(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>player Nationality</label>
                                    <input placeholder='United States' value={playerNationality} onChange={(e) => setplayerNationality(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>winsNumber</label>
                                    <input placeholder='0' value={winsNumber} onChange={(e) => setwinsNumber(e.target.value)}/>
                                </Form.Field>
                            </Form.Group>
                                <Form.Field>
                                    <label>About player</label>
                                    <input placeholder='Aspiring Amatuer' value={playerAbout} onChange={(e) => setplayerAbout(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>player email</label>
                                    <input placeholder='kvitkos99@yahoo.com' value={PlayersEmail} onChange={(e) => setPlayersEmail(e.target.value)}/>
                                </Form.Field>
                                    <Button type='submit' onClick={updateAPIData}>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
