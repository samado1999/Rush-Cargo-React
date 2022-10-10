import React from 'react'

import { Helmet } from 'react-helmet'

import SolutionCard from '../components/solution-card'
import TextCard from '../components/text-card'
import SocialMediaCard from '../components/social-media-card'
import AboutCard from '../components/about-card'
import ServiceMethodCard from '../components/service-method-card'
import ServiceCard from '../components/service-card'
import HeadingCard from '../components/heading-card'
import Cotizador from '../components/cotizador'
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
      <div className="home-container01">
        <header id="header" data-role="Header" className="home-header">
          <img
            alt="image"
            src="/playground_assets/rush-icon-2-200h.png"
            className="home-image"
          />
          <nav className="home-nav">
            <a href="#home" className="home-link">
              Inicio
            </a>
            <a href="#about" className="home-link1">
              Sobre nosotros
            </a>
            <a href="#services" className="home-link2">
              Servicios
            </a>
            <a href="#cotizar" className="home-link3">
              Cotizar
            </a>
            <span className="home-text">Blog</span>
          </nav>
          <div className="home-icon-group">
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <nav className="home-nav1">
              <div className="home-container02">
                <img
                  alt="image"
                  src="/playground_assets/rush-icon-2-200h.png"
                  className="home-image1"
                />
                <div
                  data-type="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container03">
                <div className="home-sidebar">
                  <nav className="home-nav2">
                    <a href="#home" className="home-link4">
                      Inicio
                    </a>
                    <a href="#about" className="home-link5">
                      <span>Sobre nosotros</span>
                      <br></br>
                    </a>
                    <a href="#services" className="home-link6">
                      <span>Servicios</span>
                      <br></br>
                    </a>
                    <a href="#cotizar" className="home-link7">
                      <span className="home-text05">Cotizar</span>
                      <br></br>
                    </a>
                    <span className="home-text07">Blog</span>
                  </nav>
                  <div className="home-icon-group1">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <div className="home-container04">
        <div id="home" className="home-container05">
          <SolutionCard
            heading="Todas las soluciones en transporte de mercancía"
            rootClassName="solution-card-root-class-name"
          ></SolutionCard>
        </div>
        <div className="home-container06">
          <TextCard
            text="Un servicio que te ayuda a traer todas tus compras del exterior"
            rootClassName="text-card-root-class-name"
          ></TextCard>
        </div>
        <div className="home-container07">
          <a
            href="https://wa.me/message/F4ZSFNDG5G64D1"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link8 button"
          >
            ¡Contactar!
          </a>
          <span className="home-text08">
            <span>Solicita tu asesoría personalizada</span>
            <br></br>
          </span>
        </div>
        <SocialMediaCard rootClassName="social-media-card-root-class-name1"></SocialMediaCard>
        <div className="home-container08">
          <span className="home-text11">
            <span>Síguenos en redes sociales</span>
            <br></br>
          </span>
        </div>
        <div id="about" className="home-container09">
          <AboutCard
            text="Es una empresa colombiana que ofrece los servicios de transporte de mercancía a nivel internacional."
            heading="Rush Cargo"
            rootClassName="about-card-root-class-name"
          ></AboutCard>
          <AboutCard rootClassName="about-card-root-class-name1"></AboutCard>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
              </svg>
            </div>
            <div className="home-container13">
              <h1 className="home-text14">Personalización</h1>
              <span className="home-text15">
                <span>
                  Contamos con una amplia experiencia en el manejo de mercancías
                  y podemos ayudarte a traer eso que necesitas sin problemas ni
                  costos adicionales.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <svg
                viewBox="0 0 1060.5714285714284 1024"
                className="home-icon12"
              >
                <path d="M365.714 804.571c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143 33.143 73.143 73.143 73.143 73.143-33.143 73.143-73.143zM146.286 512h219.429v-146.286h-90.286c-2.286 0-10.857 3.429-12.571 5.143l-111.429 111.429c-1.714 1.714-5.143 10.286-5.143 12.571v17.143zM877.714 804.571c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143 33.143 73.143 73.143 73.143 73.143-33.143 73.143-73.143zM1024 182.857v585.143c0 42.286-44.571 36.571-73.143 36.571 0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-219.429c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-36.571c-28.571 0-73.143 5.714-73.143-36.571 0-20 16.571-36.571 36.571-36.571v-182.857c0-40.571-5.714-85.714 25.714-117.143l113.143-113.143c14.286-14.286 41.714-25.714 62.286-25.714h91.429v-109.714c0-20 16.571-36.571 36.571-36.571h585.143c20 0 36.571 16.571 36.571 36.571z"></path>
              </svg>
            </div>
            <div className="home-container16">
              <h1 className="home-text18">
                <span>Envío hasta tu puerta</span>
                <br></br>
              </h1>
              <span className="home-text21">
                <span>
                  Te entregamos todos tus envíos hasta la puerta de tu casa u
                  oficina.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-container18">
              <svg viewBox="0 0 658.2857142857142 1024" className="home-icon14">
                <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
              </svg>
            </div>
            <div className="home-container19">
              <h1 className="home-text24">
                <span>Seguro de mercancía</span>
                <br></br>
              </h1>
              <span className="home-text27">
                <span>
                  Manejamos diferentes tipos de seguros para que tus productos
                  siempre estén protegidos.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <ServiceMethodCard rootClassName="service-method-card-root-class-name"></ServiceMethodCard>
        <div id="services" className="home-container20">
          <h1 className="home-text30">
            <span>Nuestros servicios</span>
            <br></br>
          </h1>
        </div>
        <div className="home-container21">
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
          <div className="home-container22">
            <div className="home-container23">
              <img
                alt="image"
                src="/playground_assets/container-200h.png"
                className="home-image2"
              />
            </div>
            <h1 className="home-text33">
              <span>Seguros Carga</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="home-container24">
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
        <div id="cotizar" className="home-container25">
          <Cotizador rootClassName="cotizador-root-class-name"></Cotizador>
        </div>
        <div id="contact" className="home-container26">
          <div className="home-container27">
            <h1 className="home-text36">Dirección:</h1>
            <span className="home-text37">
              <span>5055 NW 74 AVE</span>
              <br></br>
              <span>SUITE 8</span>
              <br></br>
              <span>MIAMI, FL</span>
              <br></br>
              <span>33166</span>
              <br></br>
              <span>EE. UU.</span>
            </span>
            <h1 className="home-text47">Teléfono:</h1>
            <span className="home-text48">
              <span>+1 305 888 18 68</span>
              <br></br>
              <span>+57 601 7816784</span>
              <br></br>
              <span>+57 316 833 1920</span>
            </span>
          </div>
          <div className="home-container28">
            <FormCard rootClassName="form-card-root-class-name"></FormCard>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
