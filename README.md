# 🧘 Meditation Quiz

> *"Det er ikke tanker der er problemet - det er din relation til dem."*

En interaktiv og humoristisk quiz der tester din viden om meditation og mindfulness. Quizzen er designet til at udfordre almindelige misforståelser om meditation - med et grin undervejs. For hvert svar får du øjeblikkelig feedback med en lille joke der forklarer hvorfor du har ret... eller ikke. 😄

---

## 🎯 Hvad går projektet ud på?

De fleste mennesker tror at meditation handler om at tømme hovedet for tanker, sidde i lotusstilling og opnå total indre fred på 5 minutter. Spoiler alert: det gør det ikke.

Denne quiz er bygget til at teste om du forstår **de reelle principper bag meditation** - ikke den romantiserede version fra Instagram. Du bliver guidet igennem 21 spørgsmål der dækker alt fra hvad stilhed egentlig betyder, til hvorfor du ikke skal prøve at slappe af når du mediterer.

Quizzen er opdelt i **5 kategorier**:

### 0️⃣ Om meditation - og vælge ikke at have et problem
Hvad er meditation egentlig? Hvad er målet? Hvor længe skal du gøre det, og hvad sker der hvis du synes det er svært? Her starter vi med fundamentet.

### 1️⃣ Om at være stille.
Stilhed er ikke bare fravær af lyd. Det er en indre position. Du kan have en hel festival af tanker i hovedet og stadig være fuldkommen stille. Vi dykker ned i hvad stilhed egentlig betyder - både indvendigt og udvendigt.

### 2️⃣ Om at være afspændt (ease of being)
At slappe af er ikke det samme som at prøve at slappe af. Faktisk er det modsatte ofte tilfældet - jo mere du prøver, desto mere anspændt bliver du. Denne kategori handler om hvad det egentlig betyder at være afspændt i meditation.

### 3️⃣ Om at være opmærksom og lysvågen
Opmærksomhed i meditation er ikke det samme som at fokusere hårdt på ét punkt. Det er en blød, åben tilstedeværelse. Og nej - du kan ikke meditere mens du småsover. Det har vi prøvet.

### 4️⃣ Om at lade alting være
Den sværeste og måske vigtigste kategori. At lade alting være handler ikke om at være ligeglad - det handler om at droppe din kamp med virkeligheden. Du er ikke dine tanker, og dine tanker er ikke dig.

---

## ✨ Features

- 🎯 **21 spørgsmål** fordelt på 5 kategorier
- ✅ **Øjeblikkelig feedback** - rigtig eller forkert med det samme
- 😄 **Jokes ved hvert svar** - forklaringer der er sjove og lærerige på samme tid
- 📊 **Live score tracking** - se dine point stige i realtid
- 📈 **Progress bar** - altid overblik over hvor langt du er
- 🏆 **Resultat side** - personlig feedback baseret på din score
- 📱 **Responsivt design** - virker perfekt på mobil, tablet og desktop
- 🎨 **Moderne UI** - gradient design med smooth animationer
- 🔄 **Start igen** - tag quizzen så mange gange du vil

---

## 🛠️ Teknologi

| Teknologi | Formål |
|---|---|
| **React 18** | UI framework og komponent-logik |
| **Vite** | Lynhurtig build tool og dev server |
| **Tailwind CSS** | Utility-first styling via CDN |
| **GitHub Actions** | Automatisk CI/CD pipeline |
| **GitHub Pages** | Gratis hosting af den færdige app |

---

## 🚀 Kør projektet lokalt

### Forudsætninger
- Node.js 18 eller nyere
- npm

### Installation

```bash
# Klon projektet
git clone https://github.com/FredeBas/Meditation-Quiz.git

# Gå ind i mappen
cd Meditation-Quiz

# Installer dependencies
npm install

# Start development server
npm run dev
```

Åbn [`http://localhost:5173`](http://localhost:5173) i din browser og quizzen kører! 🎉

### Build til produktion

```bash
npm run build
```

Dette laver en optimeret `dist/` mappe klar til deployment.

---

## 🔄 Deployment

Projektet er sat op med **GitHub Actions** til automatisk deployment til **GitHub Pages**.

Workflow:
1. Du pusher kode til `main` branchen
2. GitHub Actions starter automatisk
3. Projektet bygges med Vite
4. Den færdige build deployes til GitHub Pages

```
Push til main → GitHub Actions bygger → Live på GitHub Pages ✅
```

Den live version kan ses på:
**[https://fredebas.github.io/Meditation-Quiz/](https://fredebas.github.io/Meditation-Quiz/)**

---

## 📁 Projektstruktur

```
Meditation-Quiz/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions workflow
├── src/
│   ├── App.jsx               ← Hele quiz komponenten
│   └── main.jsx              ← React entry point
├── index.html                ← HTML entry point
├── vite.config.js            ← Vite konfiguration med base path
├── package.json              ← Dependencies og scripts
└── README.md                 ← Denne fil
```

---

## 🤖 Vibe Coded med Claude

Dette projekt er **100% vibe coded** med [Claude](https://claude.ai) af Anthropic.

Hvad betyder det? Det betyder at hele projektet - fra den første idé til den færdige deployment - er bygget gennem en samtale med Claude AI. Ingen traditionel kodning. Ingen Stack Overflow. Bare en idé, en AI og en god dialog.

**Hvad Claude hjalp med:**
- 🎨 Design og UI/UX beslutninger
- ⚛️ React komponent arkitektur
- 📝 Alle 21 spørgsmål og svar
- 😄 Jokes og feedback til hvert spørgsmål
- 🔧 Vite og GitHub Actions konfiguration
- 🚀 Deployment setup til GitHub Pages
- 📖 Denne README (ja, også den)

> *"Vibe coding er ikke fremtiden - det er nutiden. Du beskriver hvad du vil have, AI'en bygger det, og du lærer undervejs."*

Bygget med ❤️ og en del 🧘 af **FredeBas** i samarbejde med **Claude (Anthropic)**

---

## 📄 Licens

MIT License - fri til at bruge, kopiere og modificere som du har lyst!