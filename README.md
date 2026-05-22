# Ask Out 💌

This project was built quite some time ago but I forgot to push it because of other work and projects in between 😅.

It is a small and cute website made for Valentine’s Day where you can ask your partner out in a fun and wholesome way ❤️.

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

---

## Getting Started

Clone the repository:

```bash
git clone <repo-url>
cd ask_out
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

The app will run locally on:

```text
http://localhost:5173
```

---

## Assets Setup

Create an `assets` folder inside the `src` directory and place all photos there.

Project structure:

```text
src/
│── assets/
│   ├── image1.png
│   ├── image2.jpg
│   ├── image3.png
│   └── ...
│
│── components/
│── App.jsx
│── main.jsx
```

Import assets like this:

```javascript
import photo from "./assets/photo.png";
```

Use in components:

```jsx
<img src={photo} alt="photo" />
```

---

## Temporary Sharing / Testing

If you want to expose the project temporarily and share it with others, you can use:

### Using ngrok

```bash
ngrok http 5173
```

This will generate a temporary public URL which you can share.

---

## About The Project

The idea behind this project was simple:

Make a cute little website for Valentine’s Day where someone can ask their partner out in an interactive way ❤️

Finally putting it here.

Have fun ✨
