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
      <div
        style={{
          display: "flex",
          margin: "10rem",
          color: "white",
          marginTop: "20rem",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
            Hey ! I'm Joaquim
          </h1>
          <div style={{ marginBottom: "5rem", width: "35vw" }}>
            <p
              style={{
                fontSize: "larger",
                marginBottom: "2rem",
              }}
            >
              A 23 years old IoT engineering student with a passion for web
              development and web design.
            </p>
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
              I'm currently looking for an internship as a Frontend or Fullstack
              Developer.
            </p>
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
              In the mean time, I'm roaming the internet to better and deepen my
              skills about React, my favorite Frontend Framework and other cool
              technologies.
            </p>
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
              In this portfolio, you'll find projects I've done during Covid-19
              as a Freelance Developer, personal projects and some projects I've
              done and improved, following online classes, tutorials and
              articles to better my skillset as a Developer.
            </p>
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
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
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
              You can contact me at joaquim.imhaus@gmail.com for inquieries or
              to work together !
            </p>
            <p style={{ fontSize: "larger", marginBottom: "2rem" }}>
              Have a nice day and happy visit !
            </p>
          </div>
        </div>
        <img src="/joaquim.svg" alt="Joaquim" style={{ width: "40vw" }} />
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
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Ignite
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is one of the projects I've made to re-discover Redux and
                further my knowledge about Styled Components and Framer Motion.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                This is a webapp displaying Upcoming, Popular and New games and
                enables Game searching with the Rawgio API.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
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
          <img src="/ignite.svg" alt="Ignite" style={{ width: "40vw" }} />
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
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Capture
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is one of the projects I've made to learn about the use of
                Styled Components and Framer Motion animations.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                I've been impressed by how intuitive and how easy both packages
                are to integrate and will continue using them in the future for
                sure.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                This is a landing page about an imaginary Filmmaking Company.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
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
          <img src="/capture.svg" alt="Capture" style={{ width: "40vw" }} />
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
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Jengu
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is a landing page I've made for a project on how to improve
                pharmacy-related formation. Our project won the Jury's Coup de
                Coeur Award.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                It is made with React and using Firebase Fonctions to power the
                contact form. I'm currently developping a Proof of Concept as a
                side project.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
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
          <img src="/jengu.svg" alt="Jengu" style={{ width: "40vw" }} />
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
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Nasa EONET Tracker
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is one of the projects I've made to learn how to handle
                Google Map with React because I'll use it in Jengu's Proof of
                Concept and I think it's one of the important tool to be able to
                integrate and work with.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                It uses Nasa EONET API to get natural event datas and then
                display a custom clickable marker on the map that displays the
                related information.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
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
          <img src="/nasa.svg" alt="Nasa" style={{ width: "40vw" }} />
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
          source="/Waves.mp4"
          live="https://joaquimgi.github.io/waves-music-app/"
          github="waves-music-app"
        />
      </Section>
      <Section hero>
        <NavHelper background="#2ab3bf" />
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Calming Waves
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is a webapp with a cool custom mp4 player that I've made to
                learn about Sass and Css animations.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
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
          <img src="/waves.svg" alt="Calming Waves" style={{ width: "40vw" }} />
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
        <div style={{ display: "flex", margin: "10rem" }}>
          <div>
            <h1 style={{ marginBottom: "2rem", fontSize: "xxx-large" }}>
              Helios
            </h1>
            <div style={{ marginBottom: "5rem" }}>
              <p
                style={{
                  fontSize: "larger",
                  marginBottom: "1rem",
                }}
              >
                This is my first work as a freelance developer that I've made
                alone from scratch. To go from an empty Figma mockup to an
                online website was quite a learning experience.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                It was my first time designing an entire UX/UI from the ground
                up and was sometimes quite the challenge. I also faced
                development problems alone with github issues, Stack Overflow
                and web articles as my only helpers.
              </p>
              <p style={{ fontSize: "larger", marginBottom: "1rem" }}>
                This is the landing page of L'Ensemble Helios, a music Quatuor
                displaying their 30+ years of work, their prizes and the
                concerts of the ongoing season. There is also a Backend made
                with MERN Stack allowing CRUD operations for concerts from an
                API on Heroku.
              </p>
            </div>
            <h3>Techno used :</h3>
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
                style={{ height: "5rem", marginRight: "1rem" }}
                initial="hidden"
                animate="visible"
                variants={variants}
              />
              <motion.img
                src="/express.png"
                alt="express-logo"
                style={{ height: "5rem", marginRight: "1rem" }}
              />
              <motion.img
                src="/mongodb.png"
                alt="mongodb-logo"
                style={{ height: "5rem", marginRight: "2rem" }}
              />
              <motion.img
                src="/node.png"
                alt="node-logo"
                style={{ height: "5rem", marginRight: "1rem" }}
              />
            </motion.div>
          </div>
          <img src="/helios.svg" alt="Helios" style={{ width: "40vw" }} />
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
    className: "slide page-three",
    children: <Jengu />,
  },
  {
    slug: "Nasa",
    className: "slide page-three",
    children: <Nasa />,
  },
  {
    slug: "Ignite",
    className: "slide page-three",
    children: <Ignite />,
  },
  {
    slug: "Waves",
    className: "slide page-three",
    children: <Waves />,
  },
  {
    slug: "Capture",
    className: "slide page-three",
    children: <Capture />,
  },
];
