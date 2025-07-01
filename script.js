// Data for car models
const bodyStyles = [
    {
        id: 'b1',
        name: 'B1',
        history: 'Модель Audi 80 B1 была представлена в 1965 году как значимая модель в истории Audi. Это был компактный седан, который стал основой для будущих моделей Audi. B1 имел стильный дизайн и был оснащен различными двигателями, включая 1.6-литровый инлайн-четырехцилиндровый и 2.0-литровый инлайн-четырехцилиндровый. Модель была известна своей надежностью и доступностью, что делало ее популярным выбором среди потребителей.',
        description: 'Audi 80 B1 был компактным седаном, который сочетал в себе стиль и практичность. У него был стильный и современный дизайн, с переднеприводом, обеспечивающим отличную управляемость и экономичность топлива. B1 был доступен с различными двигателями, включая 1.6-литровый и 2.0-литровый инлайн-четырехцилиндровые, обеспечивая баланс мощности и экономичности.',
        characteristics: '4 двери, переднепривод, разгон до 100 км/ч за 10-12 секунд, ручная или автоматическая коробка передач',
        engines: ['1.6L I4', '2.0L I4'],
        image: 'https://avatars.mds.yandex.net/i?id=73c48dcb2144f0e2843fe8b2e6ce51288a7d164a-10151263-images-thumbs&n=13',
        years: '1965-1972 🚗💨'
    },
    {
        id: 'b2',
        name: 'B2',
        history: 'Модель Audi 80 B2 была представлена в 1972 году как преемник модели B1. Она имела более современный дизайн и улучшенную производительность. B2 была оснащена различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые. Модель была известна улучшенной управляемостью и более роскошным интерьером.',
        description: 'Audi 80 B2 была более современной и роскошной моделью по сравнению с предыдущей. У нее был более современный и аэродинамичный дизайн, с улучшенной управляемостью и более комфортным интерьером. B2 была доступна с различными двигателями, включая 1.8-литровый и 2.0-литровый инлайн-четырехцилиндровые.',
        characteristics: '4 двери, переднепривод, разгон до 100 км/ч за 9-11 секунд, ручная или автоматическая коробка передач',
        engines: ['1.8L I4', '2.0L I4'],
        image: 'https://avatars.mds.yandex.net/i?id=d70a249a0a05be87bb951d3740d0051cdcf3705c-10698872-images-thumbs&n=13',
        years: '1972-1979 🚗💨'
    },
    {
        id: 'b3',
        name: 'B3',
        history: 'Модель Audi 80 B3 была представлена в 1979 году как значительный редизайн модели B2. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B3 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые.',
        description: 'Audi 80 B3 была значительным редизайном модели B2, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые.',
        characteristics: '4 двери, переднепривод, разгон до 100 км/ч за 8-10 секунд, ручная или автоматическая коробка передач',
        engines: ['1.8L I4', '2.0L I4', '2.3L I5'],
        image: 'https://avatars.mds.yandex.net/i?id=6d71ba07a9f1163789f91b4b8e69b009a60444fd-7052560-images-thumbs&n=13',
        years: '1979-1986 🚗💨'
    },
    {
        id: 'b4',
        name: 'B4',
        history: 'Модель Audi 80 B4 была представлена в 1986 году как значительный редизайн модели B3. Она имела более современный и аэродинамичный дизайн, улучшенную производительность и более роскошный интерьер. B4 была оснащена различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые.',
        description: 'Audi 80 B4 была значительным редизайном модели B3, с более современным и аэродинамичным дизайном. Она предлагала улучшенную производительность и более роскошный интерьер, с различными двигателями, включая 1.8-литровый, 2.0-литровый и 2.3-литровый инлайн-четырехцилиндровые.',
        characteristics: '4 двери, переднепривод, разгон до 100 км/ч за 7-9 секунд, ручная или автоматическая коробка передач',
        engines: ['1.8L I4', '2.0L I4', '2.3L I5'],
        image: 'https://avatars.mds.yandex.net/get-entity_search/371114/881927409/SUx150_2x',
        years: '1986-1996 🚗💨'
    }
];

// Gallery data
const galleryData = [
    { id: 1, category: 'b1', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B1+Классик', title: 'Audi 80 B1 Classic' },
    { id: 2, category: 'b2', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B2+Седан', title: 'Audi 80 B2 Sedan' },
    { id: 3, category: 'b3', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B3+Спорт', title: 'Audi 80 B3 Sport' },
    { id: 4, category: 'b4', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B4+Авант', title: 'Audi 80 B4 Avant' },
    { id: 5, category: 'tuning', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Тюнинг+1', title: 'Tuned Audi 80' },
    { id: 6, category: 'b1', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B1+Ретро', title: 'Audi 80 B1 Retro' },
    { id: 7, category: 'b2', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B2+Купе', title: 'Audi 80 B2 Coupe' },
    { id: 8, category: 'b3', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B3+Кватро', title: 'Audi 80 B3 Quattro' },
    { id: 9, category: 'b4', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B4+Универсал', title: 'Audi 80 B4 Avant' },
    { id: 10, category: 'tuning', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Тюнинг+2', title: 'Modified Audi 80' },
    { id: 11, category: 'b1', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=B1+Винтаж', title: 'Audi 80 B1 Vintage' },
    { id: 12, category: 'tuning', image: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Лоурайдер', title: 'Lowered Audi 80' }
];

// Global variables
let currentSlide = 0;
let comparisonBodyStyles = [];
let expandedBodyStyle = null;

// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupNavigation();
    setupCarousel();
    renderModels();
    renderGallery();
    setupGalleryFilter();
    setupScrollAnimations();
    setupSmoothScrolling();
}

// Navigation functionality
function setupNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Hamburger animation
        const bars = mobileMenu.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Carousel functionality
function setupCarousel() {
    // Auto-slide carousel
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function currentSlideSet(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = n - 1;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Make functions globally available
window.changeSlide = changeSlide;
window.currentSlide = currentSlideSet;

// Models rendering and functionality
function renderModels() {
    const modelsGrid = document.getElementById('modelsGrid');
    modelsGrid.innerHTML = '';

    bodyStyles.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.innerHTML = `
            <img src="${model.image}" alt="${model.name}" class="model-image">
            <h3 class="model-name">${model.name}</h3>
            <p class="model-years">${model.years}</p>
            <button class="btn btn-outline" onclick="addToComparison('${model.id}')">
                Добавить к сравнению
            </button>
            <button class="btn btn-primary" onclick="toggleDetails('${model.id}')">
                Подробнее
            </button>
            <div id="details-${model.id}" class="model-details hidden">
                <div class="detail-section">
                    <div class="detail-title">История</div>
                    <div class="detail-content">${model.history}</div>
                </div>
                <div class="detail-section">
                    <div class="detail-title">Описание</div>
                    <div class="detail-content">${model.description}</div>
                </div>
                <div class="detail-section">
                    <div class="detail-title">Характеристики</div>
                    <div class="detail-content">
                        ${model.characteristics}<br>
                        <strong>Доступные моторы:</strong> ${model.engines.join(', ')}
                    </div>
                </div>
            </div>
        `;
        modelsGrid.appendChild(modelCard);
    });
}

function addToComparison(modelId) {
    const model = bodyStyles.find(m => m.id === modelId);
    if (!comparisonBodyStyles.find(m => m.id === modelId) && comparisonBodyStyles.length < 3) {
        comparisonBodyStyles.push(model);
        renderComparison();
        
        // Show success message
        showNotification('Модель добавлена к сравнению!', 'success');
    } else if (comparisonBodyStyles.length >= 3) {
        showNotification('Максимум 3 модели для сравнения!', 'warning');
    } else {
        showNotification('Модель уже добавлена!', 'info');
    }
}

function removeFromComparison(modelId) {
    comparisonBodyStyles = comparisonBodyStyles.filter(m => m.id !== modelId);
    renderComparison();
    showNotification('Модель удалена из сравнения!', 'info');
}

function toggleDetails(modelId) {
    const detailsElement = document.getElementById(`details-${modelId}`);
    if (expandedBodyStyle === modelId) {
        detailsElement.classList.add('hidden');
        expandedBodyStyle = null;
    } else {
        // Hide all other details
        bodyStyles.forEach(model => {
            const details = document.getElementById(`details-${model.id}`);
            if (details) details.classList.add('hidden');
        });
        
        detailsElement.classList.remove('hidden');
        expandedBodyStyle = modelId;
        
        // Smooth scroll to details
        detailsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function renderComparison() {
    const comparisonSection = document.getElementById('comparisonSection');
    const comparisonModels = document.getElementById('comparisonModels');
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');

    if (comparisonBodyStyles.length === 0) {
        comparisonSection.style.display = 'none';
        return;
    }

    comparisonSection.style.display = 'block';

    // Render comparison models
    comparisonModels.innerHTML = '';
    comparisonBodyStyles.forEach(model => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'comparison-model';
        modelDiv.innerHTML = `
            <div class="model-badge">${model.name}</div>
            <button class="btn btn-outline" onclick="removeFromComparison('${model.id}')">
                Удалить
            </button>
        `;
        comparisonModels.appendChild(modelDiv);
    });

    // Render table header
    tableHeader.innerHTML = '<th>Характеристика</th>';
    comparisonBodyStyles.forEach(model => {
        const th = document.createElement('th');
        th.textContent = model.name;
        tableHeader.appendChild(th);
    });

    // Render table body
    tableBody.innerHTML = '';
    
    // Acceleration row
    const accelRow = document.createElement('tr');
    accelRow.innerHTML = '<td><strong>Разгон до 100 км/ч</strong></td>';
    comparisonBodyStyles.forEach(model => {
        const td = document.createElement('td');
        const accelMatch = model.characteristics.match(/за (\d+-\d+ секунд)/);
        td.textContent = accelMatch ? accelMatch[1] : 'Не указано';
        accelRow.appendChild(td);
    });
    tableBody.appendChild(accelRow);

    // Transmission row
    const transRow = document.createElement('tr');
    transRow.innerHTML = '<td><strong>Коробка передач</strong></td>';
    comparisonBodyStyles.forEach(model => {
        const td = document.createElement('td');
        if (model.characteristics.includes('ручная или автоматическая')) {
            td.textContent = 'Ручная или автоматическая';
        } else {
            td.textContent = 'Не указано';
        }
        transRow.appendChild(td);
    });
    tableBody.appendChild(transRow);

    // Engines row
    const enginesRow = document.createElement('tr');
    enginesRow.innerHTML = '<td><strong>Доступные моторы</strong></td>';
    comparisonBodyStyles.forEach(model => {
        const td = document.createElement('td');
        td.textContent = model.engines.join(', ');
        enginesRow.appendChild(td);
    });
    tableBody.appendChild(enginesRow);

    // Years row
    const yearsRow = document.createElement('tr');
    yearsRow.innerHTML = '<td><strong>Годы выпуска</strong></td>';
    comparisonBodyStyles.forEach(model => {
        const td = document.createElement('td');
        td.textContent = model.years.replace(' 🚗💨', '');
        yearsRow.appendChild(td);
    });
    tableBody.appendChild(yearsRow);
}

// Gallery functionality
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

function setupGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.stats-section, .models-section, .gallery-section, .news-section, .reviews-section, .tuning-section, .forum-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// Make functions globally available
window.addToComparison = addToComparison;
window.removeFromComparison = removeFromComparison;
window.toggleDetails = toggleDetails;

// Additional CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;

// Add notification styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑ ↑ ↓ ↓ ← → ← → B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 Секретный режим активирован! Добро пожаловать в клуб Audi 80!', 'success');
        document.body.style.animation = 'rainbow 2s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for easter egg
const rainbowCSS = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = rainbowCSS;
document.head.appendChild(rainbowStyle);