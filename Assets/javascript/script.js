function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function openModal() {
    document.getElementById('missionModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('missionModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('missionModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Initialize the map
const map = L.map('map').setView([-26.701013, 27.837725], 15); // Coordinates for Ruben & Armstrong Street

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at the specified location
const marker = L.marker([-26.701013, 27.837725]).addTo(map);
marker.bindPopup('<b>Corner Ruben and Armstrong Street</b><br>Vanderbijl CW3, Gauteng').openPopup();
