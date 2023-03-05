import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import "./read.css";
import dog from "../images/dog.jpg";

export default function Read() {
    const getData = () => {
        axios.get(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs/${id}`)
        .then(() => {
            getData();
        })
    }
    
    const setData = (data) => {
        let { id, dogName, dogBreed, ownerName, dogAbout, ownerEmail } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Dog Name', dogName);
        localStorage.setItem('Dog Breed', dogBreed);
        localStorage.setItem('Owner Name', ownerName);
        localStorage.setItem('About Dog', dogAbout);
        localStorage.setItem('Owner Email', ownerEmail)
    }
    
    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`)
            .then((response) => {
                setAPIData(response.data);
            })
        }, [])

        return (
            <div class='container col-md-8'>
                <div class='card Read'>
                    <div className='row justify-content-center'>
                        <div className='col-11 col-lg-5'>
                        {APIData.map((data) => (
                            <div className='member-detail-card card'>
                                <img className='card-img-top mx-auto mt-5' src={dog} alt='' />
                                <div className="card-header">
                                    <h2 className='card-title text-center'>{data.dogName}, Coming Soon!</h2>  
                                </div>
                                <div className='card-body'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item'><strong>Breed:</strong> {data.dogBreed}</li>
                                        <li className='list-group-item'><strong>Owner(s):</strong> {data.ownerName}</li>
                                        <li className='list-group-item'><strong>About:</strong> {data.dogAbout}</li>
                                    </ul>
                                    <div className='card-body'>
                                        <p>Thank you so much for your entry. We'll be in touch soon!</p>
                                        <div className='card-body'>
                                            <Link to='/members'>
                                                <Button>Back to Home</Button>
                                            </Link>
                                            &nbsp; &nbsp;
                                            <Link to='/update'>
                                                <Button onClick={() => setData(data)}>Update</Button>
                                            </Link>
                                            &nbsp; &nbsp;
                                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        );
}


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import "./read.css";
import dog from "../images/dog.jpg";

export default function Read() {
const getData = () => {
    axios.get(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`)
    .then((getData) => {
        setAPIData(getData.data);
    })
}

const onDelete = (id) => {
    axios.delete(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs/${id}`)
    .then(() => {
        getData();
    })
}

const setData = (data) => {
    let { id, dogName, dogBreed, ownerName, dogAbout, ownerEmail } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Dog Name', dogName);
    localStorage.setItem('Dog Breed', dogBreed);
    localStorage.setItem('Owner Name', ownerName);
    localStorage.setItem('About Dog', dogAbout);
    localStorage.setItem('Owner Email', ownerEmail)
}

const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63f9ae4a897af748dcc1ec8f.mockapi.io/api/devkela/dogs`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    return (
        <div class='container col-md-8'>
            <div class='card Read'>
            <Table singleLine>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <>
                            <Table.Row>
                                <Table.Cell>
                                <div className="member-img mt-5">
                                <img src={dog} alt='' />
                                </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>    
                                <h2 className="text-center">{data.dogName}</h2>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>
                                <p>Breed: {data.dogBreed}</p>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>
                                <p>Owner: {data.ownerName}</p>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>
                                <p>About {data.dogName}: {data.dogAbout}</p>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>
                                <Link to='/update'>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                </Link>&nbsp; &nbsp; <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                            </Table.Row>
                            </>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>
    </div>
    )
}
