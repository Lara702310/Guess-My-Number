# 🎲 Pig Dice Game

A two-player browser dice game built with HTML, CSS, and JavaScript.

## 📖 How to Play

1. Players take turns rolling a dice.
2. Each roll adds to the **current (turn) score**.
3. If you roll a **1** — you lose your turn score and it switches to the other player.
4. Click **Hold** to save your current score to your total and pass the turn.
5. First player to reach **100 points** wins!

## 🕹️ Controls

| Button | Action |
|--------|--------|
| 🎲 Roll Dice | Roll the dice and add to current score |
| 🧮 Hold | Save current score and switch player |
| 🔄 New Game | Reset everything and start over |

## 📁 Project Structure

```
pig-dice-game/
├── main.html       # Game markup
├── css/
│   └── style.scss   # Styles (SCSS)
└── js/
    └── script.js    # Game logic
```

## ⚙️ Game Rules

- The game supports **2 players**.
- Player 1 always goes first.
- Rolling a **1** resets the current turn score to 0 and switches the turn.
- Clicking **Hold** adds the current turn score to the total and switches the turn.
- The first player to accumulate **100 or more points** wins.
- After a win, Roll and Hold buttons are disabled until a new game starts.

## 🚀 Getting Started

No dependencies or build tools required. Just open `main.html` in a browser.

```bash
# Clone or download the project, then open:
open main.html
```

## 🎨 Design

UI designed in Figma. The active player is visually highlighted. On a win, the winning player's section is marked with a trophy indicator.
