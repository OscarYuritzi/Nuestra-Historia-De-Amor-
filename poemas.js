import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyCyBRfQDFXjusN_aalebWPPIgsm5QWr9fg",
    authDomain: "oscar-afc2f.firebaseapp.com",
    projectId: "oscar-afc2f",
    storageBucket: "oscar-afc2f.firebasestorage.app",
    messagingSenderId: "205663051008",
    appId: "1:205663051008:web:b7cfb775523d92895467e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '/index.html';
    }
});