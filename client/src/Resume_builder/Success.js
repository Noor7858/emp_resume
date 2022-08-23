import React from 'react';

export default function Success(props) {
    return (
        <div className="card animated bounceIn">
            <div className="card-body text-center pt-5 pb-5">
                <i className="fas fa-check-circle fa-7x text-success"></i>
                <h2>Resume is created successfully</h2>
                <a href="/resume" >Click here to check you resume</a>
                <br />
            </div>
        </div>
    )
}