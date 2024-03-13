document.getElementById('register-btn').addEventListener('click', function() {
    // Perform registration logic here
    // If registration is successful, show the popup
    showPopup();
});

function showPopup() {
    document.getElementById('success-popup').style.display = 'block';
}

document.getElementById('close-popup-btn').addEventListener('click', function() {
    hidePopup();
});

function hidePopup() {
    document.getElementById('success-popup').style.display = 'none';
}