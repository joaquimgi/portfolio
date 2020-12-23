import React from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <h1>Portfolio</h1>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            About Me
          </Link>
          <Link
            className={slug === "Helios" ? "selected" : null}
            href="/Helios"
          >
            Helios
          </Link>
          <Link className={slug === "Jengu" ? "selected" : null} href="/Jengu">
            Jengu
          </Link>
          <Link className={slug === "Nasa" ? "selected" : null} href="/Nasa">
            NASA EONET Tracker
          </Link>
          <Link
            className={slug === "Ignite" ? "selected" : null}
            href="/Ignite"
          >
            Ignite
          </Link>
          <Link className={slug === "Waves" ? "selected" : null} href="/Waves">
            Waves
          </Link>
          <Link
            className={slug === "Capture" ? "selected" : null}
            href="/Capture"
          >
            Capture
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
