import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import "./Members.css";
import '../App.css'

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [dogName, setDogName] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [dogAbout, setDogAbout] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setDogName(localStorage.getItem('Dog Name'));
        setDogBreed(localStorage.getItem('Dog Breed'));
        setOwnerName(localStorage.getItem('Owner Name'))
        setDogAbout(localStorage.getItem('About Dog'))
        setOwnerEmail(localStorage.getItem('Owner Email'))
}, []);

const updateAPIData = () => {
    axios.put(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs/${id}`, {
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
                                    <label>Dog Name</label>
                                    <input placeholder='Fluffy' value={dogName} onChange={(e) => setDogName(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Dog Breed</label>
                                    <input placeholder='Poodle' value={dogBreed} onChange={(e) => setDogBreed(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Owner Name</label>
                                    <input placeholder='Karen' value={ownerName} onChange={(e) => setOwnerName(e.target.value)}/>
                                </Form.Field>
                            </Form.Group>
                                <Form.Field>
                                    <label>About Dog</label>
                                    <input placeholder='Fluffy loves cookies!' value={dogAbout} onChange={(e) => setDogAbout(e.target.value)}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Owner Email</label>
                                    <input placeholder='klovesfluff@dogmail.com' value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)}/>
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
