// SKILLS DATA — icônes locales dans assets/icons/ (100 % fiables, sans CDN externe)
const skills = [
    {
        category: 'Blue Team & Infrastructure',
        containerId: 'blue-marquee',
        reverse: false,
        tools: [
            { name: 'Splunk', url: 'https://www.splunk.com/', icon: 'splunk.svg' },
            { name: 'Elastic Stack', url: 'https://www.elastic.co/', icon: 'elasticsearch.svg' },
            { name: 'Kibana', url: 'https://www.elastic.co/kibana/', icon: 'kibana.svg' },
            { name: 'Wazuh', url: 'https://wazuh.com/', icon: 'wazuh.svg' },
            { name: 'Wireshark', url: 'https://www.wireshark.org/', icon: 'wireshark.svg' },
            { name: 'Suricata', url: 'https://suricata.io/', icon: 'suricata.png' },
            { name: 'Grafana', url: 'https://grafana.com/', icon: 'grafana.svg' },
            { name: 'Prometheus', url: 'https://prometheus.io/', icon: 'prometheus.svg' },
            { name: 'Linux', url: 'https://www.linux.org/', icon: 'linux.svg' },
            { name: 'Docker', url: 'https://www.docker.com/', icon: 'docker.svg' },
            { name: 'Kubernetes', url: 'https://kubernetes.io/', icon: 'kubernetes.svg' },
            { name: 'Terraform', url: 'https://www.terraform.io/', icon: 'terraform.svg' },
            { name: 'Ansible', url: 'https://www.ansible.com/', icon: 'ansible.svg' },
            { name: 'Nessus', url: 'https://www.tenable.com/products/nessus', icon: 'nessus.svg' },
            { name: 'Snort', url: 'https://www.snort.org/', icon: 'snort.svg' }
        ]
    },
    {
        category: 'AI & Development',
        containerId: 'ai-marquee',
        reverse: true,
        tools: [
            { name: 'Python', url: 'https://www.python.org/', icon: 'python.svg' },
            { name: 'PyTorch', url: 'https://pytorch.org/', icon: 'pytorch.svg' },
            { name: 'TensorFlow', url: 'https://www.tensorflow.org/', icon: 'tensorflow.svg' },
            { name: 'Scikit-learn', url: 'https://scikit-learn.org/', icon: 'scikitlearn.svg' },
            { name: 'Pandas', url: 'https://pandas.pydata.org/', icon: 'pandas.svg' },
            { name: 'NumPy', url: 'https://numpy.org/', icon: 'numpy.svg' },
            { name: 'Jupyter', url: 'https://jupyter.org/', icon: 'jupyter.svg' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'javascript.svg' },
            { name: 'Java', url: 'https://www.oracle.com/java/', icon: 'java.svg' },
            { name: 'React', url: 'https://react.dev/', icon: 'react.svg' },
            { name: 'Laravel', url: 'https://laravel.com/', icon: 'laravel.svg' },
            { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: 'spring.svg' },
            { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'mysql.svg' },
            { name: 'Git', url: 'https://git-scm.com/', icon: 'git.svg' },
            { name: 'GitHub', url: 'https://github.com/', icon: 'github.svg' },
            { name: 'PHP', url: 'https://www.php.net/', icon: 'php.svg' }
        ]
    },
    {
        category: 'Offensive Security & Pentest',
        containerId: 'offensive-marquee',
        reverse: false,
        tools: [
            { name: 'Burp Suite', url: 'https://portswigger.net/burp', icon: 'burpsuite.svg' },
            { name: 'Metasploit', url: 'https://www.metasploit.com/', icon: 'metasploit.svg' },
            { name: 'Nmap', url: 'https://nmap.org/', icon: 'nmap.svg' },
            { name: 'Kali Linux', url: 'https://www.kali.org/', icon: 'kalilinux.svg' },
            { name: 'OWASP', url: 'https://owasp.org/', icon: 'owasp.svg' },
            { name: 'Wireshark', url: 'https://www.wireshark.org/', icon: 'wireshark.svg' },
            { name: 'Hashcat', url: 'https://hashcat.net/hashcat/', icon: 'hashcat.svg' },
            { name: 'John the Ripper', url: 'https://www.openwall.com/john/', icon: 'john.svg' },
            { name: 'Nikto', url: 'https://cirt.net/Nikto2', icon: 'nikto.svg' },
            { name: 'Aircrack-ng', url: 'https://www.aircrack-ng.org/', icon: 'aircrack-ng.svg' }
        ]
    }
];

function renderSkillIcon(tool) {
    if (!tool.icon) {
        return `<span class="skill-icon-fallback" aria-hidden="true">${tool.name.charAt(0)}</span>`;
    }

    const src = `assets/icons/${tool.icon}`;
    const fallback = tool.name.charAt(0).replace(/'/g, "\\'");

    return `<img src="${src}" alt="" class="skill-logo" width="24" height="24" loading="lazy" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'skill-icon-fallback',textContent:'${fallback}',ariaHidden:'true'}))">`;
}

function initMatrixRain() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff9f';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 33);
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initSkillsMarquee() {
    skills.forEach(category => {
        const container = document.getElementById(category.containerId);
        if (!container) return;

        if (category.reverse) {
            container.classList.add('marquee-reverse');
        }

        const uniqueTools = Array.from(new Map(category.tools.map(tool => [tool.name, tool])).values());

        const skillTags = uniqueTools.map(tool =>
            `<a href="${tool.url}" target="_blank" rel="noopener" class="skill-tag" title="${tool.name}">
                ${renderSkillIcon(tool)}
                <span>${tool.name}</span>
            </a>`
        ).join('');

        container.innerHTML = skillTags + skillTags;
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.terminal-window, .skill-category, .timeline-item, .project-card, .cert-card, .education-item, .contact-container').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) { alert('Veuillez remplir tous les champs.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Email invalide.'); return; }

        const subject = encodeURIComponent(`Message de ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:houssam.zouheir@gmail.com?subject=${subject}&body=${body}`;
        form.reset();
        alert('Votre client email va s\'ouvrir!');
    });
}

function initProfilePhoto() {
    const profilePhoto = document.getElementById('profile-photo');
    if (!profilePhoto) return;
    profilePhoto.addEventListener('error', () => {
        profilePhoto.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="#1a1a1a"/>
                <circle cx="100" cy="80" r="40" fill="#00ff9f"/>
                <path d="M50 180 Q50 120 100 120 Q150 120 150 180" fill="#00ff9f"/>
                <text x="100" y="195" text-anchor="middle" fill="#0a0a0a" font-size="16" font-family="monospace">HZ</text>
            </svg>
        `);
    });
}

// SIEM Dashboard Animation
function initSiemDashboard() {
    // Update time
    function updateDashboardTime() {
        const timeElement = document.getElementById('dashboard-time');
        if (timeElement) {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('fr-FR', { 
                hour12: false, 
                timeZone: 'Europe/Paris' 
            }) + ' UTC+1';
        }
    }
    
    // Animate counters
    function animateCounters() {
        const alerts = document.getElementById('alerts-count');
        const events = document.getElementById('events-count');
        const threats = document.getElementById('threats-blocked');
        
        if (alerts && events && threats) {
            setInterval(() => {
                // Randomly update alerts (240-255)
                alerts.textContent = Math.floor(Math.random() * 15) + 240;
                
                // Update events/hour (15.0K - 15.9K)
                const eventsCount = (Math.random() * 0.9 + 15.0).toFixed(1);
                events.textContent = eventsCount + 'K';
                
                // Slowly increment threats blocked
                const current = parseInt(threats.textContent.replace(',', ''));
                threats.textContent = (current + Math.floor(Math.random() * 3) + 1).toLocaleString();
            }, 3000);
        }
    }
    
    // Generate security logs
    const logSources = ['Firewall', 'IDS', 'EDR', 'SIEM', 'DNS', 'Proxy', 'AD'];
    const logTypes = [
        { type: 'info', messages: ['Connection established', 'User authenticated', 'Policy applied', 'Scan completed'] },
        { type: 'warning', messages: ['Suspicious activity detected', 'Failed login attempt', 'Policy violation', 'Unusual traffic pattern'] },
        { type: 'error', messages: ['Malware detected', 'Attack blocked', 'Critical vulnerability found', 'Data exfiltration attempt'] },
        { type: 'success', messages: ['Threat neutralized', 'System updated', 'Backup completed', 'Incident resolved'] }
    ];
    
    function generateLogEntry() {
        const source = logSources[Math.floor(Math.random() * logSources.length)];
        const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
        const message = logType.messages[Math.floor(Math.random() * logType.messages.length)];
        const timestamp = new Date().toLocaleTimeString('fr-FR', { hour12: false });
        
        return {
            type: logType.type,
            content: `[${timestamp}] ${source}: ${message}`
        };
    }
    
    function addLogEntry() {
        const logContent = document.getElementById('log-content');
        if (!logContent) return;
        
        const logEntry = generateLogEntry();
        const logElement = document.createElement('div');
        logElement.className = `log-entry ${logEntry.type}`;
        logElement.textContent = logEntry.content;
        
        logContent.insertBefore(logElement, logContent.firstChild);
        
        // Remove old entries
        const entries = logContent.children;
        while (entries.length > 12) {
            logContent.removeChild(entries[entries.length - 1]);
        }
    }
    
    // Initialize
    updateDashboardTime();
    setInterval(updateDashboardTime, 1000);
    
    animateCounters();
    
    // Add initial logs
    for (let i = 0; i < 8; i++) {
        setTimeout(() => addLogEntry(), i * 200);
    }
    
    // Continue adding logs
    setInterval(addLogEntry, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    initNavigation();
    initSkillsMarquee();
    initScrollAnimations();
    initContactForm();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
