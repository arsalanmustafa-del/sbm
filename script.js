const root = document.documentElement;
const journey = document.getElementById("journey");
const topbar = document.querySelector(".topbar");
const title = document.getElementById("journey-title");
const text = document.getElementById("journey-text");
const kicker = document.getElementById("chapter-kicker");
const railButtons = [...document.querySelectorAll(".journey-rail button")];
const signalToggle = document.querySelector(".signal-toggle");
const processStack = document.getElementById("process-stack");
const publishingList = document.querySelector(".service-list-publishing");
const growthList = document.querySelector(".service-list-growth");
const portfolioGrid = document.getElementById("portfolio-grid");
const insightGrid = document.getElementById("insight-grid");
const faqList = document.getElementById("faq-list");
const modal = document.getElementById("case-modal");
const caseCover = document.getElementById("case-cover");
const caseTitle = document.getElementById("case-title");
const caseSummary = document.getElementById("case-summary");
const caseServices = document.getElementById("case-services");
const caseResults = document.getElementById("case-results");
const caseCount = document.getElementById("case-count");
const caseVideoImage = document.querySelector(".case-video img");

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mix = (from, to, progress) => from + (to - from) * progress;
const smoothstep = (edge0, edge1, value) => {
  const x = clamp((value - edge0) / (edge1 - edge0));
  return x * x * (3 - 2 * x);
};

const journeyChapters = [
  {
    at: 0.1,
    kicker: "01 / Signal",
    title: "Only the mark moves first.",
    text: "A clean brand signal enters the dark shelf before the book, campaign, or reader path appears."
  },
  {
    at: 0.34,
    kicker: "02 / Shelf",
    title: "The mark lands inside the book world.",
    text: "The SBM emblem settles over the open book, turning the shelf into a launch environment."
  },
  {
    at: 0.58,
    kicker: "03 / System",
    title: "The book becomes a market system.",
    text: "Story, authority, search, AI citations, and conversion paths begin working as connected chapters."
  },
  {
    at: 0.8,
    kicker: "04 / Readers",
    title: "The destination is reader movement.",
    text: "The goal is not a louder launch. It is a clearer route from author expertise to reader action."
  }
];

const processStages = [
  {
    number: "01",
    name: "Discover",
    title: "Start with the author, not the tactic.",
    text: "We review the manuscript, audience, publishing stage, credibility signals, market gap, and timing before recommending channels. The first decision is always what the book should mean to the right reader.",
    meta: "Author goals · Reader promise · Positioning",
    image: "assets/strategy-desk.png"
  },
  {
    number: "02",
    name: "Craft",
    title: "Shape the book until it feels inevitable.",
    text: "Editorial, typesetting, cover direction, retail setup, and production assets are aligned so the book reads with clarity and presents with authority wherever it appears.",
    meta: "Editing · Cover · Interior · Distribution",
    image: "assets/ref-publishing-excellence-img.png"
  },
  {
    number: "03",
    name: "Launch",
    title: "Build momentum around proof, not noise.",
    text: "We choreograph PR, launch messaging, Amazon and Meta testing, audience funnels, and content so early attention becomes a measurable reader path.",
    meta: "PR · Paid media · Funnel · Content",
    image: "assets/author-session.png"
  },
  {
    number: "04",
    name: "Grow",
    title: "Keep finding the right readers.",
    text: "After launch, we refine search, AI visibility, email, social, and paid signals so the author platform keeps improving after the first campaign window closes.",
    meta: "SEO · GEO · Email · Performance",
    image: "assets/ref-growth-marketing-performance-img.png"
  }
];

const publishingServices = [
  ["Developmental editing", "assets/ref-developmental-editing.png"],
  ["Interior typesetting", "assets/ref-interior-typesetting.png"],
  ["Cover design", "assets/ref-cover-design.png"],
  ["Line & copy editing", "assets/ref-line-copy-editing.png"],
  ["Retail distribution", "assets/ref-retail-distribution.png"],
  ["Print production", "assets/ref-print-production.png"]
];

const growthServices = [
  ["Launch strategy & choreography", "assets/ref-launch-strategy-choreography.png"],
  ["Amazon & Meta advertising", "assets/ref-amazon-meta-advertising.png"],
  ["Author funnel & email", "assets/ref-author-funnel-email.png"],
  ["Social presence & content", "assets/ref-social-presence-content.png"],
  ["Publicity & visibility", "assets/ref-publicity-visibility.png"],
  ["Performance tracking", "assets/ref-growth-marketing-performance-icon.png"]
];

const portfolioCases = [
  {
    author: "Jennifer Hartman",
    role: "Leadership author",
    title: "Purposeful work that drives impact.",
    book: "Thoughtful Stories",
    label: "Featured book",
    metric: "10,000 copies sold",
    image: "assets/author-testimonial.png",
    video: "assets/author-testimonial.png",
    a: "#12212e",
    b: "#2d5260",
    summary: "A premium nonfiction launch that paired editorial polish with a focused visibility and reader-conversion system.",
    services: ["Editorial planning", "Cover direction", "Launch campaign", "PR positioning", "Paid conversion ads"],
    results: ["10,000 copies sold", "22 podcast bookings", "Category momentum", "Reader list growth"]
  },
  {
    author: "Sarah Mitchell",
    role: "Memoir author",
    title: "The author journey, built with care.",
    book: "Quiet Atlas",
    label: "Author story",
    metric: "#1 launch achievement",
    image: "assets/author-session.png",
    video: "assets/author-session.png",
    a: "#1d4a39",
    b: "#0f211a",
    summary: "A memoir campaign shaped around emotional clarity, media angles, and a calm publishing process from manuscript to retail presence.",
    services: ["Line editing", "Interior typesetting", "Media kit", "Podcast outreach", "Reader email funnel"],
    results: ["#1 category launch", "180% site lift", "6 newsletter features", "27 verified reviews"]
  },
  {
    author: "Amanda Chen",
    role: "Business strategist",
    title: "Brand storytelling with measurable reach.",
    book: "Signal Scale",
    label: "Growth campaign",
    metric: "310% ROAS lift",
    image: "assets/strategy-desk.png",
    video: "assets/author-testimonial.png",
    a: "#ca9656",
    b: "#5c1f2d",
    summary: "A market-facing launch system built around search intent, AI citation readiness, paid conversion tests, and authority-building content.",
    services: ["SEO architecture", "GEO visibility", "Amazon & Meta ads", "Launch strategy", "Performance reporting"],
    results: ["310% ROAS lift", "43 AI citations", "28 ranking gains", "9k qualified leads"]
  }
];

const insights = [
  {
    tag: "Publishing",
    title: "What Makes a Book Truly Last",
    text: "A lasting book is built through craft, clarity, reader relevance, and a release system that honors the work.",
    date: "July 24, 2026",
    image: "assets/ref-publishing-excellence-img.png"
  },
  {
    tag: "Marketing",
    title: "Building Stories That Connect",
    text: "How author positioning, content rhythm, and proof signals help readers understand why the book matters now.",
    date: "July 18, 2026",
    image: "assets/strategy-desk.png"
  },
  {
    tag: "Growth",
    title: "The New Discovery Stack for Authors",
    text: "Search, AI citations, email, PR, and ads can work together when they are planned as one reader journey.",
    date: "July 9, 2026",
    image: "assets/ref-growth-marketing-performance-img.png"
  }
];

const faqs = [
  ["What services do you offer?", "Swift Book Marketing offers editorial support, cover and interior design, distribution guidance, PR, launch campaigns, SEO, GEO, paid ads, funnels, and author platform strategy."],
  ["Who do you typically work with?", "We work with independent authors, business leaders, experts, memoirists, and brands who want a polished book and a thoughtful route to readers."],
  ["What's your process like?", "We begin with a strategy conversation, map the publishing or marketing priorities, then build a phase-by-phase plan with clear deliverables and measurement points."],
  ["How long does a project usually take?", "Timelines vary by scope. A focused campaign may run for weeks, while full publishing and launch support usually runs across several months."],
  ["Do you offer one-time consultations?", "Yes. Authors can book a strategy session to diagnose positioning, publishing readiness, or the best next marketing move."],
  ["Can you support already published books?", "Yes. We often help authors relaunch, improve visibility, build funnels, earn PR, or refine paid campaigns after publication."],
  ["Do you guarantee book sales?", "No ethical partner should guarantee sales. We focus on strategy, execution, measurement, and the controllable signals that improve reader discovery and conversion."]
];

let activeCase = 0;

function setStage(progress) {
  const sceneReveal = smoothstep(0.08, 0.2, progress);
  const dock = smoothstep(0.24, 0.48, progress);
  const systemShift = smoothstep(0.52, 0.72, progress);
  const exitDrift = smoothstep(0.78, 0.96, progress);
  const introIn = smoothstep(0.1, 0.2, progress);
  const introOut = smoothstep(0.27, 0.36, progress);
  const journeyIn = smoothstep(0.38, 0.5, progress);
  const topbarOpacity = smoothstep(0.26, 0.38, progress);
  const dockY = window.innerWidth <= 720 ? 62 : 68;
  const dockX = window.innerWidth <= 720 ? 50 : 53.5;
  const markScale = mix(1.38, window.innerWidth <= 720 ? 0.46 : 0.4, dock);
  const spin = 270 + progress * 980;
  const sceneScale = mix(1.22, 1, sceneReveal) - systemShift * 0.08 + exitDrift * 0.03;
  const sceneY = mix(72, 0, sceneReveal) + mix(0, -54, systemShift) + mix(0, 34, exitDrift);
  const sceneX = mix(0, -7.5, systemShift) + mix(0, 4, exitDrift);
  const sceneRotate = mix(-2.5, 0.2, dock) + mix(0, 1.2, exitDrift);
  const introOpacity = introIn * (1 - introOut);

  root.style.setProperty("--stage-progress", progress.toFixed(4));
  root.style.setProperty("--mark-x", `${mix(50, dockX, dock).toFixed(2)}vw`);
  root.style.setProperty("--mark-y", `${mix(50, dockY, dock).toFixed(2)}vh`);
  root.style.setProperty("--mark-scale", markScale.toFixed(3));
  root.style.setProperty("--mark-spin", `${spin.toFixed(2)}deg`);
  root.style.setProperty("--scene-opacity", sceneReveal.toFixed(3));
  root.style.setProperty("--scene-x", `${sceneX.toFixed(2)}vw`);
  root.style.setProperty("--scene-y", `${sceneY.toFixed(2)}px`);
  root.style.setProperty("--scene-scale", sceneScale.toFixed(3));
  root.style.setProperty("--scene-rotate", `${sceneRotate.toFixed(2)}deg`);
  root.style.setProperty("--intro-opacity", introOpacity.toFixed(3));
  root.style.setProperty("--intro-scale", mix(0.96, 1, introIn).toFixed(3));
  root.style.setProperty("--journey-opacity", journeyIn.toFixed(3));
  root.style.setProperty("--journey-x", `${mix(42, 0, journeyIn).toFixed(2)}px`);
  root.style.setProperty("--topbar-opacity", topbarOpacity.toFixed(3));
  topbar.classList.toggle("is-visible", topbarOpacity > 0.5);

  const active = journeyChapters.reduce((current, chapter, index) => (progress >= chapter.at ? index : current), 0);
  const chapter = journeyChapters[active];
  kicker.textContent = chapter.kicker;
  title.textContent = chapter.title;
  text.textContent = chapter.text;
  railButtons.forEach((button, index) => button.classList.toggle("is-active", index === active));
}

function scrollProgress() {
  const top = journey.getBoundingClientRect().top + window.scrollY;
  const travel = Math.max(journey.offsetHeight - window.innerHeight, 1);
  return clamp((window.scrollY - top) / travel);
}

function jumpTo(ratio) {
  const top = journey.getBoundingClientRect().top + window.scrollY;
  const travel = Math.max(journey.offsetHeight - window.innerHeight, 1);
  window.scrollTo({ top: top + travel * ratio, behavior: "smooth" });
}

function renderProcessStack() {
  processStack.innerHTML = processStages
    .map(
      (stage, index) => `
        <article class="process-card reveal" style="--stack-index:${index}">
          <figure>
            <img src="${stage.image}" alt="">
          </figure>
          <div class="panel-copy">
            <span class="panel-index">${stage.number} / ${stage.name}</span>
            <h3>${stage.title}</h3>
            <p>${stage.text}</p>
            <p class="meta">${stage.meta}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderServiceList(target, items) {
  target.innerHTML = items
    .map(
      ([label, icon]) => `
        <li>
          <img src="${icon}" alt="">
          <span>${label}</span>
        </li>
      `
    )
    .join("");
}

function renderPortfolio() {
  portfolioGrid.innerHTML = portfolioCases
    .map(
      (item, index) => `
        <article class="portfolio-case reveal">
          <div class="author-card" style="--author-image: url('${item.image}')">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${item.author}</h3>
            <p>${item.role}</p>
          </div>
          <figure class="portfolio-video">
            <img src="${item.video}" alt="${item.author} author story video still">
            <button class="play-button" type="button" aria-label="Play ${item.author} story"><span></span></button>
            <figcaption>
              <span>Behind the story</span>
              <h3>${item.title}</h3>
            </figcaption>
          </figure>
          <div class="book-panel">
            <button type="button" data-case="${index}" aria-label="Open ${item.book} case study">
              <span class="portfolio-book" style="--book-a:${item.a};--book-b:${item.b}">
                <strong>${item.book}</strong>
                <small>${item.label}</small>
              </span>
            </button>
            <p>${item.metric}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderInsights() {
  insightGrid.innerHTML = insights
    .map(
      (item) => `
        <article class="insight-card reveal">
          <figure>
            <img src="${item.image}" alt="">
          </figure>
          <div>
            <span>${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <time>${item.date}</time>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFaqs() {
  faqList.innerHTML = faqs
    .map(
      ([question, answer], index) => `
        <article class="faq-item">
          <button class="faq-button" type="button" data-faq="${index}" aria-expanded="false">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${question}</strong>
            <em>+</em>
          </button>
          <p class="faq-answer">${answer}</p>
        </article>
      `
    )
    .join("");
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function openCase(index) {
  activeCase = (index + portfolioCases.length) % portfolioCases.length;
  const item = portfolioCases[activeCase];
  caseCover.style.setProperty("--book-a", item.a);
  caseCover.style.setProperty("--book-b", item.b);
  caseCover.innerHTML = `<strong>${item.book}</strong><small>${item.label}</small>`;
  caseTitle.textContent = item.title;
  caseSummary.textContent = item.summary;
  caseCount.textContent = `${String(activeCase + 1).padStart(2, "0")} / ${String(portfolioCases.length).padStart(2, "0")}`;
  caseVideoImage.src = item.video;
  caseVideoImage.alt = `${item.author} testimonial video still`;
  renderList(caseServices, item.services);
  renderList(caseResults, item.results);
  modal.hidden = false;
}

let ticking = false;
function requestUpdate() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    setStage(scrollProgress());
    ticking = false;
  });
}

document.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-jump]");
  if (jump) {
    event.preventDefault();
    jumpTo(Number(jump.dataset.jump));
    return;
  }

  const caseButton = event.target.closest("[data-case]");
  if (caseButton) {
    openCase(Number(caseButton.dataset.case));
    return;
  }

  const faq = event.target.closest("[data-faq]");
  if (faq) {
    const item = faq.closest(".faq-item");
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    faq.setAttribute("aria-expanded", String(open));
  }
});

signalToggle.addEventListener("click", () => {
  const next = signalToggle.getAttribute("aria-pressed") !== "true";
  signalToggle.setAttribute("aria-pressed", String(next));
  document.body.classList.toggle("signal-on", next);
});

document.querySelector(".case-close").addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.hidden = true;
});

document.querySelector("[data-case-prev]").addEventListener("click", () => openCase(activeCase - 1));
document.querySelector("[data-case-next]").addEventListener("click", () => openCase(activeCase + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.hidden = true;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.18 }
);

window.addEventListener("scroll", requestUpdate, { passive: true });
window.addEventListener("resize", requestUpdate);
window.addEventListener("load", requestUpdate);

renderProcessStack();
renderServiceList(publishingList, publishingServices);
renderServiceList(growthList, growthServices);
renderPortfolio();
renderInsights();
renderFaqs();
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
setStage(scrollProgress());
