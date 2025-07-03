import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import PrimNavbar from './_navbar/Navbar';
import Scheduler from './_scheduler/Scheduler';
import FilterBox from './_filterbox/Filterbox';
import MainComponent from './_mainComponent/Maincomponent';
import image from './assets/image.jpg';
import destination from './assets/destination.jpg';
import relax from './assets/relax.jpg';

function App() {
  return (
    <Container fluid>
      <PrimNavbar />
      <Scheduler />
      <FilterBox />
      <MainComponent img={image} />
      <MainComponent img={destination} />
      <MainComponent img={relax} />
    </Container>
  );
}

export default App;
