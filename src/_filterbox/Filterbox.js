import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export default function FilterBox() {
    const Prop = styled.span`
    color : ${props => props.color};
    margin-right: ${props => props.margin};
    `;
    return (
        <Container fluid className="property">
            <div className="row">
                <div className="col m-2">
                    <Prop color="yellow" margin="0.5rem">Star Rating:</Prop>
                    <Prop color="white">Show All</Prop>
                    <i class="fa fa-chevron-down text-warning mx-2"></i>
                </div>
                <div className="col m-2">
                    <Prop color="yellow" margin="0.5rem">Sort By:</Prop>
                    <Prop color="white">Best Rated</Prop>
                    <i class="fa fa-chevron-down text-warning mx-2"></i>
                </div>
                <div className="col m-2">
                    <Prop color="yellow" margin="0.5rem">Property Type:</Prop>
                    <Prop color="white">Hotels</Prop>
                    <i class="fa fa-chevron-down text-warning mx-2"></i>
                </div>
                <div className="col m-2">
                    <Prop color="yellow" margin="0.5rem">Locality:</Prop>
                    <Prop color="white">3 selected</Prop>
                    <i class="fa fa-chevron-down text-warning mx-2"></i>
                </div>
            </div>
        </Container>
    )
}