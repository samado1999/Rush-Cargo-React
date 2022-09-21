import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TextCard from '../components/text-card'
import ServiceCard from '../components/service-card'
import ServiceMethodCard from '../components/service-method-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rush Cargo</title>
        <meta property="og:title" content="Rush Cargo" />
      </Helmet>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1592963219838-6045ccbe0563?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx0cmFuc3BvcnR8ZW58MHx8fHwxNjYzNzI3NjQ3&amp;ixlib=rb-1.2.1&amp;h=800"
        className="home-image"
      />
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container1">
        <TextCard
          heading="Experiencia"
          rootClassName="text-card-root-class-name"
        ></TextCard>
        <TextCard
          heading="Personalización"
          rootClassName="text-card-root-class-name1"
        ></TextCard>
        <TextCard
          heading="Confianza"
          rootClassName="text-card-root-class-name2"
        ></TextCard>
      </div>
      <div className="home-container2">
        <ServiceCard
          heading="Courier"
          image_src="/playground_assets/airplane-200h.png"
          rootClassName="service-card-root-class-name2"
        ></ServiceCard>
        <ServiceCard
          heading="Importaciones"
          image_src="/playground_assets/board-200h.png"
          rootClassName="service-card-root-class-name1"
        ></ServiceCard>
        <ServiceCard
          heading="Urbanos"
          rootClassName="service-card-root-class-name"
        ></ServiceCard>
      </div>
      <ServiceMethodCard rootClassName="service-method-card-root-class-name"></ServiceMethodCard>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
