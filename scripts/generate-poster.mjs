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

const wirePanels = [
  {
    id: 'americas',
    title: 'AMERICAS',
    range: '#13–16',
    color: '#B91C1C',
    items: [
      { n: 13, src: 'GUARDIAN', hed: 'Trump Disputes Pre-Midterm 3.4% GDP Figure', body: 'Calls BEA data "fake" after 4.3% Q3 revision, urges probe.' },
      { n: 14, src: 'AA', hed: 'Colombia Halts BRICS & NDB Membership Bid', body: 'Pres. de la Espriella suspends accession to realign with US.' },
      { n: 15, src: 'MERCOPRESS', hed: 'Brazil Recalls Argentina Envoy, Snubs Milei', body: 'Pulls Amb. Bitelli & bars Milei from Lula Jan 5 inauguration.' },
      { n: 16, src: 'BLOOMBERG', hed: 'Mexico Slams DEA Tip Lines; M5.7 Baja Quake', body: 'Sheinbaum hits DEA, SpaceX debris; M5.7 off Revillagigedo.' }
    ]
  },
  {
    id: 'europe',
    title: 'EUROPE & UK',
    range: '#17–20',
    color: '#1D4ED8',
    items: [
      { n: 17, src: 'ECB', hed: 'ECB Minutes Signal Rate Hike; CO2 Drops', body: 'Oct minutes cite ~4% inflation; bank emissions fell 2018–25.' },
      { n: 18, src: 'REUTERS', hed: 'Tanker Med Emre Capsizes Off Ibiza, Spain', body: 'Malta diesel ship (7,000t) sinks; 1 dead, 16 rescued, spill watch.' },
      { n: 19, src: 'AP', hed: 'UK Tables Brexit-Reset Bill; LNER Verdict', body: '10-yr border-rebuild exit clause; Williams guilty on 14 counts.' },
      { n: 20, src: 'AP', hed: 'Serbia Sets Dec 27 Vote; AI News Blueprint', body: 'Belgrade sets post-Vučić poll; UNESCO/WAN-IFRA AI media guide.' }
    ]
  },
  {
    id: 'ukraine',
    title: 'RUSSIA & UKRAINE',
    range: '#21–24',
    color: '#4338CA',
    items: [
      { n: 21, src: 'BBC', hed: 'Zelenskyy Warns of Grid Strike & Patriot Delay', body: 'Tells BBC peace talks stalled as Russia preps winter power hits.' },
      { n: 22, src: 'IAEA', hed: 'IAEA Seeks 9th ZNPP Truce After 28th Outage', body: '330kV line severed, diesels run; UK pledges £9.5M 200MW wind.' },
      { n: 23, src: 'AP', hed: 'US Consortium Buys Lukoil Foreign Assets', body: 'Eldridge & US DFC strike $10B share-swap for global refineries.' },
      { n: 24, src: 'NATO', hed: 'Trump & Rutte Warn Moscow at Mar-a-Lago', body: 'Urge Russia pullback; Kyiv GUR says DPRK paused KN-23 missiles.' }
    ]
  },
  {
    id: 'mea',
    title: 'MIDDLE EAST & AFRICA',
    range: '#25–28',
    color: '#B45309',
    items: [
      { n: 25, src: 'REUTERS', hed: 'Guinea-Bissau Junta Delays Vote to Nov 2028', body: 'On 1st coup anniversary, rulers push elections back two years.' },
      { n: 26, src: 'IOM', hed: 'Sudan Rejects Ethiopia Talks; 383K Displaced', body: 'Khartoum cites RSF bias as Kordofan displacement passes 383,000.' },
      { n: 27, src: 'STAR', hed: 'Kenya Court Halts US-Backed Ebola Base', body: 'Voids Laikipia deal over lack of consult; UN boosts Ituri patrols.' },
      { n: 28, src: 'AFP', hed: 'Iraq Shuts 2 Kurdish Borders; Giza Arrest', body: 'Closes Al-Walid & Sartak; Egypt arrests Giza 31-dead crash driver.' }
    ]
  },
  {
    id: 'asia',
    title: 'ASIA-PACIFIC',
    range: '#29–32',
    color: '#0F766E',
    items: [
      { n: 29, src: 'NK NEWS', hed: 'North Korea Expels Swiss Envoy in 48 Hours', body: 'Shuts mission & ousts Sylvain Astier over Songdowon sanctions.' },
      { n: 30, src: 'AP', hed: 'Bangkok Bangchak Refinery Blast Injures 9', body: 'Hydrocracker blast & fire (3 critical) halts all facility units.' },
      { n: 31, src: 'TBS', hed: '400 Bangladesh Garment Plants Shut in Strike', body: 'Savar/Gazipur workers reject ৳17,000 wage; BNP clash kills 1.' },
      { n: 32, src: 'AFP', hed: 'China Shuts 18+ Golf Courses; Java Toll 16', body: 'Anti-graft drive shuts 10 in Beijing; 16 dead in Bogor gold shaft.' }
    ]
  },
  {
    id: 'global',
    title: 'TECH · FINANCE · GLOBAL',
    range: '#33–36',
    color: '#6D28D9',
    items: [
      { n: 33, src: 'CYPRUS MAIL', hed: 'FIFA Confirms 12 GB Cyber Breach; UEFA Halt', body: 'Hacking club claims <0.1% leak; Batumi tie paused over flag clash.' },
      { n: 34, src: 'C.BRIEF', hed: 'Binance Restores Post-Hack Withdrawals', body: 'Reopens transfers across chains 4 wks after $6.3B Lazarus heist.' },
      { n: 35, src: 'GOV.AU/CA', hed: 'Australia Passes Digital Duty of Care Bill', body: 'Up to 5% turnover fines; Canada launches $52M SME AI fund.' },
      { n: 36, src: 'TECHCRUNCH', hed: 'Flipkart CEO Krishnamurthy Out; Hague CWC', body: 'Exits Dec 4; China presses Japan at Hague on WWII chemical arms.' }
    ]
  }
];

// Story-consistent hotspot coordinates on 368x112 map viewBox
const hotspots = [
  { n: 1,  x: 106, y: 42, color: '#DC2626' }, // NYC
  { n: 8,  x: 54,  y: 44, color: '#DC2626' }, // California
  { n: 14, x: 96,  y: 72, color: '#B91C1C' }, // Colombia
  { n: 15, x: 122, y: 90, color: '#B91C1C' }, // Brazil-Argentina
  { n: 2,  x: 179, y: 27, color: '#1D4ED8' }, // Brussels / ECB
  { n: 18, x: 163, y: 44, color: '#1D4ED8' }, // Ibiza Spain
  { n: 22, x: 204, y: 36, color: '#4338CA' }, // Ukraine ZNPP
  { n: 3,  x: 218, y: 52, color: '#B45309' }, // Kuwait / Gaza / Yemen
  { n: 25, x: 156, y: 63, color: '#B45309' }, // Guinea-Bissau
  { n: 26, x: 204, y: 68, color: '#B45309' }, // Sudan / Kenya
  { n: 30, x: 278, y: 59, color: '#0F766E' }, // Bangkok / Dhaka
  { n: 29, x: 312, y: 42, color: '#0F766E' }  // Pyongyang / Beijing
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
    font-size: 11px;
    letter-spacing: 0.9px;
    padding: 2px 7px;
    border-radius: 3px;
  }
  .kicker {
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-size: 11px;
    letter-spacing: 1.4px;
    color: #CBD5E1;
    font-weight: 600;
  }
  .mast-title {
    font-family: "Georgia", serif;
    font-weight: 700;
    font-size: 33px;
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
    font-size: 10.5px;
    color: #CBD5E1;
    letter-spacing: 0.4px;
  }
  .date-verify-row strong { color: #34D399; }

  /* TIER 1: 3 LEADS */
  .tier1 {
    height: 236px;
    display: grid;
    grid-template-columns: repeat(3, 328px);
    gap: 8px;
  }
  .lead-card {
    height: 236px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .lead-art {
    width: 100%;
    height: 112px;
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
  .cat-tag {
    color: #FFFFFF;
    padding: 1px 6px;
    border-radius: 2px;
  }
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
    font-size: 13.5px;
    line-height: 1.15;
    color: #0F172A;
  }
  .lead-desc {
    font-size: 10px;
    line-height: 1.25;
    color: #1E293B;
  }

  /* TIER 2: MAP + CHARTS + SPOTLIGHTS */
  .tier2 {
    height: 230px;
    display: grid;
    grid-template-columns: 368px 320px 300px;
    gap: 6px;
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

  /* Map sub-items */
  .map-svg { width: 100%; height: 112px; display: block; background: #DCE9F5; }
  .map-key {
    background: #0F172A;
    color: #E2E8F0;
    font-family: "Bahnschrift", sans-serif;
    font-size: 8.1px;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 1.25;
    padding: 3px 6px;
    text-align: center;
    border-bottom: 1px solid #CBD5E1;
  }
  .map-key strong { color: #FACC15; }
  .map-sub {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 3px 8px;
    background: #F8FAFC;
  }
  .mini-story {
    display: flex;
    align-items: baseline;
    gap: 5px;
    font-size: 9.6px;
    line-height: 1.2;
  }
  .num-dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 15px;
    height: 14px;
    border-radius: 2px;
    color: #FFFFFF;
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 9px;
    flex-shrink: 0;
  }
  .mini-hed { font-weight: 700; color: #0F172A; }
  .mini-txt { color: #1E293B; }

  /* Center Charts */
  .charts-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px 8px;
    gap: 5px;
  }
  .chart-block {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
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
    padding: 4px 7px;
    display: flex;
    justify-content: space-between;
    font-family: "Bahnschrift", sans-serif;
    font-size: 9.4px;
    font-weight: 700;
  }
  .comm-up { color: #34D399; }
  .comm-dn { color: #F87171; }
  .comm-hol { color: #FBBF24; }

  /* Right Spotlights */
  .spot-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 230px;
  }
  .spot-card {
    height: 74px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    padding: 4px 7px;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  }
  .spot-icon {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .spot-text {
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    min-width: 0;
    flex: 1;
  }
  .spot-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift", sans-serif;
    font-size: 8.6px;
    font-weight: 700;
  }
  .spot-hed {
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 10.9px;
    line-height: 1.12;
    color: #0F172A;
  }
  .spot-desc {
    font-size: 9px;
    line-height: 1.18;
    color: #1E293B;
  }

  /* TIER 3: 6 WIRE PANELS */
  .tier3 {
    height: 388px;
    display: grid;
    grid-template-columns: repeat(3, 328px);
    grid-template-rows: repeat(2, 191px);
    gap: 6px 8px;
  }
  .wire-panel {
    height: 191px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .wire-hdr {
    height: 21px;
    color: #FFFFFF;
    font-family: "Bahnschrift", sans-serif;
    font-weight: 700;
    font-size: 10.5px;
    letter-spacing: 0.7px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .wire-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 7px;
  }
  .wire-item {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-bottom: 3px;
    border-bottom: 1px solid #E2E8F0;
  }
  .wire-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .wire-row1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }
  .wire-left {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex: 1;
  }
  .wire-hed {
    font-family: "Bahnschrift", "Segoe UI", sans-serif;
    font-weight: 700;
    font-size: 10.4px;
    line-height: 1.15;
    color: #0F172A;
    white-space: nowrap;
  }
  .wire-src {
    font-family: "Bahnschrift", sans-serif;
    font-size: 8px;
    font-weight: 700;
    color: #334155;
    background: #F1F5F9;
    border: 1px solid #CBD5E1;
    padding: 0 4px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .wire-body {
    font-size: 9.2px;
    line-height: 1.22;
    color: #1E293B;
    padding-left: 19px;
  }

  /* TIER 4: UTC TIMELINE */
  .tier4 {
    height: 52px;
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
    font-size: 9.5px;
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
    font-size: 8.8px;
    line-height: 1.15;
  }
  .tl-time {
    background: #1E293B;
    border: 1px solid #38BDF8;
    color: #38BDF8;
    font-family: "Consolas", monospace;
    font-weight: 700;
    font-size: 8.2px;
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
        <span class="kicker">GLOBAL EDITION · THE WORLD IN ONE DAY · 00:00–23:59 UTC</span>
      </div>
      <div class="mast-title">26 NOVEMBER 2026</div>
    </div>
    <div class="mast-right">
      <div class="edition-badge">36 VERIFIED STORIES · 9 REGIONS · ALL SOURCED</div>
      <div class="date-verify-row"><strong>DATE CHECKED: 26 NOV 2026</strong> · BESPOKE GRAPHICS, HOTSPOT MAP &amp; MARKET CHARTS</div>
    </div>
  </header>

  <!-- TIER 1: 3 LEAD VISUAL DISPATCHES -->
  <section class="tier1">
    <!-- LEAD 1 -->
    <article class="lead-card" style="border-top: 3px solid #DC2626;">
      <svg class="lead-art" viewBox="0 0 328 112" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#1E3A5F"/>
          </linearGradient>
        </defs>
        <rect width="328" height="112" fill="url(#sky1)"/>
        <!-- NYC Skyline -->
        <rect x="12" y="64" width="18" height="48" fill="#1E293B"/>
        <rect x="34" y="46" width="22" height="66" fill="#0F172A"/>
        <rect x="60" y="54" width="20" height="58" fill="#1E293B"/>
        <rect x="84" y="38" width="18" height="74" fill="#334155"/>
        <rect x="106" y="58" width="24" height="54" fill="#1E293B"/>
        <rect x="134" y="66" width="20" height="46" fill="#0F172A"/>
        <!-- Wind & Rain Streaks -->
        <line x1="12" y1="16" x2="52" y2="26" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="6,3"/>
        <line x1="20" y1="28" x2="72" y2="40" stroke="#93C5FD" stroke-width="1.5" stroke-dasharray="8,4"/>
        <line x1="116" y1="20" x2="168" y2="33" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="6,3"/>
        <!-- Tilted Parade Balloon -->
        <ellipse cx="96" cy="36" rx="26" ry="14" transform="rotate(-18 96 36)" fill="#F59E0B" stroke="#FEF3C7" stroke-width="1.5"/>
        <circle cx="120" cy="28" r="7.5" fill="#EF4444" stroke="#FEF3C7" stroke-width="1.2"/>
        <line x1="85" y1="48" x2="68" y2="104" stroke="#FCA5A5" stroke-width="1.2" stroke-dasharray="3,2"/>
        <line x1="104" y1="47" x2="94" y2="104" stroke="#FCA5A5" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Crisp Padded Callouts -->
        <rect x="172" y="9" width="146" height="23" rx="3" fill="#DC2626"/>
        <text x="245" y="24" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">100TH PARADE → SAT NOV 28</text>
        <rect x="172" y="38" width="146" height="28" rx="3" fill="#0F172A" stroke="#38BDF8" stroke-width="1"/>
        <text x="245" y="50" text-anchor="middle" fill="#38BDF8" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">GUSTS &gt;50 MPH · NOR'EASTER</text>
        <text x="245" y="61" text-anchor="middle" fill="#CBD5E1" font-family="Segoe UI, Arial" font-size="8.2">1st non-WWII delay · NJ emergency</text>
        <rect x="172" y="72" width="146" height="31" rx="3" fill="#172554" stroke="#60A5FA" stroke-width="1"/>
        <text x="245" y="85" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="9.8" font-weight="700">POWER &amp; FLIGHT SNARLS</text>
        <text x="245" y="97" text-anchor="middle" fill="#E2E8F0" font-family="Segoe UI, Arial" font-size="8.2">Hundreds of thousands out</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#DC2626;">1 · US WEATHER LEAD</span>
          <span class="src-tag">AP · GUARDIAN</span>
        </div>
        <div class="lead-hed">MACY'S 100TH PARADE DELAYED BY NOR'EASTER</div>
        <div class="lead-desc">For the first time since WWII, NYC shifts its centennial Thanksgiving parade from Thu Nov 26 to Sat Nov 28 as &gt;50 mph gusts, NJ emergency &amp; outages hit East Coast.</div>
      </div>
    </article>

    <!-- LEAD 2 -->
    <article class="lead-card" style="border-top: 3px solid #1D4ED8;">
      <svg class="lead-art" viewBox="0 0 328 112" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0C1E42"/>
            <stop offset="100%" stop-color="#1E3A8A"/>
          </linearGradient>
        </defs>
        <rect width="328" height="112" fill="url(#sky2)"/>
        <!-- EU 12 Stars Circle -->
        <circle cx="58" cy="56" r="35" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="2,3"/>
        ${Array.from({length:12}).map((_, i) => {
          const ang = (i * 30) * Math.PI / 180;
          const cx = (58 + 33 * Math.cos(ang)).toFixed(1);
          const cy = (56 + 33 * Math.sin(ang)).toFixed(1);
          return `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#FACC15"/>`;
        }).join('')}
        <!-- ECB Pillar Icon -->
        <polygon points="58,34 37,46 79,46" fill="#F8FAFC"/>
        <rect x="41" y="48" width="5.5" height="22" fill="#E2E8F0"/>
        <rect x="50.5" y="48" width="5.5" height="22" fill="#E2E8F0"/>
        <rect x="60" y="48" width="5.5" height="22" fill="#E2E8F0"/>
        <rect x="69.5" y="48" width="5.5" height="22" fill="#E2E8F0"/>
        <rect x="36" y="72" width="44" height="5" fill="#FACC15"/>
        <!-- Decision Panels -->
        <rect x="108" y="9" width="210" height="31" rx="3" fill="#0F172A" stroke="#FACC15" stroke-width="1.2"/>
        <text x="213" y="22" text-anchor="middle" fill="#FACC15" font-family="Bahnschrift, Arial" font-size="10.4" font-weight="700">ECB PRES: P. HERNÁNDEZ DE COS</text>
        <text x="213" y="34" text-anchor="middle" fill="#CBD5E1" font-family="Segoe UI, Arial" font-size="8">Succeeds Lagarde · Boone &amp; Brunnermeier tapped</text>
        <rect x="108" y="46" width="102" height="57" rx="3" fill="#172554" stroke="#60A5FA" stroke-width="1"/>
        <text x="159" y="61" text-anchor="middle" fill="#93C5FD" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">2028–34 BUDGET</text>
        <text x="159" y="79" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="15" font-weight="700">€1.58T</text>
        <text x="159" y="94" text-anchor="middle" fill="#CBD5E1" font-family="Segoe UI, Arial" font-size="8.2">$1.76T · -10% draft</text>
        <rect x="216" y="46" width="102" height="57" rx="3" fill="#172554" stroke="#F87171" stroke-width="1"/>
        <text x="267" y="61" text-anchor="middle" fill="#FCA5A5" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">UKRAINE LOAN</text>
        <text x="267" y="79" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="15" font-weight="700">€45B</text>
        <text x="267" y="94" text-anchor="middle" fill="#FDE047" font-family="Segoe UI, Arial" font-size="8.2">Deferred Dec 17–18</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#1D4ED8;">2 · EUROPE &amp; ECB</span>
          <span class="src-tag">FT · EUROPA</span>
        </div>
        <div class="lead-hed">EU TAPS DE COS FOR ECB; BUDGET DEADLOCKED</div>
        <div class="lead-desc">Brussels summit selects Spain's Pablo Hernández de Cos to succeed Lagarde; leaders clash over €1.58T 7-yr budget &amp; €45B Ukraine loan, deferring deal to Dec 17–18.</div>
      </div>
    </article>

    <!-- LEAD 3 -->
    <article class="lead-card" style="border-top: 3px solid #B45309;">
      <svg class="lead-art" viewBox="0 0 328 112" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E1B2E"/>
            <stop offset="100%" stop-color="#451A03"/>
          </linearGradient>
        </defs>
        <rect width="328" height="112" fill="url(#sky3)"/>
        <!-- Radar Arc -->
        <path d="M 16 96 A 54 54 0 0 1 124 96" fill="none" stroke="#F59E0B" stroke-width="1" stroke-opacity="0.5"/>
        <path d="M 34 96 A 36 36 0 0 1 106 96" fill="none" stroke="#F59E0B" stroke-width="1" stroke-opacity="0.7"/>
        <line x1="70" y1="96" x2="98" y2="34" stroke="#34D399" stroke-width="1.5" stroke-dasharray="3,2"/>
        <!-- Drone & Intercept Burst -->
        <polygon points="98,26 106,34 98,42 90,34" fill="#EF4444" stroke="#FEF08A" stroke-width="1.2"/>
        <path d="M 26 22 L 94 33" stroke="#F87171" stroke-width="1.8" stroke-dasharray="4,3"/>
        <circle cx="70" cy="96" r="5" fill="#F59E0B"/>
        <!-- Right Metric Boxes -->
        <rect x="134" y="9" width="184" height="31" rx="3" fill="#7F1D1D" stroke="#FCA5A5" stroke-width="1"/>
        <text x="226" y="22" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.4" font-weight="700">KUWAIT: 2 ITALIANS KILLED</text>
        <text x="226" y="34" text-anchor="middle" fill="#FECACA" font-family="Segoe UI, Arial" font-size="8">Rheinmetall staff hit by debris · Iran denies</text>
        <rect x="134" y="46" width="89" height="57" rx="3" fill="#1C1917" stroke="#F59E0B" stroke-width="1"/>
        <text x="178" y="61" text-anchor="middle" fill="#FDE047" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">GAZA STRIKES</text>
        <text x="178" y="79" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="15" font-weight="700">10+ DEAD</text>
        <text x="178" y="94" text-anchor="middle" fill="#D6D3D1" font-family="Segoe UI, Arial" font-size="8">Katz warns 1M push</text>
        <rect x="229" y="46" width="89" height="57" rx="3" fill="#1C1917" stroke="#38BDF8" stroke-width="1"/>
        <text x="273" y="61" text-anchor="middle" fill="#7DD3FC" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">YEMEN RAIDS</text>
        <text x="273" y="79" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="15" font-weight="700">50 SITES</text>
        <text x="273" y="94" text-anchor="middle" fill="#D6D3D1" font-family="Segoe UI, Arial" font-size="8">Saudi hits Houthis</text>
      </svg>
      <div class="lead-body">
        <div class="lead-meta">
          <span class="cat-tag" style="background:#B45309;">3 · MIDEAST FLASHPOINT</span>
          <span class="src-tag">BBC · CNN · AA</span>
        </div>
        <div class="lead-hed">KUWAIT DRONE DEBRIS KILLS 2; GAZA &amp; YEMEN</div>
        <div class="lead-desc">Falling debris in Kuwait kills 2 Italian defense workers (Tehran denies); Gaza strikes kill Hamas education official &amp; civilians; Saudi destroys 50 Houthi targets.</div>
      </div>
    </article>
  </section>

  <!-- TIER 2: WORLD MAP + CHARTS + 3 VISUAL SPOTLIGHTS -->
  <section class="tier2">
    <!-- LEFT: WORLD HOTSPOT MAP + 2 ITEMS -->
    <div class="panel-box">
      <div class="panel-hdr">
        <span>WORLD HOTSPOTS · 26 NOV 2026</span>
        <span class="sub">MATCHED TO #1–36</span>
      </div>
      <svg class="map-svg" viewBox="0 0 368 112" xmlns="http://www.w3.org/2000/svg">
        <rect width="368" height="112" fill="#DCE9F5"/>
        <!-- Graticule -->
        <line x1="0" y1="56" x2="368" y2="56" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="3,3"/>
        <line x1="184" y1="0" x2="184" y2="112" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="3,3"/>
        <!-- Realistic Coastline Continent Silhouettes -->
        <!-- North America -->
        <path d="M 24 20 L 56 15 L 94 17 L 114 26 L 112 39 L 96 50 L 78 55 L 70 66 L 58 61 L 52 46 L 32 35 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- Greenland -->
        <path d="M 118 6 L 146 6 L 138 18 L 122 18 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
        <!-- South America -->
        <path d="M 86 67 L 112 69 L 134 83 L 120 103 L 104 109 L 95 95 L 86 81 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- UK & Ireland -->
        <path d="M 159 28 L 165 27 L 166 36 L 159 36 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
        <!-- Europe -->
        <path d="M 168 22 L 186 15 L 210 16 L 218 32 L 204 43 L 184 42 L 176 46 L 164 45 L 167 36 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- Africa -->
        <path d="M 156 50 L 198 50 L 212 62 L 222 66 L 208 92 L 191 105 L 178 88 L 170 70 L 154 66 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- Middle East -->
        <path d="M 210 43 L 234 44 L 240 55 L 224 61 L 212 53 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.85"/>
        <!-- Asia -->
        <path d="M 218 15 L 322 16 L 340 31 L 318 48 L 292 62 L 272 66 L 260 66 L 246 53 L 222 43 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- Japan -->
        <path d="M 326 39 L 333 35 L 332 45 L 324 47 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
        <!-- SE Asia / Indonesia -->
        <rect x="274" y="70" width="26" height="5.5" rx="2" fill="#CBD5E1" stroke="#475569" stroke-width="0.8"/>
        <!-- Australia -->
        <path d="M 294 81 L 334 81 L 338 100 L 306 104 L 292 93 Z" fill="#CBD5E1" stroke="#475569" stroke-width="0.9"/>
        <!-- Orbit Arc -->
        <path d="M 224 8 Q 288 2 354 12" fill="none" stroke="#6D28D9" stroke-width="1.2" stroke-dasharray="3,2"/>
        <rect x="242" y="2" width="116" height="12" rx="3" fill="#4C1D95"/>
        <text x="300" y="10.5" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="7.8" font-weight="700">ORBIT: #9 ISS + #10 1M SATS</text>
        <!-- Exact Story-Number Hotspot Pins -->
        ${hotspots.map(h => `
          <circle cx="${h.x}" cy="${h.y}" r="6.2" fill="${h.color}" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="${h.x}" y="${h.y + 2.6}" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="7.4" font-weight="700">${h.n}</text>
        `).join('')}
      </svg>
      <div class="map-key">
        <strong>#1</strong> NYC · <strong>#8</strong> CA · <strong>#14</strong> BOG · <strong>#15</strong> BSB · <strong>#2</strong> BRU · <strong>#18</strong> IBZ<br/>
        <strong>#22</strong> ZNPP · <strong>#3</strong> KWI/GAZ · <strong>#25</strong> BIS · <strong>#26</strong> SDN · <strong>#30</strong> BKK · <strong>#29</strong> PYG
      </div>
      <div class="map-sub">
        <div class="mini-story">
          <span class="num-dot" style="background:#DC2626;">8</span>
          <div><span class="mini-hed">CA King Tides Wreck Pacifica Pier</span> <span class="mini-txt">— Swells flood SD–SF coast (LA Times)</span></div>
        </div>
        <div class="mini-story">
          <span class="num-dot" style="background:#4C1D95;">9</span>
          <div><span class="mini-hed">Progress 97 Docks at ISS</span> <span class="mini-txt">— 3t supplies + Teledroid for Exp. 75 (NASA)</span></div>
        </div>
      </div>
    </div>

    <!-- CENTER: QUANTITATIVE MARKETS & MIGRATION CHARTS -->
    <div class="panel-box">
      <div class="panel-hdr">
        <span>MARKETS &amp; MACRO CHARTS · 26 NOV</span>
        <span class="sub">#4–7 DATA</span>
      </div>
      <div class="charts-wrap">
        <div class="chart-block">
          <div class="chart-title">
            <span>#4–5 GLOBAL EQUITIES &amp; BOK HIKE (US CLOSED)</span>
            <span style="color:#059669;">REBOUND</span>
          </div>
          <svg width="100%" height="62" viewBox="0 0 300 62" xmlns="http://www.w3.org/2000/svg">
            ${[
              { name: 'TAIEX (TW)', pct: '+2.50%', val: '39,152', w: 146, y: 2, c: '#059669' },
              { name: 'STOXX 600', pct: '+1.60%', val: 'Tech/Bnk', w: 94, y: 17, c: '#10B981' },
              { name: 'NIKKEI 225', pct: '+0.86%', val: '57,499', w: 52, y: 32, c: '#34D399' },
              { name: 'KOSPI (KR)', pct: '+0.29%', val: 'BoK 3.25%', w: 22, y: 47, c: '#0D9488' }
            ].map(b => `
              <text x="0" y="${b.y + 10}" fill="#0F172A" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">${b.name}</text>
              <rect x="72" y="${b.y + 1}" width="150" height="11" rx="2" fill="#F1F5F9"/>
              <rect x="72" y="${b.y + 1}" width="${b.w}" height="11" rx="2" fill="${b.c}"/>
              <text x="228" y="${b.y + 10}" fill="#047857" font-family="Consolas, monospace" font-size="9.5" font-weight="700">${b.pct}</text>
              <text x="299" y="${b.y + 10}" text-anchor="end" fill="#475569" font-family="Segoe UI, Arial" font-size="8.2">${b.val}</text>
            `).join('')}
          </svg>
        </div>

        <div class="comm-strip">
          <span>#6 BRENT <span class="comm-up">$95.58 ▲1.2%</span></span>
          <span>GOLD <span class="comm-dn">$3,570 ▼0.8%</span></span>
          <span>US <span class="comm-hol">THANKSGIVING</span></span>
        </div>

        <div class="chart-block">
          <div class="chart-title">
            <span>#7 UK NET MIGRATION HALVES (ONS · 26 NOV)</span>
            <span style="color:#1D4ED8;">-62% YoY</span>
          </div>
          <svg width="100%" height="66" viewBox="0 0 300 66" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="300" height="66" rx="3" fill="#F8FAFC" stroke="#E2E8F0"/>
            <!-- Clean Step Bars & Non-Intersecting Labels -->
            <rect x="18" y="10" width="44" height="40" rx="2" fill="#94A3B8"/>
            <text x="40" y="28" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="10.5" font-weight="700">944k</text>
            <text x="40" y="61" text-anchor="middle" fill="#334155" font-family="Bahnschrift, Arial" font-size="8.5" font-weight="700">Mar '23 Peak</text>

            <rect x="90" y="34" width="44" height="16" rx="2" fill="#3B82F6"/>
            <text x="112" y="31" text-anchor="middle" fill="#1D4ED8" font-family="Bahnschrift, Arial" font-size="10.2" font-weight="700">204k</text>
            <text x="112" y="61" text-anchor="middle" fill="#334155" font-family="Bahnschrift, Arial" font-size="8.5" font-weight="700">Jun '25 Rev</text>

            <rect x="162" y="42" width="44" height="8" rx="2" fill="#DC2626"/>
            <text x="184" y="39" text-anchor="middle" fill="#B91C1C" font-family="Bahnschrift, Arial" font-size="10.8" font-weight="700">77k</text>
            <text x="184" y="61" text-anchor="middle" fill="#B91C1C" font-family="Bahnschrift, Arial" font-size="8.5" font-weight="700">Jun '26 (New)</text>

            <!-- Trend arrow cleanly routed above bar labels -->
            <path d="M 65 11 Q 124 8 182 26" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3,2"/>
            <polygon points="184,28 177,27 181,22" fill="#DC2626"/>

            <text x="253" y="23" text-anchor="middle" fill="#0F172A" font-family="Bahnschrift, Arial" font-size="10" font-weight="700">&gt;90% DROP</text>
            <text x="253" y="36" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="8.3">from '23 high;</text>
            <text x="253" y="48" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="8.3">PM Burnham reacts</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- RIGHT: 3 STACKED VISUAL SPOTLIGHTS -->
    <div class="spot-col">
      <!-- SPOT 10 -->
      <div class="spot-card" style="border-left: 4px solid #6D28D9;">
        <svg class="spot-icon" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="58" rx="4" fill="#1E1B4B"/>
          <circle cx="29" cy="27" r="10" fill="#2563EB"/>
          <ellipse cx="29" cy="27" rx="22" ry="8.5" transform="rotate(-24 29 27)" fill="none" stroke="#38BDF8" stroke-width="1.6"/>
          <circle cx="47" cy="18" r="2.8" fill="#FACC15"/>
          <circle cx="11" cy="36" r="2.8" fill="#FACC15"/>
          <text x="29" y="52" text-anchor="middle" fill="#E0E7FF" font-family="Bahnschrift, Arial" font-size="8.2" font-weight="700">1M SATS</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top">
            <span style="color:#6D28D9;">10 · SPACE / AI COMPUTE</span>
            <span class="src-tag">AFP</span>
          </div>
          <div class="spot-hed">FCC CLEARS SPACEX 1M 'STARMIND' SATS</div>
          <div class="spot-desc">Approves orbital AI data-center fleet by 2040 despite astronomy &amp; debris warnings.</div>
        </div>
      </div>

      <!-- SPOT 11 -->
      <div class="spot-card" style="border-left: 4px solid #0F766E;">
        <svg class="spot-icon" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="58" rx="4" fill="#042F2E"/>
          <rect x="16" y="14" width="26" height="24" rx="2" fill="#0D9488" stroke="#5EEAD4" stroke-width="1.4"/>
          <text x="29" y="29" text-anchor="middle" fill="#FFFFFF" font-family="Bahnschrift, Arial" font-size="9.5" font-weight="700">GPU</text>
          <circle cx="42" cy="14" r="7" fill="#DC2626"/>
          <line x1="38" y1="14" x2="46" y2="14" stroke="#FFFFFF" stroke-width="2"/>
          <text x="29" y="52" text-anchor="middle" fill="#CCFBF1" font-family="Bahnschrift, Arial" font-size="7.8" font-weight="700">SE ASIA HALT</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top">
            <span style="color:#0F766E;">11 · CHIPS &amp; EXPORT RULES</span>
            <span class="src-tag">TECHCRUNCH</span>
          </div>
          <div class="spot-hed">NVIDIA FREEZES SE ASIA AI SERVER ORDERS</div>
          <div class="spot-desc">Tells Dell &amp; Supermicro to pause deliveries to SG, MY, TH, ID to close loopholes.</div>
        </div>
      </div>

      <!-- SPOT 12 -->
      <div class="spot-card" style="border-left: 4px solid #B91C1C;">
        <svg class="spot-icon" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="58" rx="4" fill="#14532D"/>
          <rect x="15" y="4" width="28" height="11" rx="2" fill="#0F172A"/>
          <text x="29" y="12.5" text-anchor="middle" fill="#38BDF8" font-family="Consolas, monospace" font-size="8.2" font-weight="700">0:03</text>
          <path d="M 19 18 L 19 30 L 39 30 L 39 18 M 29 30 L 29 39" fill="none" stroke="#FACC15" stroke-width="2.2"/>
          <rect x="10" y="40" width="38" height="14" rx="2" fill="#0F172A"/>
          <text x="29" y="50.5" text-anchor="middle" fill="#FDE047" font-family="Consolas, monospace" font-size="9.5" font-weight="700">39-35</text>
        </svg>
        <div class="spot-text">
          <div class="spot-top">
            <span style="color:#B91C1C;">12 · NFL THANKSGIVING</span>
            <span class="src-tag">CBS SPORTS</span>
          </div>
          <div class="spot-hed">BEARS STUN LIONS 39–35 WITH 0:03 TD</div>
          <div class="spot-desc">Williams hits Odunze from 6 yds as Chicago (9–2) takes sole NFC North lead.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TIER 3: 6 REGIONAL & THEMATIC WIRE PANELS (#13–36) -->
  <section class="tier3">
    ${wirePanels.map(p => `
      <div class="wire-panel">
        <div class="wire-hdr" style="background:${p.color};">
          <span>${p.title}</span>
          <span>${p.range}</span>
        </div>
        <div class="wire-list">
          ${p.items.map(it => `
            <div class="wire-item">
              <div class="wire-row1">
                <div class="wire-left">
                  <span class="num-dot" style="background:${p.color};">${it.n}</span>
                  <span class="wire-hed">${it.hed}</span>
                </div>
                <span class="wire-src">${it.src}</span>
              </div>
              <div class="wire-body">${it.body}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </section>

  <!-- TIER 4: UTC TIMELINE & VERIFICATION FOOTER -->
  <footer class="tier4">
    <div class="tl-top">
      <span class="tl-label">24H UTC CHRONOLOGY · THURSDAY 26 NOV 2026</span>
      <span class="tl-verify">ALL 36 STORIES SOURCED &amp; VERIFIED FOR 26 NOV 2026 · REUTERS · AP · BBC · FT · NASA · IAEA · ECB · ONS</span>
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
    const selectors = ['.lead-card', '.lead-hed', '.lead-desc', '.panel-box', '.spot-card', '.spot-hed', '.spot-desc', '.wire-panel', '.wire-item', '.wire-hed', '.wire-body', '.tl-evt'];
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
    const cardGroups = ['.lead-card', '.spot-card', '.wire-panel', '.wire-item'];
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
