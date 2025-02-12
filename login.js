// Verificar si ya hay una sesión activa
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = 'admin.html';
    }
});

const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const closeNotification = document.querySelector('.close-notification');

loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'georgeAdmin' && password === 'Fantastici07@') {
        try {
            // Crear usuario en Firebase Auth
            await firebase.auth().signInWithEmailAndPassword(username + '@admin.com', password);
            window.location.href = 'admin.html';
        } catch (error) {
            console.error('Error:', error);
            showNotification('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    } else {
        showNotification('Usuario o contraseña incorrectos');
    }
});

function showNotification(message) {
    notificationMessage.textContent = message;
    notification.style.display = 'flex';
    setTimeout(() => {
        closeNotificationHandler();
    }, 5000);
}

function closeNotificationHandler() {
    notification.style.display = 'none';
}

closeNotification.addEventListener('click', closeNotificationHandler); 