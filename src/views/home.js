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
import FormCard from '../components/form-card'
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
        <h1 className="home-text03">
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
        <div className="home-container08">
          <div className="home-container09">
            <img
              alt="image"
              src="/playground_assets/container-200h.png"
              className="home-image1"
            />
          </div>
          <h1 className="home-text06">
            <span>Seguros Carga</span>
            <br></br>
          </h1>
        </div>
      </div>
      <div className="home-container10">
        <AboutCard
          text="Es una empresa colombiana que ofrece los servicios de transporte de mercancía a nivel internacional."
          heading="Rush Cargo"
          rootClassName="about-card-root-class-name"
        ></AboutCard>
        <AboutCard rootClassName="about-card-root-class-name1"></AboutCard>
      </div>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
            </svg>
          </div>
          <div className="home-container14">
            <h1 className="home-text09">Personalización</h1>
            <span className="home-text10">
              <span>
                Contamos con una amplia experiencia en el manejo de mercancías y
                podemos ayudarte a traer eso que necesitas sin problemas ni
                costos adicionales.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-container15">
          <div className="home-container16">
            <svg viewBox="0 0 1060.5714285714284 1024" className="home-icon2">
              <path d="M365.714 804.571c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143 33.143 73.143 73.143 73.143 73.143-33.143 73.143-73.143zM146.286 512h219.429v-146.286h-90.286c-2.286 0-10.857 3.429-12.571 5.143l-111.429 111.429c-1.714 1.714-5.143 10.286-5.143 12.571v17.143zM877.714 804.571c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143 33.143 73.143 73.143 73.143 73.143-33.143 73.143-73.143zM1024 182.857v585.143c0 42.286-44.571 36.571-73.143 36.571 0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-219.429c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-36.571c-28.571 0-73.143 5.714-73.143-36.571 0-20 16.571-36.571 36.571-36.571v-182.857c0-40.571-5.714-85.714 25.714-117.143l113.143-113.143c14.286-14.286 41.714-25.714 62.286-25.714h91.429v-109.714c0-20 16.571-36.571 36.571-36.571h585.143c20 0 36.571 16.571 36.571 36.571z"></path>
            </svg>
          </div>
          <div className="home-container17">
            <h1 className="home-text13">
              <span>Envío hasta tu puerta</span>
              <br></br>
            </h1>
            <span className="home-text16">
              <span>
                Te entregamos todos tus envíos hasta la puerta de tu casa u
                oficina.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-container18">
          <div className="home-container19">
            <svg viewBox="0 0 658.2857142857142 1024" className="home-icon4">
              <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
            </svg>
          </div>
          <div className="home-container20">
            <h1 className="home-text19">
              <span>Seguro de mercancía</span>
              <br></br>
            </h1>
            <span className="home-text22">
              <span>
                Manejamos diferentes tipos de seguros para que tus productos
                siempre estén protegidos.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <FormCard rootClassName="form-card-root-class-name"></FormCard>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
