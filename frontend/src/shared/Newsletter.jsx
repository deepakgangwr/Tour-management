import React from 'react'
import "./Newsletter.css"

import { Container,Row,Col } from 'reactstrap'
import MaleTourist from "../assets/images/male-tourist.png"


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐭𝐨 𝐠𝐞𝐭 𝐔𝐬𝐞𝐟𝐮𝐥 𝐓𝐫𝐚𝐯𝐞𝐥𝐢𝐧𝐠 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter Your Email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>"Experience the perfect blend of ambition and elegance,
                             where every moment is a step toward excellence and grace.
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={MaleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter