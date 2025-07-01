// Gallery data with real Audi 80 photos
const galleryImages = [
    // B1 Generation (1965-1972)
    {
        id: 1,
        category: 'b1',
        title: 'Audi 80 B1 1972 Оригинал',
        description: 'Классический седан в оригинальном состоянии',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center',
        author: 'AlexClassic',
        likes: 42,
        date: '2023-12-15'
    },
    {
        id: 2,
        category: 'b1',
        title: 'Audi 80 B1 Купе Белое',
        description: 'Редкое купе B1 в идеальном состоянии',
        image: 'https://images.unsplash.com/photo-1580414262318-384eab572e45?w=800&h=600&fit=crop&crop=center',
        author: 'RetroCarLover',
        likes: 67,
        date: '2023-12-10'
    },
    {
        id: 3,
        category: 'b1',
        title: 'Audi 80 B1 Красный Спорт',
        description: 'Спортивная версия с уникальными дисками',
        image: 'https://images.unsplash.com/photo-1593550275940-65da8b33a8e5?w=800&h=600&fit=crop&crop=center',
        author: 'SportCars80',
        likes: 89,
        date: '2023-12-08'
    },

    // B2 Generation (1972-1979)
    {
        id: 4,
        category: 'b2',
        title: 'Audi 80 B2 1978 Классика',
        description: 'Знаменитая модель 1978 года в синем цвете',
        image: 'https://images.unsplash.com/photo-1588636142037-e51d5e40e1c8?w=800&h=600&fit=crop&crop=center',
        author: 'VintageAudi',
        likes: 124,
        date: '2023-12-05'
    },
    {
        id: 5,
        category: 'b2',
        title: 'Audi 80 B2 Универсал',
        description: 'Семейный универсал в отличном состоянии',
        image: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=800&h=600&fit=crop&crop=center',
        author: 'FamilyCars',
        likes: 78,
        date: '2023-12-03'
    },
    {
        id: 6,
        category: 'b2',
        title: 'Audi 80 B2 Тюнинг',
        description: 'Тюнингованная версия с занижением',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
        author: 'TuningMaster',
        likes: 156,
        date: '2023-11-30'
    },

    // B3 Generation (1979-1986)
    {
        id: 7,
        category: 'b3',
        title: 'Audi 80 B3 Quattro',
        description: 'Легендарная модель с полным приводом',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=center',
        author: 'QuattroFan',
        likes: 234,
        date: '2023-11-28'
    },
    {
        id: 8,
        category: 'b3',
        title: 'Audi 80 B3 Спорт Пакет',
        description: 'Спортивная версия с аэродинамическим обвесом',
        image: 'https://images.unsplash.com/photo-1511133242245-89e65dd32bda?w=800&h=600&fit=crop&crop=center',
        author: 'AudiSport',
        likes: 189,
        date: '2023-11-25'
    },
    {
        id: 9,
        category: 'b3',
        title: 'Audi 80 B3 Кабриолет',
        description: 'Редкий кабриолет в металлическом цвете',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&crop=center',
        author: 'CabrioLove',
        likes: 267,
        date: '2023-11-22'
    },

    // B4 Generation (1986-1996)
    {
        id: 10,
        category: 'b4',
        title: 'Audi 80 B4 Avant',
        description: 'Универсал Avant последнего поколения',
        image: 'https://images.unsplash.com/photo-1494976688153-c282e04392fa?w=800&h=600&fit=crop&crop=center',
        author: 'AvantDriver',
        likes: 198,
        date: '2023-11-20'
    },
    {
        id: 11,
        category: 'b4',
        title: 'Audi 80 B4 Серебристый',
        description: 'Элегантный седан в серебристом металлике',
        image: 'https://images.unsplash.com/photo-1501736541119-1baa48bb8d57?w=800&h=600&fit=crop&crop=center',
        author: 'SilverAudi',
        likes: 143,
        date: '2023-11-18'
    },
    {
        id: 12,
        category: 'b4',
        title: 'Audi 80 B4 Competition',
        description: 'Спецверсия Competition с уникальной отделкой',
        image: 'https://images.unsplash.com/photo-1509144271121-be18f64f65e4?w=800&h=600&fit=crop&crop=center',
        author: 'CompetitionOwner',
        likes: 312,
        date: '2023-11-15'
    },

    // Tuning Section
    {
        id: 13,
        category: 'tuning',
        title: 'Audi 80 Stance Build',
        description: 'Экстремальное занижение на воздухе',
        image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=600&fit=crop&crop=center',
        author: 'StanceNation',
        likes: 445,
        date: '2023-11-12'
    },
    {
        id: 14,
        category: 'tuning',
        title: 'Audi 80 Widebody Kit',
        description: 'Широкие арки и спортивная резина',
        image: 'https://images.unsplash.com/photo-1547570076-e0b52e9be8b4?w=800&h=600&fit=crop&crop=center',
        author: 'WidebodyPro',
        likes: 523,
        date: '2023-11-10'
    },
    {
        id: 15,
        category: 'tuning',
        title: 'Audi 80 Turbo Build',
        description: 'Турбированный двигатель, 300+ л.с.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
        author: 'TurboBuilder',
        likes: 678,
        date: '2023-11-08'
    },
    {
        id: 16,
        category: 'tuning',
        title: 'Audi 80 Drift Car',
        description: 'Специально подготовленная машина для дрифта',
        image: 'https://images.unsplash.com/photo-1558618666-1306f5fa8095?w=800&h=600&fit=crop&crop=center',
        author: 'DriftKing',
        likes: 789,
        date: '2023-11-05'
    },

    // Restoration Section
    {
        id: 17,
        category: 'restoration',
        title: 'Audi 80 Полная Реставрация',
        description: 'Восстановление до заводского состояния',
        image: 'https://images.unsplash.com/photo-1566207314563-df9e37aa1653?w=800&h=600&fit=crop&crop=center',
        author: 'RestorePro',
        likes: 234,
        date: '2023-11-03'
    },
    {
        id: 18,
        category: 'restoration',
        title: 'Audi 80 Barn Find',
        description: 'Найденная в сарае, процесс восстановления',
        image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop&crop=center',
        author: 'BarnFinder',
        likes: 345,
        date: '2023-11-01'
    },
    {
        id: 19,
        category: 'restoration',
        title: 'Audi 80 Покраска',
        description: 'Новая краска в оригинальный цвет',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop&crop=center',
        author: 'PaintMaster',
        likes: 167,
        date: '2023-10-30'
    },
    {
        id: 20,
        category: 'restoration',
        title: 'Audi 80 Салон',
        description: 'Восстановление оригинального салона',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
        author: 'InteriorPro',
        likes: 123,
        date: '2023-10-28'
    }
];

// Current lightbox image index
let currentLightboxIndex = 0;
let filteredImages = galleryImages;

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    renderGallery(galleryImages);
    setupFilters();
});

// Render gallery
function renderGallery(images) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item-enhanced ${image.category}`;
        galleryItem.onclick = () => openLightbox(index);
        
        galleryItem.innerHTML = `
            <img src="${image.image}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay-enhanced">
                <div class="gallery-title">${image.title}</div>
                <div class="gallery-description">${image.description}</div>
                <div class="gallery-meta">
                    <span class="gallery-category">${getCategoryName(image.category)}</span>
                    <span><i class="fas fa-heart"></i> ${image.likes}</span>
                </div>
                <div style="margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.8;">
                    <i class="fas fa-user"></i> ${image.author} • <i class="fas fa-calendar"></i> ${formatDate(image.date)}
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn-enhanced');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
}

// Filter gallery
function filterGallery(filter) {
    if (filter === 'all') {
        filteredImages = galleryImages;
    } else {
        filteredImages = galleryImages.filter(image => image.category === filter);
    }
    
    renderGallery(filteredImages);
    
    // Update stats
    updateGalleryStats(filteredImages);
}

// Update gallery statistics
function updateGalleryStats(images) {
    // This would update the stats dynamically based on filtered images
    // For now, we'll keep the static stats
}

// Open lightbox
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = filteredImages[index].image;
    lightboxImage.alt = filteredImages[index].title;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Change lightbox image
function changeLightboxImage(direction) {
    currentLightboxIndex += direction;
    
    // Wrap around
    if (currentLightboxIndex >= filteredImages.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = filteredImages.length - 1;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = filteredImages[currentLightboxIndex].image;
    lightboxImage.alt = filteredImages[currentLightboxIndex].title;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Helper functions
function getCategoryName(category) {
    const categoryNames = {
        'b1': 'B1 (1965-1972)',
        'b2': 'B2 (1972-1979)',
        'b3': 'B3 (1979-1986)',
        'b4': 'B4 (1986-1996)',
        'tuning': 'Тюнинг',
        'restoration': 'Реставрация'
    };
    return categoryNames[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Lazy loading enhancement
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
setupLazyLoading();