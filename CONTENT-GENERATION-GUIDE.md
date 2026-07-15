# Content Generation Guide

## Learning Mascot: Sage the Fox

### Mascot File Index

Keep these files synchronized whenever the mascot changes.

| File | Purpose |
|------|---------|
| [`docs/img/mascot/character-sheet.md`](docs/img/mascot/character-sheet.md) | Canonical identity and voice |
| [`docs/img/mascot/image-prompts.md`](docs/img/mascot/image-prompts.md) | Reproducible pose prompts |
| [`docs/img/mascot/neutral.png`](docs/img/mascot/neutral.png) | General-purpose pose |
| [`docs/img/mascot/welcome.png`](docs/img/mascot/welcome.png) | Chapter-opening pose |
| [`docs/img/mascot/thinking.png`](docs/img/mascot/thinking.png) | Key-concept pose |
| [`docs/img/mascot/tip.png`](docs/img/mascot/tip.png) | Helpful-guidance pose |
| [`docs/img/mascot/warning.png`](docs/img/mascot/warning.png) | Pitfall pose |
| [`docs/img/mascot/encouraging.png`](docs/img/mascot/encouraging.png) | Struggle-support pose |
| [`docs/img/mascot/celebration.png`](docs/img/mascot/celebration.png) | Achievement pose |
| [`docs/css/mascot.css`](docs/css/mascot.css) | Mascot admonition styles |
| [`docs/learning-graph/mascot-test.md`](docs/learning-graph/mascot-test.md) | Rendering preview |

### Character and Voice

- **Name:** Sage
- **Species:** Fox
- **Pronouns:** they/them
- **Personality:** warm, curious, patient, clever, and encouraging
- **Catchphrase:** “Let’s figure this out!”
- **Visual:** orange-and-cream fox with navy glasses and a royal-blue scarf
- Use short, clear, age-appropriate language.
- Ask a guiding question before revealing an answer.
- Treat mistakes as useful evidence.
- Useful phrases include “What pattern do you notice?” and “Check it one more way.”

### Admonition Format

Place the image in the admonition body, never in its title bar:

```markdown
!!! mascot-welcome "Welcome!"
    ![Sage waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let’s figure this out! In this chapter, we will...
```

### Placement Rules

| Context | Type | Frequency |
|---------|------|-----------|
| General note | `mascot-neutral` | As needed |
| Chapter opening | `mascot-welcome` | Once per chapter |
| Key concept | `mascot-thinking` | Up to 2–3 per chapter |
| Helpful hint | `mascot-tip` | As needed |
| Common mistake | `mascot-warning` | As needed |
| Difficult content | `mascot-encourage` | Where students may struggle |
| Major completion | `mascot-celebration` | End of a major section or chapter |

Do not exceed five or six mascot appearances in one chapter, place mascot
callouts back-to-back, use them only as decoration, or change Sage’s established
personality and speech patterns.
