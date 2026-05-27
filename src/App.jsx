import './App.css'

function Icon({ name, size = 20 }) {
  const icons = {
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    mapPin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    externalLink: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6"/>
        <path d="M10 14 21 3"/>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      </svg>
    ),
    code2: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"/>
        <path d="m6 8-4 4 4 4"/>
        <path d="m14.5 4-5 16"/>
      </svg>
    ),
    gamepad2: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" x2="10" y1="12" y2="12"/>
        <line x1="8" x2="8" y1="10" y2="14"/>
        <line x1="15" x2="15.01" y1="13" y2="13"/>
        <line x1="18" x2="18.01" y1="11" y2="11"/>
        <rect width="20" height="12" x="2" y="6" rx="2"/>
      </svg>
    ),
    terminal: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" x2="20" y1="19" y2="19"/>
      </svg>
    ),
  }
  return icons[name] || null
}

function App() {
  const skills = [
    'Unity', 'C#', 'Gameplay Programming', 'OOP',
    'JavaScript', 'TypeScript', 'React', 'Vite',
    'Java', 'Git & GitHub'
  ]

  const projects = [
    {
      title: 'Always Trust The Sister',
      desc: 'Community game jam project with a narrative puzzle direction, built under tight deadline pressure.',
      tags: ['Unity', 'C#', 'Game Jam', 'Team Project'],
      image: '/images/always-trust-the-sister.png',
      link: 'https://drive.google.com/drive/folders/19IFzS2oFCCgwpaqfnS98ZTOYsuN41Rpm',
      article: 'https://www.facebook.com/share/1c2b658cMM/',
      note: 'Đây là lần đầu mình hoàn thành trọn vẹn một game hoàn chỉnh từ ý tưởng tới bản build cuối trong khuôn khổ cuộc thi. Khoảnh khắc dự án chạy ổn định và có người chơi thật, mình đã rất xúc động vì cảm nhận rõ đam mê làm game của bản thân đang dần trở thành điều nghiêm túc.'
    },
    {
      title: 'Ngôn',
      desc: 'Psychological Horror Puzzle RPG with branching story paths and multiple endings centered around word-based puzzles.',
      tags: ['Unity', 'C#', 'Puzzle RPG', 'Game Jam'],
      link: 'https://xuankio.itch.io/ngon',
      article: 'https://www.facebook.com/share/1JFD5ULEfZ/',
      note: 'Lần thứ hai tham gia một cuộc thi lớn, cảm xúc của mình vẫn hào hứng như những ngày đầu làm game. Mình đã dành trọn tâm huyết để tạo ra một trải nghiệm mới, và chưa bao giờ thấy vui đến vậy khi được nhiều người chơi, nhận phản hồi, rồi tiếp thêm động lực để theo đuổi con đường này.'
    },
    {
      title: 'Draw-To-Save',
      desc: 'Prototype game concept focused on player interaction through drawing-based mechanics.',
      tags: ['TypeScript', 'Game Prototype'],
      link: 'https://github.com/XuanKio/Draw-To-Save'
    },
    {
      title: 'FlappyBird Project Learn 1',
      desc: 'Early learning project to build game-loop thinking, collision handling, and tuning in C#.',
      tags: ['C#', 'Unity', 'Learning Project'],
      link: 'https://github.com/XuanKio/FlappyBird-ProjectLearn-1'
    },
    {
      title: 'CoWord Cafe',
      desc: 'JavaScript project demonstrating frontend structure and practical coding workflow on GitHub.',
      tags: ['JavaScript', 'Frontend'],
      link: 'https://github.com/XuanKio/CoWord-Cafe'
    }
  ]

  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="role-badge">
            <Icon name="gamepad2" size={16} />
            UNITY GAMEPLAY PROGRAMMER
          </span>
          <h1>Hoàng Xuân Cường</h1>
          <p className="tagline">
            Gameplay-focused developer building meaningful experiences through code and creative systems
          </p>
          <div className="social-links">
            <a href="https://github.com/XuanKio" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={20} />
              LinkedIn
            </a>
            <a href="mailto:pt7955@gmail.com">
              <Icon name="mail" size={20} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <h2><Icon name="terminal" size={24} /> About Me</h2>
        <p>
          Mình tập trung chính vào Unity và C# cho gameplay programming, đồng thời duy trì
          các dự án JavaScript/TypeScript trên GitHub để mở rộng khả năng xây dựng sản phẩm.
          Mục tiêu của mình là làm ra những game có cảm xúc, có bản sắc riêng, và để lại
          trải nghiệm đáng nhớ cho người chơi sau khi màn hình đã tắt.
        </p>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2><Icon name="code2" size={24} /> Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <h2><Icon name="gamepad2" size={24} /> Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              )}
              <div className="project-header">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Icon name="externalLink" size={18} />
                </a>
              </div>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
                {project.article && (
                  <a href={project.article} target="_blank" rel="noopener noreferrer">
                    Bài Viết Cuộc Thi
                  </a>
                )}
              </div>
              {project.note && <p className="project-note">{project.note}</p>}
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>I'm open for internships and collaboration opportunities!</p>
        <div className="contact-info">
          <a href="mailto:pt7955@gmail.com">
            <Icon name="mail" size={18} />
            pt7955@gmail.com
          </a>
          <span>
            <Icon name="mapPin" size={18} />
            Hanoi, Vietnam
          </span>
        </div>
      </section>

      <footer>
        <p>© 2025 Hoàng Xuân Cường. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
