import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

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
const db = getFirestore(app);

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        const userName = user.email === 'oscar@amor.com' ? 'Oscar' : 'Yuritzi';
        document.getElementById('current-user').textContent = `Escribiendo como: ${userName}`;
        loadEntries();
    } else {
        window.location.href = 'index.html';
    }
});

document.getElementById('diary-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('diary-title').value;
    const content = document.getElementById('diary-content').value;
    
    try {
        await addDoc(collection(db, 'entries'), {
            title,
            content,
            author: currentUser.email,
            timestamp: new Date().toISOString()
        });
        
        document.getElementById('diary-form').reset();
    } catch (error) {
        console.error('Error al añadir entrada:', error);
    }
});

function loadEntries() {
    const entriesQuery = query(collection(db, 'entries'), orderBy('timestamp', 'desc'));
    
    onSnapshot(entriesQuery, (snapshot) => {
        const entriesList = document.getElementById('entries-list');
        entriesList.innerHTML = '';
        
        snapshot.forEach((doc) => {
            const entry = doc.data();
            const authorName = entry.author === 'oscar@amor.com' ? 'Oscar' : 'Yuritzi';
            
            const entryElement = document.createElement('div');
            entryElement.className = 'entry';
            entryElement.innerHTML = `
                <div class="entry-header">
                    <span class="entry-title">${entry.title}</span>
                    <span class="entry-author">por ${authorName}</span>
                </div>
                <div class="entry-content">${entry.content}</div>
            `;
            
            entriesList.appendChild(entryElement);
        });
    });
}
