const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const voicesToGenerate = [
  {
    fileName: 'voice_1_tanaffus.mp3',
    voice: 'madina',
    text: "Hurmatli talabalar va o'qituvchilar! Dars mashg'uloti yakunlandi. Tanaffus vaqti boshlandi. Iltimos, sanitariya va tartib qoidalariga rioya qiling."
  },
  {
    fileName: 'voice_2_tushlik.mp3',
    voice: 'madina',
    text: "Hurmatli talabalar, ustozlar va shifokor-pedagoglar! Katta tushlik tanaffusi boshlandi. Barchaga yoqimli ishtaha va mustahkam salomatlik tilaymiz!"
  },
  {
    fileName: 'voice_3_tushlik_tugadi.mp3',
    voice: 'sardor',
    text: "Diqqat, katta tushlik tanaffusi yakunlandi. Navbatdagi para mashg'ulotlari boshlandi. Talabalar dars xonalari va laboratoriyalarga marhamat qiling."
  },
  {
    fileName: 'voice_4_kun_yakuni.mp3',
    voice: 'madina',
    text: "Hurmatli talabalar va texnikum jamoasi! Bugungi mashg'ulotlar yakunlandi. Barchaga maroqli dam olish tilaymiz. Ertaga ko'rishguncha xayr, salomat bo'ling!"
  },
  {
    fileName: 'voice_emergency.mp3',
    voice: 'sardor',
    text: "Diqqat! Favqulodda holat signali! Barcha talabalar va xodimlar xotirjamlikni saqlagan holda binodan evakuatsiya yo'laklari orqali chiqishingiz so'raladi!"
  },
  {
    fileName: 'voice_sanitariya.mp3',
    voice: 'madina',
    text: "Diqqat! Texnikumda sanitariya va dezinfeksiya soati boshlandi. O'quv xonalari va simulyatsion markazlarda tozalik ishlarini olib borishingiz so'raladi."
  }
];

async function generateAll() {
  for (const item of voicesToGenerate) {
    const filePath = path.join(audioDir, item.fileName);
    console.log(`Generating ${item.fileName}...`);
    try {
      const res = await fetch('https://ibratschoolsmartbell.vercel.app/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: item.text, voice: item.voice })
      });
      const data = await res.json();
      if (data.success && data.audioUrl && data.audioUrl.startsWith('data:audio/mp3;base64,')) {
        const base64Data = data.audioUrl.replace(/^data:audio\/mp3;base64,/, '');
        fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
        console.log(` Saved ${item.fileName} (${fs.statSync(filePath).size} bytes)`);
      } else {
        console.warn(` Failed ${item.fileName}:`, data);
      }
    } catch (err) {
      console.error(` Error ${item.fileName}:`, err.message);
    }
  }
  console.log('All voices done!');
}

generateAll();
