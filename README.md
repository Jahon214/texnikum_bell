# 🏥 Guliston Tibbiyot Texnikumi — Aqlli Qo'ng'iroq Tizimi

> **Guliston tibbiyot texnikumi 2026-2027 o'quv yili uchun rasmiy tasdiqlangan qo'ng'iroqlar jadvali** asosida ishlab chiqilgan avtomatlashtirilgan aqlli qo'ng'iroq, dars jadvali va AI ovozli radiouzel tizimi.

Tasdiqlovchi: **Guliston tibbiyot texnikumi direktori S.F. Artikova**  
O'quv ishlari bo'yicha direktor o'rinbosari: **R.R. Mirzaliyev**

---

## 📅 Rasmiy Tasdiqlangan Dars Jadvali

### ☀️ I SMENA (08:30 – 12:20)
| t/r | Kirish | Chiqish | Tanaffus | Davomiyligi | Izoh & Voice Ovoz |
|---|---|---|---|---|---|
| **—** | 08:29 | 08:30 | — | 1 daq | 🇺🇿 **Davlat Madhiyasi** |
| **1** | **08:30** | **09:40** | 5 daqiqa | 70 daqiqa | 🔔 Kirish qo'ng'irog'i $\rightarrow$ 09:40 da 1-Voice (5 daqiqa tanaffus) |
| **2** | **09:45** | **10:55** | 15 daqiqa | 70 daqiqa | 🔔 Kirish $\rightarrow$ 10:55 da 2-Voice (Katta tanaffus) |
| **3** | **11:10** | **12:20** | — | 70 daqiqa | 11:10 da 3-Voice $\rightarrow$ 12:20 da 4-Voice (I Smena yakuni & Tushlik) |

> ☕ **Smenalar oralig'i / Tushlik va smena almashinuvi:** **12:20 – 12:50** (30 daqiqa)

---

### 🌙 II SMENA (12:50 – 16:30)
| t/r | Kirish | Chiqish | Tanaffus | Davomiyligi | Izoh & Voice Ovoz |
|---|---|---|---|---|---|
| **1** | **12:50** | **14:00** | 5 daqiqa | 70 daqiqa | 🔔 II Smena boshlanishi $\rightarrow$ 14:00 da 1-Voice |
| **2** | **14:05** | **15:15** | 5 daqiqa | 70 daqiqa | 🔔 Kirish $\rightarrow$ 15:15 da 1-Voice |
| **3** | **15:20** | **16:30** | — | 70 daqiqa | 🔔 Kirish $\rightarrow$ 16:30 da 5-Voice (II Smena & Kun yakuni) |

---

## 🎙️ Voice Audio E'lonlar Matnlari (Qachon va nima deydi)

Har bir tanaffus va dars yakunida **Qo'ng'iroq ➔ Freesound chime ➔ AI Ovoz** ketma-ketlikda yangraydi:

### 1. 🔔 1-Voice: 5 daqiqalik qisqa tanaffus
- **Qachon yangraydi:** Soat **09:40**, **14:00**, **15:15** da (dars tugaganda)
- **Fayl nomi:** `public/audio/voice_1_tanaffus.mp3`
- **Matni:**
  > *"Hurmatli talabalar va o'qituvchilar! Dars yakunlandi, besh daqiqalik qisqa tanaffus. Iltimos, xonalarni shamollatib, sanitariya qoidalariga rioya qiling."*

### 2. ☕ 2-Voice: Katta tanaffus (15 daqiqa dam olish)
- **Qachon yangraydi:** Soat **10:55 da** (2-para tugaganda)
- **Fayl nomi:** `public/audio/voice_2_katta_tanaffus.mp3`
- **Matni:**
  > *"Hurmatli talabalar va ustozlar! Ikkinchi para yakunlandi. O'n besh daqiqalik katta tanaffus boshlandi. Maroqli dam oling!"*

### 3. ⏰ 3-Voice: Katta tanaffus tugashi (3-para boshlanishi)
- **Qachon yangraydi:** Soat **11:10 da**
- **Fayl nomi:** `public/audio/voice_3_tanaffus_tugadi.mp3`
- **Matni:**
  > *"Diqqat, katta tanaffus yakunlandi. Dars mashg'ulotlari boshlandi. Talabalar o'z xonalariga marhamat qiling."*

### 4. 🔄 4-Voice: I Smena yakuni va Smena almashinuvi (30 daqiqa)
- **Qachon yangraydi:** Soat **12:20 da** (1-smena yakuni)
- **Fayl nomi:** `public/audio/voice_4_smena_almashinuvi.mp3`
- **Matni:**
  > *"Hurmatli talabalar va ustozlar! Birinchi smena darslari yakunlandi. Smenalar almashinuvi va tushlik vaqti boshlandi. Ikkinchi smena talabalariga muvaffaqiyat tilaymiz!"*

### 5. 🏁 5-Voice: II Smena va Butun kun yakuni
- **Qachon yangraydi:** Soat **16:30 da**
- **Fayl nomi:** `public/audio/voice_5_kun_yakuni.mp3`
- **Matni:**
  > *"Hurmatli talabalar va texnikum jamoasi! Bugungi barcha mashg'ulotlar yakunlandi. Auditoriya va laboratoriyalarni tartibga keltirishingizni so'raymiz. Xayr, salomat bo'ling!"*

### 6. 🇺🇿 6-Voice: O'zbekiston Davlat Madhiyasi
- **Qachon yangraydi:** Har kuni soat **08:29 da** (1-para oldidan)
- **Fayl nomi:** `public/audio/madhiya.mp3`

### 7. 🚨 Favqulodda signal (Qizil Kod & Evakuatsiya)
- **Qachon yangraydi:** Favqulodda tugma bosilganda
- **Fayl nomi:** `public/audio/voice_emergency.mp3`
- **Matni:**
  > *"Diqqat! Favqulodda holat signali! Barcha talabalar va xodimlar xotirjamlikni saqlagan holda binodan evakuatsiya yo'laklari orqali chiqishingiz so'raladi!"*

---

## 🛠️ Ovoz fayllarini o'zgartirish (O'zingiz ovoz yozib qo'ymoqchi bo'lsangiz):

Agar ovozlarni o'zingiz diktor yoki mikrofon orqali yozib olmoqchi bo'lsangiz, yozilgan audio fayllarni MP3 formatda quyidagi nomlar bilan `public/audio/` papkasiga saqlasangiz kifoya:
1. `public/audio/voice_1_tanaffus.mp3` (5 daqiqalik tanaffus uchun)
2. `public/audio/voice_2_katta_tanaffus.mp3` (15 daqiqalik katta tanaffus uchun)
3. `public/audio/voice_3_tanaffus_tugadi.mp3` (Katta tanaffus tugab darsga kirish uchun)
4. `public/audio/voice_4_smena_almashinuvi.mp3` (12:20 dagi smena almashinuvi uchun)
5. `public/audio/voice_5_kun_yakuni.mp3` (16:30 dagi kun yakuni uchun)

Shuningdek, tizimning ichidagi **📢 E'lon & Tabrik** modali orqali ham istalgan matningizni AI orqali bir zumda yangi audio faylga aylantirib yuklab olishingiz mumkin!

---

## 🚀 Ishga tushirish:
```bash
npm start
```
Brauzerda ochish: **http://localhost:3000**
