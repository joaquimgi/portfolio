import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { motion } from "framer-motion";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Section from "../section/section";
import Page from "../page/page";
import NavHelper from "../navHelper/navHelper";
import { useScroll } from "../useScroll/useScroll";
import "./fullpage.css";

import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  lineAnim60,
  lineAnim30,
  lineAnim80,
  slider,
  sliderContainer,
} from "../Animation/Animation";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <div className="description-home">
        <div>
          <h1 className="description-title">Hi ! I'm Joaquim</h1>
          <div className="description-content">
            <p className="paragraphe-home">
              A 23 years old IoT engineering student with a passion for web
              development and web design.
            </p>
            <p className="paragraphe-home">
              I'm currently looking for an internship as a Frontend or Fullstack
              Developer.
            </p>
            <p className="paragraphe-home">
              In the mean time, I'm roaming the internet to better and deepen my
              skills about React, my favorite Frontend Framework and other cool
              technologies.
            </p>
            <p className="paragraphe-home">
              In this portfolio, you'll find projects I've done during Covid-19
              as a Freelance Developer, personal projects and some projects I've
              done and improved, following online classes, tutorials and
              articles to better my skillset as a Developer.
            </p>
            <p className="paragraphe-home">
              Here is{" "}
              <a
                href="/cv.pdf"
                download="CV Joaquim Giret-Imhaus.pdf"
                style={{ color: "inherit" }}
              >
                {" "}
                my C.V.{" "}
              </a>
            </p>
            <p className="paragraphe-home">
              You can contact me at joaquim.imhaus@gmail.com for inquieries or
              to work together !
            </p>
            <p className="paragraphe-home">Have a nice day and happy visit !</p>
          </div>
        </div>
        <img src="/joaquim.svg" alt="Joaquim" className="homeSVG" />
      </div>
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Ignite = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#ff6f5e">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691627/portfolio/Ignite_nelyju.mp4"
          live="https://joaquimgi.github.io/ignite-webapp/"
          github="ignite-webapp"
        />
      </Section>
      <Section hero>
        <NavHelper background="#ff6f5e" />
        <div className="description">
          <div>
            <h1 className="description-title">Ignite</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is one of the projects I've made to re-discover Redux and
                further my knowledge about Styled Components and Framer Motion.
              </p>
              <p className="paragraphe">
                This is a webapp displaying Upcoming, Popular and New games and
                enables Game searching with the Rawgio API.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim60}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#ff6f5e",
                marginBottom: "1rem",
                width: "60%",
              }}
            ></motion.div>
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/redux.png"
                alt="redux-logo"
                style={{ height: "5rem", marginRight: "1.5rem" }}
              />
              <motion.img
                src="/styled.png"
                alt="styled-components-logo"
                style={{ height: "5rem", marginRight: "2.5rem" }}
              />
              <motion.img
                src="/framer-motion.png"
                alt="framer-motion-logo"
                style={{ height: "5rem" }}
              />
            </motion.div>
          </div>
          <img src="/ignite.svg" alt="Ignite" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const Capture = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#333333">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691626/portfolio/Capture_tdeqek.mp4"
          live="https://joaquimgi.github.io/capture-webapp/"
          github="capture-webapp"
        />
      </Section>
      <Section hero>
        <NavHelper background="#333333" />
        <div className="description">
          <div>
            <h1 className="description-title">Capture</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is one of the projects I've made to learn about the use of
                Styled Components and Framer Motion animations.
              </p>
              <p className="paragraphe">
                I've been impressed by how intuitive and how easy both packages
                are to integrate and will continue using them in the future for
                sure.
              </p>
              <p className="paragraphe">
                This is a landing page about an imaginary Filmmaking Company.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#333333",
                marginBottom: "1rem",
                width: "50%",
              }}
            ></motion.div>
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/styled.png"
                alt="styled-components-logo"
                style={{ height: "5rem", marginRight: "2.5rem" }}
              />
              <motion.img
                src="/framer-motion.png"
                alt="framer-motion-logo"
                style={{ height: "5rem" }}
              />
            </motion.div>
          </div>
          <img src="/capture.svg" alt="Capture" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const Jengu = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#4158b4">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691636/portfolio/Jengu_tdk9xs.mp4"
          live="https://jengu.fr/"
        />
      </Section>
      <Section hero>
        <NavHelper background="#4158b4" />
        <div className="description">
          <div>
            <h1 className="description-title">Jengu</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is a landing page I've made for a project on how to improve
                pharmacy-related formation. Our project won the Jury's Coup de
                Coeur Award.
              </p>
              <p className="paragraphe">
                It is made with React and using Firebase Fonctions to power the
                contact form. I'm currently developping a Proof of Concept as a
                side project.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim30}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#4158b4",
                marginBottom: "1rem",
                width: "30%",
              }}
            />
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/firebase.png"
                alt="firebase-logo"
                style={{ height: "5rem" }}
              />
            </motion.div>
          </div>
          <img src="/jengu.svg" alt="Jengu" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const Nasa = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#9bbff4">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691629/portfolio/Nasa_dou3ch.mp4"
          live="https://nasa-wildfire-tracker.netlify.app/"
          github="nasa-wildfire-tracker"
        />
      </Section>
      <Section hero>
        <NavHelper background="#9bbff4" />
        <div className="description">
          <div>
            <h1 className="description-title">Nasa EONET Tracker</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is one of the projects I've made to learn how to handle
                Google Map with React because I'll use it in Jengu's Proof of
                Concept and I think it's one of the important tool to be able to
                integrate and work with.
              </p>
              <p className="paragraphe">
                It uses Nasa EONET API to get natural event datas and then
                display a custom clickable marker on the map that displays the
                related information.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim30}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#9bbff4",
                marginBottom: "1rem",
                width: "30%",
              }}
            />
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/googlemaps.jpg"
                alt="googlemaps-logo"
                style={{ height: "5rem" }}
              />
            </motion.div>
          </div>
          <img src="/nasa.svg" alt="Nasa" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const Waves = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#2ab3bf">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691632/portfolio/Waves_xrwfa2.mp4"
          live="https://joaquimgi.github.io/waves-music-app/"
          github="waves-music-app"
        />
      </Section>
      <Section hero>
        <NavHelper background="#2ab3bf" />
        <div className="description">
          <div>
            <h1 className="description-title">Calming Waves</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is a webapp with a cool custom mp4 player that I've made to
                learn about Sass and Css animations.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim30}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#2ab3bf",
                marginBottom: "1rem",
                width: "30%",
              }}
            />
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/sass.png"
                alt="sass-logo"
                style={{ height: "5rem" }}
              />
            </motion.div>
          </div>
          <img src="/waves.svg" alt="Calming Waves" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const Helios = withNavigationContext(({ fullpage }) => {
  const [element, controls] = useScroll();
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#f8cf76">
        <VideoPlayer
          source="https://res.cloudinary.com/depriwrjc/video/upload/v1608691896/portfolio/helios_dzsz37.mp4"
          live="https://ensemblehelios.com/"
        />
      </Section>
      <Section hero>
        <NavHelper background="#f8cf76" />
        <div className="description">
          <div>
            <h1 className="description-title">Helios</h1>
            <div style={{ marginBottom: "5rem" }}>
              <p className="paragraphe">
                This is my first work as a freelance developer that I've made
                alone from scratch. To go from an empty Figma mockup to an
                online website was quite a learning experience.
              </p>
              <p className="paragraphe">
                It was my first time designing an entire UX/UI from the ground
                up and was sometimes quite the challenge. I also faced
                development problems alone with github issues, Stack Overflow
                and web articles as my only helpers.
              </p>
              <p className="paragraphe">
                This is the landing page of L'Ensemble Helios, a music Quatuor
                displaying their 30+ years of work, their prizes and the
                concerts of the ongoing season. There is also a Backend made
                with MERN Stack allowing CRUD operations for concerts from an
                API on Heroku.
              </p>
            </div>
            <h3>Technologies used :</h3>
            <motion.div
              variants={lineAnim80}
              animate={controls}
              style={{
                height: "0.5rem",
                background: "#f8cf76",
                marginBottom: "1rem",
                width: "80%",
              }}
            />
            <motion.div
              style={{ display: "flex" }}
              ref={element}
              variants={pageAnimation}
              animate={controls}
            >
              <motion.img
                src="/react.png"
                alt="react-logo"
                className="logo1rem"
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/express.png"
                alt="express-logo"
                className="logo1rem"
              />
              <motion.img
                src="/mongodb.png"
                alt="mongodb-logo"
                className="logo1rem"
              />
              <motion.img
                src="/node.png"
                alt="node-logo"
                className="logo1rem"
              />
            </motion.div>
          </div>
          <img src="/helios.svg" alt="Helios" className="heroSVG" />
        </div>
      </Section>
    </Page>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />,
  },
  {
    slug: "Helios",
    className: "sectioned page-two",
    children: <Helios />,
  },
  {
    slug: "Jengu",
    className: "sectioned page-two",
    children: <Jengu />,
  },
  {
    slug: "Nasa",
    className: "sectioned page-two",
    children: <Nasa />,
  },
  {
    slug: "Ignite",
    className: "sectioned page-two",
    children: <Ignite />,
  },
  {
    slug: "Waves",
    className: "sectioned page-two",
    children: <Waves />,
  },
  {
    slug: "Capture",
    className: "sectioned page-three",
    children: <Capture />,
  },
];
