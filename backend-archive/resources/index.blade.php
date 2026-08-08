<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sophia Marie Ramos· Portfolio | Student Portfolio</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #eef2f5 100%);
            font-family: 'Inter', sans-serif;
            color: #1a2a3a;
            line-height: 1.5;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Glassmorphism Navbar */
        header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }

        .nav-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #2c5f8a, #4a90b0);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #2c5f8a;
            font-weight: 500;
            transition: 0.3s;
        }

        .nav-links a:hover {
            color: #1a3a4a;
            border-bottom: 2px solid #4a90b0;
        }

        /* Hero Section */
        .hero {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
            padding: 4rem 0;
        }

        .hero-content {
            flex: 1.2;
        }

        .hero-badge {
            background: linear-gradient(135deg, #2c5f8a20, #4a90b020);
            display: inline-block;
            padding: 0.4rem 1rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            color: #2c5f8a;
            margin-bottom: 1.2rem;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.2rem;
            background: linear-gradient(135deg, #1a2a3a, #2c5f8a);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .hero p {
            font-size: 1.1rem;
            color: #4a627a;
            margin-bottom: 2rem;
        }

        .btn-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: #2c5f8a;
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-block;
        }

        .btn-primary:hover {
            background: #1a3a4a;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .hero-image {
            flex: 1;
            background: linear-gradient(135deg, #dce6ed, #eef2f5);
            border-radius: 60% 40% 50% 50%;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        /* Projects Grid */
        .section-title {
            font-size: 2.2rem;
            font-weight: 700;
            margin: 2rem 0 2rem;
            border-left: 5px solid #2c5f8a;
            padding-left: 1rem;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            margin: 2rem 0 3rem;
        }

        .project-card {
            background: white;
            border-radius: 24px;
            overflow: hidden;
            transition: all 0.3s;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            cursor: pointer;
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .project-img {
            height: 200px;
            background: linear-gradient(135deg, #2c5f8a, #4a90b0);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3.5rem;
        }

        .project-info {
            padding: 1.5rem;
        }

        .project-category {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #4a90b0;
            font-weight: 600;
        }

        .project-info h3 {
            font-size: 1.4rem;
            margin: 0.5rem 0;
        }

        .tech-tag {
            display: inline-block;
            background: #eef2f5;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.75rem;
            margin-right: 0.5rem;
            margin-top: 0.5rem;
        }

        /* Skills Section */
        .skills-section {
            background: white;
            border-radius: 32px;
            padding: 2.5rem;
            margin: 2rem 0;
        }

        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
        }

        .skill-item {
            background: linear-gradient(135deg, #2c5f8a10, #4a90b010);
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            font-weight: 500;
        }

        /* Contact Section */
        .contact-section {
            background: linear-gradient(135deg, #1a2a3a, #2c5f8a);
            border-radius: 32px;
            padding: 3rem;
            color: white;
            margin: 3rem 0;
            text-align: center;
        }

        .contact-btn {
            background: white;
            color: #2c5f8a;
            padding: 0.8rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            margin-top: 1rem;
            transition: 0.3s;
        }

        footer {
            text-align: center;
            padding: 2rem 0;
            color: #6c86a0;
        }

        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .container { padding: 0 1rem; }
        }
    </style>
</head>
<body>

<header>
    <div class="container">
        <div class="nav-bar">
            <div class="logo">✨Sophia Marie Ramos</div>
            <ul class="nav-links">
                <li><a href="#work">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</header>

<main>
    <div class="container">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <span class="hero-badge">✦ INFORMATION TECHNOLOGY STUDENT</span>
                <h1>Web Systems Developer | Data Management Specialist</h1>
                <p>I'm Sophia — I am an Information Technology student with a passion for web development and system design. I specialize in data management and database development, consistently taking on roles such as Data Management Specialist and Database Engineer in our projects. I enjoy building applications that are not only functional and user-friendly, but also structured with well-organized and efficient data systems.</p>
                <div class="btn-group">
                    <a href="#work" class="btn-primary">View Projects →</a>
                    <a href="#contact" class="btn-primary" style="background: transparent; color: #2c5f8a; border: 2px solid #2c5f8a;">Contact Me</a>
                </div>
            </div>
            <div class="hero-image">
                <div style="font-size: 6rem;">👨‍💻</div>
                <div style="font-weight: 600; margin-top: 1rem;">Laravel Developer</div>
            </div>
        </section>

        <!-- Portfolio Projects (Dynamic from DB) -->
        <div id="work">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                @forelse($portfolios as $project)
                <div class="project-card" onclick="openProject('{{ $project->title }}', '{{ $project->description }}')">
                    <div class="project-img">
                        {{ $project->image_url ?? '📁' }}
                    </div>
                    <div class="project-info">
                        <div class="project-category">{{ $project->category }}</div>
                        <h3>{{ $project->title }}</h3>
                        <p style="color:#6c86a0; font-size:0.9rem;">{{ Str::limit($project->description, 100) }}</p>
                        @if($project->technologies)
                            @foreach(explode(',', $project->technologies) as $tech)
                                <span class="tech-tag">{{ trim($tech) }}</span>
                            @endforeach
                        @endif
                    </div>
                </div>
                @empty
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <p>No projects added yet. Admin panel coming soon!</p>
                </div>
                @endforelse
            </div>
        </div>

        <!-- Skills Section -->
        <div id="skills">
            <div class="skills-section">
                <h2 class="section-title" style="margin-top:0;">Technical Arsenal</h2>
                <div class="skills-grid">
                    @forelse($skills as $skill)
                        <span class="skill-item">{{ $skill->name }} @if($skill->percentage) ({{ $skill->percentage }}%) @endif</span>
                    @empty
                        <span class="skill-item">Laravel</span>
                        <span class="skill-item">PHP</span>
                        <span class="skill-item">MySQL</span>
                        <span class="skill-item">Tailwind CSS</span>
                        <span class="skill-item">JavaScript</span>
                        <span class="skill-item">Figma</span>
                    @endforelse
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div id="contact">
            <div class="contact-section">
                <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Let's Build Something Amazing</h2>
                <p style="margin-bottom: 1rem;">Available for internships, freelance, or just a tech chat ✨</p>
                <a href="mailto:alex@laravel.dev" class="contact-btn" id="contactEmailBtn">📧 alex@laravel.dev →</a>
            </div>
        </div>
    </div>
</main>

<footer>
    <div class="container">
        <p>© 2025 Alex Morgan — Built with Laravel, PHP & ❤️ | Student Portfolio</p>
    </div>
</footer>

<script>
    function openProject(title, description) {
        // This simulates opening the portfolio project (the requirement)
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '10000';
        modal.style.backdropFilter = 'blur(5px)';
        
        const content = document.createElement('div');
        content.style.backgroundColor = 'white';
        content.style.borderRadius = '28px';
        content.style.padding = '2rem';
        content.style.maxWidth = '500px';
        content.style.width = '90%';
        content.style.textAlign = 'center';
        content.innerHTML = `
            <h2 style="color:#2c5f8a; margin-bottom:1rem;">📂 Portfolio: ${title}</h2>
            <p style="margin:1rem 0; line-height:1.6;">${description}</p>
            <p style="background:#eef2f5; padding:0.8rem; border-radius:12px;">✨ This is your dynamic portfolio item — you can add more via Laravel admin panel!</p>
            <button onclick="this.closest('div').parentElement.remove()" style="margin-top:1rem; background:#2c5f8a; color:white; border:none; padding:0.6rem 1.5rem; border-radius:40px; cursor:pointer;">Close</button>
        `;
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Also log to console - portfolio opened
        console.log(`[PORTFOLIO OPENED] ${title} - Laravel dynamic content`);
    }
    
    // Smooth scroll for navigation
    document.querySelectorAll('.nav-links a, .btn-group a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if(target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Contact email click
    document.getElementById('contactEmailBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:alex@laravel.dev?subject=Portfolio%20Inquiry%20from%20Laravel%20Site';
    });
</script>
</body>
</html>