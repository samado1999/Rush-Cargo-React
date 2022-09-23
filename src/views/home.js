import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SolutionCard from '../components/solution-card'
import TextCard from '../components/text-card'
import HeadingCard from '../components/heading-card'
import SocialMediaCard from '../components/social-media-card'
import ServiceMethodCard from '../components/service-method-card'
import ServiceCard from '../components/service-card'
import AboutCard from '../components/about-card'
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
      <div className="home-container01">
        <SolutionCard
          heading="Todas las soluciones en transporte de mercancía"
          rootClassName="solution-card-root-class-name"
        ></SolutionCard>
      </div>
      <div className="home-container02">
        <TextCard
          text="Un servicio que te ayuda a traer todas tus compras del exterior"
          rootClassName="text-card-root-class-name"
        ></TextCard>
      </div>
      <div className="home-container03">
        <HeadingCard
          heading="Experiencia"
          rootClassName="heading-card-root-class-name"
        ></HeadingCard>
        <HeadingCard
          heading="Personalización"
          rootClassName="heading-card-root-class-name1"
        ></HeadingCard>
        <HeadingCard
          heading="Confianza"
          rootClassName="heading-card-root-class-name2"
        ></HeadingCard>
      </div>
      <SocialMediaCard rootClassName="social-media-card-root-class-name"></SocialMediaCard>
      <ServiceMethodCard rootClassName="service-method-card-root-class-name"></ServiceMethodCard>
      <SocialMediaCard rootClassName="social-media-card-root-class-name1"></SocialMediaCard>
      <div className="home-container04">
        <div className="home-container05">
          <span className="home-text">
            <span>Síguenos en redes sociales</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-container06">
        <h1 className="home-text3">
          <span>Nuestros servicios</span>
          <br></br>
        </h1>
      </div>
      <div className="home-container07">
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
      <div className="home-container08">
        <div className="home-container09">
          <AboutCard
            rootClassName="about-card-root-class-name"
            heading="Rush Cargo"
            text="Es una empresa colombiana que ofrece los servicios de transporte de mercancía a nivel internacional."
          ></AboutCard>
        </div>
        <div className="home-container10">
          <AboutCard rootClassName="about-card-root-class-name1"></AboutCard>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
