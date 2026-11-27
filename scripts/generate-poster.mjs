import { existsSync, mkdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const outPng = resolve(repoRoot, 'entry.png');

const pwPath = process.env.PLAYWRIGHT_MODULE || resolve(process.env.USERPROFILE || '', '.gemini/antigravity/tools/node/node_modules/playwright');
const edgePath = process.env.EDGE_EXE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const chromePath = process.env.CHROME_EXE || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const executablePath = existsSync(edgePath) ? edgePath : chromePath;

const { chromium } = require(pwPath);

const hotspots = [
  { label: 'NYC', x: 102, y: 50, color: '#DC2626' },
  { label: 'CA',  x: 48,  y: 52, color: '#DC2626' },
  { label: 'MEX', x: 64,  y: 74, color: '#B91C1C' },
  { label: 'BOG', x: 96,  y: 92, color: '#B91C1C' },
  { label: 'BSB', x: 120, y: 112, color: '#B91C1C' },
  { label: 'BRU', x: 174, y: 34, color: '#1D4ED8' },
  { label: 'IBZ', x: 162, y: 51, color: '#1D4ED8' },
  { label: 'KYIV',x: 202, y: 42, color: '#4338CA' },
  { label: 'GULF',x: 218, y: 63, color: '#B45309' },
  { label: 'BIS', x: 150, y: 74, color: '#B45309' },
  { label: 'SDN', x: 199, y: 80, color: '#B45309' },
  { label: 'BKK', x: 274, y: 70, color: '#0F766E' },
  { label: 'PYG', x: 308, y: 50, color: '#0F766E' },
  { label: 'SYD', x: 318, y: 118, color: '#0F766E' }
];

const bottomCards = [
  {
    cat: 'US ECONOMY', src: 'GUARDIAN', color: '#DC2626', bg: '#1E293B',
    hed: 'TRUMP CALLS 3.4% GDP "FAKE"',
    desc: 'Slams pre-midterm BEA data after 4.3% Q3 revision; demands probe.',
    svg: `
      <rect width="241" height="50" fill="#1E293B"/>
      <rect x="14" y="21" width="38" height="22" rx="2" fill="#64748B"/>
      <text x="33" y="36" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">3.4%</text>
      <path d="M 57 31 L 73 23" stroke="#34D399" stroke-width="2"/>
      <polygon points="75,22 68,21 71,27" fill="#34D399"/>
      <rect x="78" y="11" width="40" height="32" rx="2" fill="#10B981"/>
      <text x="98" y="31" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="11" font-weight="700">4.3%</text>
      <rect x="130" y="10" width="99" height="30" rx="3" fill="#7F1D1D" stroke="#FCA5A5"/>
      <text x="179" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">Q3 BEA PROBE?</text>
      <text x="179" y="35" text-anchor="middle" fill="#FECACA" font-family="Segoe UI, Arial" font-size="8.2">Thanksgiving dispute</text>
    `
  },
  {
    cat: 'LATAM & QUAKE', src: 'BLOOMBERG', color: '#B91C1C', bg: '#271313',
    hed: 'MEXICO HITS DEA; M5.7 QUAKE',
    desc: 'Sheinbaum slams DEA tip lines & SpaceX debris; M5.7 off Baja.',
    svg: `
      <rect width="241" height="50" fill="#231215"/>
      <polyline points="10,27 28,27 36,12 44,41 52,8 60,44 68,18 76,33 84,27 110,27" fill="none" stroke="#F87171" stroke-width="2"/>
      <rect x="120" y="10" width="109" height="30" rx="3" fill="#450A0A" stroke="#F87171"/>
      <text x="174" y="23" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="11" font-weight="700">M5.7 BAJA · DEA ROW</text>
      <text x="174" y="35" text-anchor="middle" fill="#E2E8F0" font-family="Segoe UI, Arial" font-size="8.2">Revillagigedo &amp; airspace</text>
    `
  },
  {
    cat: 'EUROPE · UK', src: 'REUTERS · AP', color: '#1D4ED8', bg: '#0F2242',
    hed: 'TANKER SINKS; UK RESET BILL',
    desc: 'Med Emre (7,000t diesel) sinks off Ibiza (1 dead); LNER 14-count guilt.',
    svg: `
      <rect width="241" height="50" fill="#0F2242"/>
      <path d="M 18 32 L 76 20 L 82 28 L 28 39 Z" fill="#EF4444" stroke="#FFFFFF" stroke-width="1"/>
      <rect x="34" y="18" width="16" height="8" transform="rotate(-12 34 18)" fill="#E2E8F0"/>
      <path d="M 8 38 Q 30 33 52 38 T 96 38" fill="none" stroke="#38BDF8" stroke-width="2"/>
      <rect x="108" y="10" width="121" height="30" rx="3" fill="#172554" stroke="#60A5FA"/>
      <text x="168" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">7,000t DIESEL · IBIZA</text>
      <text x="168" y="35" text-anchor="middle" fill="#93C5FD" font-family="Segoe UI, Arial" font-size="8.2">16 rescued · 10-yr EU bill</text>
    `
  },
  {
    cat: 'BALKANS · MEDIA', src: 'AP · UNESCO', color: '#4338CA', bg: '#1E1B4B',
    hed: 'SERBIA DEC 27 VOTE; AI GUIDE',
    desc: 'Belgrade sets post-Vučić poll; UNESCO & WAN-IFRA launch AI rules.',
    svg: `
      <rect width="241" height="50" fill="#1E1B4B"/>
      <rect x="16" y="15" width="38" height="26" rx="2" fill="#E2E8F0" stroke="#94A3B8"/>
      <rect x="24" y="17" width="22" height="3" fill="#0F172A"/>
      <rect x="29" y="8" width="12" height="10" fill="#FACC15"/>
      <rect x="68" y="10" width="161" height="30" rx="3" fill="#312E81" stroke="#A5B4FC"/>
      <text x="148" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">POLL DEC 27 · AI BLUEPRINT</text>
      <text x="148" y="35" text-anchor="middle" fill="#C7D2FE" font-family="Segoe UI, Arial" font-size="8.2">Serbia vote + newsroom AI code</text>
    `
  },
  {
    cat: 'AFRICA · MIDEAST', src: 'STAR · AFP', color: '#B45309', bg: '#2B1806',
    hed: 'KENYA EBOLA HALT; IRAQ POSTS',
    desc: 'Court halts US Ebola hub; DRC Ituri; Iraq shuts 2 borders; Giza arrest.',
    svg: `
      <rect width="241" height="50" fill="#2B1806"/>
      <line x1="38" y1="12" x2="38" y2="39" stroke="#FBBF24" stroke-width="2"/>
      <line x1="20" y1="16" x2="56" y2="16" stroke="#FBBF24" stroke-width="2"/>
      <polygon points="20,16 14,30 26,30" fill="#F59E0B"/>
      <polygon points="56,16 50,30 62,30" fill="#F59E0B"/>
      <rect x="74" y="10" width="155" height="30" rx="3" fill="#451A03" stroke="#F59E0B"/>
      <text x="151" y="23" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">LAIKIPIA VOID · 2 BORDERS</text>
      <text x="151" y="35" text-anchor="middle" fill="#E7E5E4" font-family="Segoe UI, Arial" font-size="8.2">Giza crash arrest · Beirut 2 dead</text>
    `
  },
  {
    cat: 'CHINA & JAVA', src: 'AFP · CP24', color: '#0F766E', bg: '#042F2E',
    hed: 'CHINA GOLF BAN; BOGOR MINE 16',
    desc: 'Beijing anti-graft shuts golf clubs; 16 dead in Bogor mine; Li–ADB.',
    svg: `
      <rect width="241" height="50" fill="#042F2E"/>
      <line x1="32" y1="10" x2="32" y2="41" stroke="#E2E8F0" stroke-width="2"/>
      <polygon points="32,10 52,17 32,24" fill="#EF4444"/>
      <line x1="20" y1="36" x2="48" y2="14" stroke="#FACC15" stroke-width="2"/>
      <rect x="68" y="10" width="161" height="30" rx="3" fill="#134E4A" stroke="#5EEAD4"/>
      <text x="148" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">GOLF CLUBS SHUT · BOGOR 16</text>
      <text x="148" y="35" text-anchor="middle" fill="#CCFBF1" font-family="Segoe UI, Arial" font-size="8.2">10 missing Java · Li meets ADB</text>
    `
  },
  {
    cat: 'CYBER & CRYPTO', src: 'C.MAIL · C.BRIEF', color: '#6D28D9', bg: '#241145',
    hed: 'FIFA 12GB BREACH; BINANCE PAYS',
    desc: 'Hackers leak <0.1% FIFA files; Binance reopens transfers; Batumi halt.',
    svg: `
      <rect width="241" height="50" fill="#241145"/>
      <rect x="18" y="20" width="28" height="21" rx="3" fill="#A855F7" stroke="#F3E8FF"/>
      <path d="M 24 20 L 24 14 A 8 8 0 0 1 40 14 L 40 20" fill="none" stroke="#FACC15" stroke-width="2.2"/>
      <rect x="60" y="10" width="169" height="30" rx="3" fill="#3B0764" stroke="#C084FC"/>
      <text x="144" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">12 GB LEAK · WITHDRAWALS ON</text>
      <text x="144" y="35" text-anchor="middle" fill="#E9D5FF" font-family="Segoe UI, Arial" font-size="8.2">Post-$6.3B hack · UEFA suspended</text>
    `
  },
  {
    cat: 'OCEANIA & TECH', src: 'GOV.AU · TC', color: '#0369A1', bg: '#082F49',
    hed: 'AU DIGITAL BILL; FLIPKART CEO',
    desc: 'Australia fines up to 5% turnover; Krishnamurthy exits; Canada $52M AI.',
    svg: `
      <rect width="241" height="50" fill="#082F49"/>
      <path d="M 32 10 L 48 16 L 45 33 L 32 41 L 19 33 L 16 16 Z" fill="#0284C7" stroke="#7DD3FC" stroke-width="1.5"/>
      <text x="32" y="29" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">5%</text>
      <rect x="62" y="10" width="167" height="30" rx="3" fill="#0C4A6E" stroke="#38BDF8"/>
      <text x="145" y="23" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">DUTY OF CARE · CWC HAGUE</text>
      <text x="145" y="35" text-anchor="middle" fill="#BAE6FD" font-family="Segoe UI, Arial" font-size="8.2">Flipkart exit Dec 4 · CA $52M AI</text>
    `
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF6EE;
    color: #0F172A;
    font-family: "Segoe UI", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: #FAF6EE;
  }
  /* MASTHEAD */
  .masthead {
    height: 74px;
    background: #0F172A;
    color: #FAF6EE;
    border-radius: 5px;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #DC2626;
  }
  .mast-left { display: flex; flex-direction: column; justify-content: center; gap: 3px; }
  .mast-top-row { display: flex; align-items: center; gap: 8px; }
  .day-pill {
    background: #DC2626;
    color: #FFFFFF;
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-weight: 700;
    font-size: 11.5px;
    letter-spacing: 0.9px;
    padding: 2px 8px;
    border-radius: 3px;
  }
  .kicker {
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-size: 11.2px;
    letter-spacing: 1.3px;
    color: #CBD5E1;
    font-weight: 600;
  }
  .mast-title {
    font-family: "Georgia", serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 1;
    letter-spacing: 0.4px;
    color: #FFFFFF;
  }
  .mast-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
  }
  .edition-badge {
    background: #1E293B;
    border: 1px solid #475569;
    color: #FBBF24;
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.6px;
    padding: 4px 10px;
    border-radius: 4px;
  }
  .date-verify-row {
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-size: 10.6px;
    color: #CBD5E1;
    letter-spacing: 0.4px;
  }
  .date-verify-row strong { color: #34D399; }

  /* ROW 1: 3 FLAGSHIP LEAD SCENES (232px) */
  .tier1 {
    height: 232px;
    display: grid;
    grid-template-columns: repeat(3, 328px);
    gap: 8px;
  }
  .lead-card {
    height: 232px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .lead-art {
    width: 100%;
    height: 128px;
    display: block;
    flex-shrink: 0;
  }
  .lead-body {
    padding: 6px 9px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex: 1;
    min-height: 0;
  }
  .lead-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .cat-tag { color: #FFFFFF; padding: 1px 6px; border-radius: 2px; }
  .src-tag {
    color: #334155;
    background: #F1F5F9;
    border: 1px solid #CBD5E1;
    padding: 1px 5px;
    border-radius: 2px;
    font-size: 8.5px;
    font-weight: 700;
  }
  .lead-hed {
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-weight: 700;
    font-size: 13.8px;
    line-height: 1.14;
    color: #0F172A;
  }
  .lead-desc {
    font-size: 10.6px;
    line-height: 1.24;
    color: #1E293B;
    font-weight: 500;
  }

  /* ROW 2: MAP + CHARTS + 7 PICTORIAL SPOTLIGHTS (326px) */
  .tier2 {
    height: 326px;
    display: grid;
    grid-template-columns: 360px 318px 310px;
    gap: 6px;
  }
  .col-stack {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 326px;
  }
  .panel-box {
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .panel-hdr {
    height: 20px;
    background: #1E293B;
    color: #FFFFFF;
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.6px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .panel-hdr span.sub { color: #FBBF24; font-size: 9.5px; }
  .map-svg { width: 100%; height: 176px; display: block; background: #DCE9F5; }

  .mini-pair {
    height: 122px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }
  .mini-vignette {
    height: 122px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .mini-art { width: 100%; height: 54px; display: block; flex-shrink: 0; }
  .mini-body {
    padding: 4px 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }
  .mini-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift", sans-serif;
    font-size: 8.5px;
    font-weight: 700;
  }
  .mini-hed {
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 11.4px;
    line-height: 1.12;
    color: #0F172A;
  }
  .mini-desc {
    font-size: 9.5px;
    line-height: 1.18;
    color: #1E293B;
  }

  /* Center Charts */
  .charts-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 8px;
  }
  .chart-block { display: flex; flex-direction: column; gap: 2px; }
  .chart-title {
    font-family: "Bahnschrift", sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #0F172A;
    display: flex;
    justify-content: space-between;
  }
  .comm-strip {
    background: #0F172A;
    color: #F8FAFC;
    border-radius: 3px;
    padding: 3.5px 7px;
    display: flex;
    justify-content: space-between;
    font-family: "Bahnschrift", sans-serif;
    font-size: 9.6px;
    font-weight: 700;
  }
  .comm-up { color: #34D399; }
  .comm-dn { color: #F87171; }
  .comm-hol { color: #FBBF24; }

  /* Right 3 Large Regional Vignettes */
  .spot-col {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 326px;
  }
  .spot-card {
    height: 104.6px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    padding: 5px 7px;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  }
  .spot-icon {
    width: 80px;
    height: 86px;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .spot-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }
  .spot-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift", sans-serif;
    font-size: 8.8px;
    font-weight: 700;
  }
  .spot-hed {
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.12;
    color: #0F172A;
  }
  .spot-desc {
    font-size: 9.8px;
    line-height: 1.18;
    color: #1E293B;
  }

  /* ROW 3: 8 PICTORIAL DISPATCH CARDS (300px) */
  .tier3 {
    height: 300px;
    display: grid;
    grid-template-columns: repeat(4, 244px);
    grid-template-rows: repeat(2, 147px);
    gap: 6px 8px;
  }
  .pic-card {
    height: 147px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .pic-art { width: 100%; height: 50px; display: block; flex-shrink: 0; }
  .pic-body {
    padding: 4px 7px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }
  .pic-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift", sans-serif;
    font-size: 8.6px;
    font-weight: 700;
  }
  .pic-hed {
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 11.8px;
    line-height: 1.14;
    color: #0F172A;
  }
  .pic-desc {
    font-size: 10px;
    line-height: 1.2;
    color: #1E293B;
  }

  /* ROW 4: UTC TIMELINE (54px) */
  .tier4 {
    height: 54px;
    background: #0F172A;
    color: #F8FAFC;
    border-radius: 5px;
    padding: 5px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 2px solid #F59E0B;
  }
  .tl-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift", sans-serif;
    font-size: 9.8px;
    letter-spacing: 0.5px;
  }
  .tl-label { color: #FBBF24; font-weight: 700; }
  .tl-verify { color: #34D399; font-weight: 700; }
  .tl-track {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
    align-items: center;
  }
  .tl-node {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 9px;
    line-height: 1.15;
  }
  .tl-time {
    background: #1E293B;
    border: 1px solid #38BDF8;
    color: #38BDF8;
    font-family: "Consolas", monospace;
    font-weight: 700;
    font-size: 8.4px;
    padding: 1px 3px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .tl-evt { color: #E2E8F0; font-weight: 600; white-space: nowrap; }
</style>
</head>
<body>
<div class="page">
  <!-- MASTHEAD -->
  <header class="masthead">
    <div class="mast-left">
      <div class="mast-top-row">
        <span class="day-pill">THURSDAY</span>
        <span class="kicker">PICTORIAL WORLD EDITION · THE WORLD IN ONE DAY · 00:00–23:59 UTC</span>
      </div>
      <div class="mast-title">26 NOVEMBER 2026</div>
    </div>
    <div class="mast-right">
      <div class="edition-badge">15 ILLUSTRATED SCENES · 9 REGIONS · ALL SOURCED</div>
      <div class="date-verify-row"><strong>DATE CHECKED: 26 NOV 2026</strong> · HOTSPOT MAP, MARKET CHARTS &amp; 24H CHRONOLOGY</div>
    </div>
  </header>

  <!-- ROW 1: 3 FLAGSHIP LEAD SCENES -->
  <section class="tier1">
    <!-- LEAD 1: MACY'S + CA KING TIDES -->
    <article class="lead-card" style="border-top: 3px solid #DC2626;">
      <svg class="lead-art" viewBox="0 0 328 128" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#1E3A5F"/>
          </linearGradient>
        </defs>
        <rect width="328" height="128" fill="url(#sky1)"/>
        <!-- Left: NYC Storm + Tilted Parade Balloon -->
        <rect x="10" y="76" width="16" height="52" fill="#1E293B"/>
        <rect x="30" y="56" width="20" height="72" fill="#0F172A"/>
        <rect x="54" y="64" width="18" height="64" fill="#1E293B"/>
        <rect x="76" y="46" width="16" height="82" fill="#334155"/>
        <rect x="96" y="68" width="22" height="60" fill="#1E293B"/>
        <line x1="10" y1="18" x2="54" y2="29" stroke="#60A5FA" stroke-width="1.6" stroke-dasharray="6,3"/>
        <line x1="18" y1="30" x2="72" y2="43" stroke="#93C5FD" stroke-width="1.6" stroke-dasharray="8,4"/>
        <ellipse cx="86" cy="38" rx="25" ry="13" transform="rotate(-18 86 38)" fill="#F59E0B" stroke="#FEF3C7" stroke-width="1.5"/>
        <circle cx="109" cy="30" r="7" fill="#EF4444" stroke="#FEF3C7" stroke-width="1.2"/>
        <line x1="75" y1="50" x2="58" y2="116" stroke="#FCA5A5" stroke-width="1.2" stroke-dasharray="3,2"/>
        <line x1="94" y1="49" x2="84" y2="116" stroke="#FCA5A5" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Right Callouts + Pacifica Pier Wave -->
        <rect x="148" y="9" width="170" height="25" rx="3" fill="#DC2626"/>
        <text x="233" y="25" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="11.2" font-weight="700">100TH PARADE → SAT NOV 28</text>
        <rect x="148" y="40" width="170" height="33" rx="3" fill="#0F172A" stroke="#38BDF8"/>
        <text x="233" y="54" text-anchor="middle" fill="#38BDF8" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">&gt;50 MPH NOR'EASTER · NJ EMERG.</text>
        <text x="233" y="67" text-anchor="middle" fill="#E2E8F0" font-family="Segoe UI, Arial" font-size="8.6">1st non-WWII delay · Flight &amp; power cuts</text>
        <rect x="148" y="79" width="170" height="40" rx="3" fill="#172554" stroke="#60A5FA"/>
        <path d="M 152 114 Q 170 100 188 112 T 224 110" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <text x="238" y="94" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">CA KING TIDES: PIER WRECKED</text>
        <text x="238" y="109" text-anchor="middle" fill="#E2E8F0" font-family="Segoe UI, Arial" font-size="8.6">Pacifica Pier &amp; SD–SF flood</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#DC2626;">US COASTAL STORMS</span>
          <span class="src-tag">AP · LA TIMES</span>
        </div>
        <div class="lead-hed">MACY'S 100TH DELAYED; CA KING TIDES</div>
        <div class="lead-desc">Nor'easter &gt;50 mph gusts force 1st non-WWII parade delay to Sat Nov 28 as NJ declares emergency &amp; Pacific swells wreck Pacifica Pier.</div>
      </div>
    </article>

    <!-- LEAD 2: ECB & BRUSSELS SUMMIT -->
    <article class="lead-card" style="border-top: 3px solid #1D4ED8;">
      <svg class="lead-art" viewBox="0 0 328 128" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0C1E42"/>
            <stop offset="100%" stop-color="#1E3A8A"/>
          </linearGradient>
        </defs>
        <rect width="328" height="128" fill="url(#sky2)"/>
        <circle cx="54" cy="64" r="38" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="2,3"/>
        ${Array.from({length:12}).map((_, i) => {
          const ang = (i * 30) * Math.PI / 180;
          const cx = (54 + 36 * Math.cos(ang)).toFixed(1);
          const cy = (64 + 36 * Math.sin(ang)).toFixed(1);
          return `<circle cx="${cx}" cy="${cy}" r="2.6" fill="#FACC15"/>`;
        }).join('')}
        <polygon points="54,40 32,53 76,53" fill="#F8FAFC"/>
        <rect x="36" y="55" width="6" height="24" fill="#E2E8F0"/>
        <rect x="46" y="55" width="6" height="24" fill="#E2E8F0"/>
        <rect x="56" y="55" width="6" height="24" fill="#E2E8F0"/>
        <rect x="66" y="55" width="6" height="24" fill="#E2E8F0"/>
        <rect x="31" y="81" width="46" height="5" fill="#FACC15"/>
        <rect x="104" y="10" width="214" height="36" rx="3" fill="#0F172A" stroke="#FACC15" stroke-width="1.2"/>
        <text x="211" y="25" text-anchor="middle" fill="#FACC15" font-family="Bahnschrift, Arial" font-size="11.2" font-weight="700">ECB PICK: P. HERNÁNDEZ DE COS</text>
        <text x="211" y="38" text-anchor="middle" fill="#CBD5E1" font-family="Segoe UI, Arial" font-size="8.6">Succeeds Lagarde Feb '27 · Boone &amp; Brunnermeier</text>
        <rect x="104" y="53" width="104" height="65" rx="3" fill="#172554" stroke="#60A5FA"/>
        <text x="156" y="69" text-anchor="middle" fill="#93C5FD" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">2028–34 BUDGET</text>
        <text x="156" y="90" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="17" font-weight="700">€1.58T</text>
        <text x="156" y="107" text-anchor="middle" fill="#CBD5E1" font-family="Segoe UI, Arial" font-size="8.5">$1.76T · ECB hike risk</text>
        <rect x="214" y="53" width="104" height="65" rx="3" fill="#172554" stroke="#F87171"/>
        <text x="266" y="69" text-anchor="middle" fill="#FCA5A5" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">UKRAINE LOAN</text>
        <text x="266" y="90" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="17" font-weight="700">€45B</text>
        <text x="266" y="107" text-anchor="middle" fill="#FDE047" font-family="Segoe UI, Arial" font-size="8.5">Deferred Dec 17–18</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#1D4ED8;">EUROPE · BRUSSELS &amp; ECB</span>
          <span class="src-tag">FT · EUROPA</span>
        </div>
        <div class="lead-hed">DE COS FOR ECB; €1.58T BUDGET STALLS</div>
        <div class="lead-desc">EU leaders tap Spain's Hernández de Cos to lead ECB; summit defers 7-yr budget &amp; €45B Ukraine loan to Dec as ECB minutes signal hike risk.</div>
      </div>
    </article>

    <!-- LEAD 3: MIDEAST FLASHPOINT -->
    <article class="lead-card" style="border-top: 3px solid #B45309;">
      <svg class="lead-art" viewBox="0 0 328 128" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E1B2E"/>
            <stop offset="100%" stop-color="#451A03"/>
          </linearGradient>
        </defs>
        <rect width="328" height="128" fill="url(#sky3)"/>
        <path d="M 14 110 A 54 54 0 0 1 122 110" fill="none" stroke="#F59E0B" stroke-width="1.2" stroke-opacity="0.5"/>
        <path d="M 32 110 A 36 36 0 0 1 104 110" fill="none" stroke="#F59E0B" stroke-width="1.2" stroke-opacity="0.75"/>
        <line x1="68" y1="110" x2="96" y2="38" stroke="#34D399" stroke-width="1.8" stroke-dasharray="3,2"/>
        <polygon points="96,29 105,38 96,47 87,38" fill="#EF4444" stroke="#FEF08A" stroke-width="1.4"/>
        <path d="M 22 22 L 92 36" stroke="#F87171" stroke-width="2" stroke-dasharray="4,3"/>
        <circle cx="68" cy="110" r="5.5" fill="#F59E0B"/>
        <rect x="130" y="10" width="188" height="36" rx="3" fill="#7F1D1D" stroke="#FCA5A5" stroke-width="1.1"/>
        <text x="224" y="25" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="11.2" font-weight="700">KUWAIT: 2 ITALIANS KILLED</text>
        <text x="224" y="38" text-anchor="middle" fill="#FECACA" font-family="Segoe UI, Arial" font-size="8.6">Rheinmetall debris hit · Iran denies role</text>
        <rect x="130" y="53" width="91" height="65" rx="3" fill="#1C1917" stroke="#F59E0B"/>
        <text x="175" y="69" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">GAZA STRIKES</text>
        <text x="175" y="90" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="17" font-weight="700">10+ DEAD</text>
        <text x="175" y="107" text-anchor="middle" fill="#D6D3D1" font-family="Segoe UI, Arial" font-size="8.5">Katz warns 1M push</text>
        <rect x="227" y="53" width="91" height="65" rx="3" fill="#1C1917" stroke="#38BDF8"/>
        <text x="272" y="69" text-anchor="middle" fill="#7DD3FC" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">YEMEN RAIDS</text>
        <text x="272" y="90" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="17" font-weight="700">50 SITES</text>
        <text x="272" y="107" text-anchor="middle" fill="#D6D3D1" font-family="Segoe UI, Arial" font-size="8.5">Saudi hits Houthis</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#B45309;">MIDDLE EAST · GULF &amp; GAZA</span>
          <span class="src-tag">BBC · CNN · AA</span>
        </div>
        <div class="lead-hed">KUWAIT DRONE KILLS 2; GAZA &amp; YEMEN HIT</div>
        <div class="lead-desc">Drone debris kills 2 Italian Rheinmetall workers in Kuwait; Israeli Gaza strikes kill Hamas education official; Saudi hits 50 Houthi targets.</div>
      </div>
    </article>
  </section>

  <!-- ROW 2: MAP + CHARTS + 7 ILLUSTRATED SPOTLIGHTS -->
  <section class="tier2">
    <!-- LEFT: WORLD MAP + ISS + SPACEX -->
    <div class="col-stack">
      <div class="panel-box" style="height: 198px;">
        <div class="panel-hdr">
          <span>WORLD HOTSPOTS · 26 NOV 2026</span>
          <span class="sub">14 REGIONS</span>
        </div>
        <svg class="map-svg" viewBox="0 0 360 176" xmlns="http://www.w3.org/2000/svg">
          <rect width="360" height="176" fill="#DCE9F5"/>
          <line x1="0" y1="88" x2="360" y2="88" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="3,3"/>
          <line x1="180" y1="0" x2="180" y2="176" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="3,3"/>
          <!-- North America -->
          <path d="M 22 30 L 56 22 L 94 25 L 114 38 L 110 56 L 92 70 L 76 78 L 66 90 L 54 84 L 46 64 L 28 50 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Greenland -->
          <path d="M 116 10 L 146 10 L 138 28 L 122 28 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
          <!-- South America -->
          <path d="M 84 92 L 112 94 L 136 112 L 122 142 L 104 156 L 94 134 L 84 114 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- UK -->
          <path d="M 154 38 L 161 36 L 162 47 L 154 47 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
          <!-- Europe -->
          <path d="M 164 31 L 186 22 L 210 24 L 218 45 L 204 59 L 184 58 L 176 64 L 160 62 L 164 49 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Africa -->
          <path d="M 152 70 L 198 70 L 214 86 L 222 92 L 208 128 L 191 146 L 176 122 L 168 96 L 150 92 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Middle East -->
          <path d="M 208 60 L 236 62 L 242 78 L 224 85 L 210 74 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
          <!-- Asia -->
          <path d="M 218 22 L 322 24 L 340 44 L 316 68 L 290 88 L 268 94 L 256 92 L 244 74 L 222 60 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Japan -->
          <path d="M 326 52 L 334 48 L 332 62 L 324 64 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
          <!-- Indonesia -->
          <rect x="272" y="98" width="28" height="7" rx="2" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
          <!-- Australia -->
          <path d="M 294 112 L 336 112 L 340 138 L 306 144 L 290 128 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Orbit Track -->
          <path d="M 218 14 Q 286 4 352 18" fill="none" stroke="#6D28D9" stroke-width="1.5" stroke-dasharray="3,2"/>
          <rect x="234" y="4" width="120" height="15" rx="3" fill="#4C1D95"/>
          <text x="294" y="14.5" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="8.6" font-weight="700">ORBIT: ISS + 1M SATS</text>
          ${hotspots.map(h => `
            <rect x="${h.x - 13}" y="${h.y - 7}" width="26" height="14" rx="3" fill="${h.color}" stroke="#FFFFFF" stroke-width="1.1"/>
            <text x="${h.x}" y="${h.y + 3}" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="8" font-weight="700">${h.label}</text>
          `).join('')}
          <rect x="8" y="156" width="344" height="15" rx="3" fill="#0F172A" fill-opacity="0.88"/>
          <text x="180" y="166.5" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="8.4" font-weight="700">ALL 14 DATELINES VERIFIED ON THURSDAY 26 NOVEMBER 2026</text>
        </svg>
      </div>
      <div class="mini-pair">
        <div class="mini-vignette">
          <svg class="mini-art" viewBox="0 0 177 54" xmlns="http://www.w3.org/2000/svg">
            <rect width="177" height="54" fill="#0F172A"/>
            <rect x="18" y="14" width="14" height="26" fill="#2563EB" stroke="#93C5FD"/>
            <rect x="52" y="14" width="14" height="26" fill="#2563EB" stroke="#93C5FD"/>
            <rect x="34" y="23" width="16" height="8" fill="#E2E8F0"/>
            <rect x="39" y="33" width="6" height="12" fill="#F59E0B"/>
            <rect x="76" y="10" width="91" height="34" rx="3" fill="#1E293B" stroke="#38BDF8"/>
            <text x="121" y="24" text-anchor="middle" fill="#38BDF8" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">ISS DOCKING</text>
            <text x="121" y="37" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="8.5">3t + Teledroid</text>
          </svg>
          <div class="mini-body">
            <div class="mini-top"><span style="color:#1D4ED8;">ORBIT</span><span class="src-tag">NASA</span></div>
            <div class="mini-hed">PROGRESS 97 DOCKS AT ISS</div>
            <div class="mini-desc">Delivers 3 tons &amp; AI robot to Exp. 75.</div>
          </div>
        </div>
        <div class="mini-vignette">
          <svg class="mini-art" viewBox="0 0 177 54" xmlns="http://www.w3.org/2000/svg">
            <rect width="177" height="54" fill="#1E1B4B"/>
            <circle cx="38" cy="27" r="11" fill="#2563EB"/>
            <ellipse cx="38" cy="27" rx="26" ry="9" transform="rotate(-22 38 27)" fill="none" stroke="#38BDF8" stroke-width="1.6"/>
            <circle cx="58" cy="18" r="2.8" fill="#FACC15"/>
            <circle cx="16" cy="36" r="2.8" fill="#FACC15"/>
            <rect x="76" y="10" width="91" height="34" rx="3" fill="#312E81" stroke="#A5B4FC"/>
            <text x="121" y="24" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">1,000,000 SATS</text>
            <text x="121" y="37" text-anchor="middle" fill="#E0E7FF" font-family="Segoe UI, Arial" font-size="8.5">Orbital AI center</text>
          </svg>
          <div class="mini-body">
            <div class="mini-top"><span style="color:#6D28D9;">SPACE / AI</span><span class="src-tag">AFP</span></div>
            <div class="mini-hed">FCC CLEARS 1M STARMIND</div>
            <div class="mini-desc">SpaceX wins orbital data license.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTER: MARKETS + MIGRATION + NVIDIA + NFL -->
    <div class="col-stack">
      <div class="panel-box" style="height: 198px;">
        <div class="panel-hdr">
          <span>MARKETS &amp; UK MIGRATION · 26 NOV</span>
          <span class="sub">LIVE DATA</span>
        </div>
        <div class="charts-wrap">
          <div class="chart-block">
            <div class="chart-title">
              <span>EQUITIES REBOUND (US HOLIDAY)</span>
              <span style="color:#059669;">BOK 3.25% (+25bp)</span>
            </div>
            <svg width="100%" height="58" viewBox="0 0 298 58" xmlns="http://www.w3.org/2000/svg">
              ${[
                { name: 'TAIEX', pct: '+2.50%', val: '39,152', w: 144, y: 1, c: '#059669' },
                { name: 'STOXX 600', pct: '+1.60%', val: 'Tech/Bnk', w: 94, y: 15, c: '#10B981' },
                { name: 'NIKKEI', pct: '+0.86%', val: '57,499', w: 52, y: 29, c: '#34D399' },
                { name: 'KOSPI', pct: '+0.29%', val: '4,711', w: 22, y: 43, c: '#0D9488' }
              ].map(b => `
                <text x="0" y="${b.y + 10}" fill="#0F172A" font-family="Bahnschrift, Arial" font-size="9.8" font-weight="700">${b.name}</text>
                <rect x="64" y="${b.y + 1}" width="150" height="10.5" rx="2" fill="#F1F5F9"/>
                <rect x="64" y="${b.y + 1}" width="${b.w}" height="10.5" rx="2" fill="${b.c}"/>
                <text x="220" y="${b.y + 10}" fill="#047857" font-family="Consolas, monospace" font-size="9.6" font-weight="700">${b.pct}</text>
                <text x="297" y="${b.y + 10}" text-anchor="end" fill="#475569" font-family="Segoe UI, Arial" font-size="8.4">${b.val}</text>
              `).join('')}
            </svg>
          </div>
          <div class="comm-strip">
            <span>BRENT <span class="comm-up">$95.58 ▲1.2%</span></span>
            <span>GOLD <span class="comm-dn">$3,570 ▼0.8%</span></span>
            <span>ECB <span class="comm-hol">HIKE RISK</span></span>
          </div>
          <div class="chart-block">
            <div class="chart-title">
              <span>UK NET MIGRATION (ONS · 26 NOV)</span>
              <span style="color:#B91C1C;">-62% YoY</span>
            </div>
            <svg width="100%" height="58" viewBox="0 0 298 58" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="298" height="58" rx="3" fill="#F8FAFC" stroke="#E2E8F0"/>
              <rect x="14" y="8" width="44" height="36" rx="2" fill="#94A3B8"/>
              <text x="36" y="26" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.8" font-weight="700">944k</text>
              <text x="36" y="54" text-anchor="middle" fill="#334155" font-family="Bahnschrift, Arial" font-size="8.4" font-weight="700">Mar '23</text>
              <rect x="84" y="30" width="44" height="14" rx="2" fill="#3B82F6"/>
              <text x="106" y="27" text-anchor="middle" fill="#1D4ED8" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">204k</text>
              <text x="106" y="54" text-anchor="middle" fill="#334155" font-family="Bahnschrift, Arial" font-size="8.4" font-weight="700">Jun '25</text>
              <rect x="154" y="37" width="44" height="7" rx="2" fill="#DC2626"/>
              <text x="176" y="34" text-anchor="middle" fill="#B91C1C" font-family="Bahnschrift, Arial" font-size="11" font-weight="700">77k</text>
              <text x="176" y="54" text-anchor="middle" fill="#B91C1C" font-family="Bahnschrift, Arial" font-size="8.4" font-weight="700">Jun '26</text>
              <path d="M 62 10 Q 120 7 174 22" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3,2"/>
              <polygon points="176,23 169,22 173,17" fill="#DC2626"/>
              <text x="248" y="22" text-anchor="middle" fill="#0F172A" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">&gt;90% DROP</text>
              <text x="248" y="35" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="8.5">from '23 peak</text>
              <text x="248" y="46" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="8.5">ONS release</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="mini-pair">
        <div class="mini-vignette">
          <svg class="mini-art" viewBox="0 0 156 54" xmlns="http://www.w3.org/2000/svg">
            <rect width="156" height="54" fill="#042F2E"/>
            <rect x="14" y="12" width="28" height="28" rx="3" fill="#0D9488" stroke="#5EEAD4"/>
            <text x="28" y="30" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">GPU</text>
            <circle cx="42" cy="14" r="7" fill="#DC2626"/>
            <line x1="38" y1="14" x2="46" y2="14" stroke="#FFFFFF" stroke-width="2"/>
            <rect x="56" y="10" width="90" height="34" rx="3" fill="#134E4A" stroke="#5EEAD4"/>
            <text x="101" y="24" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">SE ASIA FREEZE</text>
            <text x="101" y="37" text-anchor="middle" fill="#CCFBF1" font-family="Segoe UI, Arial" font-size="8.4">SG · MY · TH · ID</text>
          </svg>
          <div class="mini-body">
            <div class="mini-top"><span style="color:#0F766E;">AI CHIPS</span><span class="src-tag">TC</span></div>
            <div class="mini-hed">NVIDIA HALTS SE ASIA</div>
            <div class="mini-desc">Pauses AI server shipments to 4 nations.</div>
          </div>
        </div>
        <div class="mini-vignette">
          <svg class="mini-art" viewBox="0 0 156 54" xmlns="http://www.w3.org/2000/svg">
            <rect width="156" height="54" fill="#14532D"/>
            <path d="M 18 11 L 18 28 L 40 28 L 40 11 M 29 28 L 29 44" fill="none" stroke="#FACC15" stroke-width="2.4"/>
            <rect x="52" y="10" width="94" height="34" rx="3" fill="#0F172A" stroke="#FACC15"/>
            <text x="99" y="25" text-anchor="middle" fill="#FDE047" font-family="Consolas, monospace" font-size="12.5" font-weight="700">39 – 35</text>
            <text x="99" y="38" text-anchor="middle" fill="#38BDF8" font-family="Consolas, monospace" font-size="9" font-weight="700">0:03 TD · CHI 9–2</text>
          </svg>
          <div class="mini-body">
            <div class="mini-top"><span style="color:#B91C1C;">NFL</span><span class="src-tag">CBS</span></div>
            <div class="mini-hed">BEARS STUN LIONS 39–35</div>
            <div class="mini-desc">Williams–Odunze TD with 3s left.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT: 3 STACKED REGIONAL PICTORIAL VIGNETTES -->
    <div class="spot-col">
      <div class="spot-card" style="border-left: 4px solid #4338CA;">
        <svg class="spot-icon" viewBox="0 0 82 88" xmlns="http://www.w3.org/2000/svg">
          <rect width="82" height="88" rx="4" fill="#1E1B4B"/>
          <polygon points="41,10 25,52 57,52" fill="none" stroke="#93C5FD" stroke-width="1.8"/>
          <line x1="20" y1="24" x2="62" y2="24" stroke="#93C5FD" stroke-width="1.8"/>
          <line x1="16" y1="38" x2="66" y2="38" stroke="#93C5FD" stroke-width="1.8"/>
          <rect x="8" y="56" width="66" height="24" rx="3" fill="#312E81" stroke="#FACC15"/>
          <text x="41" y="67" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">$10B LUKOIL</text>
          <text x="41" y="77" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="7.8">ZNPP 28th out</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top"><span style="color:#4338CA;">RUSSIA &amp; UKRAINE</span><span class="src-tag">BBC · IAEA · AP</span></div>
          <div class="spot-hed">GRID ALERT, ZNPP TRUCE &amp; LUKOIL</div>
          <div class="spot-desc">Zelenskyy warns of power hits &amp; Patriot lag; IAEA seeks 9th truce; Eldridge buys Lukoil; Trump–Rutte warn Moscow.</div>
        </div>
      </div>

      <div class="spot-card" style="border-left: 4px solid #0F766E;">
        <svg class="spot-icon" viewBox="0 0 82 88" xmlns="http://www.w3.org/2000/svg">
          <rect width="82" height="88" rx="4" fill="#042F2E"/>
          <rect x="16" y="30" width="22" height="24" rx="2" fill="#475569" stroke="#CBD5E1"/>
          <rect x="44" y="30" width="22" height="24" rx="2" fill="#475569" stroke="#CBD5E1"/>
          <path d="M 27 30 Q 22 14 34 10 Q 38 22 27 30 Z" fill="#F97316"/>
          <path d="M 54 28 Q 48 12 60 8 Q 64 20 54 28 Z" fill="#EF4444"/>
          <rect x="8" y="56" width="66" height="24" rx="3" fill="#7F1D1D" stroke="#FCA5A5"/>
          <text x="41" y="67" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">48H EXPULSION</text>
          <text x="41" y="77" text-anchor="middle" fill="#FECACA" font-family="Segoe UI, Arial" font-size="7.8">400 plants shut</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top"><span style="color:#0F766E;">ASIA FLASHPOINTS</span><span class="src-tag">AP · NK NEWS · TBS</span></div>
          <div class="spot-hed">BANGKOK FIRE; DPRK OUSTS SWISS</div>
          <div class="spot-desc">Bangchak refinery blast hurts 9; N. Korea gives Swiss envoy 48h to leave; 400 Dhaka garment plants shut in wage clash.</div>
        </div>
      </div>

      <div class="spot-card" style="border-left: 4px solid #B45309;">
        <svg class="spot-icon" viewBox="0 0 82 88" xmlns="http://www.w3.org/2000/svg">
          <rect width="82" height="88" rx="4" fill="#271406"/>
          <rect x="20" y="14" width="42" height="32" rx="3" fill="#78350F" stroke="#FBBF24"/>
          <text x="41" y="34" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="13" font-weight="700">2028</text>
          <rect x="8" y="56" width="66" height="24" rx="3" fill="#450A0A" stroke="#F87171"/>
          <text x="41" y="67" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="9.2" font-weight="700">BRICS EXIT · 383K</text>
          <text x="41" y="77" text-anchor="middle" fill="#FECACA" font-family="Segoe UI, Arial" font-size="7.8">Brazil pulls envoy</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top"><span style="color:#B45309;">AFRICA &amp; LATAM</span><span class="src-tag">REUTERS · AA · IOM</span></div>
          <div class="spot-hed">BISSAU DELAYS VOTE; COLOMBIA QUITS BRICS</div>
          <div class="spot-desc">Guinea-Bissau junta delays polls to 2028; Sudan 383K flee; Colombia exits BRICS; Brazil recalls Amb. Bitelli from Argentina.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROW 3: 8 PICTORIAL DISPATCH CARDS -->
  <section class="tier3">
    ${bottomCards.map(c => `
      <article class="pic-card" style="border-top: 3px solid ${c.color};">
        <svg class="pic-art" viewBox="0 0 241 50" xmlns="http://www.w3.org/2000/svg">${c.svg}</svg>
        <div class="pic-body">
          <div class="pic-meta">
            <span style="color:${c.color};">${c.cat}</span>
            <span class="src-tag">${c.src}</span>
          </div>
          <div class="pic-hed">${c.hed}</div>
          <div class="pic-desc">${c.desc}</div>
        </div>
      </article>
    `).join('')}
  </section>

  <!-- ROW 4: UTC TIMELINE & VERIFICATION FOOTER -->
  <footer class="tier4">
    <div class="tl-top">
      <span class="tl-label">24H UTC CHRONOLOGY · THURSDAY 26 NOV 2026</span>
      <span class="tl-verify">ALL STORIES VERIFIED FOR 26 NOV 2026 · REUTERS · AP · BBC · FT · NASA · IAEA · ECB · ONS</span>
    </div>
    <div class="tl-track">
      <div class="tl-node"><span class="tl-time">03:30Z</span><span class="tl-evt">Bangkok blast</span></div>
      <div class="tl-node"><span class="tl-time">06:00Z</span><span class="tl-evt">BoK 3.25% / Asia+</span></div>
      <div class="tl-node"><span class="tl-time">09:30Z</span><span class="tl-evt">UK ONS 77k</span></div>
      <div class="tl-node"><span class="tl-time">14:00Z</span><span class="tl-evt">EU picks De Cos</span></div>
      <div class="tl-node"><span class="tl-time">16:30Z</span><span class="tl-evt">NYC parade off</span></div>
      <div class="tl-node"><span class="tl-time">20:30Z</span><span class="tl-evt">Bears 39–35</span></div>
      <div class="tl-node"><span class="tl-time">22:00Z</span><span class="tl-evt">ISS dock / FCC 1M</span></div>
    </div>
  </footer>
</div>
</body>
</html>`;

(async () => {
  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu-sandbox']
  });
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForTimeout(150);

  const audit = await page.evaluate(() => {
    const doc = document.documentElement;
    const issues = [];
    if (doc.scrollWidth !== 1024 || doc.scrollHeight !== 1024) {
      issues.push(`Root size mismatch: ${doc.scrollWidth}x${doc.scrollHeight}`);
    }
    const selectors = [
      '.lead-card', '.lead-hed', '.lead-desc',
      '.panel-box', '.mini-vignette', '.mini-hed', '.mini-desc',
      '.spot-card', '.spot-hed', '.spot-desc',
      '.pic-card', '.pic-hed', '.pic-desc',
      '.tl-evt'
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        if (r.right > 1024.5 || r.bottom > 1024.5 || r.left < -0.5 || r.top < -0.5) {
          issues.push(`Out of bounds ${sel}[${idx}]: ${JSON.stringify(r)}`);
        }
        if (el.scrollWidth > el.clientWidth + 1) {
          issues.push(`Horizontal overflow ${sel}[${idx}]: scrollW=${el.scrollWidth} clientW=${el.clientWidth} text="${el.textContent?.slice(0,40)}"`);
        }
        if (el.scrollHeight > el.clientHeight + 1) {
          issues.push(`Vertical overflow ${sel}[${idx}]: scrollH=${el.scrollHeight} clientH=${el.clientHeight} text="${el.textContent?.slice(0,40)}"`);
        }
      });
    }
    const cardGroups = ['.lead-card', '.mini-vignette', '.spot-card', '.pic-card'];
    for (const grp of cardGroups) {
      const els = Array.from(document.querySelectorAll(grp));
      for (let i = 0; i < els.length; i++) {
        const a = els[i].getBoundingClientRect();
        for (let j = i + 1; j < els.length; j++) {
          const b = els[j].getBoundingClientRect();
          const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
          const overlapY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
          if (overlapX > 0.5 && overlapY > 0.5) {
            issues.push(`Overlap in ${grp} [${i} vs ${j}]: ${overlapX.toFixed(1)}x${overlapY.toFixed(1)}`);
          }
        }
      }
    }
    return { scrollW: doc.scrollWidth, scrollH: doc.scrollHeight, issues };
  });

  if (errors.length > 0 || audit.issues.length > 0) {
    console.error('RENDER AUDIT FAILED:', { errors, audit });
    await browser.close();
    process.exit(1);
  }

  await page.screenshot({ path: outPng, type: 'png' });
  if (process.env.PREVIEW_300) {
    mkdirSync(dirname(process.env.PREVIEW_300), { recursive: true });
    await page.setViewportSize({ width: 300, height: 300 });
    await page.evaluate(() => { document.documentElement.style.zoom = '0.29296875'; });
    await page.screenshot({ path: process.env.PREVIEW_300, type: 'png' });
  }
  await browser.close();
  const st = statSync(outPng);
  console.log('RENDER AUDIT PASSED:', { bytes: st.size, outPng, ...audit });
})();
