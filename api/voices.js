// api/voices.js - Vercel Serverless Function & Express handler
const VOICES = [
  { id: "madina", name: "Madina (O'zbekcha ayol) — 100% Bepul va Tiniq", engine: "edge", gender: "female", default: true },
  { id: "sardor", name: "Sardor (O'zbekcha erkak) — 100% Bepul va Rasmiy", engine: "edge", gender: "male", default: false },
  { id: "voice_01J9NEUTRAL0000000000000001", name: "Gulnoza (Tiniq · muvozanatli) — VoiceLab", engine: "voicelab", gender: "female", language: "uz" },
  { id: "voice_OBuMpAaB5iYCUZS0eCc9Fj3k", name: "Firdavs O'rinov (Rasmiy diktor) — VoiceLab", engine: "voicelab", gender: "male", language: "uz" },
  { id: "voice_f7179d1c-07ab-4b3d-b5be-84dcf2935388", name: "Dilnoza (Velvet, muloyim) — VoiceLab", engine: "voicelab", gender: "female", language: "uz" },
  { id: "voice_xdQMoRJkjHbPIB-jounXzKq8", name: "Sardor (Barqaror · aniq) — VoiceLab", engine: "voicelab", gender: "male", language: "uz" },
  { id: "voice_fa56cecf-9b0b-45ba-9ec3-494efb5b301f", name: "Javohir (Yorqin boshlovchi) — VoiceLab", engine: "voicelab", gender: "male", language: "uz" },
  { id: "voice_EvIb9vE6iY_dWgK7OobYdZcX", name: "Lola (Odobli, yosh ayol) — VoiceLab", engine: "voicelab", gender: "female", language: "uz" },
  { id: "voice_4ef06e6b-2229-4023-ad66-c2a7a2b736ff", name: "Madina (Mayin, iliq) — VoiceLab", engine: "voicelab", gender: "female", language: "uz" },
  { id: "voice_2785aabd-21b5-4cc7-9845-2230186ef7d9", name: "Safiya (Yo'riqnoma ko'rsatuvchi) — VoiceLab", engine: "voicelab", gender: "female", language: "uz" }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    success: true,
    hasVoiceLabKey: Boolean(process.env.VOICELAB_API_KEY),
    voices: VOICES
  });
};
