// Cursor Effect 
    const cursor = document.createElement('div');
    cursor.classList.add('dynamic-cursor');
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        cursor.style.opacity = 1; 
    });
    //document.addEventListener('mouseleave', () => {
        //cursor.style.opacity = 1;
    //});

// Scroll Effect
    window.addEventListener("scroll", function() {
        console.log("scroll event triggered");
        let heroSection = document.querySelector('.hero');
        let introLines = document.querySelectorAll('.intro-line'); // Corrected `this.document.querySelectorAll`
        let sectionPosition = heroSection.getBoundingClientRect().top;
        let windowHeight = window.innerHeight; // Corrected `this.window.innerHeight`
        if (sectionPosition < windowHeight * 0.8) {
            introLines.forEach((line) => {
                line.style.animationPlayState = 'running';
            });
        }
    });
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        let hero = document.querySelector('.hero');
    // Adjust background position based on scroll position
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // This controls the speed of the parallax
    });

// Theme Effect
    const toggleBtn = document.getElementById('theme-toggle');
    const iconImg = document.getElementById('theme-icon');
    function setTheme(theme) {
        if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        iconImg.src = './icons/sun.svg'; 
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        iconImg.src = './icons/moon.svg'; 
        }
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }

// Toggle theme on click
    toggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
