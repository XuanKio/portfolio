import { useState } from 'react'
import {
  Code2,
  ExternalLink,
  Fish,
  Gamepad2,
  GitBranch,
  Mail,
  MapPin,
  MousePointer2,
  Terminal,
  Users,
} from 'lucide-react'
import './App.css'

const skillGroups = [
  {
    title: 'Gameplay Core',
    items: ['Unity', 'C#', 'Gameplay Programming', 'OOP', 'Game Feel Tuning'],
  },
  {
    title: 'Web & Tools',
    items: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Tool Prototyping'],
  },
  {
    title: 'Workflow',
    items: ['Git & GitHub', 'Collaboration', 'Rapid Iteration', 'Debugging', 'Playtest Loop'],
  },
]

const projects = [
  {
    title: 'Always Trust The Sister',
    year: '2026',
    track: 'community',
    role: 'Gameplay Programmer',
    desc: 'Community game jam project with a narrative puzzle direction, built under tight deadline pressure.',
    tags: ['Unity', 'C#', 'Game Jam', 'Team Project'],
    image: '/images/always-trust-the-sister.png',
    links: [
      { label: 'Project Build', url: 'https://drive.google.com/drive/folders/19IFzS2oFCCgwpaqfnS98ZTOYsuN41Rpm' },
      { label: 'Contest Post', url: 'https://www.facebook.com/share/1c2b658cMM/' },
    ],
    note: 'Đây là lần đầu mình hoàn thành trọn vẹn một game hoàn chỉnh từ ý tưởng tới bản build cuối trong khuôn khổ cuộc thi.',
  },
  {
    title: 'Ngôn',
    year: '2026',
    track: 'community',
    role: 'Gameplay Programmer',
    desc: 'Psychological Horror Puzzle RPG with branching story paths and multiple endings centered around word-based puzzles.',
    tags: ['Unity', 'C#', 'Puzzle RPG', 'Game Jam'],
    image: '/images/ngon.png',
    links: [
      { label: 'Play on itch.io', url: 'https://xuankio.itch.io/ngon' },
      { label: 'Contest Post', url: 'https://www.facebook.com/share/1JFD5ULEfZ/' },
    ],
    note: 'Lần thứ hai tham gia cuộc thi lớn, mình vẫn giữ nguyên cảm giác hào hứng và muốn tạo trải nghiệm thật sự mới cho người chơi.',
  },
  {
    title: 'Draw-To-Save',
    year: '2025',
    track: 'personal',
    role: 'Prototype Developer',
    desc: 'Prototype game concept focused on player interaction through drawing-based mechanics.',
    tags: ['TypeScript', 'Prototype'],
    links: [{ label: 'Source Code', url: 'https://github.com/XuanKio/Draw-To-Save' }],
  },
  {
    title: 'FlappyBird Project Learn 1',
    year: '2025',
    track: 'personal',
    role: 'Solo Developer',
    desc: 'Early learning project to build game-loop thinking, collision handling, and tuning in C#.',
    tags: ['C#', 'Unity', 'Learning Project'],
    links: [{ label: 'Source Code', url: 'https://github.com/XuanKio/FlappyBird-ProjectLearn-1' }],
  },
  {
    title: 'CoWord Cafe',
    year: '2025',
    track: 'personal',
    role: 'Frontend Developer',
    desc: 'JavaScript project demonstrating frontend structure and practical coding workflow on GitHub.',
    tags: ['JavaScript', 'Frontend'],
    links: [{ label: 'Source Code', url: 'https://github.com/XuanKio/CoWord-Cafe' }],
  },
  {
    title: 'Studio Playable Slot #1',
    year: 'Upcoming',
    track: 'studio',
    role: 'Gameplay Programmer',
    desc: 'Reserved slot for a company playable project. This layout is ready to host richer production case studies.',
    tags: ['Studio', 'Playable Build', 'Case Study'],
    links: [],
  },
]

const metrics = [
  { label: 'Projects', value: '6+' },
  { label: 'Community Game Jams', value: '2' },
  { label: 'Core Stack', value: 'Unity + C#' },
]

const projectSections = [
  {
    id: 'community',
    title: 'Community Game Jam',
    subtitle: 'Các dự án jam mình hoàn thành cùng cộng đồng, deadline ngắn nhưng nhiều cảm xúc.',
    items: projects.filter((project) => project.track === 'community'),
  },
  {
    id: 'personal',
    title: 'Personal Lab',
    subtitle: 'Prototype và project học tập để thử nghiệm cơ chế, tool, code structure.',
    items: projects.filter((project) => project.track === 'personal'),
  },
  {
    id: 'studio',
    title: 'Studio Playables',
    subtitle: 'Khu vực dành cho playable projects tại công ty khi có sản phẩm được phép public.',
    items: projects.filter((project) => project.track === 'studio'),
  },
]

const sharkTeeth = Array.from({ length: 8 }, (_, index) => index)
const autoMarqueeSections = new Set(['community'])

function App() {
  const [profileUnavailable, setProfileUnavailable] = useState(false)

  return (
    <div className="portfolio" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          <Fish size={16} />
          <span>Xuân Portfolio</span>
        </a>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page-content">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="role-badge">
              <Gamepad2 size={16} />
              Unity Gameplay Programmer
            </span>
            <h1>Hoàng Xuân Cường</h1>
            <p className="tagline">
              Building playable experiences with emotion, clarity, and strong gameplay systems.
            </p>
            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-item">
                  <p>{metric.value}</p>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="social-links">
              <a href="https://github.com/XuanKio" target="_blank" rel="noopener noreferrer">
                <GitBranch size={18} />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Users size={18} />
                LinkedIn
              </a>
              <a href="mailto:pt7955@gmail.com">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            {!profileUnavailable && (
              <>
                <img
                  src="/images/profile.jpg"
                  alt="Hoàng Xuân Cường"
                  onError={() => setProfileUnavailable(true)}
                />
                <div className="portrait-overlay" aria-hidden="true">
                  <div className="jaw-mini jaw-mini-top">
                    {sharkTeeth.map((tooth) => (
                      <span key={`portrait-top-${tooth}`} />
                    ))}
                  </div>
                  <MousePointer2 className="portrait-cursor" size={36} />
                  <Fish className="portrait-fish" size={38} />
                  <div className="jaw-mini jaw-mini-bottom">
                    {sharkTeeth.map((tooth) => (
                      <span key={`portrait-bottom-${tooth}`} />
                    ))}
                  </div>
                </div>
              </>
            )}
            {profileUnavailable && (
              <div className="profile-fallback">
                <div className="shark-graphic" aria-hidden="true">
                  <div className="jaw jaw-top">
                    {sharkTeeth.map((tooth) => (
                      <span key={`top-${tooth}`} />
                    ))}
                  </div>
                  <MousePointer2 className="cursor-graphic" size={46} />
                  <Fish className="fish-graphic" size={54} />
                  <div className="jaw jaw-bottom">
                    {sharkTeeth.map((tooth) => (
                      <span key={`bottom-${tooth}`} />
                    ))}
                  </div>
                </div>
                <p>Portrait Coming Soon</p>
                <span>Ảnh chân dung có thể thay vào khu này sau.</span>
              </div>
            )}
          </div>
        </section>

        <section className="section-block" id="about">
          <h2>
            <Terminal size={22} />
            About
          </h2>
          <p className="section-text">
            Mình tập trung chính vào Unity và C# cho gameplay programming, đồng thời duy trì các
            dự án JavaScript/TypeScript trên GitHub để mở rộng khả năng tạo sản phẩm hoàn chỉnh.
            Mục tiêu của mình là làm ra những game mang lại trải nghiệm đáng nhớ, có cảm xúc và có
            bản sắc riêng.
          </p>
        </section>

        <section className="section-block" id="skills">
          <h2>
            <Code2 size={22} />
            Skill Stack
          </h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block projects-section" id="projects">
          <div className="projects-top">
            <div>
              <h2>
                <Gamepad2 size={22} />
                Projects
              </h2>
              <p className="section-text">
                Những playable, prototype và game jam mình muốn giới thiệu.
              </p>
            </div>
          </div>

          <div className="project-lanes">
            {projectSections.map((section) => (
              <section className="project-lane" key={section.id}>
                <div className="project-lane-head">
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.subtitle}</p>
                  </div>
                  <span>{section.items.length} projects</span>
                </div>

                {autoMarqueeSections.has(section.id) ? (
                  <div className="project-marquee" aria-label={`${section.title} auto scroll`}>
                    <div className="project-marquee-track">
                      {[...section.items, ...section.items].map((project, index) => (
                        <article key={`${project.title}-${index}`} className="project-card">
                          {project.image && (
                            <div className="project-image-wrap">
                              <img className="project-image" src={project.image} alt={project.title} />
                            </div>
                          )}
                          <div className="project-head">
                            <div>
                              <h3>{project.title}</h3>
                              <p className="project-meta">
                                <span>{project.role}</span>
                                <span>{project.year}</span>
                              </p>
                            </div>
                            {project.links[0] && (
                              <a
                                href={project.links[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={project.title}
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                          <p className="project-desc">{project.desc}</p>
                          {!!project.links.length && (
                            <div className="project-links">
                              {project.links.map((link) => (
                                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                          {project.note && <p className="project-note">{project.note}</p>}
                          <div className="project-tags">
                            {project.tags.map((tag) => (
                              <span key={tag} className="project-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="project-scroll" aria-label={section.title}>
                    {section.items.map((project) => (
                      <article key={project.title} className="project-card">
                        {project.image && (
                          <div className="project-image-wrap">
                            <img className="project-image" src={project.image} alt={project.title} />
                          </div>
                        )}
                        <div className="project-head">
                          <div>
                            <h3>{project.title}</h3>
                            <p className="project-meta">
                              <span>{project.role}</span>
                              <span>{project.year}</span>
                            </p>
                          </div>
                          {project.links[0] && (
                            <a
                              href={project.links[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={project.title}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <p className="project-desc">{project.desc}</p>
                        {!!project.links.length && (
                          <div className="project-links">
                            {project.links.map((link) => (
                              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                        {project.note && <p className="project-note">{project.note}</p>}
                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="contact">
          <h2>
            <Mail size={22} />
            Contact
          </h2>
          <p className="section-text">
            Open for internship, junior gameplay role, and collaboration opportunities.
          </p>
          <div className="contact-info">
            <a href="mailto:pt7955@gmail.com">
              <Mail size={17} />
              pt7955@gmail.com
            </a>
            <span>
              <MapPin size={17} />
              Hanoi, Vietnam
            </span>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Hoàng Xuân Cường. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
