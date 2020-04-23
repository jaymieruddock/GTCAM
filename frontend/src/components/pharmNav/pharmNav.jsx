import React from 'react';
import { Container } from 'react-bootstrap';
import './pharmNav.css';

export class pharmNav extends React.Component {

    render() {
        return <>

        <Container id='nav-container' fluid style={{width: '100%'}}>
                <div id='gtcam-logo-container'>   
                </div>
                <nav class="navbar navbar-expand-sm navbar-light bg-light" id='top-nav'>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav nav-pills nav-fill" id='nav-list'>

                        <li class="nav-item nav-list-item">
                            <a href="/pharmHome">Home</a>
                        </li>

                        <li className='nav-item nav-list-item'>
                            <a href="#">Prescriptions</a>
                        </li>
                        <li className='nav-item nav-list-item'>
                            <a href="#">Patients</a>
                        </li>
                    </ul>
                </div>
                </nav>
        </Container>
        </>;
    }
}

export default pharmNav;