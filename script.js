
// =================================
// 1. SMOOTH SCROLLING
// =================================

document.querySelectorAll('nav a, #home a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// =================================
// 2. ABOUT CONTACT BUTTON
// =================================

const contactButton = document.getElementById('aboutContactButton');

if (contactButton) {
    contactButton.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// =================================
// 3. CONTACT FORM
// =================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Thank you! Your message has been received.');

        contactForm.reset();
    });
}


// =================================
// 4. DARK / LIGHT MODE TOGGLE
// =================================

const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });
}


// =================================
// 5. GITHUB API INTEGRATION
// =================================

const githubProjects = document.getElementById('githubProjects');

async function loadGitHubRepositories() {
    try {
        const response = await fetch(
            'https://api.github.com/users/dewminikaushika/repos?sort=updated'
        );

        if (!response.ok) {
            throw new Error('Unable to load repositories');
        }

        const repositories = await response.json();

        githubProjects.innerHTML = '';

        if (repositories.length === 0) {
            githubProjects.textContent = 'No repositories found.';
            return;
        }

        repositories.slice(0, 6).forEach(function(repo) {

            const repoCard = document.createElement('article');
            repoCard.className = 'repo-card';

            const repoName = document.createElement('h3');
            repoName.textContent = repo.name;

            const repoDescription = document.createElement('p');
            repoDescription.textContent =
                repo.description || 'No description available.';

            const repoStars = document.createElement('p');
            repoStars.textContent =
                '⭐ Stars: ' + repo.stargazers_count;

            const repoLink = document.createElement('a');
            repoLink.textContent = 'View Repository';
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.rel = 'noopener noreferrer';

            repoCard.appendChild(repoName);
            repoCard.appendChild(repoDescription);
            repoCard.appendChild(repoStars);
            repoCard.appendChild(repoLink);

            githubProjects.appendChild(repoCard);
        });

    } catch (error) {
        githubProjects.textContent =
            'Repositories could not be loaded. Please try again later.';

        console.error(error);
    }
}

if (githubProjects) {
    loadGitHubRepositories();
}
