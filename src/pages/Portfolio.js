import React from 'react';
// import { Container } from 'react-bootstrap';
import Port1 from '../components/Port1'
import Port2 from '../components/Port2';
import Port3 from '../components/Port3';
import Port4 from '../components/Port4';
import Port5 from '../components/Port5';
import Port6 from '../components/Port6';

function Portfolio(props) {
    return (
        <div class="container">
            <div class="row">

                <div class="col-md-4 mb-4">
                    <Port1 />
                </div>
                <div class="col-md-4">
                    <Port2 />
                </div>
                <div class="col-md-4">
                    <Port3 />
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <Port4 />
                </div>
                <div class="col-md-4">
                    <Port5 />
                </div>
                <div class="col-md-4">
                    <Port6 />
                </div>
            </div>

        </div>
    );
}

export default Portfolio;