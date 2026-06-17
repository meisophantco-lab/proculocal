        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const navMenu = document.getElementById('navMenu');
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
        });

        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Stagger cards within grids
        document.querySelectorAll('.how-grid .how-card, .pricing-grid .pricing-card').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`;
        });