import React from 'react';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";

export default function MainComponent(props) {
    const Card = styled.div`
    box-shadow : 2px 2px 2px 2px grey;
    margin : 2rem;
    display : flex;
    justify-content: center;
    flex-wrap : wrap;
    `;
    const ImageBox = styled.img`
    height : ${props => props.height};
    width : ${props => props.width};
    `;
    const Head = styled.h4`
    color : rgb(47, 113, 175);
    `;
    const Price = styled.h3`
    color : rgb(192, 38, 34);
    float : right;
    `;
    const Para = styled.div`
    color : ${props => props.color};
    font-size: small;
    `;
    return (
        <Container>
            <Card>
                <div className="col-md-3">
                    <ImageBox className="img-fluid my-4 rounded" height="234px" width="224px" src={props.img} />
                    <ImageBox className="img-fluid mr-2 my-2 rounded" height="45px" width="40px" src={thumb1} />
                    <ImageBox className="img-fluid mr-2 my-2 rounded" height="45px" width="40px" src={thumb2} />
                    <ImageBox className="img-fluid mr-2 my-2 rounded" height="45px" width="40px" src={thumb3} />
                    <span className="text-info ">+3 More</span>
                </div>
                <div className="col-md-6 section mt-2 mb-2 pt-4">
                    <Head>
                        GINGER HOTEL GURGAON
                        <span class="ml-2 fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </Head>

                    <span className="text-muted info">Gurgaon, Haryana</span>
                    <span className="border-text ml-2"></span>
                    <span className="text-muted info ml-2">1km from Indira Gandhi International Airport, Delhi</span>
                    <p className="text-muted info mt-4">More options:</p>
                    <p className="font-weight-bold info">Breakfast included,Zero Cancellation Charges</p>
                    <div className="navBox-left mr-5 pr-3">
                        <p className="text-muted info mt-2">Facilities:</p>
                        <i class="fa fa-500px fa-2x"></i>
                        <i class="fa fa-car fa-2x mx-2"></i>
                        <i class="fa fa-mobile fa-2x mx-2"></i>
                        <i class="fa fa-laptop fa-2x mx-2"></i>
                        <i class="fa fa-wifi fa-2x ml-2"></i>
                    </div>
                    <div className="navBox-left mt-1">
                        <p className="text-muted info mt-2">Guest Ratings:</p>
                        <span>4.8</span>
                        <span class="fa fa-star checked mx-2"></span>
                        <span>(53 reviews)</span>
                    </div>
                </div>
                <div className="col-md-3">
                    <Para color="blue" className="text-right mb-2">This Price includes free Breakfast and fee Cancellation</Para>
                    <div className="price-tag float-right">34% off</div><br /><br />
                    <p className="text-muted info-strike text-right">Original cost : 2490</p>
                    <p className="font-weight-bolder info text-right">Prices Start from :</p>
                    <Price>INR 1700</Price><br /><br />
                    <p className="text-muted info text-right">Per Person</p>
                    <p className="text-muted info text-right">Net Cancellation : 250</p>
                    <Button variant="danger" className="mb-2 float-right text-light font-weight-bolder">Book Now</Button>
                </div>
            </Card>
        </Container>
    )
}