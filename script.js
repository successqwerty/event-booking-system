const eventsData = [
    {
        id: 1,
        title: "Summer Music Festival 2025",
        date: "2025-07-15",
        time: "18:00",
        location: "Central Park, New York",
        category: "music",
        price: 75,
        image: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg",
        description: "Join us for an unforgettable evening of live music featuring top artists from around the world. Experience the magic of summer with great music, food, and atmosphere.",
        featured: true,
        ticketTypes: [
            { name: "General Admission", price: 75, description: "Access to main festival area" },
            { name: "VIP", price: 150, description: "Premium viewing area + backstage access" },
            { name: "Premium", price: 200, description: "All VIP benefits + meet & greet" }
        ]
    },
    {
        id: 2,
        title: "Tech Innovation Conference",
        date: "2025-07-20",
        time: "09:00",
        location: "Convention Center, San Francisco",
        category: "tech",
        price: 120,
        image: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg",
        description: "Discover the latest trends in technology and innovation. Network with industry leaders and learn about cutting-edge developments in AI, blockchain, and more.",
        featured: true,
        ticketTypes: [
            { name: "Standard", price: 120, description: "Full conference access" },
            { name: "Premium", price: 200, description: "Conference + workshop access" },
            { name: "VIP", price: 300, description: "All access + networking dinner" }
        ]
    },
    {
        id: 3,
        title: "Art Gallery Opening",
        date: "2025-09-25",
        time: "19:00",
        location: "Modern Art Museum, Los Angeles",
        category: "art",
        price: 0,
        image: "https://images.pexels.com/photos/1671014/pexels-photo-1671014.jpeg",
        description: "Experience contemporary art at its finest. This exclusive gallery opening features works from emerging and established artists.",
        featured: false,
        ticketTypes: [
            { name: "Free Entry", price: 0, description: "General admission to gallery" }
        ]
    },
    {
        id: 4,
        title: "Business Leadership Summit",
        date: "2025-07-25",
        time: "08:30",
        location: "Hilton Hotel, Chicago",
        category: "business",
        price: 250,
        image: "https://images.pexels.com/photos/8761347/pexels-photo-8761347.jpeg",
        description: "Learn from successful business leaders and entrepreneurs. Gain insights into leadership strategies, market trends, and business growth.",
        featured: true,
        ticketTypes: [
            { name: "Standard", price: 250, description: "Full summit access" },
            { name: "Executive", price: 400, description: "Summit + exclusive workshops" },
            { name: "VIP", price: 600, description: "All access + private networking" }
        ]
    },
    {
        id: 5,
        title: "Marathon Championship",
        date: "2025-08-05",
        time: "06:00",
        location: "City Stadium, Boston",
        category: "sports",
        price: 45,
        image: "https://images.pexels.com/photos/2526884/pexels-photo-2526884.jpeg",
        description: "Watch elite athletes compete in this prestigious marathon championship. Cheer on runners from around the world as they push their limits.",
        featured: false,
        ticketTypes: [
            { name: "General Seating", price: 45, description: "Standard stadium seating" },
            { name: "Premium", price: 85, description: "Better viewing angle + refreshments" },
            { name: "VIP", price: 120, description: "Premium seating + hospitality package" }
        ]
    },
    {
        id: 6,
        title: "Digital Marketing Workshop",
        date: "2024-08-12",
        time: "14:00",
        location: "Innovation Center, Seattle",
        category: "business",
        price: 95,
        image: "https://images.pexels.com/photos/6285124/pexels-photo-6285124.jpeg",
        description: "Master the latest digital marketing strategies and tools. Learn from industry experts about social media marketing, SEO, content creation, and analytics to grow your business.",
        featured: false,
        ticketTypes: [
            { name: "Basic Workshop", price: 95, description: "Workshop access + materials" },
            { name: "Premium Package", price: 175, description: "Workshop + 1-on-1 consultation + toolkit" },
            { name: "VIP Experience", price: 250, description: "All benefits + networking lunch + certificate" }
        ]
    },
    {
        id: 7,
        title: "Startup Pitch Competition",
        date: "2025-10-10",
        time: "14:00",
        location: "Innovation Hub, Austin",
        category: "business",
        price: 25,
        image: "https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg",
        description: "Watch innovative startups pitch their ideas to investors. Network with entrepreneurs and discover the next big thing in business.",
        featured: false,
        ticketTypes: [
            { name: "Attendee", price: 25, description: "Event access + networking" },
            { name: "Investor", price: 100, description: "Premium seating + investor meetup" }
        ]
    },
    {
        id: 8,
        title: "Photography Workshop",
        date: "2025-10-28",
        time: "10:00",
        location: "Art Studio, Portland",
        category: "art",
        price: 80,
        image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
        description: "Learn professional photography techniques from award-winning photographers. Hands-on workshop with equipment provided.",
        featured: false,
        ticketTypes: [
            { name: "Basic", price: 80, description: "Workshop + materials" },
            { name: "Advanced", price: 150, description: "Extended workshop + one-on-one session" }
        ]
    }
];


let currentEvents = [...eventsData];
let currentView = 'grid';
let eventsPerPage = 6;
let currentPage = 1;
let selectedEvent = null;


const eventsGrid = document.getElementById('eventsGrid');
const featuredEvents = document.getElementById('featuredEvents');
const categoryFilter = document.getElementById('categoryFilter');
const dateFilter = document.getElementById('dateFilter');
const priceFilter = document.getElementById('priceFilter');
const viewButtons = document.querySelectorAll('.view-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const heroSearch = document.getElementById('heroSearch');
const heroCategory = document.getElementById('heroCategory');
const searchBtn = document.querySelector('.search-btn');


const eventModal = document.getElementById('eventModal');
const bookingModal = document.getElementById('bookingModal');
const authModal = document.getElementById('authModal');
const successModal = document.getElementById('successModal');
const modalBody = document.getElementById('modalBody');


const bookingForm = document.getElementById('bookingForm');
const ticketQty = document.getElementById('ticketQty');
const ticketType = document.getElementById('ticketType');
const subtotal = document.getElementById('subtotal');
const serviceFee = document.getElementById('serviceFee');
const totalAmount = document.getElementById('totalAmount');


document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderFeaturedEvents();
    renderEvents();
    animateStats();
});

function initializeApp() {
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
 
    const savedView = localStorage.getItem('preferredView');
    if (savedView) {
        currentView = savedView;
        updateViewButtons();
    }
}

function setupEventListeners() {
 
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.getAttribute('href');
            if (target !== '#') {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });


    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }


    if (heroSearch) {
        heroSearch.addEventListener('input', debounce(handleSearch, 300));
    }
    if (heroCategory) {
        heroCategory.addEventListener('change', handleSearch);
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }


    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (dateFilter) {
        dateFilter.addEventListener('change', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }


    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            currentView = this.dataset.view;
            updateViewButtons();
            renderEvents();
            localStorage.setItem('preferredView', currentView);
        });
    });


    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreEvents);
    }


    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });


    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });


    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => showAuthModal('login'));
    }
    if (signupBtn) {
        signupBtn.addEventListener('click', () => showAuthModal('signup'));
    }


    
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.dataset.tab;
            switchAuthTab(tabType);
        });
    });


    document.querySelectorAll('.auth-link a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabType = this.dataset.tab;
            switchAuthTab(tabType);
        });
    });


    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const increaseQtyBtn = document.getElementById('increaseQty');
    
    if (decreaseQtyBtn) {
        decreaseQtyBtn.addEventListener('click', () => updateQuantity(-1));
    }
    if (increaseQtyBtn) {
        increaseQtyBtn.addEventListener('click', () => updateQuantity(1));
    }
    if (ticketQty) {
        ticketQty.addEventListener('change', updateBookingSummary);
    }
    if (ticketType) {
        ticketType.addEventListener('change', updateBookingSummary);
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }


    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
    if (closeSuccessModalBtn) {
        closeSuccessModalBtn.addEventListener('click', function() {
            if (successModal) {
                successModal.style.display = 'none';
            }
        });
    }


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };
            

            console.log('Contact form submitted:', contactData);
            

            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            
            this.reset();
        });
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleSearch() {
    const searchTerm = heroSearch ? heroSearch.value.toLowerCase() : '';
    const category = heroCategory ? heroCategory.value : '';
    
    currentEvents = eventsData.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                            event.description.toLowerCase().includes(searchTerm) ||
                            event.location.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || event.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    currentPage = 1;
    renderEvents();
    
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function applyFilters() {
    const category = categoryFilter ? categoryFilter.value : '';
    const dateRange = dateFilter ? dateFilter.value : '';
    const priceRange = priceFilter ? priceFilter.value : '';
    
    currentEvents = eventsData.filter(event => {

        if (category && event.category !== category) return false;
        

        if (dateRange) {
            const eventDate = new Date(event.date);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            switch (dateRange) {
                case 'today':
                    if (eventDate.toDateString() !== today.toDateString()) return false;
                    break;
                case 'tomorrow':
                    if (eventDate.toDateString() !== tomorrow.toDateString()) return false;
                    break;
                case 'week':
                    const weekFromNow = new Date(today);
                    weekFromNow.setDate(weekFromNow.getDate() + 7);
                    if (eventDate < today || eventDate > weekFromNow) return false;
                    break;
                case 'month':
                    const monthFromNow = new Date(today);
                    monthFromNow.setMonth(monthFromNow.getMonth() + 1);
                    if (eventDate < today || eventDate > monthFromNow) return false;
                    break;
            }
        }
        

        if (priceRange) {
            switch (priceRange) {
                case 'free':
                    if (event.price !== 0) return false;
                    break;
                case '0-50':
                    if (event.price < 0 || event.price > 50) return false;
                    break;
                case '50-100':
                    if (event.price < 50 || event.price > 100) return false;
                    break;
                case '100+':
                    if (event.price < 100) return false;
                    break;
            }
        }
        
        return true;
    });
    
    currentPage = 1;
    renderEvents();
}

function updateViewButtons() {
    viewButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === currentView);
    });
}

function renderFeaturedEvents() {
    if (!featuredEvents) return;
    
    const featured = eventsData.filter(event => event.featured);
    featuredEvents.innerHTML = featured.map(event => createEventCard(event)).join('');
    

    featuredEvents.querySelectorAll('.event-card').forEach((card, index) => {
        card.addEventListener('click', () => showEventModal(featured[index]));
    });
}

function renderEvents() {
    if (!eventsGrid) return;
    
    const startIndex = 0;
    const endIndex = currentPage * eventsPerPage;
    const eventsToShow = currentEvents.slice(startIndex, endIndex);
    
    eventsGrid.className = `events-grid ${currentView}-view`;
    eventsGrid.innerHTML = eventsToShow.map(event => createEventCard(event)).join('');
    

    eventsGrid.querySelectorAll('.event-card').forEach((card, index) => {
        const eventIndex = startIndex + index;
        card.addEventListener('click', () => showEventModal(currentEvents[eventIndex]));
    });
    

    if (loadMoreBtn) {
        loadMoreBtn.style.display = endIndex >= currentEvents.length ? 'none' : 'block';
    }
}

function createEventCard(event) {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    const priceDisplay = event.price === 0 ? 'Free' : `$${event.price}`;
    const priceClass = event.price === 0 ? 'free' : '';
    
    return `
        <div class="event-card" data-event-id="${event.id}">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-badge">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
            </div>
            <div class="event-content">
                <div class="event-date">
                    <i class="fas fa-calendar"></i> ${formattedDate} at ${event.time}
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${event.location}
                </div>
                <p class="event-description">${event.description.substring(0, 100)}...</p>
                <div class="event-footer">
                    <div class="event-price ${priceClass}">${priceDisplay}</div>
                    <button class="btn-primary book-btn" onclick="event.stopPropagation(); showBookingModal(${event.id})">
                        ${event.price === 0 ? 'Register' : 'Book Now'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadMoreEvents() {
    currentPage++;
    renderEvents();
}

function showEventModal(event) {
    if (!eventModal || !modalBody) return;
    
    selectedEvent = event;
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modalBody.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="modal-event-image">
        <h2 class="modal-event-title">${event.title}</h2>
        <div class="modal-event-meta">
            <div class="meta-item">
                <i class="fas fa-calendar"></i>
                <span>${formattedDate} at ${event.time}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.location}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-tag"></i>
                <span>${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
            </div>
        </div>
        <p class="modal-event-description">${event.description}</p>
        <div class="ticket-types">
            <h4>Available Tickets</h4>
            ${event.ticketTypes.map(ticket => `
                <div class="ticket-type">
                    <div class="ticket-type-info">
                        <h5>${ticket.name}</h5>
                        <p>${ticket.description}</p>
                    </div>
                    <div class="ticket-price">${ticket.price === 0 ? 'Free' : '$' + ticket.price}</div>
                </div>
            `).join('')}
        </div>
        <button class="btn-primary btn-full" onclick="showBookingModal(${event.id})">
            ${event.price === 0 ? 'Register Now' : 'Book Tickets'}
        </button>
    `;
    
    eventModal.style.display = 'block';
}

function showBookingModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event || !bookingModal || !ticketType) return;
    
    selectedEvent = event;
    

    if (eventModal) {
        eventModal.style.display = 'none';
    }
    

    ticketType.innerHTML = '<option value="">Select Ticket Type</option>' +
        event.ticketTypes.map(ticket => 
            `<option value="${ticket.name}" data-price="${ticket.price}">${ticket.name} - ${ticket.price === 0 ? 'Free' : '$' + ticket.price}</option>`
        ).join('');
    

    if (bookingForm) {
        bookingForm.reset();
    }
    if (ticketQty) {
        ticketQty.value = 1;
    }
    updateBookingSummary();
    
    bookingModal.style.display = 'block';
}

function showAuthModal(tab = 'login') {
    if (!authModal) return;
    
    switchAuthTab(tab);
    authModal.style.display = 'block';
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`[data-tab="${tab}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.style.display = tab === 'login' ? 'block' : 'none';
    }
    if (signupForm) {
        signupForm.style.display = tab === 'signup' ? 'block' : 'none';
    }
}

function updateQuantity(change) {
    if (!ticketQty) return;
    
    const currentQty = parseInt(ticketQty.value);
    const newQty = Math.max(1, Math.min(10, currentQty + change));
    ticketQty.value = newQty;
    updateBookingSummary();
}

function updateBookingSummary() {
    if (!ticketQty || !ticketType || !subtotal || !serviceFee || !totalAmount) return;
    
    const qty = parseInt(ticketQty.value) || 1;
    const selectedTicketType = ticketType.options[ticketType.selectedIndex];
    const price = selectedTicketType ? parseFloat(selectedTicketType.dataset.price) || 0 : 0;
    
    const subtotalAmount = qty * price;
    const serviceFeeAmount = subtotalAmount * 0.1; // 10% service fee
    const totalAmountValue = subtotalAmount + serviceFeeAmount;
    
    subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    serviceFee.textContent = `$${serviceFeeAmount.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountValue.toFixed(2)}`;
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    if (!selectedEvent || !bookingForm || !totalAmount) return;
    

    const formData = new FormData(bookingForm);
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    const bookingData = {
        event: selectedEvent.title,
        name: fullNameInput ? fullNameInput.value : '',
        email: emailInput ? emailInput.value : '',
        phone: phoneInput ? phoneInput.value : '',
        quantity: ticketQty ? parseInt(ticketQty.value) : 1,
        ticketType: ticketType ? ticketType.value : '',
        total: totalAmount.textContent,
        bookingId: 'BK' + Date.now(),
        date: new Date().toISOString()
    };
    

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    

    if (bookingModal) {
        bookingModal.style.display = 'none';
    }
    if (successModal) {
        successModal.style.display = 'block';
    }
    

    console.log('Booking confirmed:', bookingData);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});


function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="loading"></div>';
    }
}


function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
            
                if (finalValue.includes('24/7')) {
                  
                    target.textContent = '24/7';
                    observer.unobserve(target);
                    return;
                }
                
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                const suffix = finalValue.replace(/[\d,]/g, '');
                
               
                if (isNaN(numericValue) || numericValue === 0) {
                    observer.unobserve(target);
                    return;
                }
                
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(timer);
                    }
                    
                    if (numericValue >= 1000000) {
                        target.textContent = (current / 1000000).toFixed(1) + 'M' + suffix.replace('M', '');
                    } else if (numericValue >= 1000) {
                        target.textContent = (current / 1000).toFixed(0) + 'K' + suffix.replace('K', '');
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 50);
                
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}