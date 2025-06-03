const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișierele statice din folderul "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route fallback (pentru SPA-uri)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serverul rulează la http://localhost:${PORT}`);
});
