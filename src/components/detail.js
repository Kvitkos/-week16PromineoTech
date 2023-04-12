import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./detail.css";

export default class Detail extends Component {
    render() {
        let { member } = this.props;
        return (
            <div className="container">
                <div className='cute-member row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='member-detail-card PlayerDetails-card card'>
                            <img className='card-img-top mt-2 mx-auto' src={member.src} alt={member.name} />
                            <div className='card-body'>
                                <h2 className='card-title text-center'>{member.name}</h2>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'><strong>Nationality:</strong> {member.Nationality}</li>
                                    <li className='list-group-item'><strong>Numbers of wins:</strong> {member.winsNumber}</li>
                                    <li className='list-group-item'><strong>About:</strong> {member.about}</li>
                                </ul>
                                <div className='card-body'>
                                    <Link to='/members' className='btn btn-light'>Back to Members</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}