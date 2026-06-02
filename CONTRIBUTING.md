# 🤝 Contributing to MindRush

First of all, thanks for taking the time to contribute! Every bit of help is appreciated, whether it's a bug fix, a new game, or a UI improvement.

---

## 📜 Code of Conduct

Be respectful and constructive. This is an open and welcoming project — feedback should be kind, and disagreements should be resolved through discussion.

---

## 📝 Contributor License Agreement (CLA)

Before your Pull Request can be merged, you must sign the **Contributor License Agreement**.

When you open a PR, the CLA bot will post a comment with a link to sign. Simply click it, read the agreement, and accept. You only need to do this **once** for the entire project.

> ⚠️ PRs from contributors who have not signed the CLA will not be reviewed or merged until the agreement is accepted.

---

## 🛠️ How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/mindrush.git
cd mindrush
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

Use a descriptive name for your branch:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-bug
```

Branch naming conventions:
- `feature/` — new functionality
- `fix/` — bug fixes
- `refactor/` — code improvements without behavior change
- `docs/` — documentation only

### 4. Make Your Changes

- Keep changes focused. One feature or fix per PR.
- Make sure the app builds and lints without errors:

```bash
npm run build
npm run preview
```

### 5. Commit

Write clear, concise commit messages:

```bash
git commit -m "Add: memory game with card flip logic"
git commit -m "Fix: timer not resetting on Play Again"
git commit -m "Refactor: extract game logic into custom hook"
```

### 6. Push & Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request against the `main` branch on GitHub. Include:
- A short description of what you changed and why
- Screenshots or a screen recording if the change affects the UI

---

## 💻 Development Setup

### Prerequisites

- **Node.js** `^20.19.0 || >=22.12.0`
- **npm** ≥ 10

### Available Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local dev server (port 5173) |
| `npm run build`   | Production build                   |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint                         |

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Game selection menu
│   ├── Maths.jsx             # Math game
│   └── Color.jsx             # Color game
├── components/
│   ├── StartComponent.jsx    # Reusable start screen
│   ├── Timer.jsx             # 30-second countdown
│   ├── Score.jsx             # End-of-game score screen
│   └── NotificationContext.jsx
└── index.css
```

### Adding a New Game

1. Create `src/pages/YourGame.jsx` — use `Maths.jsx` or `Color.jsx` as a reference.
2. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/yourgame" element={<YourGame />} />
   ```
3. Add a button for it in `src/pages/Home.jsx`.
4. Reuse the existing components (`StartComponent`, `Timer`, `Score`) as much as possible.

---

## 📋 Contribution Guidelines

- **Style**: follow the existing code style; ESLint is configured and enforced.
- **Components**: keep components small and focused on a single responsibility.
- **No new dependencies** without discussing it first in an issue. The project intentionally stays lightweight.
- **Accessibility**: new UI elements should be keyboard-navigable and have appropriate labels.
- **Responsive**: test your changes on mobile viewport sizes too. The CSS already has breakpoints at 768px and 480px.

---

## 💡 Ideas & Roadmap

Looking for something to work on? Here are some open ideas:

| Area | Idea |
|------|------|
| 🆕 New game | Memory card flip game |
| 🆕 New game | Typing speed challenge |
| 🆕 New game | Word anagram puzzle |
| 🏆 Feature | High score persistence with `localStorage` |
| 🌍 Feature | Internationalization (i18n) — Italian & English |
| ♿ Feature | Accessibility audit (ARIA labels, keyboard nav) |
| 🧪 Testing | Unit tests for game logic (e.g. Vitest) |
| 🎨 UI | Animated transitions between game states |

Feel free to open an issue to discuss any of these (or your own idea) before starting work on it.

---

## License

By contributing, you agree that your contributions will be licensed under the [GNU Affero General Public License v3.0 (AGPL v3.0)](https://github.com/DRosarioDev/MindRush/blob/main/LICENSE).

---

## Final Notes

Remember that maintaining this project requires significant effort. The maintainer appreciates your contributions but must prioritize long-term project stability. Not all contributions will be accepted.

Thank you for helping!
