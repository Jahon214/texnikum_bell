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
    text: "Hurmatli talabalar va o'qituvchilar! Dars yakunlandi, besh daqiqalik qisqa tanaffus. Iltimos, xonalarni shamollatib, sanitariya qoidalariga rioya qiling."
  },
  {
    fileName: 'voice_2_katta_tanaffus.mp3',
    voice: 'madina',
    text: "Hurmatli talabalar va ustozlar! Ikkinchi para yakunlandi. O'n besh daqiqalik katta tanaffus boshlandi. Maroqli dam oling!"
  },
  {
    fileName: 'voice_3_tanaffus_tugadi.mp3',
    voice: 'sardor',
    text: "Diqqat, katta tanaffus yakunlandi. Dars mashg'ulotlari boshlandi. Talabalar o'z xonalariga marhamat qiling."
  },
  {
    fileName: 'voice_4_smena_almashinuvi.mp3',
    voice: 'madina',
    text: "Hurmatli talabalar va ustozlar! Birinchi smena darslari yakunlandi. Smenalar almashinuvi va tushlik vaqti boshlandi. Ikkinchi smena talabalariga muvaffaqiyat tilaymiz!"
  },
  {
    fileName: 'voice_5_kun_yakuni.mp3',
    voice: 'sardor',
    text: "Hurmatli talabalar va texnikum jamoasi! Bugungi barcha mashg'ulotlar yakunlandi. Auditoriya va laboratoriyalarni tartibga keltirishingizni so'raymiz. Xayr, salomat bo'ling!"
  },
  {
    fileName: 'voice_emergency.mp3',
    voice: 'sardor',
    text: "Diqqat! Favqulodda holat signali! Barcha talabalar va xodimlar xotirjamlikni saqlagan holda binodan evakuatsiya yo'laklari orqali chiqishingiz so'raladi!"
  },
  {
    fileName: 'voice_sanitariya.mp3',
    voice: 'madina',
    text: "Diqqat! Texnikumda sanitariya va dezinfeksiya soati boshlandi. O'quv xonalari va laboratoriyalarda tozalik ishlarini olib borishingiz so'raladi."
  }
];

async function generateAll() {
  for (const item of voicesToGenerate) {
    const filePath = path.join(audioDir, item.fileName);
    console.log(`Generating ${item.fileName}...`);
    try {
      const res = await fetch('http://localhost:3000/api/tts', {
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
  console.log('All Guliston Texnikum voices generated!');
}

generateAll();
