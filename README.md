# Sports Poll

Ett litet React-projekt där man kan rösta på vilket lag som vinner en match.  
Oddsen slumpas och matchdata hämtas från en lokal JSON-fil.

---

## 🧠 Vad jag har gjort
Jag har gjort en sida i React där användaren kan se sportmatcher och rösta på resultat.  
Appen visar:
- Lag och liga
- Status (t.ex. STARTED, FINISHED)
- Slumpade odds
- En visuell markering för status

Jag har designat allt med egen **CSS**, utan ramverk som Bootstrap.

---

## ⚙️ Verktyg jag använde
- **React + Vite**
- **Node.js**
- **Visual Studio Code**
- Egen **CSS**

---

## 📈 Hur det gick
Jag är nybörjare, så jag fick lite problem i början med npm och mappar.  
Jag fick fel som `ENOENT` och `vite.config.js`, men löste det genom att skapa om projektet och flytta JSON-filen till `src/`.  
Efter det gick det bättre, och jag kunde fokusera på design och logik.

Jag gjorde allt som stod i uppgiften:
✔️ Egen design  
✔️ React-ramverk  
✔️ Ingen CSS-ram  
✔️ JSON i frontend  
✔️ Slumpade odds  

Jag gjorde **inte så att lagen byts automatiskt**, eftersom det inte var ett krav.

---

## ▶️ Hur man kör projektet
1. Klona projektet:
   ```bash
   git clone <din GitHub-länk>
   cd sport-poll
