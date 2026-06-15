// Live System Clock logic
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // conversion of hour '0' to '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes + ' ' + ampm;
    const liveTimeEl = document.getElementById('live-time');
    if (liveTimeEl) liveTimeEl.innerText = timeString;
}

// Run clock right away, then refresh every minute
updateClock();
setInterval(updateClock, 60000);

// Code initialization on page load
window.onload = function() {
    // Load sharp, professional icons if available
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // Slide-in Welcome Alert
    setTimeout(function() {
        const toast = document.getElementById('welcome-toast');
        if (toast) {
            toast.classList.add('show');
            
            // Slide it out after 4 seconds
            setTimeout(function() {
                toast.classList.remove('show');
            }, 4000);
        }
    }, 1000);
};
