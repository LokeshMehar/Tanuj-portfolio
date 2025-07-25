
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Type from "./Type";
import Particle from "../Particle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
   const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);
  return (
    <section id="home">
      <Container fluid className="home-section px-0" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&#39;m
                <strong className="main-name"> LOKESH MEHAR</strong>
              </h1>

              <div className="pl-[50px] text-left text-fuchsia-400 pb-6">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid sm:pl-4"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div id="about"></div>
    </section>
  );
}

export default Home;
