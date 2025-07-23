
import './App.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaEnvelope, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import ClickSpark from './ClickSpark';
import Squares from './Squares';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <ClickSpark
      sparkColor="#FFC107"
      sparkSize={12}
      sparkRadius={15}
      sparkCount={8}
      duration={500}
      easing="ease-out"
    >
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid px-4"> 
        <a 
          className="navbar-brand fw-bold" 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
         Raniella Cuevas
        </a>
          
          {/* Centered Navigation */}
          <div className="d-flex justify-content-center flex-grow-1">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#achievements">Achievements</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-none d-lg-flex"> {/* Hidden on mobile */}
            <a
              href="https://drive.google.com/uc?export=download&id=1-GxmxMGUmCE-qFKxX91_ibU_DAJ6kzWU"
              className="btn resume-btn d-flex align-items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Resume
            </a>
          </div>
          
          {/* Mobile Resume Button (shown only on mobile) */}
          <div className="d-lg-none">
            <a
              href="https://drive.google.com/uc?export=download&id=1-GxmxMGUmCE-qFKxX91_ibU_DAJ6kzWU"
              className="btn resume-btn d-flex align-items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </nav>
      {/* Combined Hero & About Section */}
        <section id="about" className="hero-about-section">
          {/* Squares Background Layer */}
          <div className="squares-background">
            <Squares 
              speed={0.7} 
              squareSize={40}
              direction='diagonal' // up, down, left, right, diagonal
              borderColor='#fff'
              hoverFillColor='#5D4037'
            />
          </div>
          <ClickSpark
            sparkColor="#FFC107"
            sparkSize={12}
            sparkRadius={15}
            sparkCount={8}
            duration={500}
            easing="ease-out"
          >  
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-content"  data-aos="fade-in">       
                <h1 className="display-4 fw-bold mb-4">Raniella Cuevas</h1>
                <h2 className="h3 mb-4">Web Developer & Tech Enthusiast</h2>
                <p className="lead mb-4">
                  Passionate about creating beautiful, functional web experiences with a focus on user-centered design and clean code.
                </p>
                <div className="hero-btns d-flex flex-wrap justify-content-center">
                  <a href="#projects" className="btn btn-primary btn-lg mx-2 my-1">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-lg mx-2 my-1">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="profile-bubble"  data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <div className="profile-img-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
        </ClickSpark>     
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5"  data-aos="fade-up">
        <div className="container py-5">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Work & Internship Experience</h2>
            <p className="section-subtitle">My professional journey so far</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-bubble"></div>
              <div className="timeline-content">
                <ClickSpark
                  sparkColor="#FFC107"
                  sparkSize={12}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={500}
                  easing="ease-out"
                >
                <h4>PHP Developer Intern</h4>
                <h5>Consultare Inc. Group</h5>
                <p className="text-muted">Feb. 2025 - May 2025</p>
                <ul>
                  <li>Developed CRUD operations and designed normalized databases</li>
                  <li>Wrote efficient SQL queries and built backend APIs</li>
                  <li>Collaborated with frontend teams and used Git for version control</li>
                  <li>Wrote clean, maintainable code and participated in code reviews</li>
                  <li>Supported QA testing and quality assurance processes</li>
                </ul>
                </ClickSpark>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
        <ClickSpark
                  sparkColor="#FFC107"
                  sparkSize={12}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={500}
                  easing="ease-out"
                >
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="project-card" data-aos="zoom-in-up">
                <div className="project-img-placeholder project-img-1">
                  <div className="project-overlay">
                    <button 
                      className="btn btn-outline-light" 
                      data-bs-toggle="modal" 
                      data-bs-target="#project1Modal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="project-body">
                  <h5>Tour Operations Planning System</h5>
                  <p>A web system that analyzes travel data to improve decision-making and maximize profitability.</p>
                  <div className="project-tech">
                   <span>Python</span>
                    <span>Django</span>
                    <span>PostgreSQL</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for Project 1 */}
            <div className="modal fade" id="project1Modal" tabIndex="-1" aria-labelledby="project1ModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="project1ModalLabel">Tour Operations Planning System</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="project1Carousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="project1.png" className="d-block w-100" alt="Project screenshot" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project1-1.jpg" className="d-block w-100" alt="Project screenshot 1" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project1-2.jpg" className="d-block w-100" alt="Project screenshot 2" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project1-3.jpg" className="d-block w-100" alt="Project screenshot 3" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project1-4.jpg" className="d-block w-100" alt="Project screenshot 4" />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#project1Carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#project1Carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6>Project Description</h6>
                        <p>A smart web-based system designed to analyze travel data and support informed decision-making for tour operators. It features real-time analytics and demand forecasting to boost operational efficiency and maximize profitability.</p>
                        
                        <h6 className="mt-4">Key Features</h6>
                        <ul class="text-start">
                          <li>Digitized booking and record system</li>
                          <li>Demand forecasting by destination</li>
                          <li>Accurate model selection for prediction</li>
                          <li>Dynamic pricing based on demand</li>
                        </ul>
                        <div className="project-tech mt-3">
                          <span>PHP</span>
                          <span>MySQL</span>
                          <span>HTML5</span>
                          <span>CSS3</span>
                          <span>Bootstrap</span>
                          <span>JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="project-card" data-aos="zoom-in-up">
                <div className="project-img-placeholder project-img-2">
                  <div className="project-overlay">
                  <button 
                    className="btn btn-outline-light" 
                    data-bs-toggle="modal" 
                    data-bs-target="#project2Modal"
                  >
                    View Details
                  </button>
                  </div>
                </div>
                <div className="project-body">
                  <h5>Student Conduct Violation System</h5>
                  <p>A system designed to modernize student violation tracking for the school university.</p>
                  <div className="project-tech">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for Project 2 */}
            <div className="modal fade" id="project2Modal" tabIndex="-1" aria-labelledby="project2ModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="project2ModalLabel">Student Conduct Violation System</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="project2Carousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="project2.png" className="d-block w-100" alt="Project screenshot" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project2-1.png" className="d-block w-100" alt="Project screenshot 1" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project2-2.png" className="d-block w-100" alt="Project screenshot 2" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project2-3.png" className="d-block w-100" alt="Project screenshot 3" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project2-4.png" className="d-block w-100" alt="Project screenshot 4" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project2-5.png" className="d-block w-100" alt="Project screenshot 5" />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#project2Carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#project2Carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6>Project Description</h6>
                        <p>A proposed web system designed to modernize and enhance the currently implemented system for the school university.</p>
                        
                        <h6 className="mt-4">Key Features</h6>
                        <ul class="text-start">
                          <li>Allows students to track their violations in real time.</li>
                          <li>Minimizes errors in data entry for improved accuracy.</li>
                          <li>Notifies students of disciplinary actions that need their attention.</li>
                          <li>Improves security of managed data.</li>
                        </ul>
                        <div className="project-tech mt-3">
                          <span>PHP</span>
                          <span>MySQL</span>
                          <span>HTML5</span>
                          <span>CSS3</span>
                          <span>Bootstrap</span>
                          <span>JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="https://github.com/niellecuevas/sia-project" target="_blank" className="btn btn-primary">View Source Code</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="project-card" data-aos="zoom-in-up">
                <div className="project-img-placeholder project-img-3">
                  <div className="project-overlay">
                    <button 
                      className="btn btn-outline-light" 
                      data-bs-toggle="modal" 
                      data-bs-target="#project3Modal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="project-body">
                  <h5>Color Cookies Game</h5>
                  <p>A Stroop game, themed around colorful cookies and engaging cognitive challenges.</p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>Django</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for Project 3 */}
            <div className="modal fade" id="project3Modal" tabIndex="-1" aria-labelledby="project3ModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="project3ModalLabel">Student Conduct Violation System</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="project3Carousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="project3.jpg" className="d-block w-100" alt="Project screenshot" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project3-1.jpg" className="d-block w-100" alt="Project screenshot 1" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project3-2.jpg" className="d-block w-100" alt="Project screenshot 2" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project3-3.jpg" className="d-block w-100" alt="Project screenshot 3" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project3-4.jpg" className="d-block w-100" alt="Project screenshot 4" />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#project3Carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#project3Carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6>Project Description</h6>
                        <p>A Stroop game, themed around colorful cookies and engaging cognitive challenges.</p>
                        
                        <h6 className="mt-4">Key Features</h6>
                        <ul class="text-start">
                          <li>Interactive gameplay based on the classic Stroop effect</li>
                          <li>Colorful cookie-themed UI for a fun, playful experience</li>
                          <li>Timed rounds to test and improve reaction speed</li>
                          <li>Score tracking</li>
                        </ul>
                        <div className="project-tech mt-3">
                          <span>Python</span>
                          <span>Django</span>
                          <span>HTML5</span>
                          <span>CSS3</span>
                          <span>JavaScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="https://github.com/niellecuevas/color_cookies" target="_blank" className="btn btn-primary">View Source Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card" data-aos="zoom-in-up">
                <div className="project-img-placeholder project-img-4">
                  <div className="project-overlay">
                  <button 
                    className="btn btn-outline-light" 
                    data-bs-toggle="modal" 
                    data-bs-target="#project4Modal"
                  >
                    View Details
                  </button>
                  </div>
                </div>
                <div className="project-body">
                  <h5>BAcked Up: The 02 Files</h5>
                  <p>A special keepsake for BSIT-BA 02 — with a video to look back on, a chalkboard for our messages, and a flipbook to remember every one of us.</p>
                  <div className="project-tech">
                    <span>Next.js</span>
                    <span>Tailwind CSS</span>
                    <span>Firestore Database</span>
                    <span>EmailJS</span>
                    <span>Vercel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal for Project 4 */}
            <div className="modal fade" id="project4Modal" tabIndex="-1" aria-labelledby="project4ModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="project4ModalLabel">BAcked Up: The 02 Files</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="project4Carousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="project4.png" className="d-block w-100" alt="Project screenshot" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project4-1.png" className="d-block w-100" alt="Project screenshot 1" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project4-2.png" className="d-block w-100" alt="Project screenshot 2" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project4-3.png" className="d-block w-100" alt="Project screenshot 3" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project4-4.png" className="d-block w-100" alt="Project screenshot 4" />
                            </div>
                            <div className="carousel-item">
                              <img src="project/project4-5.png" className="d-block w-100" alt="Project screenshot 5" />
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#project4Carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#project4Carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className=""></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6>Project Description</h6>
                        <p>A special keepsake for BSIT-BA 02 — with a video to look back on, a chalkboard for our messages, and a flipbook to remember every one of us.</p>
                        
                        <h6 className="mt-4">Key Features</h6>
                        <ul class="text-start">
                          <li>Relive our memories in motion through the video banner.</li>
                          <li>Leave a personal message with OTP verification and customizable fonts.</li>
                          <li>Re-verify with a new OTP anytime to update your message.</li>
                          <li>Flip through the yearbook like a real one, featuring every classmate.</li>
                          <li>Enjoy a modern, responsive design that works beautifully on any device.</li>
                        </ul>
                        <div className="project-tech mt-3">
                        <span>Next.js</span>
                        <span>Tailwind CSS</span>
                        <span>Firestore Database</span>
                        <span>EmailJS</span>
                        <span>Vercel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="https://github.com/niellecuevas/online-yearbook" target="_blank" className="btn btn-primary">View Source Code</a>
                    <a href="https://www.the02files.site/" target="_blank" className="btn btn-primary">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </ClickSpark>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-5" data-aos="fade-up">
        <div className="container py-5">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Achievements & Certifications</h2>
            <p className="section-subtitle">My learning milestones and accomplishments</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="achievement-card" data-aos="fade-right">
                <div className="achievement-icon">
                  <div className="icon-bubble">
                    <span> <img src="github.png" alt="GitHub Icon" className="icon-image" /></span>
                  </div>
                </div>
                <div className="achievement-content">
                <h5>
                  <a
                    href="https://www.credly.com/badges/aa29071b-0d84-43ec-bbea-24ab9f86b65d/linked_in?t=sn1z88"
                    target="_blank"
                    rel="noopener noreferrer" className="achievement-link"
                  >  Github Foundations
                  </a>
                </h5>
                  <p className="text-muted">Github, 2024</p>
                  <p>Validated entry-level GitHub skills: repository management, commits, branching, markdown, and basic project management.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="achievement-card" data-aos="fade-left">
                <div className="achievement-icon">
                  <div className="icon-bubble">
                    <span><img src="philnits.png" alt="GitHub Icon" className="icon-image" /></span>
                  </div>
                </div>
                <div className="achievement-content">
                  <h5>
                  <a
                    href="https://itpec.org/statsandresults/all-passers-information/Philippines/2024A_IP.pdf"
                    target="_blank"
                    rel="noopener noreferrer" className="achievement-link"
                  >  IT Passport (IP) Certification Examination
                  </a>
                </h5>
                  <p className="text-muted">PhilNits, Oct 2024</p>
                  <p>Validates foundational knowledge in IT, including areas like programming, hardware, networking, and security.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="achievement-card" data-aos="fade-right">
                <div className="achievement-icon">
                  <div className="icon-bubble">
                    <span><img src="sti.png" alt="GitHub Icon" className="icon-image" /></span>
                  </div>
                </div>
                <div className="achievement-content">
                  <h5>2nd Runner-Up CodeFest Competition</h5>
                  <p className="text-muted">Tagisan ng Talino 2020</p>
                  <p>Led the frontend development in a team of three to create a shop application using C# and Android Studio</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="achievement-card" data-aos="fade-left">
                <div className="achievement-icon">
                  <div className="icon-bubble">
                     <span><img src="aws.png" alt="GitHub Icon" className="icon-image" /></span>
                  </div>
                </div>
                <div className="achievement-content">
                  <h5>
                  <a
                    href="https://itpec.org/statsandresults/all-passers-information/Philippines/2024A_IP.pdf"
                    target="_blank"
                    rel="noopener noreferrer" className="achievement-link"
                  > AWS Cloud Quest: Cloud Practitioner</a>
                </h5>
                  <p className="text-muted">2023</p>
                  <p>Demonstrated basic AWS Cloud knowledge and hands-on experience with core services: compute, networking, databases, and security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light" data-aos="fade-up">
        <div className="container py-5">
                <ClickSpark
                  sparkColor="#FFC107"
                  sparkSize={12}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={500}
                  easing="ease-out"
                >
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind or want to connect?</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="contact-form" action="https://formspree.io/f/mnnvenob" method="POST">
                <div className="row g-3">
                  <div className="col-md-6" data-aos="fade-up">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-12" data-aos="fade-up">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" />
                  </div>
                  <div className="col-12" data-aos="fade-up">
                    <textarea className="form-control" rows="5" name="message" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="col-12 text-center" data-aos="fade-up">
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3">Send Message</button>
                  </div>
                </div>
              </form>
              
              <div className="social-links text-center mt-5" data-aos="fade-up">
                <a href="https://github.com/niellecuevas" className="social-icon" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:raniella810@gmail.com" className="social-icon">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/raniellacuevas" className="social-icon" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          </ClickSpark>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4">
        <div className="container-fluid px-4 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Raniella Cuevas. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </ClickSpark>
  );
}

export default App;
