const express = require('express');
const path = require('path');
const app = express();

// Setări de bază
const PORT = process.env.PORT || 3000;

// Servește fișierele statice din directorul 'public'
app.use(express.static('public'));

// Middleware pentru parsarea JSON și date din formulare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pentru toate cererile GET - returnează index.html pentru rutarea SPA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Pornește serverul
app.listen(PORT, () => {
    console.log(`Serverul rulează pe http://localhost:${PORT}`);
});