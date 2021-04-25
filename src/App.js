import './App.css';
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/home-slider-1.jpg';
import image2 from './images/home-slider-2.jpg';
import image3 from './images/home-slider-3.jpg';
import cause1 from './images/cause1.jpg';
import cause2 from './images/cause2.jpg';
import cause3 from './images/cause3.jpg';
import cause4 from './images/cause4.jpg';
import React, { Component } from 'react';
const cardData = [
  { title: 'card 1', image: cause1 },
  { title: 'card 2', image: cause2 },
  { title: 'card 3', image: cause3 },
  { title: 'card 4', image: cause4 },
];
export default class App extends Component {
  state = { overlay: false, index: 0 };
  render() {
    return (
      <div className={styles.base}>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Talkitout</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Navbar>
        {/* <div className={styles.header}>
          <div className={styles.logoHolder}>Logo here</div>
          <div className={styles.menuHolder}>
            <div className={styles.menuItem}>Home</div>
          </div>
        </div> */}
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>Our Causes</div>
          <div className={styles.cardContainer}>
            {cardData.map((val, i) => {
              return (
                <div className="card">
                  <img
                    className="card-img-top image"
                    src={val.image}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="##" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
