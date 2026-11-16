// api/tts.js - Vercel Serverless Function & Express handler
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Faqat POST so\'rov qabul qilinadi' });
  }

  const { text, voice = 'madina' } = req.body || {};
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ success: false, error: 'Matn (text) kiritilmagan' });
  }

  const cleanText = text.trim();

  // 1. Agar VoiceLab ovozi tanlangan va API kaliti mavjud bo'lsa
  if (voice.startsWith('voice_') && process.env.VOICELAB_API_KEY) {
    try {
      const vlRes = await fetch('https://api.voicelab.uz/v1/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.VOICELAB_API_KEY}`
        },
        body: JSON.stringify({
          text: cleanText,
          voice_id: voice
        })
      });
      const vlData = await vlRes.json();
      if (vlRes.ok && vlData.audio_url) {
        return res.status(200).json({
          success: true,
          audioUrl: vlData.audio_url,
          engine: 'voicelab',
          cached: false
        });
      }
    } catch (e) {
      console.warn('VoiceLab xatosi, zaxira Edge-TTS ishlatiladi:', e.message);
    }
  }

  // 2. Bepul Edge-TTS orqali sintez qilish (yoki ishonchli yuqori darajadagi xizmat)
  try {
    const upstreamRes = await fetch('https://ibratschoolsmartbell.vercel.app/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: cleanText, voice })
    });
    const upstreamData = await upstreamRes.json();
    if (upstreamRes.ok && upstreamData.success) {
      return res.status(200).json(upstreamData);
    }
  } catch (err) {
    console.warn('Upstream TTS fetch error:', err.message);
  }

  // 3. Agar server orqali ulanish bo'lmasa, mijoz (client-side) sinteziga yo'naltirish
  return res.status(200).json({
    success: true,
    isFallback: true,
    note: "Brauzer ovoz sintezatori (SpeechSynthesis) orqali ijro etiladi",
    text: cleanText,
    voice
  });
};
