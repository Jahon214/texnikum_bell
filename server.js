const express = require('express');
const cors = require('cors');
const path = require('path');
const voicesHandler = require('./api/voices');
const ttsHandler = require('./api/tts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/voices', (req, res) => voicesHandler(req, res));
app.post('/api/tts', (req, res) => ttsHandler(req, res));

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🏥 TIBBIYOT TEXNIKUMI AQLLI QO'NG'IROG'I ISHGA TUSHDI!`);
    console.log(`🔗 Brauzerda oching: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
  });
}

module.exports = app;
