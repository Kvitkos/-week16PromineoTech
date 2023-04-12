import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {
    render() {
        return (
          <>
          <div className='jumbotron'>
                <div className='container'>
                  <h1>Vitkos National</h1>
                  <p className="statement">Championship Golf Course</p>
                </div>
          </div>
          <div className='container col-md-8 mt-2 mb-5'>
            <div className='card Home'>
                <div className='card-header'>
                  <h2>About Us</h2>
                </div>
                <div className='card-body'>
                  <p className="Desc">World Renowned</p>
                  <p className="Desc">Championship Golf Course</p>
                    <p className="Desc">Vitkos National</p>
                </div>
            </div>
          </div>
        </>
        );
    }
} 