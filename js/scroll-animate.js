const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-animate');
            if (skillBars.length > 0) {
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const widthValue = bar.getAttribute('data-width');
                        bar.style.setProperty('--skill-width', widthValue);
                        bar.classList.add('animate-in');
                    }, index * 150);
                });
            }

            const skillCards = entry.target.querySelectorAll('.skill-card');
            if (skillCards.length > 0) {
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            }

            const projectItems = entry.target.querySelectorAll('.project-item');
            if (projectItems.length > 0) {
                projectItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, index * 200);
                });
            }

            // Handle fade-in elements
            const fadeIns = entry.target.querySelectorAll('.fade-in');
            fadeIns.forEach(el => {
                el.classList.add('animate-in');
            });

            const textAnimates = entry.target.querySelectorAll('.text-animate, .skill-percent');
            if (textAnimates.length > 0) {
                textAnimates.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('animate-in');
                    }, index * 80);
                });
            }

            const toolsItems = entry.target.querySelectorAll('.tools');
            if (toolsItems.length > 0) {
                toolsItems.forEach((tool, index) => {
                    setTimeout(() => {
                        tool.classList.add('animate-in');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const skillBarsConfig = {
        'bar-js': '78%',
        'bar-bs': '87%',
        'bar-tl': '74%',
        'bar-hc': '98%',
        'bar-lv': '85%',
        'bar-php': '85%',
        'bar-sql': '88%',
        'bar-git': '72%'
    };

    Object.keys(skillBarsConfig).forEach(className => {
        const elements = document.querySelectorAll('.' + className);
        elements.forEach(el => {
            el.setAttribute('data-width', skillBarsConfig[className]);
        });
    });

    const skillPercents = document.querySelectorAll('.skill-percent');
    skillPercents.forEach(percent => {
        percent.classList.add('text-animate');
    });

    const tools = document.querySelectorAll('.tools');
    tools.forEach(tool => {
        tool.classList.add('text-animate');
    });

    const animatedElements = document.querySelectorAll(
        '.fade-in, .skill-card, .project-item, .text-animate, ' +
        '.skill-percent, .tools, ' +
        'article, .about-content, .tools-list, .contact-container'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    const skillBarParents = document.querySelectorAll('.skill-bar');
    skillBarParents.forEach(parent => {
        observer.observe(parent);
    });
});
