# Animated FAQ Accordion

A clean, high-performance, and fully accessible animated FAQ accordion built with modern vanilla web technologies. Styled with precision to match the **Ateris Labs** brand visual identity system.

## 🚀 Key Features

*   **Fluid `scrollHeight` Animations**: Bypasses the choppy limitations of pure CSS `height: auto` transitions by dynamically evaluating container dimensions via JavaScript.
*   **Ateris Labs Brand Alignment**: Fully controlled through centralized CSS custom properties utilizing a modern slate and precision blue palette.
*   **Semantic Accessibility**: Built following ARIA design patterns with active screen-reader state mapping (`aria-expanded`, `aria-controls`, and structural `region` roles).
*   **Pure CSS Icon Morphing**: Smoothly handles layout transitions from a plus to a minus icon using standard pseudo-elements, eliminating heavy external asset dependencies.

---

## 🛠️ Core Technology Stack

| Frontend Core | Design Tokens | Version Control |
| :--- | :--- | :--- |
| • HTML5 (Semantic) <br> • Vanilla JavaScript | • Custom CSS Variables <br> • Transition Easing Curves | • Git <br> • GitHub (`Jkalio52`) |

---

## 📁 Project Architecture

```text
├── index.html      # Structural semantic markup and ARIA hooks
├── style.css       # Ateris Labs layout design tokens and fluid animations
└── script.js       # Dynamic scrollHeight animation engine and toggle routines
```

---

## 💻 Quick Local Installation

1. Clone this repository locally to your system:
   ```bash
   git clone https://github.com
   ```
2. Navigate directly into the destination project directory:
   ```bash
   cd animated-faq-accordion
   ```
3. Launch `index.html` natively inside any modern web browser to view the interactive application.

---

## ⚙️ Design Token Implementation

The structural layout and interactive behaviors are governed by centralized variables inside `style.css`:

```css
:root {
  --ateris-primary: #0f172a;       /* Deep slate for high contrast */
  --ateris-accent: #0284c7;        /* Energetic precision blue */
  --ateris-surface-bg: #ffffff;    /* Card panel background */
  --ateris-body-bg: #f8fafc;       /* Clean, soft neutral background */
  --ateris-radius: 8px;            /* Professional edge metrics */
  --ateris-transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🤝 About Ateris Labs

> **Ateris Labs | Crafting Code, Automating Minds.**
> Discover more architectural workflows and digital systems via our online portal.
> 🌐 [Explore the Portfolio](https://myportfolio.pediadigital.com/)
