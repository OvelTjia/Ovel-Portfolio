import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { IoLogoGithub } from "react-icons/io5";

export const Profil = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="profil" id="profil">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Profil</h2>
                  <p>
                    Saya adalah orang yang suka menikmati waktu sendiri dan
                    melakukan berbagai aktifitas yang saya sukai seperti
                    memasak, mendengar musik, menonton film, dan menikmati alam.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Achievement</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <table className="tabel">
                          <tbody>
                            <tr>
                              <td>SD Inpres Maen di Wineru</td>
                              <td>2007 - 2013</td>
                            </tr>
                            <tr>
                              <td>SMP Advent Getsemani di Wineru</td>
                              <td>2013 - 2016</td>
                            </tr>
                            <tr>
                              <td>SMK Negeri 5 di Manado (Jurusan TKJ)</td>
                              <td>2016 - 2019</td>
                            </tr>
                            <tr>
                              <td>
                                <a
                                  href="http://www.unklab.ac.id/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Universitas Klabat
                                </a>
                                (Jurusan Informatika)
                              </td>
                              <td>2020 - Present</td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <ul>
                          <li>
                            Juara 1 Umum nilai akhir di SMK Negeri 5 Manado,
                            tahun pelajaran 2018/2019
                          </li>
                          <li>
                            Juara 1 Umum UNBK di SMK Negeri 5 Manado, tahun
                            pelajaran 2018/2019
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <a
                          href="https://github.com/OvelTjia?tab=repositories"
                          target="_blank"
                          rel="noreferrer"
                          alt=""
                        >
                          <div className="gitLogo">
                            <IoLogoGithub />
                            GitHub
                          </div>
                        </a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
