<!--
Readme template adapted from https://github.com/Louis3797/awesome-readme-template/blob/main/README.md
Thanks Louis for the inspiration.
-->
<div align="center">

  <img src="Images\crappy_filler_logo.png" alt="Unit Conversion Tool logo" width="180" height="auto" />
  <h1>Unit Conversion Tool</h1>
  
  <p>
    A lightweight web app that converts between common length, volume, mass, temperature, and digital storage units in real-time.
  </p>

<p>
  <img src="https://img.shields.io/badge/status-prototype-blue" alt="status: prototype" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="license: MIT" />
  <img src="https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-orange" alt="made with html css js" />
</p>
   
<h4>
    <a href="main.html">Preview UI</a>
  <span> &bull; </span>
    <a href="#eyes-usage">Usage</a>
  <span> &bull; </span>
    <a href="#grey_question-faq">FAQ</a>
  <span> &bull; </span>
    <a href="#handshake-contact">Contact</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Color Reference](#art-color-reference)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

  

<!-- About the Project -->
## :star2: About the Project

The Unit Conversion Tool is a single-page site intended for students, travelers, and makers who need quick conversions without hunting for multiple calculators. The UI focuses on clarity: choose a category, enter a value, and instantly see the converted results for the most common unit pairings. Everything is handled client-side so it works offline once loaded.

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="assets/screenshot-dashboard.png" alt="Screenshot of the Unit Conversion Tool" />
</div>

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/docs/Web/HTML">HTML5</a></li>
    <li><a href="https://developer.mozilla.org/docs/Web/CSS">CSS3</a></li>
    <li><a href="https://developer.mozilla.org/docs/Web/JavaScript">Vanilla JavaScript</a></li>
  </ul>
</details>

<details>
  <summary>Tooling</summary>
  <ul>
    <li><a href="https://github.com/">Git</a></li>
    <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
  </ul>
</details>


<!-- Features -->
### :dart: Features

- Instant conversions for length, temperature, volume, mass, and digital storage.
- Category-aware unit lists that prevent invalid combinations.
- Responsive layout that adapts from phones to large screens.
- Offline-friendly: pure client-side logic without dependencies.
- Copy-to-clipboard shortcut for quickly sharing results (planned).

<!-- Color Reference -->
### :art: Color Reference

| Color         | Hex     |
| ------------- | ------- |
| Ink Plum      | #2D232E |
| Slate Accent  | #474448 |
| Warm Canvas   | #E0DDCF |
| Deep Mauve    | #534B52 |
| Soft Ivory    | #F1F0EA |

<!-- Env Variables -->
### :key: Environment Variables

This project does not require environment variables. Everything runs directly in the browser.

<!-- Getting Started -->
## :toolbox: Getting Started

Follow the steps below to run a local copy of the project.

<!-- Prerequisites -->
### :bangbang: Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge).
- (Optional) A local web server such as `Live Server` for hot reloading during development.

<!-- Installation -->
### :gear: Installation

Download or clone the repository:

```bash
git clone https://github.com/calen/unit-conversion-app.git
```

Move into the project directory:

```bash
cd unit-conversion-app/unit-conversion-tool
```

If you prefer serving over HTTP, start your favorite static server (example using `npx`):

```bash
npx serve .
```

<!-- Running Tests -->
### :test_tube: Running Tests

Tests are not yet in place. Contributions with unit or end-to-end tests are welcome.

<!-- Run Locally -->
### :running: Run Locally

Open the project in your browser:

```bash
# Windows
start main.html

# macOS
open main.html

# Linux
xdg-open main.html
```

Or, if you prefer a local dev server with auto reload and have `live-server` installed:

```bash
npx live-server .
```

<!-- Deployment -->
### :triangular_flag_on_post: Deployment

Any static host works (Netlify, GitHub Pages, Vercel). Upload the contents of `unit-conversion-tool` or point your hosting provider at the directory root.

<!-- Usage -->
## :eyes: Usage

1. Choose a category (e.g., Temperature).
2. Enter the value you want to convert.
3. Pick the source and destination units from the dropdowns.
4. Review the converted result instantly below the form.
5. Use the "Reset" action to clear the current conversion and start fresh.

<!-- Roadmap -->
## :compass: Roadmap

- [x] Static layout and responsive styling.
- [x] Conversion logic for length, volume, mass, temperature, and storage units.
- [ ] Add copy-to-clipboard button for converted values.
- [ ] Persist most recent conversions with `localStorage`.
- [ ] Add keyboard shortcuts for faster navigation.

<!-- Contributing -->
## :wave: Contributing

Contributions are always welcome! To get started:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push the branch (`git push origin feature/your-feature`).
5. Open a Pull Request describing the motivation and screenshots if relevant.

<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) before contributing.

<!-- FAQ -->
## :grey_question: FAQ

- **Will currency conversion be supported?**

  Currency conversion relies on live exchange rates, so it is out of scope for this static tool.

- **Can I add custom units?**

  Sure, submit a pull request for your desired changes or submit a feature request if you need assistance.

<!-- License -->
## :warning: License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- Contact -->
## :handshake: Contact

Calen - [@calen_dev](https://github.com/Calen-Ray)

Project Link: [https://github.com/Calen-Ray/unit-conversion-tool](https://github.com/Calen-Ray/unit-conversion-tool)

<!-- Acknowledgments -->
## :gem: Acknowledgements

Useful references while assembling this project:

- [Shields.io](https://shields.io/) for custom badges.
- [MDN Web Docs](https://developer.mozilla.org/) for HTML, CSS, and JavaScript guidance.
- [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) for accessible emoji codes.
- [Awesome README](https://github.com/matiassingers/awesome-readme) for structural inspiration.
