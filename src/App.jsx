import { useState, useEffect } from 'react'
import profileImage from './assets/images/profile.webp'
import './App.css'

const photos = Object.entries(import.meta.glob(
  './assets/carousel-photos/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}',
  { eager: true, query: '?url', import: 'default' }
))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, src]) => src)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    const savedMode = localStorage.getItem('theme')
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark')
    }
  }, [])

  useEffect(() => {
    if (photos.length < 2) return undefined

    const intervalId = window.setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark' : 'light'}`}>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
      </button>
      <main className="container">
        <section className="hero-section">
          <div className="hero-left">
            <h1>Portfolio</h1>
            <p className="hero-intro">
              With 4+ years of experience, I build enterprise software where reliability and correctness matter most.
            </p>
            <div className="skills-inline">
              <span className="skill-tag">.NET Core</span>
              <span className="skill-tag">ASP.NET MVC</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">Typescript</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">OpenTelemetry</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">xUnit</span>
            </div>
            <p className="hero-hiring">
              I'm looking for my next role in software engineering or technical software development and production. If you're hiring:
            </p>
            <a 
              href="https://www.linkedin.com/in/mohit-kamat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="lets-talk-btn"
            >
              Let's talk
            </a>
          </div>
          <div className="hero-right">
            <h2>About me</h2>
            <div className="about-photo">
              <img src={profileImage} alt="Mohit Kamat" className="profile-img" />
            </div>
            <p>
              Hey, I'm Mohit. I'm a software engineer passionate about building resilient infrastructures at scale. 
              I focus on reliability and correctness in my work, with a track record of shipping major 
              infrastructure changes without disrupting production.
            </p>
            <p>
              I believe in clean code, continuous learning, and the power of modern development practices.
            </p>
            <div className="social-links">
              <a href="mailto:mgkamat511@gmail.com" className="social-link">
                Email
              </a>
              <a href="https://www.linkedin.com/in/mohit-kamat" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://github.com/limacwin" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 id="work">Work Experience</h2>
          <ul className="work-list">
            <li>
              <strong>OneShield - Software Engineer</strong> (September 2022 - Present)
              <ul className="sub-list">
                <li>Architected and implemented a <strong>multi-tenant authentication layer</strong> with SSO provider and Identity Provider, featuring <strong>PKCE flow and secure session cookie handling</strong> backed by custom middleware pipeline</li>
                <li>Engineered comprehensive observability into the auth infrastructure using <strong>Azure Application Insights and OpenTelemetry</strong>, enabling real-time production debugging and performance monitoring</li>
                <li>Conducted rigorous load testing with JMeter validating the system under <strong>500+ concurrent users</strong>, supported by a robust test suite of <strong>200+ xUnit unit tests</strong> ensuring reliability</li>
                <li>Designed an <strong>AI/ML prompt orchestration pipeline</strong> with JSON-defined tool registry, multi-layer prompting architecture, and dynamic form generation optimized for client data constraints</li>
                <li>Led a strategic refactoring initiative migrating monolithic VB.NET codebase to modular .NET Core architecture, <strong>reducing technical debt by 40% with zero production incidents</strong> during the transition</li>
                <li>Orchestrated <strong>Jenkins-based CI/CD pipelines</strong> and implemented secure secrets management via <strong>Azure Key Vault</strong> as Build/Deployment Manager</li>
                <li>Built and maintained scalable full-stack applications using .NET Standard 2.0 and Angular 10.2, serving <strong>10,000+ active users with 99.9% uptime SLA</strong></li>
                <li>Engineered REST APIs with <strong>consistent data contracts, comprehensive input validation, and standardized error handling</strong> for Angular front-end consumption</li>
                <li>Integrated third-party <strong>payment gateway APIs</strong>, notification services, and reporting systems into the core product ecosystem</li>
                <li>Resolved <strong>50+ critical production bugs</strong> across legacy VB.NET and modern .NET Core microservices, maintaining system stability</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 id="internship">Internship</h2>
          <ul className="work-list">
            <li>
              <div className="experience-heading">
                <strong>Persistent Systems</strong>
                <span className="experience-duration">2-month internship</span>
              </div>
              <ul className="sub-list">
                <li>Conducted security research on <strong>ML Privacy Meter from NUS Data Privacy Lab</strong>, executing Membership Inference attacks on MNIST and other ML models to evaluate data leakage vulnerabilities</li>
                <li>Implemented <strong>Human Activity Recognition &amp; Classification</strong> system using <strong>Federated Learning with IBM FL Library</strong>, achieving higher accuracy compared to local training approaches</li>
                <li>Developed <strong>federated learning architecture</strong> for real-world coordinate-based activity classification, enabling distributed model training across multiple systems</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="section photography-section" aria-labelledby="photography-title">
          <h2 id="photography-title">Photography, for fun</h2>
          <p className="photography-description">
            Outside of work, I like taking my camera along and capturing whatever catches my eye:
            a change in light, a quiet scene, or a small moment worth remembering. I'm learning
            as I go, and this is simply a collection of photos I enjoy.
          </p>
          <div className="photo-carousel" aria-roledescription="carousel" aria-label="Photos captured by me">
            {photos.length > 0 ? (
              <div className="photo-slides">
                {photos.map((photo, index) => (
                  <img
                    key={photo}
                    src={photo}
                    alt="Photograph captured by me"
                    className={`carousel-photo${index === currentPhotoIndex ? ' active' : ''}`}
                    aria-hidden={index !== currentPhotoIndex}
                  />
                ))}
              </div>
            ) : (
              <p className="photo-empty-state">My photographs will be added here soon.</p>
            )}
          </div>
        </section>

        <section className="section footer">
          <p className="copyright">
            © {new Date().getFullYear()} Mohit Kamat
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
