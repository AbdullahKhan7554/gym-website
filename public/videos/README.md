# Intro film (optional)

Drop your Higgsfield render here as `intro.mp4` (8–12s, 16:9, H.264, ideally a
`.webm` too). Then open `components/intro/IntroExperience.js` and set:

```js
const INTRO_VIDEO = "/videos/intro.mp4";
```

Until then a cinematic logo-reveal intro plays on first visit — no broken
requests. The intro shows once per visitor (tracked in `localStorage`);
returning users and reduced-motion users skip straight to the site.

---

# Hero video (optional)

Drop a short, muted, looping clip here named `hero.mp4` (≤ 8s, ≤ 2 MB,
1920×1080, H.264). Then open `components/sections/Hero.js` and set:

```js
const HERO_VIDEO = "/videos/hero.mp4";
```

Until then the cinematic poster image renders with the clip-path reveal
sequence — no broken requests, no console errors.

Tip: also ship a `.webm` (VP9/AV1) source for smaller files and add a second
`<source>` in the Hero `<video>`.
