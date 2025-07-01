// Forum data and functionality
const forumData = {
    onlineUsers: [
        { name: 'AudiMaster', status: 'Активен', avatar: 'AM', level: 'Модератор' },
        { name: 'Quattro_Fan', status: 'Активен', avatar: 'QF', level: 'Эксперт' },
        { name: 'TuningPro', status: 'Активен', avatar: 'TP', level: 'Специалист' },
        { name: 'B3_Lover', status: 'Активен', avatar: 'BL', level: 'Участник' },
        { name: 'VintageAudi', status: 'Активен', avatar: 'VA', level: 'Коллекционер' },
        { name: 'SpeedDemon', status: 'Активен', avatar: 'SD', level: 'Гонщик' },
        { name: 'ClassicCars', status: 'Активен', avatar: 'CC', level: 'Реставратор' },
        { name: 'EngineExpert', status: 'Активен', avatar: 'EE', level: 'Механик' },
        { name: 'PhotoMaster', status: 'Активен', avatar: 'PM', level: 'Фотограф' },
        { name: 'NewbieBob', status: 'Активен', avatar: 'NB', level: 'Новичок' }
    ],
    
    hotTopics: [
        {
            title: 'Проблемы с двигателем B3',
            category: 'Техническая помощь',
            replies: 45,
            views: 1234,
            lastPost: '2 мин назад',
            author: 'AudiMaster',
            isHot: true
        },
        {
            title: 'Лучшие диски для B4',
            category: 'Тюнинг',
            replies: 67,
            views: 2156,
            lastPost: '15 мин назад',
            author: 'TuningPro',
            isHot: true
        },
        {
            title: 'Встреча в Москве 25 декабря',
            category: 'Мероприятия',
            replies: 23,
            views: 890,
            lastPost: '30 мин назад',
            author: 'EventOrganizer',
            isHot: false
        },
        {
            title: 'Продам редкий руль B2',
            category: 'Запчасти',
            replies: 12,
            views: 456,
            lastPost: '1 час назад',
            author: 'PartsDealer',
            isHot: false
        },
        {
            title: 'Реставрация салона - советы',
            category: 'Реставрация',
            replies: 89,
            views: 3421,
            lastPost: '2 часа назад',
            author: 'RestoreMaster',
            isHot: true
        }
    ],
    
    categories: {
        general: {
            name: 'Общие вопросы',
            description: 'Общение, знакомство, обсуждение всего связанного с Audi 80',
            topics: 2345,
            posts: 23456,
            icon: 'fas fa-comments'
        },
        technical: {
            name: 'Техническая помощь',
            description: 'Ремонт, диагностика, техническая поддержка',
            topics: 3567,
            posts: 45678,
            icon: 'fas fa-wrench'
        },
        tuning: {
            name: 'Тюнинг и доработки',
            description: 'Доработки, тюнинг, внешние изменения',
            topics: 1234,
            posts: 15678,
            icon: 'fas fa-cog'
        },
        'spare-parts': {
            name: 'Запчасти и продажа',
            description: 'Покупка, продажа, обмен запчастей',
            topics: 4567,
            posts: 34567,
            icon: 'fas fa-shopping-cart'
        },
        'gallery-discuss': {
            name: 'Фотогалерея',
            description: 'Фотографии автомобилей, встречи, мероприятия',
            topics: 567,
            posts: 8901,
            icon: 'fas fa-camera'
        },
        events: {
            name: 'Мероприятия и встречи',
            description: 'Организация встреч, автопробегов, мероприятий',
            topics: 234,
            posts: 3456,
            icon: 'fas fa-calendar'
        },
        'off-topic': {
            name: 'Оффтопик',
            description: 'Обсуждение тем не связанных с автомобилями',
            topics: 1890,
            posts: 25678,
            icon: 'fas fa-coffee'
        }
    }
};

// Initialize forum when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderOnlineUsers();
    renderHotTopics();
    setupForumSearch();
    updateOnlineUserCount();
    startRealTimeUpdates();
});

// Render online users
function renderOnlineUsers() {
    const container = document.getElementById('onlineUsers');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show first 8 users to avoid overcrowding
    const usersToShow = forumData.onlineUsers.slice(0, 8);
    
    usersToShow.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'user-item';
        userElement.onclick = () => viewUserProfile(user.name);
        
        userElement.innerHTML = `
            <div class="user-avatar">${user.avatar}</div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-status">${user.status}</div>
            </div>
            <div style="font-size: 0.7rem; color: #9ca3af;">${user.level}</div>
        `;
        
        container.appendChild(userElement);
    });
    
    // Add "show more" if there are more users
    if (forumData.onlineUsers.length > 8) {
        const showMoreElement = document.createElement('div');
        showMoreElement.className = 'user-item';
        showMoreElement.style.justifyContent = 'center';
        showMoreElement.style.color = '#ea580c';
        showMoreElement.style.fontWeight = '600';
        showMoreElement.style.cursor = 'pointer';
        showMoreElement.innerHTML = `<span>Показать всех (${forumData.onlineUsers.length})</span>`;
        showMoreElement.onclick = () => showAllOnlineUsers();
        container.appendChild(showMoreElement);
    }
}

// Render hot topics
function renderHotTopics() {
    const container = document.getElementById('recentTopics');
    if (!container) return;
    
    container.innerHTML = '';
    
    forumData.hotTopics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'topic-item';
        topicElement.onclick = () => openTopic(topic);
        
        const hotIndicator = topic.isHot ? '<i class="fas fa-fire" style="color: #ef4444; margin-right: 0.25rem;"></i>' : '';
        
        topicElement.innerHTML = `
            <div class="topic-title">
                ${hotIndicator}${topic.title}
            </div>
            <div class="topic-meta">
                <span><i class="fas fa-comments"></i> ${topic.replies}</span>
                <span><i class="fas fa-eye"></i> ${topic.views}</span>
            </div>
            <div style="font-size: 0.8rem; color: #9ca3af; margin-top: 0.5rem;">
                ${topic.category} • ${topic.lastPost}
            </div>
        `;
        
        container.appendChild(topicElement);
    });
}

// Setup forum search functionality
function setupForumSearch() {
    const searchInput = document.getElementById('forumSearch');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length === 0) {
            hideSearchResults();
            return;
        }
        
        // Debounce search
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.forum-search')) {
            hideSearchResults();
        }
    });
}

// Perform search
function performSearch(query) {
    // Simulate search results
    const mockResults = [
        {
            type: 'topic',
            title: `Результат поиска: "${query}"`,
            description: 'Найденная тема в форуме',
            category: 'Техническая помощь',
            author: 'AudiMaster',
            date: '2 дня назад'
        },
        {
            type: 'post',
            title: `Сообщение содержащее "${query}"`,
            description: 'Найденное сообщение в теме',
            category: 'Общие вопросы',
            author: 'Quattro_Fan',
            date: '1 неделю назад'
        }
    ];
    
    showSearchResults(mockResults, query);
}

// Show search results
function showSearchResults(results, query) {
    let existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    const searchContainer = document.querySelector('.forum-search');
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    resultsContainer.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
        max-height: 400px;
        overflow-y: auto;
        margin-top: 0.5rem;
    `;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>По запросу "${query}" ничего не найдено</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #1f2937;">
                Результаты поиска (${results.length})
            </div>
        `;
        
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.style.cssText = `
                padding: 1rem;
                border-bottom: 1px solid #e5e7eb;
                cursor: pointer;
                transition: background-color 0.3s ease;
            `;
            resultElement.onmouseover = () => resultElement.style.backgroundColor = '#f9fafb';
            resultElement.onmouseout = () => resultElement.style.backgroundColor = '';
            resultElement.onclick = () => openSearchResult(result);
            
            resultElement.innerHTML = `
                <div style="font-weight: 600; color: #1f2937; margin-bottom: 0.25rem;">
                    <i class="fas fa-${result.type === 'topic' ? 'book' : 'comment'}"></i>
                    ${result.title}
                </div>
                <div style="font-size: 0.9rem; color: #6b7280; margin-bottom: 0.5rem;">
                    ${result.description}
                </div>
                <div style="font-size: 0.8rem; color: #9ca3af;">
                    ${result.category} • ${result.author} • ${result.date}
                </div>
            `;
            
            resultsContainer.appendChild(resultElement);
        });
    }
    
    searchContainer.appendChild(resultsContainer);
}

// Hide search results
function hideSearchResults() {
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
}

// Open search result
function openSearchResult(result) {
    hideSearchResults();
    showNotification(`Открываем: ${result.title}`, 'info');
    // Here you would navigate to the actual topic/post
}

// Update online user count
function updateOnlineUserCount() {
    // Simulate dynamic user count changes
    setInterval(() => {
        const currentCount = forumData.onlineUsers.length;
        const variation = Math.floor(Math.random() * 10) - 5; // ±5 users
        const newCount = Math.max(200, currentCount + variation);
        
        // Update the online count in stats
        const onlineStatElement = document.querySelector('.stat-card:last-child .stat-number');
        if (onlineStatElement) {
            onlineStatElement.textContent = newCount;
        }
        
        // Update sidebar title
        const sidebarTitle = document.querySelector('.sidebar-widget .widget-title');
        if (sidebarTitle && sidebarTitle.textContent.includes('онлайн')) {
            sidebarTitle.innerHTML = `
                <i class="fas fa-users"></i>
                Пользователи онлайн (${newCount})
            `;
        }
    }, 30000); // Update every 30 seconds
}

// Start real-time updates simulation
function startRealTimeUpdates() {
    // Simulate new messages and activity
    setInterval(() => {
        // Update last activity times
        const randomTopic = forumData.hotTopics[Math.floor(Math.random() * forumData.hotTopics.length)];
        randomTopic.lastPost = 'только что';
        randomTopic.replies++;
        
        // Re-render hot topics
        renderHotTopics();
        
        // Show notification about new activity
        if (Math.random() > 0.7) { // 30% chance
            showNotification(`Новое сообщение в теме "${randomTopic.title}"`, 'info');
        }
    }, 60000); // Update every minute
}

// Forum interaction functions
function createNewTopic() {
    showNotification('Открываем редактор новой темы...', 'info');
    // Here you would open a topic creation modal/page
    setTimeout(() => {
        showCreateTopicModal();
    }, 500);
}

function showCreateTopicModal() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #1f2937;">Создать новую тему</h2>
                <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #9ca3af;
                ">&times;</button>
            </div>
            
            <form onsubmit="submitNewTopic(event)">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Раздел:</label>
                    <select style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 10px;">
                        <option>Общие вопросы</option>
                        <option>Техническая помощь</option>
                        <option>Тюнинг и доработки</option>
                        <option>Запчасти и продажа</option>
                        <option>Фотогалерея</option>
                        <option>Мероприятия и встречи</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Заголовок темы:</label>
                    <input type="text" placeholder="Введите заголовок..." style="
                        width: 100%;
                        padding: 0.75rem;
                        border: 2px solid #e5e7eb;
                        border-radius: 10px;
                        font-size: 1rem;
                    " required>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Сообщение:</label>
                    <textarea placeholder="Опишите вашу проблему или вопрос..." style="
                        width: 100%;
                        height: 150px;
                        padding: 0.75rem;
                        border: 2px solid #e5e7eb;
                        border-radius: 10px;
                        font-size: 1rem;
                        resize: vertical;
                        font-family: inherit;
                    " required></textarea>
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                    <button type="button" onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                        padding: 0.75rem 1.5rem;
                        border: 2px solid #e5e7eb;
                        background: white;
                        border-radius: 10px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Отмена</button>
                    <button type="submit" style="
                        padding: 0.75rem 1.5rem;
                        border: none;
                        background: linear-gradient(135deg, #ea580c, #dc2626);
                        color: white;
                        border-radius: 10px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Создать тему</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function submitNewTopic(event) {
    event.preventDefault();
    const modal = event.target.closest('[style*="position: fixed"]');
    modal.remove();
    showNotification('Тема успешно создана!', 'success');
}

function openCategory(categoryId) {
    const category = forumData.categories[categoryId];
    if (category) {
        showNotification(`Открываем раздел: ${category.name}`, 'info');
        // Here you would navigate to the category page
    }
}

function openTopic(topic) {
    showNotification(`Открываем тему: ${topic.title}`, 'info');
    // Here you would navigate to the topic page
}

function viewUserProfile(username) {
    showNotification(`Просмотр профиля: ${username}`, 'info');
    // Here you would open user profile
}

function showAllOnlineUsers() {
    showNotification('Показываем всех пользователей онлайн...', 'info');
    // Here you would show a modal with all online users
}

// Notification system (reuse from main script)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    notification.style.background = colors[type] || colors.info;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : type === 'warning' ? 'exclamation' : 'info'}-circle"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
if (!document.querySelector('#forum-animations')) {
    const style = document.createElement('style');
    style.id = 'forum-animations';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}