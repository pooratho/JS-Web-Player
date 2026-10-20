# 🎧 JS Web Player (Custom Audio Player)

![Project Preview](./assets/images/preview.png)

## 📖 About The Project

A custom-built, zero-dependency web audio player tailored specifically for listening. This project demonstrates advanced DOM manipulation, state management without frameworks, and deep integration with browser Web APIs.

## ✨ Features

- **Core Playback:** Play, pause, volume control, and dynamic progress bar.
- **Podcast-Specific Controls:**
  - 15-second skip forward / 10-second rewind.
  - Variable playback speed (1x, 1.25x, 1.5x, 2x).
- **Playlist Management:** Dynamically renders episodes from a data source. Auto-plays the next episode upon completion.
- **Session Memory:** Uses `localStorage` to remember the exact timestamp and active episode if the user closes the browser.
- **Fully Responsive:** Mobile-first UI design for seamless listening on any device.

## 🛠 Built With

- **Vanilla JavaScript (ES6+)**
- **HTML5 `<audio>` API**
- **CSS3 (Flexbox/Grid & Custom Properties)**

## 💡 Key Learnings

- **Event Handling:** Managed complex, continuous media events like `timeupdate`, `loadedmetadata`, and `seeking`.
- **State Management:** Maintained synchronization between the underlying `Audio` object state and the visual DOM elements entirely through Vanilla JS.
- **Performance:** Implemented efficient UI updates using `requestAnimationFrame` for the progress bar instead of `setInterval`.

## 🚀 Getting Started

To run this project locally, simply clone the repository and open the `index.html` file in your browser—no build steps or dependencies required!

```bash
git clone [https://github.com/YOUR_USERNAME/parishan-web-player.git](https://github.com/YOUR_USERNAME/parishan-web-player.git)
```
