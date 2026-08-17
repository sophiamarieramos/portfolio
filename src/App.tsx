import React, { useEffect, useState } from 'react'
import './styles.css'

type Portfolio = {
  id: number
  title: string
  category: string
  description: string
  image_url?: string | null
  technologies?: string | null
  position?: string | null
}

type Skill = {
  id: number
  name: string
  percentage?: number
}

type PitchPhoto = {
  id: number
  src: string
  caption: string
  category?: 'presenting' | 'project' | 'awarding' | 'certificate'
}

export default function App() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [modal, setModal] = useState<{ title: string; description: string } | null>(null)
  const [imgError, setImgError] = useState(false)

  // SPARK 2025 Competition Photos
  const pitchPhotos: PitchPhoto[] = [
    { 
      id: 1, 
      src: '/projects/NUtify_main_icon.png', 
      caption: 'Our Project Showcase at SPARK 2025',
      category: 'project'
    },
    { 
      id: 2, 
      src: '/img/presenting.JPG', 
      caption: 'Presenting our project to the judges',
      category: 'presenting'
    },
    { 
      id: 3, 
      src: '/img/awarding.JPG', 
      caption: 'Receiving the Best Pitch Award - Client Based Category',
      category: 'awarding'
    },
    { 
      id: 4, 
      src: '/img/cert.JPEG', 
      caption: 'Certificate of Active Participation - SPARK 2025 Representatives',
      category: 'certificate'
    },
  ]

  useEffect(() => {
    fetch('/project.json')
      .then(res => res.json())
      .then(d => {
        setPortfolios(Array.isArray(d.portfolios) ? d.portfolios : [])
        setSkills(Array.isArray(d.skills) ? d.skills : [])
        setCertificates(Array.isArray(d.certificates) ? d.certificates : [])
      })
      .catch(() => {
        setPortfolios([])
        setSkills([])
      })
  }, [])

  function openProject(title: string, description: string) {
    setModal({ title, description })
    console.log(`[PORTFOLIO OPENED] ${title}`)
  }

  function smoothScrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="nav-bar">
            <div className="logo">SOPHIA MARIE RAMOS</div>
            <ul className="nav-links">
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScrollTo('projects') }}>Projects</a>
              </li>
              <li>
                <a href="#pitch" onClick={(e) => { e.preventDefault(); smoothScrollTo('pitch') }}>SPARK 2025</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); smoothScrollTo('skills') }}>Skills</a>
              </li>
              <li>
                <a href="#certificates" onClick={(e) => { e.preventDefault(); smoothScrollTo('certificates') }}>Certificates</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('contact') }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="hero">
            <div className="hero-content">
              <span className="hero-badge">✦ INFORMATION TECHNOLOGY STUDENT</span>
              <h1>Web Systems Developer | Database & Data Management</h1>
              <p>I'm Sophia — I am an Information Technology student with a passion for web development and system design. I specialize in data management and database development, consistently taking on roles such as Data Management Specialist and Database Engineer in our projects. I enjoy building applications that are not only functional and user-friendly, but also structured with well-organized and efficient data systems.</p>
              <div className="btn-group">
                <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); smoothScrollTo('projects') }}>View Projects →</a>
                <a href="#contact" className="btn-primary" style={{ background: 'transparent', color: '#2c5f8a', border: '2px solid #2c5f8a' }} onClick={(e) => { e.preventDefault(); smoothScrollTo('contact') }}>Contact Me</a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/img/IMG_5625.jpg"
                alt="Profile"
                className="hero-photo"
                onError={() => setImgError(true)}
              />
              <div style={{ fontWeight: 600, marginTop: '1rem' }}>Developer & Data Management Specialist</div>
            </div>
          </section>

          <div id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {portfolios.length === 0 ? (
                <div className="no-projects"> <p>No projects added yet.</p> </div>
              ) : (
                portfolios.map((project) => (
                  <div key={project.id} className="project-card" onClick={() => openProject(project.title, project.description)}>
                    <div className="project-img">
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="project-image"
                          onError={(e) => { const t = e.currentTarget; t.onerror = null; t.style.display = 'none' }}
                        />
                      ) : (
                        <div className="project-placeholder">📁</div>
                      )}
                    </div>
                    <div className="project-info">
                      <div className="project-category">{project.category}</div>
                      <h3>{project.title}</h3>
                      <div className="project-role">{project.position || 'Database Engineer'}</div>
                      <p style={{ color: '#6c86a0', fontSize: '0.9rem' }}>{project.description?.slice(0, 200)}</p>
                      <div style={{ marginTop: 8 }}>
                        {project.technologies && project.technologies.split(',').map((t: string, i: number) => (
                          <span key={i} className="tech-tag">{t.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* SPARK 2025 Pitching Competition Section */}
          <div id="pitch" className="pitch-section">
            <h2 className="section-title">🏆 SPARK 2025: Pitching Competition</h2>
            <div className="pitch-description">
              <p style={{ fontSize: '1.1rem', color: '#7a4b66', maxWidth: '800px', margin: '0 auto' }}>
                <strong>October 21-22, 2025 | Events Center, SM City Lipa</strong>
              </p>
              <p style={{ fontSize: '1rem', color: '#7a4b66', marginTop: '0.5rem' }}>
                Our team proudly represented our school at the SPARK 2025: Science, Innovation, Engineering, Business, and Technology Fair. 
                We won <strong>Best Pitch Award in the Client Based Category</strong> and received a Certificate of Active Participation as representatives.
              </p>
            </div>
            <div className="pitch-grid">
              {pitchPhotos.map((photo) => (
                <div key={photo.id} className={`pitch-card ${photo.category}`}>
                  <img src={photo.src} alt={photo.caption} className="pitch-img" />
                  <div className="pitch-caption">
                    {photo.category === 'project' && '💻 '}
                    {photo.category === 'presenting' && '🎤 '}
                    {photo.category === 'awarding' && '🏅 '}
                    {photo.category === 'certificate' && '📜 '}
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
            <div className="pitch-achievement">
              <div className="achievement-badge">
                <span className="achievement-icon">🏆</span>
                <span className="achievement-text">Best Pitch Award - Client Based Category</span>
              </div>
              <div className="achievement-badge">
                <span className="achievement-icon">📜</span>
                <span className="achievement-text">Certificate of Active Participation</span>
              </div>
            </div>
          </div>

          <div id="skills">
            <div className="skills-section">
              <h2 className="section-title" style={{ marginTop: 0 }}>SKILLS</h2>
              <div className="skills-grid-two-col">
                {skills.length === 0 ? (
                  <>
                    {/* Web Development */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">WEB DEVELOPMENT</h4>
                      <div className="skill-tags">
                        <span className="skill-item">HTML</span>
                        <span className="skill-item">CSS</span>
                        <span className="skill-item">JavaScript</span>
                        <span className="skill-item">TypeScript</span>
                        <span className="skill-item">React</span>
                        <span className="skill-item">PHP</span>
                        <span className="skill-item">Laravel</span>
                      </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">PROGRAMMING LANGUAGES</h4>
                      <div className="skill-tags">
                        <span className="skill-item">Java</span>
                        <span className="skill-item">C++</span>
                        <span className="skill-item">C#</span>
                      </div>
                    </div>

                    {/* Database Management */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">DATABASE MANAGEMENT</h4>
                      <div className="skill-tags">
                        <span className="skill-item">MySQL</span>
                        <span className="skill-item">CRUD Systems</span>
                      </div>
                    </div>

                    {/* Mobile Development */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">MOBILE DEVELOPMENT</h4>
                      <div className="skill-tags">
                        <span className="skill-item">.NET MAUI</span>
                      </div>
                    </div>

                    {/* UI/UX Design */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">UI/UX DESIGN</h4>
                      <div className="skill-tags">
                        <span className="skill-item">Figma</span>
                      </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="skill-category">
                      <h4 className="skill-category-title">TOOLS & PLATFORMS</h4>
                      <div className="skill-tags">
                        <span className="skill-item">Git</span>
                        <span className="skill-item">GitHub</span>
                        <span className="skill-item">VS Code</span>
                        <span className="skill-item">Xcode</span>
                      </div>
                    </div>
                  </>
                ) : (
                  skills.map(sk => (
                    <span key={sk.id} className="skill-item">{sk.name}{sk.percentage ? ` (${sk.percentage}%)` : ''}</span>
                  ))
                )}
              </div>
            </div>
          </div>

          <div id="certificates">
            <div className="certificates-section">
              <h2 className="section-title">Certificates</h2>
              <div className="cert-grid">
                {certificates.length === 0 ? (
                  <div className="cert-placeholder">No certificates yet. Add certificate images to <code>/public/certs</code> or include a `certificates` array in <code>/public/project.json</code>.</div>
                ) : (
                  certificates.map((c, i) => (
                    <div key={i} className="cert-card">
                      {c.image ? <img src={c.image} alt={c.title || `Certificate ${i+1}`} className="cert-img"/> : <div className="cert-img">📜</div>}
                      <div className="cert-info">
                        <div className="cert-title">{c.title || 'Certificate'}</div>
                        {c.issuer && <div className="cert-issuer">{c.issuer}</div>}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div id="contact">
            <div className="contact-section">
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Let's Build Something Amazing</h2>
              <p style={{ marginBottom: '1rem' }}>Available for internships, freelance, or just a tech chat ✨</p>
              <a href="mailto:sophiamarie.ramos30@gmail.com" className="contact-btn" onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:sophiamarie.ramos30@gmail.com?subject=Portfolio%20Inquiry' }}>📧 sophiamarie.ramos30@gmail.com →</a>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">© 2026 Sophia Marie — Built with React, & TypeScript| Student Portfolio</p>
            <div className="footer-socials">
              <a 
                href="https://github.com/sophiamarieramos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
                aria-label="GitHub"
              >
                <svg className="footer-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sophia-marie-ramos-997775360/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
                aria-label="LinkedIn"
              >
                <svg className="footer-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: '#2c5f8a', marginBottom: '1rem' }}>📂 Portfolio: {modal.title}</h2>
            <p style={{ margin: '1rem 0', lineHeight: 1.6 }}>{modal.description}</p>
            <p style={{ background: '#eef2f5', padding: '0.8rem', borderRadius: 12 }}>✨ This is your dynamic portfolio item — you can add more via the original backend export.</p>
            <button className="close-btn" onClick={() => setModal(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}