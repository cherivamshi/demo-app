import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export default function Scheduler() {
    const Title = styled.p`
    font-weight : bold;
    text-transform : uppercase;
    `;
    const Data = styled.p`
    color : white;
    text-transform : uppercase;
    `;
    return (
        <div className="container-fluid prim">
            <div className="row">
                <div className="col border-right m-2">
                    <p className="text-white">NEW DELHI</p>
                </div>
                <div className="col border-right m-2">
                    <div className="navBox mx-2">
                        <Title>Check IN</Title>
                        <Data>17th Nov, 2019</Data>
                    </div>
                    <div className="navBox mx-2">
                        <Title>Check out</Title>
                        <Data>17th Nov, 2019</Data>
                    </div>
                </div>
                <div className="col m-2">
                    <Title>Guests</Title>
                    <Data>2 Adults, 1 Child</Data>
                </div>
                <div className="col m-2">
                    <Button variant="light" className="text-primary font-weight-bolder mt-4">Modify Search</Button>
                </div>
            </div>
        </div>
    );

}