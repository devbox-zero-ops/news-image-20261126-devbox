import { dirname, join } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { statSync, existsSync } from 'node:fs';

const pwPath = [
  join(homedir(), '.gemini', 'antigravity', 'tools', 'node', 'node_modules', 'playwright', 'index.mjs'),
  'playwright'
].find(p => p === 'playwright' || existsSync(p));
const { chromium } = await import(pwPath === 'playwright' ? 'playwright' : pathToFileURL(pwPath).href);

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoDir = dirname(__dirname);
const outPng = process.env.POSTER_OUT || join(repoDir, 'entry.png');
const outThumb = process.env.PREVIEW_300 || '';

const heroCards = [
  {
    num: 1,
    kicker: 'USA · NEW YORK · AP',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: "Nor'easter halts Macy's 100th Thanksgiving parade",
    desc: 'Winds over 50 mph force a historic first weather delay to Saturday and spark a New Jersey storm emergency.',
    svg: `
      <rect width="320" height="114" fill="#1C314E"/>
      <rect y="84" width="320" height="30" fill="#0F1F36"/>
      <rect x="20" y="38" width="22" height="48" fill="#334E73"/>
      <rect x="46" y="18" width="28" height="68" fill="#274060"/>
      <rect x="80" y="44" width="22" height="42" fill="#334E73"/>
      <rect x="168" y="24" width="26" height="62" fill="#274060"/>
      <rect x="200" y="36" width="22" height="50" fill="#334E73"/>
      <rect x="228" y="48" width="20" height="38" fill="#274060"/>
      <line x1="22" y1="14" x2="150" y2="28" stroke="#93C5FD" stroke-width="1.6" stroke-dasharray="6 4"/>
      <line x1="12" y1="30" x2="162" y2="46" stroke="#BFDBFE" stroke-width="1.3" stroke-dasharray="6 4"/>
      <line x1="36" y1="50" x2="178" y2="66" stroke="#93C5FD" stroke-width="1.1" stroke-dasharray="5 5"/>
      <ellipse cx="122" cy="42" rx="34" ry="18" transform="rotate(-14 122 42)" fill="#FBBF24" stroke="#B45309" stroke-width="1.8"/>
      <circle cx="148" cy="30" r="8.5" fill="#DC2626"/>
      <ellipse cx="124" cy="38" rx="13" ry="5.5" transform="rotate(-14 124 38)" fill="#FDE68A" opacity="0.65"/>
      <line x1="104" y1="56" x2="94" y2="86" stroke="#E2E8F0" stroke-width="1.5"/>
      <line x1="136" y1="54" x2="140" y2="86" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="208" y="10" width="100" height="24" rx="4" fill="#991B1B"/>
      <text x="258" y="26" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="11.5" font-weight="800">100TH PARADE</text>
      <circle cx="282" cy="64" r="16" fill="#0F1F36" stroke="#FBBF24" stroke-width="1.6"/>
      <text x="282" y="68" text-anchor="middle" fill="#FDE047" font-family="Segoe UI, Arial" font-size="10.5" font-weight="800">50+</text>
    `
  },
  {
    num: 2,
    kicker: 'EUROPE · BRUSSELS · FT / EU COUNCIL',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'EU taps De Cos for ECB as €1.58T budget stalls',
    desc: 'Leaders pick Spain’s Pablo Hernández de Cos to succeed Lagarde; summit defers EU budget & €45B Kyiv loan.',
    svg: `
      <rect width="320" height="114" fill="#172E61"/>
      <circle cx="114" cy="57" r="46" fill="#1E3A8A"/>
      <circle cx="114" cy="57" r="38" fill="none" stroke="#FACC15" stroke-width="2.4" stroke-dasharray="2.5 9.4"/>
      <polygon points="114,24 76,45 152,45" fill="#F8FAFC"/>
      <rect x="82" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="99" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="119" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="136" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="74" y="81" width="80" height="8" fill="#CBD5E1"/>
      <rect x="70" y="89" width="88" height="6" fill="#94A3B8"/>
      <rect x="184" y="16" width="122" height="36" rx="5" fill="#FFFFFF" stroke="#60A5FA" stroke-width="1.4"/>
      <text x="245" y="40" text-anchor="middle" fill="#1E3A8A" font-family="Segoe UI, Arial" font-size="18.5" font-weight="800">€1.58T</text>
      <rect x="184" y="62" width="122" height="36" rx="5" fill="#991B1B"/>
      <text x="245" y="87" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="18.5" font-weight="800">€45B</text>
    `
  },
  {
    num: 3,
    kicker: 'MIDDLE EAST · BBC / CNN / AA',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    hed: 'Kuwait drone debris kills two; Gaza & Yemen hit',
    desc: 'Falling drone debris kills two Italians in Kuwait as Tehran denies firing; strikes hit Gaza & 50 Yemen sites.',
    svg: `
      <rect width="320" height="114" fill="#3B1D16"/>
      <rect y="78" width="320" height="36" fill="#5E2E22"/>
      <path d="M 0 82 L 72 64 L 154 80 L 236 62 L 320 76 L 320 114 L 0 114 Z" fill="#7C3F2C"/>
      <rect x="218" y="54" width="18" height="24" fill="#1E293B"/>
      <rect x="244" y="48" width="16" height="30" fill="#1E293B"/>
      <path d="M 222 54 Q 232 22 248 48" fill="#F97316"/>
      <path d="M 248 48 Q 268 18 286 42" fill="#475569" opacity="0.8"/>
      <circle cx="96" cy="80" r="28" fill="none" stroke="#F59E0B" stroke-width="1.4" stroke-dasharray="3 3"/>
      <circle cx="96" cy="80" r="48" fill="none" stroke="#EF4444" stroke-width="1.3" stroke-dasharray="4 4"/>
      <path d="M 22 20 Q 84 14 146 58" fill="none" stroke="#FCA5A5" stroke-width="2.4" stroke-dasharray="5 3"/>
      <polygon points="142,48 156,60 143,66" fill="#EF4444"/>
      <circle cx="96" cy="80" r="5" fill="#FDE047"/>
      <rect x="196" y="10" width="112" height="24" rx="4" fill="#991B1B"/>
      <text x="252" y="26" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="11.5" font-weight="800">50 YEMEN SITES</text>
    `
  }
];

const midCards = [
  {
    num: 4,
    kicker: 'MARKETS · BOK / REUTERS',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'Korea lifts rate to 3.25% as Asian stocks gain',
    desc: 'Bank of Korea hikes 25bp; Taiex climbs 2.5% and Stoxx 600 adds 1.6%.',
    svg: `
      <rect width="236" height="70" fill="#EBF5F0"/>
      <line x1="22" y1="55" x2="142" y2="55" stroke="#94A3B8" stroke-width="1.2"/>
      <rect x="30" y="37" width="26" height="18" rx="2" fill="#059669"/>
      <text x="43" y="33" text-anchor="middle" fill="#065F46" font-family="Segoe UI, Arial" font-size="8.6" font-weight="800">+0.9%</text>
      <text x="43" y="65" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.6" font-weight="700">NIKKEI</text>
      <rect x="68" y="25" width="26" height="30" rx="2" fill="#2563EB"/>
      <text x="81" y="21" text-anchor="middle" fill="#1E40AF" font-family="Segoe UI, Arial" font-size="8.6" font-weight="800">+1.6%</text>
      <text x="81" y="65" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.6" font-weight="700">STOXX</text>
      <rect x="106" y="13" width="26" height="42" rx="2" fill="#0D9488"/>
      <text x="119" y="10" text-anchor="middle" fill="#0F766E" font-family="Segoe UI, Arial" font-size="8.6" font-weight="800">+2.5%</text>
      <text x="119" y="65" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.6" font-weight="700">TAIEX</text>
      <rect x="150" y="13" width="74" height="44" rx="5" fill="#14532D"/>
      <text x="187" y="36" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="16" font-weight="800">3.25%</text>
      <text x="187" y="50" text-anchor="middle" fill="#BBF7D0" font-family="Segoe UI, Arial" font-size="8.5" font-weight="700">BOK +25bp</text>
    `
  },
  {
    num: 5,
    kicker: 'UK DATA · ONS / BBC',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'UK net migration drops 62% YoY to 77,000',
    desc: 'Annual arrivals fell from 204k, down over 90% from 2023 peak.',
    svg: `
      <rect width="236" height="70" fill="#EFF3F8"/>
      <rect x="34" y="13" width="32" height="41" rx="2" fill="#64748B"/>
      <text x="50" y="37" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="9.5" font-weight="800">944k</text>
      <text x="50" y="64" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="8.2" font-weight="700">'23</text>
      <rect x="78" y="33" width="32" height="21" rx="2" fill="#2563EB"/>
      <text x="94" y="47" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="9.2" font-weight="800">204k</text>
      <text x="94" y="64" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="8.2" font-weight="700">'25</text>
      <rect x="122" y="45" width="32" height="9" rx="2" fill="#DC2626"/>
      <text x="138" y="41" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="9.8" font-weight="800">77k</text>
      <text x="138" y="64" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="8.2" font-weight="800">'26</text>
      <path d="M 70 13 L 138 29" stroke="#DC2626" stroke-width="2.4" stroke-dasharray="4 2"/>
      <polygon points="135,24 144,31 134,33" fill="#DC2626"/>
      <rect x="166" y="15" width="58" height="40" rx="5" fill="#991B1B"/>
      <text x="195" y="41" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="15" font-weight="800">-62%</text>
    `
  },
  {
    num: 6,
    kicker: 'UKRAINE · BBC / IAEA',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: 'Kyiv warns on grid risk; IAEA seeks truce',
    desc: 'Zelenskyy notes Patriot gaps after ZNPP power cut; IAEA backs ceasefire.',
    svg: `
      <rect width="236" height="70" fill="#DCE8F7"/>
      <rect y="48" width="236" height="22" fill="#FDE047" opacity="0.55"/>
      <line x1="60" y1="8" x2="44" y2="62" stroke="#1E3A8A" stroke-width="2.6"/>
      <line x1="60" y1="8" x2="76" y2="62" stroke="#1E3A8A" stroke-width="2.6"/>
      <line x1="34" y1="22" x2="86" y2="22" stroke="#1E3A8A" stroke-width="2.4"/>
      <line x1="40" y1="38" x2="80" y2="38" stroke="#1E3A8A" stroke-width="2"/>
      <line x1="46" y1="51" x2="74" y2="51" stroke="#1E3A8A" stroke-width="1.8"/>
      <path d="M 118 62 Q 126 40 122 19 L 154 19 Q 150 40 158 62 Z" fill="#475569"/>
      <ellipse cx="138" cy="13" rx="14" ry="5" fill="#FFFFFF"/>
      <polygon points="184,13 170,37 184,37 176,57 202,29 187,29" fill="#EA580C"/>
      <line x1="168" y1="13" x2="206" y2="57" stroke="#DC2626" stroke-width="2.6"/>
    `
  },
  {
    num: 7,
    kicker: 'THAILAND · BANGKOK · AP',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: 'Bangchak refinery blast injures 9 in Bangkok',
    desc: 'Hydrocracker Unit 4 fire halts complex and forces local evacuations.',
    svg: `
      <rect width="236" height="70" fill="#F7E4D7"/>
      <rect y="54" width="236" height="16" fill="#78350F" opacity="0.28"/>
      <rect x="52" y="26" width="20" height="32" fill="#475569"/>
      <rect x="82" y="34" width="22" height="24" fill="#334155"/>
      <rect x="114" y="20" width="26" height="38" fill="#64748B"/>
      <rect x="148" y="36" width="28" height="22" fill="#475569"/>
      <path d="M 54 26 Q 64 2 76 26" fill="#F97316"/>
      <path d="M 84 34 Q 95 8 106 34" fill="#DC2626"/>
      <circle cx="92" cy="14" r="11" fill="#475569" opacity="0.65"/>
      <circle cx="110" cy="11" r="13" fill="#64748B" opacity="0.55"/>
      <rect x="178" y="14" width="46" height="24" rx="4" fill="#991B1B"/>
      <text x="201" y="30" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="11.5" font-weight="800">9 HURT</text>
    `
  },
  {
    num: 8,
    kicker: 'SPORT · THANKSGIVING · CBS',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: 'Bears stun Lions 39–35 with 3 seconds left',
    desc: 'Williams throws winning touchdown pass to lift Chicago atop NFC North.',
    svg: `
      <rect width="236" height="70" fill="#14532D"/>
      <line x1="0" y1="53" x2="236" y2="53" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="28" y1="53" x2="12" y2="70" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="88" y1="53" x2="78" y2="70" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="148" y1="53" x2="158" y2="70" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="208" y1="53" x2="224" y2="70" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="62" y1="41" x2="62" y2="62" stroke="#FACC15" stroke-width="3.5"/>
      <line x1="38" y1="41" x2="86" y2="41" stroke="#FACC15" stroke-width="3.5"/>
      <line x1="38" y1="11" x2="38" y2="41" stroke="#FACC15" stroke-width="3.2"/>
      <line x1="86" y1="11" x2="86" y2="41" stroke="#FACC15" stroke-width="3.2"/>
      <ellipse cx="62" cy="23" rx="11" ry="6.5" transform="rotate(-22 62 23)" fill="#92400E" stroke="#FDE68A" stroke-width="1.2"/>
      <rect x="116" y="13" width="108" height="36" rx="4" fill="#0F172A" stroke="#FACC15" stroke-width="1.4"/>
      <text x="170" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="18.5" font-weight="800">39 – 35</text>
    `
  },
  {
    num: 9,
    kicker: 'SPACE · NASA / AFP',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'Progress 97 docks; FCC clears 1M SpaceX sats',
    desc: 'Cargo craft brings 3t to ISS as US regulator approves orbital data network.',
    svg: `
      <rect width="236" height="70" fill="#0F1E3A"/>
      <path d="M 0 70 Q 118 34 236 70 Z" fill="#1D4ED8" opacity="0.7"/>
      <circle cx="195" cy="17" r="1.5" fill="#FFFFFF"/>
      <circle cx="154" cy="13" r="1.2" fill="#FFFFFF"/>
      <circle cx="132" cy="25" r="1.2" fill="#FFFFFF"/>
      <rect x="44" y="13" width="16" height="34" rx="1" fill="#3B82F6" stroke="#93C5FD"/>
      <rect x="92" y="13" width="16" height="34" rx="1" fill="#3B82F6" stroke="#93C5FD"/>
      <rect x="34" y="26" width="86" height="8" rx="2" fill="#E2E8F0"/>
      <rect x="122" y="24" width="22" height="12" rx="3" fill="#CBD5E1"/>
      <circle cx="122" cy="30" r="3" fill="#34D399"/>
      <ellipse cx="186" cy="33" rx="32" ry="12" transform="rotate(-18 186 33)" fill="none" stroke="#60A5FA" stroke-width="1.6" stroke-dasharray="4 3"/>
      <circle cx="186" cy="33" r="10" fill="#2563EB"/>
    `
  },
  {
    num: 10,
    kicker: 'AFRICA · BISSAU · REUTERS',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    hed: 'Guinea-Bissau junta delays vote to 2028',
    desc: 'Military rulers suspend ballot calendar two years across country.',
    svg: `
      <rect width="236" height="70" fill="#FEF4DA"/>
      <rect x="36" y="20" width="76" height="40" rx="4" fill="#92400E"/>
      <rect x="54" y="13" width="40" height="9" fill="#FFFFFF" stroke="#78350F" stroke-width="1.5"/>
      <text x="74" y="47" text-anchor="middle" fill="#FDE047" font-family="Segoe UI, Arial" font-size="16" font-weight="800">2028</text>
      <circle cx="168" cy="35" r="20" fill="#FFFFFF" stroke="#991B1B" stroke-width="3"/>
      <path d="M 157 35 L 166 43 L 180 26" fill="none" stroke="#94A3B8" stroke-width="3"/>
      <line x1="154" y1="21" x2="182" y2="49" stroke="#991B1B" stroke-width="3.2"/>
    `
  },
  {
    num: 11,
    kicker: 'LATIN AMERICA · BLOOMBERG / AA',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'Colombia exits BRICS; Mexico hits DEA on quake',
    desc: 'Bogotá pivots toward US as M5.7 offshore quake strikes Baja coast.',
    svg: `
      <rect width="236" height="70" fill="#FDECEC"/>
      <path d="M 0 54 Q 60 42 120 54 T 236 54 L 236 70 L 0 70 Z" fill="#FCA5A5" opacity="0.45"/>
      <polyline points="20,37 42,37 50,15 58,54 66,9 74,47 82,33 114,33" fill="none" stroke="#DC2626" stroke-width="2.8"/>
      <circle cx="152" cy="35" r="15" fill="none" stroke="#1E3A8A" stroke-width="4" stroke-dasharray="14 6"/>
      <circle cx="192" cy="35" r="15" fill="none" stroke="#991B1B" stroke-width="4" stroke-dasharray="14 6"/>
      <line x1="168" y1="21" x2="176" y2="49" stroke="#991B1B" stroke-width="2.6"/>
    `
  }
];

const pins = [
  { n: 1, x: 78, y: 56 },
  { n: 8, x: 64, y: 40 },
  { n: 11, x: 88, y: 98 },
  { n: 2, x: 152, y: 48 },
  { n: 5, x: 136, y: 36 },
  { n: 6, x: 174, y: 42 },
  { n: 3, x: 184, y: 70 },
  { n: 7, x: 234, y: 78 },
  { n: 4, x: 256, y: 54 },
  { n: 10, x: 144, y: 92 },
  { n: 9, x: 274, y: 20 }
];

const utcTimeline = [
  { t: '00:30', label: 'Bangkok fire' },
  { t: '01:00', label: 'BoK rate 3.25%' },
  { t: '09:30', label: 'UK ONS 77k' },
  { t: '14:00', label: 'EU De Cos pick' },
  { t: '16:30', label: "Macy's off" },
  { t: '20:30', label: 'Bears 39–35' },
  { t: '22:00', label: 'ISS & 1M sats' }
];

const leftBriefs = [
  { n: 12, city: 'Bogor', text: 'West Java gold mine flood kills 16; 10 missing' },
  { n: 13, city: 'Nairobi', text: 'High Court halts US Laikipia Ebola site' },
  { n: 14, city: 'Singapore', text: 'Nvidia pauses AI chips to 4 SE Asia states' },
  { n: 15, city: 'Canberra', text: 'Australia passes 5% online safety fine bill' },
  { n: 16, city: 'Pyongyang', text: 'North Korea gives Swiss envoy 48h to exit' },
  { n: 17, city: 'Pacifica', text: 'King tide swells snap California pier' },
  { n: 18, city: 'Zurich', text: 'FIFA says <0.1% files in 12 GB breach claim' },
  { n: 19, city: 'Ibiza', text: 'Tanker Med Emre sinks; 1 dead, 16 saved' },
  { n: 20, city: 'Dhaka', text: '400 garment plants shut in wage unrest' }
];

const rightBriefs = [
  { n: 21, city: 'Belgrade', text: 'Serbia schedules Dec 27 presidential vote' },
  { n: 22, city: 'Bengaluru', text: 'Flipkart CEO Kalyan Krishnamurthy exits' },
  { n: 23, city: 'Paris', text: 'UNESCO & WAN-IFRA issue newsroom AI guide' },
  { n: 24, city: 'Cambridge', text: 'Jury convicts LNER train stabbing suspect' },
  { n: 25, city: 'Beijing', text: 'Golf clubs ordered shut; Li meets ADB' },
  { n: 26, city: 'Ottawa', text: 'Canada pledges C$52M for domestic AI tools' },
  { n: 27, city: 'Buenos Aires', text: 'Brazil withdraws Ambassador Bitelli' },
  { n: 28, city: 'Batumi', text: 'UEFA Beşiktaş tie suspended over clashes' },
  { n: 29, city: 'Khartoum', text: 'UN logs 383,000 displaced in Kordofan' }
];

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px; height: 1024px; overflow: hidden;
    background: #F4EFE4; color: #141413;
    font-family: "Segoe UI", Arial, sans-serif;
  }
  .page {
    width: 1024px; height: 1024px;
    padding: 12px 16px 10px;
    display: flex; flex-direction: column; gap: 6px;
    background: #F4EFE4;
    border: 1px solid #D6CEBE;
  }
  .top-micro {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 9.4px; font-weight: 800; letter-spacing: 0.6px; color: #44403C;
    text-transform: uppercase; padding-bottom: 3px;
    border-bottom: 2px solid #1C1917;
  }
  .masthead {
    text-align: center; padding: 2px 0 4px;
    border-bottom: 1.5px solid #1C1917;
  }
  .masthead h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 52px; font-weight: 700; line-height: 1.0;
    letter-spacing: -0.7px; color: #141413;
  }
  .masthead h1 .red { color: #991B1B; }
  .masthead .deck {
    margin-top: 3px;
    font-family: Georgia, serif; font-style: italic;
    font-size: 12.6px; color: #1F2937; font-weight: 400;
  }

  .utc-strip {
    display: flex; align-items: center; justify-content: space-between;
    background: #EAE2D1; border: 1px solid #CFC5B2; border-radius: 3px;
    padding: 4px 10px; font-size: 9.7px;
  }
  .utc-title {
    font-weight: 800; color: #8B1E1E; letter-spacing: 0.4px; white-space: nowrap;
  }
  .utc-item { color: #111827; white-space: nowrap; font-weight: 600; }
  .utc-item b { color: #1E3A8A; font-weight: 800; }

  .hero-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .card {
    background: #FFFFFF; border: 1px solid #C6BCA6; border-radius: 4px;
    overflow: hidden; display: flex; flex-direction: column; position: relative;
  }
  .art-wrap {
    position: relative; width: 100%; overflow: hidden;
    border-bottom: 1px solid #D6CEBE;
  }
  .num-badge {
    position: absolute; top: 6px; left: 6px;
    width: 22px; height: 22px; border-radius: 50%;
    background: #991B1B; color: #FFFFFF; border: 1.5px solid #FFFFFF;
    font-family: "Segoe UI", Arial, sans-serif; font-size: 11.5px; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.35);
  }
  .num-badge.sm { width: 19px; height: 19px; font-size: 10.2px; top: 5px; left: 5px; }
  .hero-body { padding: 8px 10px 9px; display: flex; flex-direction: column; flex: 1; gap: 3.5px; }
  .card-meta { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
  .kicker {
    font-size: 8.2px; font-weight: 800; letter-spacing: 0.4px; color: #991B1B; text-transform: uppercase;
  }
  .cf {
    font-size: 7.6px; font-weight: 800; padding: 1px 5px; border-radius: 2px;
    letter-spacing: 0.3px; border: 1px solid; white-space: nowrap;
  }
  .cf-official { color: #1E3A8A; border-color: #93C5FD; background: #EFF6FF; }
  .cf-confirmed { color: #166534; border-color: #86EFAC; background: #F0FDF4; }
  .cf-reported { color: #92400E; border-color: #FCD34D; background: #FFFBEB; }

  .hero-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px; font-weight: 700; line-height: 1.13; color: #111827;
  }
  .hero-desc { font-size: 11px; line-height: 1.30; color: #1F2937; }

  .mid-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .mid-body { padding: 6px 8px 7px; display: flex; flex-direction: column; flex: 1; gap: 3px; }
  .mid-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14.5px; font-weight: 700; line-height: 1.14; color: #111827;
  }
  .mid-desc { font-size: 10.4px; line-height: 1.25; color: #1F2937; }

  .bottom-split { display: grid; grid-template-columns: 300px 1fr; gap: 10px; flex: 1; min-height: 0; }
  .map-panel {
    background: #FFFFFF; border: 1px solid #C6BCA6; border-radius: 4px;
    padding: 6px 8px; display: flex; flex-direction: column; justify-content: space-between;
  }
  .panel-hdr {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 9.8px; font-weight: 800; color: #8B1E1E;
    letter-spacing: 0.4px; border-bottom: 1px solid #E5DFD2; padding-bottom: 3px; margin-bottom: 4px;
  }
  .panel-hdr span.sub { font-weight: 600; color: #44403C; font-size: 8.5px; }

  .briefs-panel {
    background: #FAF7F0; border: 1px solid #C6BCA6; border-radius: 4px;
    padding: 6px 11px; display: flex; flex-direction: column;
  }
  .briefs-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 14px; flex: 1; }
  .brief-col { display: flex; flex-direction: column; justify-content: space-between; }
  .brief-row {
    font-size: 11px; line-height: 1.32; color: #111827;
    display: flex; align-items: baseline; gap: 4px;
  }
  .b-num {
    font-weight: 800; color: #991B1B; font-family: "Segoe UI", Arial, sans-serif; min-width: 17px; font-size: 10.5px;
  }
  .b-city { font-weight: 800; color: #0F172A; }

  .map-legend {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.2px; color: #374151; padding-top: 3px; border-top: 1px solid #E5DFD2;
  }
  .date-check {
    background: #FFFDF9; border: 1.3px solid #991B1B; border-radius: 3px;
    padding: 4px 9px; font-size: 9.1px; color: #1F2937;
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .dc-tag { font-weight: 800; color: #991B1B; white-space: nowrap; font-size: 9.1px; }
  .footer {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.6px; color: #374151; font-weight: 600;
    border-top: 1.5px solid #1C1917; padding-top: 3px;
  }
</style>
</head>
<body>
<div class="page">
  <div class="top-micro">
    <span>THE WORLD IN ONE DAY · 00:00–23:59 UTC</span>
    <span>29 VERIFIED STORIES · 9 REGIONS · ALL FROM 26 NOVEMBER 2026</span>
  </div>

  <div class="masthead">
    <h1>Thursday <span class="red">26 November 2026</span></h1>
    <div class="deck">Nor'easter delays Macy's 100th parade; EU taps De Cos as €1.58T talks stall; Gulf drone kills two; Korea hikes rate to 3.25%.</div>
  </div>

  <div class="utc-strip">
    <span class="utc-title">THE DAY IN UTC</span>
    ${utcTimeline.map(u => `<span class="utc-item"><b>${u.t}</b> ${u.label}</span>`).join('')}
  </div>

  <div class="hero-grid">
    ${heroCards.map(c => `
      <div class="card">
        <div class="art-wrap">
          <svg viewBox="0 0 320 114" width="100%" height="114" preserveAspectRatio="xMidYMid slice" style="display:block">${c.svg}</svg>
          <div class="num-badge">${c.num}</div>
        </div>
        <div class="hero-body">
          <div class="card-meta">
            <span class="kicker">${c.kicker}</span>
            <span class="cf ${c.confCls}">${c.conf}</span>
          </div>
          <div class="hero-hed">${c.hed}</div>
          <div class="hero-desc">${c.desc}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <div class="mid-grid">
    ${midCards.map(c => `
      <div class="card">
        <div class="art-wrap">
          <svg viewBox="0 0 236 70" width="100%" height="68" preserveAspectRatio="xMidYMid slice" style="display:block">${c.svg}</svg>
          <div class="num-badge sm">${c.num}</div>
        </div>
        <div class="mid-body">
          <div class="card-meta">
            <span class="kicker">${c.kicker}</span>
            <span class="cf ${c.confCls}">${c.conf}</span>
          </div>
          <div class="mid-hed">${c.hed}</div>
          <div class="mid-desc">${c.desc}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <div class="bottom-split">
    <div class="map-panel">
      <div class="panel-hdr">
        <span>WHERE IT HAPPENED</span>
        <span class="sub">Pins 1–11 match scenes</span>
      </div>
      <svg viewBox="0 0 296 156" width="100%" height="154" style="display:block;border-radius:3px;background:#DCE7EE">
        <line x1="0" y1="78" x2="296" y2="78" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <line x1="148" y1="0" x2="148" y2="156" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <path d="M 24 32 C 42 20 76 18 98 25 C 110 30 106 48 94 58 L 82 72 L 74 86 C 64 80 54 72 46 58 C 30 52 20 42 24 32 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 108 10 C 124 8 132 16 125 28 C 112 30 104 22 108 10 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 78 90 C 94 88 112 98 114 114 C 112 130 98 148 88 150 C 80 148 76 128 76 106 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 134 36 L 140 34 L 140 44 L 134 44 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 142 24 C 160 18 178 22 182 36 C 182 50 170 58 156 58 L 140 54 C 138 42 140 30 142 24 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 134 64 C 154 60 172 68 180 84 C 180 104 164 128 152 134 C 144 128 138 104 132 86 C 128 74 130 66 134 64 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 180 22 C 222 16 268 20 278 42 C 276 58 258 68 246 78 L 236 92 L 222 82 L 208 90 L 194 72 L 178 66 C 176 48 178 32 180 22 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 266 44 L 274 42 L 274 56 L 266 58 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 246 108 C 264 104 282 112 282 128 C 278 140 256 142 244 132 C 240 120 242 112 246 108 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 248 12 Q 276 10 290 28" fill="none" stroke="#1E3A8A" stroke-width="1" stroke-dasharray="3 2"/>
        ${pins.map(p => `
          <circle cx="${p.x}" cy="${p.y}" r="8" fill="${p.n === 9 ? '#1E3A8A' : '#991B1B'}" stroke="#FFFFFF" stroke-width="1.4"/>
          <text x="${p.x}" y="${p.y + 3.2}" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="8.5" font-weight="800">${p.n}</text>
        `).join('')}
      </svg>
      <div class="map-legend">
        <span><b style="color:#1E3A8A">OFFICIAL</b> = gov</span>
        <span><b style="color:#166534">CONFIRMED</b> = 2+ wires</span>
        <span><b style="color:#92400E">REPORTED</b> = 1 wire</span>
      </div>
    </div>

    <div class="briefs-panel">
      <div class="panel-hdr">
        <span>ALSO ON 26 NOVEMBER 2026 — BRIEFS 12–29</span>
        <span class="sub">All datelines verified</span>
      </div>
      <div class="briefs-cols">
        <div class="brief-col">
          ${leftBriefs.map(b => `
            <div class="brief-row">
              <span class="b-num">${b.n}</span>
              <span><span class="b-city">${b.city}</span> — ${b.text}</span>
            </div>
          `).join('')}
        </div>
        <div class="brief-col">
          ${rightBriefs.map(b => `
            <div class="brief-row">
              <span class="b-num">${b.n}</span>
              <span><span class="b-city">${b.city}</span> — ${b.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>

  <div class="date-check">
    <span class="dc-tag">DATE CHECK · EXCLUDED OTHER DAYS:</span>
    <span>× Florida Learjet crash (25 Nov) · × US Sec. 301 earlier draft (25 Nov) · × COP31 earlier deadlock (22 Nov) · × EU Quantum Act proposal (earlier Nov)</span>
  </div>

  <div class="footer">
    <span>Every story occurred or was reported Thursday 26 Nov 2026 (00:00–23:59 UTC)</span>
    <span>Sources: Reuters · AP · BBC · FT · NASA · IAEA · ONS · Council of the EU · CBS · Original vector scenes</span>
  </div>
</div>
</body>
</html>`;

const browser = await chromium.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
});

try {
  const page = await browser.newPage({
    viewport: { width: 1024, height: 1024 },
    deviceScaleFactor: 1
  });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);

  const audit = await page.evaluate(() => {
    const issues = [];
    const root = document.documentElement;
    if (root.scrollWidth > 1024 || root.scrollHeight > 1024) {
      issues.push({ type: 'overflow', scrollWidth: root.scrollWidth, scrollHeight: root.scrollHeight });
    }
    const checkClip = (sel) => {
      for (const el of document.querySelectorAll(sel)) {
        const r = el.getBoundingClientRect();
        if (r.right > 1024.5 || r.bottom > 1024.5 || r.left < -0.5 || r.top < -0.5) {
          issues.push({ type: 'out-of-bounds', sel, text: el.textContent.slice(0, 40), rect: r });
        }
        if (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1) {
          issues.push({ type: 'clip', sel, text: el.textContent.slice(0, 40), sw: el.scrollWidth, cw: el.clientWidth, sh: el.scrollHeight, ch: el.clientHeight });
        }
      }
    };
    checkClip('.card');
    checkClip('.hero-hed');
    checkClip('.mid-hed');
    checkClip('.brief-row');

    const pinsOnly = Array.from(document.querySelectorAll('.map-panel svg circle'));
    for (let i = 0; i < pinsOnly.length; i++) {
      for (let j = i + 1; j < pinsOnly.length; j++) {
        const dx = parseFloat(pinsOnly[i].getAttribute('cx')) - parseFloat(pinsOnly[j].getAttribute('cx'));
        const dy = parseFloat(pinsOnly[i].getAttribute('cy')) - parseFloat(pinsOnly[j].getAttribute('cy'));
        const dist = Math.hypot(dx, dy);
        if (dist < 14) {
          issues.push({ type: 'pin-overlap', i, j, dist });
        }
      }
    }
    return { scrollW: root.scrollWidth, scrollH: root.scrollHeight, issues };
  });

  await page.screenshot({ path: outPng, type: 'png' });

  if (outThumb) {
    await page.setViewportSize({ width: 300, height: 300 });
    await page.evaluate(() => {
      document.documentElement.style.zoom = (300 / 1024).toFixed(6);
    });
    await page.screenshot({ path: outThumb, type: 'png' });
  }

  const size = statSync(outPng).size;
  if (audit.issues.length > 0) {
    console.error('RENDER AUDIT FAILED:', JSON.stringify(audit, null, 2));
    process.exitCode = 1;
  } else {
    console.log('RENDER AUDIT PASSED:', { bytes: size, outPng, scrollW: audit.scrollW, scrollH: audit.scrollH, issues: [] });
  }
} finally {
  await browser.close();
}
