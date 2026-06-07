// LOADING SCREEN LOGIC
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    // Slight delay for premium aesthetic feel
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
        }, 500);
    }, 600);
});

// HAMBURGER MENU LOGIC
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// SCROLL ANIMATIONS USING INTERSECTION OBSERVER
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    scrollObserver.observe(element);
});

// MULTILINGUAL DICTIONARY
const dict = {
    en: {
        nav_overview: "Overview",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_title: "Master Craftsmanship",
        hero_subtitle: "Operating in Ilford, London • Since 2026",
        hero_desc: "Experienced builder with over 24 years working experience in the trades. Honest, reliable, and understanding professional proudly serving the local and surrounding area. No building job too small or too large.",
        cta_button: "Available Now",
        services_title: "Our Services",
        srv_1: "Property Extensions",
        srv_2: "General Builders",
        srv_3: "Home Insulation",
        srv_4: "Garage Conversions",
        srv_5: "Damp Proofing",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "A showcase of our recent projects.",
        contact_title: "Get in Touch",
        contact_desc: "Please get in touch to find out more about my services and availability. Let's build something exceptional.",
        footer_text: "All rights reserved."
    },
    fr: {
        nav_overview: "Aperçu",
        nav_services: "Services",
        nav_portfolio: "Portefeuille",
        nav_contact: "Contact",
        hero_title: "Savoir-Faire Maître",
        hero_subtitle: "Opère à Ilford, Londres • Depuis 2026",
        hero_desc: "Constructeur expérimenté avec plus de 24 ans d'expérience dans le métier. Professionnel honnête, fiable et compréhensif, desservant fièrement la région locale. Aucun projet n'est trop petit ou trop grand.",
        cta_button: "Disponible",
        services_title: "Nos Services",
        srv_1: "Extensions de Propriété",
        srv_2: "Constructeurs Généraux",
        srv_3: "Isolation de Maison",
        srv_4: "Conversions de Garage",
        srv_5: "Traitement Humidité",
        portfolio_title: "Portefeuille",
        portfolio_subtitle: "Un aperçu de nos projets récents.",
        contact_title: "Contactez-nous",
        contact_desc: "Veuillez me contacter pour en savoir plus sur mes services et mes disponibilités. Construisons ensemble l'exceptionnel.",
        footer_text: "Tous droits réservés."
    },
    de: {
        nav_overview: "Überblick",
        nav_services: "Dienste",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontakt",
        hero_title: "Meisterhandwerk",
        hero_subtitle: "Tätig in Ilford, London • Seit 2026",
        hero_desc: "Erfahrener Bauunternehmer mit über 24 Jahren Berufserfahrung. Ehrlicher, zuverlässiger und verständnisvoller Profi. Kein Bauauftrag ist zu klein oder zu groß.",
        cta_button: "Jetzt Verfügbar",
        services_title: "Unsere Dienste",
        srv_1: "Grundstückserweiterungen",
        srv_2: "Allgemeine Bauarbeiten",
        srv_3: "Hausisolierung",
        srv_4: "Garagenumbauten",
        srv_5: "Feuchtigkeitsschutz",
        portfolio_title: "Portfolio",
        portfolio_subtitle: "Eine Auswahl unserer neuesten Projekte.",
        contact_title: "Kontakt Aufnehmen",
        contact_desc: "Bitte kontaktieren Sie mich, um mehr über meine Dienstleistungen und Verfügbarkeiten zu erfahren. Lassen Sie uns etwas Außergewöhnliches bauen.",
        footer_text: "Alle Rechte vorbehalten."
    }
};

// LANGUAGE SWITCHER LOGIC
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[lang] && dict[lang][key]) {
            el.textContent = dict[lang][key];
        }
    });
}
