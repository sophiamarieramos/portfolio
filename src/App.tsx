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

export default function App() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [modal, setModal] = useState<{ title: string; description: string } | null>(null)
  const [imgError, setImgError] = useState(false)

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
              <h1>Web Systems Developer | Data Management Specialist</h1>
              <p>I'm Sophia — I am an Information Technology student with a passion for web development and system design. I specialize in data management and database development, consistently taking on roles such as Data Management Specialist and Database Engineer in our projects. I enjoy building applications that are not only functional and user-friendly, but also structured with well-organized and efficient data systems..</p>
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
                        // show image when available
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

          <div id="skills">
            <div className="skills-section">
              <h2 className="section-title" style={{ marginTop: 0 }}>SKILLS</h2>
              <div className="skills-grid">
                {skills.length === 0 ? (
                  <>
                    <span className="skill-item">Web Development(Laravel, PHP, Java, JavaScript, CSS, C++, HTML</span>
                    <span className="skill-item">Database Management (MySQL)</span>
                    <span className="skill-item">CRUD System Development</span>
                    <span className="skill-item">UI/UX Design (Figma)</span>
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
          <p>© 2026 Sophia Marie — Built with React, TypeScript & ❤️ | Student Portfolio</p>
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
