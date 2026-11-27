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
    kicker: 'USA · WEATHER · AP / LA TIMES',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: "Nor'easter halts Macy's 100th; Pacifica pier falls",
    desc: 'Gusts above 50 mph move New York’s centennial parade to Saturday, trigger a New Jersey emergency, and fuel California swells snapping Pacifica Pier.',
    svg: `
      <rect width="320" height="114" fill="#1C314E"/>
      <rect y="84" width="320" height="30" fill="#0F1F36"/>
      <rect x="14" y="38" width="20" height="48" fill="#334E73"/>
      <rect x="38" y="20" width="26" height="66" fill="#274060"/>
      <rect x="70" y="46" width="20" height="40" fill="#334E73"/>
      <rect x="142" y="28" width="22" height="58" fill="#274060"/>
      <rect x="168" y="48" width="18" height="38" fill="#334E73"/>
      <line x1="20" y1="14" x2="128" y2="28" stroke="#93C5FD" stroke-width="1.6" stroke-dasharray="6 4"/>
      <line x1="10" y1="30" x2="136" y2="45" stroke="#BFDBFE" stroke-width="1.3" stroke-dasharray="6 4"/>
      <line x1="32" y1="48" x2="148" y2="62" stroke="#93C5FD" stroke-width="1.1" stroke-dasharray="5 5"/>
      <!-- Macy's parade balloon blown sideways -->
      <ellipse cx="102" cy="40" rx="32" ry="17" transform="rotate(-14 102 40)" fill="#FBBF24" stroke="#B45309" stroke-width="1.8"/>
      <circle cx="127" cy="29" r="8" fill="#DC2626"/>
      <ellipse cx="104" cy="36" rx="12" ry="5" transform="rotate(-14 104 36)" fill="#FDE68A" opacity="0.65"/>
      <line x1="86" y1="54" x2="76" y2="86" stroke="#E2E8F0" stroke-width="1.4"/>
      <line x1="114" y1="52" x2="118" y2="86" stroke="#E2E8F0" stroke-width="1.4"/>
      <!-- Broken Pacifica pier + surging wave -->
      <path d="M 186 86 Q 214 60 242 82 T 290 74 T 320 82 L 320 114 L 186 114 Z" fill="#0284C7"/>
      <path d="M 192 92 Q 222 72 252 88 T 320 88" fill="none" stroke="#BAE6FD" stroke-width="1.6"/>
      <rect x="196" y="60" width="60" height="6" fill="#78350F"/>
      <rect x="262" y="65" width="44" height="6" transform="rotate(11 262 65)" fill="#78350F"/>
      <rect x="208" y="66" width="6" height="20" fill="#92400E"/>
      <rect x="242" y="66" width="6" height="20" fill="#92400E"/>
      <rect x="218" y="10" width="90" height="24" rx="4" fill="#991B1B"/>
      <text x="263" y="26" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="11.5" font-weight="800">SAT NOV 28</text>
    `
  },
  {
    num: 2,
    kicker: 'EUROPE · BRUSSELS · FT / EU COUNCIL',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'EU taps De Cos for ECB as €1.58T budget stalls',
    desc: 'Leaders pick Spain’s Pablo Hernández de Cos to succeed Lagarde; summit pushes seven-year EU budget and €45bn Kyiv loan into December.',
    svg: `
      <rect width="320" height="114" fill="#172E61"/>
      <!-- Glowing EU 12-star circle behind ECB facade -->
      <circle cx="114" cy="57" r="46" fill="#1E3A8A"/>
      <circle cx="114" cy="57" r="38" fill="none" stroke="#FACC15" stroke-width="2.4" stroke-dasharray="2.5 9.4"/>
      <polygon points="114,24 76,45 152,45" fill="#F8FAFC"/>
      <rect x="82" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="99" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="119" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="136" y="45" width="9" height="36" fill="#F8FAFC"/>
      <rect x="74" y="81" width="80" height="8" fill="#CBD5E1"/>
      <rect x="70" y="89" width="88" height="6" fill="#94A3B8"/>
      <!-- Clean high-legibility euro budget badges -->
      <rect x="184" y="16" width="122" height="36" rx="5" fill="#FFFFFF" stroke="#60A5FA" stroke-width="1.4"/>
      <text x="245" y="40" text-anchor="middle" fill="#1E3A8A" font-family="Segoe UI, Arial" font-size="18" font-weight="800">€1.58T</text>
      <rect x="184" y="62" width="122" height="36" rx="5" fill="#991B1B"/>
      <text x="245" y="87" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="18" font-weight="800">€45B</text>
    `
  },
  {
    num: 3,
    kicker: 'MIDDLE EAST · BBC / CNN / AA',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    hed: 'Kuwait drone debris kills two; Gaza & Yemen hit',
    desc: 'Falling drone wreckage kills two Italian contractors in Kuwait as Tehran denies firing; strikes hit central Gaza while Saudi jets hit 50 Houthi sites.',
    svg: `
      <rect width="320" height="114" fill="#3B1D16"/>
      <rect y="78" width="320" height="36" fill="#5E2E22"/>
      <path d="M 0 82 L 72 64 L 154 80 L 236 62 L 320 76 L 320 114 L 0 114 Z" fill="#7C3F2C"/>
      <!-- Oil terminal silhouette & radar interception -->
      <rect x="218" y="54" width="18" height="24" fill="#1E293B"/>
      <rect x="244" y="48" width="16" height="30" fill="#1E293B"/>
      <path d="M 222 54 Q 232 22 248 48" fill="#F97316"/>
      <path d="M 248 48 Q 268 18 286 42" fill="#475569" opacity="0.8"/>
      <!-- Trajectory arc + radar rings -->
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
    desc: 'Bank of Korea hikes 25bp with US shut; Taiex adds 2.5%, Euro Stoxx gains 1.6%.',
    svg: `
      <rect width="236" height="72" fill="#EBF5F0"/>
      <line x1="22" y1="56" x2="142" y2="56" stroke="#94A3B8" stroke-width="1.2"/>
      <!-- Clean unobstructed bar chart -->
      <rect x="30" y="38" width="26" height="18" rx="2" fill="#059669"/>
      <text x="43" y="34" text-anchor="middle" fill="#065F46" font-family="Segoe UI, Arial" font-size="8.2" font-weight="800">+0.9%</text>
      <text x="43" y="66" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.4" font-weight="700">NIKKEI</text>
      <rect x="68" y="26" width="26" height="30" rx="2" fill="#2563EB"/>
      <text x="81" y="22" text-anchor="middle" fill="#1E40AF" font-family="Segoe UI, Arial" font-size="8.2" font-weight="800">+1.6%</text>
      <text x="81" y="66" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.4" font-weight="700">STOXX</text>
      <rect x="106" y="14" width="26" height="42" rx="2" fill="#0D9488"/>
      <text x="119" y="11" text-anchor="middle" fill="#0F766E" font-family="Segoe UI, Arial" font-size="8.2" font-weight="800">+2.5%</text>
      <text x="119" y="66" text-anchor="middle" fill="#334155" font-family="Segoe UI, Arial" font-size="7.4" font-weight="700">TAIEX</text>
      <rect x="150" y="14" width="74" height="44" rx="5" fill="#14532D"/>
      <text x="187" y="37" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="15.5" font-weight="800">3.25%</text>
      <text x="187" y="51" text-anchor="middle" fill="#BBF7D0" font-family="Segoe UI, Arial" font-size="8.5" font-weight="700">BOK +25bp</text>
    `
  },
  {
    num: 5,
    kicker: 'UK DATA · ONS / BBC',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'UK net migration drops 62% to 77,000',
    desc: 'ONS report shows arrivals fell from 204k a year earlier, down over 90% from 2023.',
    svg: `
      <rect width="236" height="72" fill="#EFF3F8"/>
      <rect x="34" y="14" width="32" height="42" rx="2" fill="#64748B"/>
      <text x="50" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="9.5" font-weight="700">944k</text>
      <text x="50" y="66" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="8" font-weight="700">'23</text>
      <rect x="78" y="34" width="32" height="22" rx="2" fill="#2563EB"/>
      <text x="94" y="49" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="9" font-weight="700">204k</text>
      <text x="94" y="66" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="8" font-weight="700">'25</text>
      <rect x="122" y="47" width="32" height="9" rx="2" fill="#DC2626"/>
      <text x="138" y="43" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="9.5" font-weight="800">77k</text>
      <text x="138" y="66" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="8" font-weight="800">'26</text>
      <path d="M 70 14 L 138 30" stroke="#DC2626" stroke-width="2.4" stroke-dasharray="4 2"/>
      <polygon points="135,25 144,32 134,34" fill="#DC2626"/>
      <rect x="166" y="16" width="58" height="40" rx="5" fill="#991B1B"/>
      <text x="195" y="41" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="14.5" font-weight="800">-62%</text>
    `
  },
  {
    num: 6,
    kicker: 'UKRAINE · BBC / IAEA',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: 'Kyiv warns on grid risk; IAEA seeks plant truce',
    desc: 'Zelenskyy notes Patriot gaps after ZNPP power cut; IAEA presses for local ceasefire.',
    svg: `
      <rect width="236" height="72" fill="#DCE8F7"/>
      <!-- Blue/yellow Ukrainian sky/ground band -->
      <rect y="50" width="236" height="22" fill="#FDE047" opacity="0.45"/>
      <!-- High-voltage lattice pylon -->
      <line x1="60" y1="8" x2="44" y2="64" stroke="#1E3A8A" stroke-width="2.5"/>
      <line x1="60" y1="8" x2="76" y2="64" stroke="#1E3A8A" stroke-width="2.5"/>
      <line x1="34" y1="22" x2="86" y2="22" stroke="#1E3A8A" stroke-width="2.4"/>
      <line x1="40" y1="38" x2="80" y2="38" stroke="#1E3A8A" stroke-width="2"/>
      <line x1="46" y1="52" x2="74" y2="52" stroke="#1E3A8A" stroke-width="1.8"/>
      <!-- Nuclear cooling tower + lightning -->
      <path d="M 118 64 Q 126 42 122 20 L 154 20 Q 150 42 158 64 Z" fill="#64748B"/>
      <ellipse cx="138" cy="14" rx="14" ry="5" fill="#E2E8F0"/>
      <polygon points="184,14 170,38 184,38 176,58 202,30 187,30" fill="#EA580C"/>
      <line x1="168" y1="14" x2="206" y2="58" stroke="#DC2626" stroke-width="2.4"/>
    `
  },
  {
    num: 7,
    kicker: 'SE ASIA · AP / TAIPEI TIMES',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    hed: 'Bangkok refinery blast hurts 9; Bogor mine 16 dead',
    desc: 'Unit 4 blast halts Thai fuel plant; flood in West Java gold shaft leaves 10 missing.',
    svg: `
      <rect width="236" height="72" fill="#F7E4D7"/>
      <rect y="54" width="236" height="18" fill="#B45309" opacity="0.35"/>
      <!-- Refinery stacks with bold fire & smoke -->
      <rect x="46" y="28" width="18" height="32" fill="#475569"/>
      <rect x="74" y="34" width="18" height="26" fill="#334155"/>
      <rect x="102" y="24" width="22" height="36" fill="#64748B"/>
      <path d="M 48 28 Q 56 4 68 28" fill="#EA580C"/>
      <path d="M 74 34 Q 84 10 96 34" fill="#DC2626"/>
      <circle cx="90" cy="16" r="10" fill="#475569" opacity="0.65"/>
      <circle cx="106" cy="13" r="12" fill="#64748B" opacity="0.55"/>
      <!-- Flooded mine entrance & rescue helmet -->
      <path d="M 150 60 L 150 30 Q 178 16 206 30 L 206 60 Z" fill="#78350F"/>
      <rect x="158" y="42" width="40" height="18" fill="#0284C7"/>
      <path d="M 164 26 Q 178 16 192 26 Z" fill="#FACC15"/>
    `
  },
  {
    num: 8,
    kicker: 'SPORT · THANKSGIVING · CBS',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    hed: 'Bears stun Lions 39–35 with 3 seconds left',
    desc: 'Caleb Williams hits Rome Odunze for winning touchdown to lift Chicago atop NFC North.',
    svg: `
      <rect width="236" height="72" fill="#14532D"/>
      <!-- Stadium field yard lines + goalpost -->
      <line x1="0" y1="54" x2="236" y2="54" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="28" y1="54" x2="12" y2="72" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="88" y1="54" x2="78" y2="72" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="148" y1="54" x2="158" y2="72" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="208" y1="54" x2="224" y2="72" stroke="#FFFFFF" stroke-width="1.2" opacity="0.6"/>
      <line x1="62" y1="42" x2="62" y2="64" stroke="#FACC15" stroke-width="3.5"/>
      <line x1="38" y1="42" x2="86" y2="42" stroke="#FACC15" stroke-width="3.5"/>
      <line x1="38" y1="12" x2="38" y2="42" stroke="#FACC15" stroke-width="3.2"/>
      <line x1="86" y1="12" x2="86" y2="42" stroke="#FACC15" stroke-width="3.2"/>
      <ellipse cx="62" cy="24" rx="11" ry="6.5" transform="rotate(-22 62 24)" fill="#92400E" stroke="#FDE68A" stroke-width="1.2"/>
      <!-- Big crisp stadium scoreboard -->
      <rect x="116" y="13" width="108" height="36" rx="4" fill="#0F172A" stroke="#FACC15" stroke-width="1.4"/>
      <text x="170" y="38" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="18" font-weight="800">39 – 35</text>
    `
  },
  {
    num: 9,
    kicker: 'SPACE & AI · NASA / TC',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'Progress 97 docks; FCC clears 1M sats; Nvidia halt',
    desc: 'ISS gets 3t cargo as SpaceX wins orbital nod; Nvidia pauses AI chips to 4 Asian nations.',
    svg: `
      <rect width="236" height="72" fill="#0F1E3A"/>
      <path d="M 0 72 Q 118 36 236 72 Z" fill="#1D4ED8" opacity="0.7"/>
      <circle cx="195" cy="18" r="1.5" fill="#FFFFFF"/>
      <circle cx="154" cy="14" r="1.2" fill="#FFFFFF"/>
      <circle cx="132" cy="26" r="1.2" fill="#FFFFFF"/>
      <!-- ISS solar wings + docking freighter -->
      <rect x="44" y="14" width="16" height="34" rx="1" fill="#3B82F6" stroke="#93C5FD"/>
      <rect x="92" y="14" width="16" height="34" rx="1" fill="#3B82F6" stroke="#93C5FD"/>
      <rect x="34" y="27" width="86" height="8" rx="2" fill="#E2E8F0"/>
      <rect x="122" y="25" width="22" height="12" rx="3" fill="#CBD5E1"/>
      <circle cx="122" cy="31" r="3" fill="#34D399"/>
      <!-- Orbiting constellation ring -->
      <ellipse cx="186" cy="34" rx="32" ry="12" transform="rotate(-18 186 34)" fill="none" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="4 3"/>
      <circle cx="186" cy="34" r="10" fill="#2563EB"/>
    `
  },
  {
    num: 10,
    kicker: 'AFRICA · REUTERS / NATION',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    hed: 'Bissau delays vote to 2028; Kenya halts US hub',
    desc: 'Junta pushes polls two years; Kenyan court blocks US Laikipia Ebola quarantine hub.',
    svg: `
      <rect width="236" height="72" fill="#FEF4DA"/>
      <rect x="28" y="24" width="58" height="36" rx="3" fill="#92400E"/>
      <rect x="42" y="18" width="30" height="8" fill="#FFFFFF" stroke="#78350F" stroke-width="1.4"/>
      <text x="57" y="48" text-anchor="middle" fill="#FDE047" font-family="Segoe UI, Arial" font-size="14" font-weight="800">2028</text>
      <!-- Court scales & blocked red clinic cross -->
      <line x1="126" y1="12" x2="126" y2="58" stroke="#78350F" stroke-width="2.5"/>
      <line x1="104" y1="20" x2="148" y2="20" stroke="#78350F" stroke-width="2.4"/>
      <polygon points="104,20 96,38 112,38" fill="#D97706"/>
      <polygon points="148,20 140,38 156,38" fill="#D97706"/>
      <circle cx="192" cy="36" r="18" fill="#FFFFFF" stroke="#DC2626" stroke-width="3"/>
      <rect x="189" y="25" width="6" height="22" fill="#DC2626"/>
      <rect x="181" y="33" width="22" height="6" fill="#DC2626"/>
      <line x1="178" y1="22" x2="206" y2="50" stroke="#7F1D1D" stroke-width="3.2"/>
    `
  },
  {
    num: 11,
    kicker: 'LATIN AMERICA · AA / BLOOMBERG',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    hed: 'Colombia quits BRICS; Mexico blasts DEA on quake',
    desc: 'Bogotá exits bloc bid for US ties; Sheinbaum hits DEA as M5.7 quake strikes off Baja.',
    svg: `
      <rect width="236" height="72" fill="#FDECEC"/>
      <path d="M 0 56 Q 60 44 120 56 T 236 56 L 236 72 L 0 72 Z" fill="#FCA5A5" opacity="0.45"/>
      <!-- Clean bright seismograph trace + broken chain link -->
      <polyline points="20,38 42,38 50,16 58,56 66,10 74,48 82,34 114,34" fill="none" stroke="#DC2626" stroke-width="2.8"/>
      <circle cx="152" cy="36" r="15" fill="none" stroke="#1E3A8A" stroke-width="4" stroke-dasharray="14 6"/>
      <circle cx="192" cy="36" r="15" fill="none" stroke="#991B1B" stroke-width="4" stroke-dasharray="14 6"/>
      <line x1="168" y1="22" x2="176" y2="50" stroke="#991B1B" stroke-width="2.6"/>
    `
  }
];

const pins = [
  { n: 1, x: 80, y: 58 },
  { n: 8, x: 68, y: 42 },
  { n: 11, x: 96, y: 98 },
  { n: 2, x: 162, y: 50 },
  { n: 5, x: 147, y: 38 },
  { n: 6, x: 186, y: 44 },
  { n: 3, x: 196, y: 72 },
  { n: 7, x: 250, y: 80 },
  { n: 4, x: 274, y: 56 },
  { n: 10, x: 166, y: 96 },
  { n: 9, x: 298, y: 20 }
];

const utcTimeline = [
  { t: '00:30', label: 'Bangkok blast' },
  { t: '01:00', label: 'BoK rate 3.25%' },
  { t: '09:30', label: 'UK ONS 77k' },
  { t: '14:00', label: 'EU De Cos pick' },
  { t: '16:30', label: "Macy's off" },
  { t: '20:30', label: 'Bears 39–35' },
  { t: '22:00', label: 'ISS & 1M sats' }
];

const leftBriefs = [
  { n: 12, city: 'Canberra', text: 'Australia passes 5% online safety fine bill' },
  { n: 13, city: 'Pyongyang', text: 'North Korea gives Swiss envoy 48h to exit' },
  { n: 14, city: 'Zurich', text: 'FIFA says <0.1% files in 12 GB breach claim' },
  { n: 15, city: 'Global', text: 'Binance restores transfers after hack pause' },
  { n: 16, city: 'Ibiza', text: 'Diesel tanker Med Emre sinks; 1 dead, 16 saved' },
  { n: 17, city: 'Dhaka', text: '400 garment plants shut amid wage protests' },
  { n: 18, city: 'Belgrade', text: 'Serbia sets Dec 27 presidential election' },
  { n: 19, city: 'Paris', text: 'UNESCO & WAN-IFRA issue AI newsroom guide' },
  { n: 20, city: 'Cambridge', text: 'Jury convicts LNER train stabbing suspect' },
  { n: 21, city: 'Bengaluru', text: 'Flipkart CEO Kalyan Krishnamurthy exits' }
];

const rightBriefs = [
  { n: 22, city: 'Beijing', text: 'Golf clubs ordered shut; Premier Li meets ADB' },
  { n: 23, city: 'Ottawa', text: 'Canada commits C$52M for domestic AI tools' },
  { n: 24, city: 'Buenos Aires', text: 'Brazil recalls Ambassador Bitelli over dispute' },
  { n: 25, city: 'Batumi', text: 'UEFA Beşiktaş tie suspended over fan clashes' },
  { n: 26, city: 'Giza', text: 'Driver arrested after 31-death tanker pileup' },
  { n: 27, city: 'Baghdad', text: 'Iraq seals informal oil-smuggling crossings' },
  { n: 28, city: 'Khartoum', text: 'UN logs 383,000 displaced across Kordofan' },
  { n: 29, city: 'Brussels', text: 'Eldridge seals agreement for Lukoil assets' },
  { n: 30, city: 'London', text: 'Brent crude hits $95.58; gold slips 0.8%' },
  { n: 31, city: 'Geneva', text: 'Trump & NATO’s Rutte warn Moscow on talks' }
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
    font-size: 9.2px; font-weight: 800; letter-spacing: 0.6px; color: #44403C;
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
    font-size: 12.2px; color: #374151; font-weight: 400;
  }

  .utc-strip {
    display: flex; align-items: center; justify-content: space-between;
    background: #EAE2D1; border: 1px solid #CFC5B2; border-radius: 3px;
    padding: 4px 10px; font-size: 9.1px;
  }
  .utc-title {
    font-weight: 800; color: #8B1E1E; letter-spacing: 0.4px; white-space: nowrap;
  }
  .utc-item { color: #1F2937; white-space: nowrap; font-weight: 600; }
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
    width: 21px; height: 21px; border-radius: 50%;
    background: #991B1B; color: #FFFFFF; border: 1.5px solid #FFFFFF;
    font-family: "Segoe UI", Arial, sans-serif; font-size: 11.2px; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.35);
  }
  .num-badge.sm { width: 18px; height: 18px; font-size: 9.8px; top: 5px; left: 5px; }
  .hero-body { padding: 8px 10px 9px; display: flex; flex-direction: column; flex: 1; gap: 3.5px; }
  .card-meta { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
  .kicker {
    font-size: 8px; font-weight: 800; letter-spacing: 0.4px; color: #991B1B; text-transform: uppercase;
  }
  .cf {
    font-size: 7.4px; font-weight: 800; padding: 1px 5px; border-radius: 2px;
    letter-spacing: 0.3px; border: 1px solid; white-space: nowrap;
  }
  .cf-official { color: #1E3A8A; border-color: #93C5FD; background: #EFF6FF; }
  .cf-confirmed { color: #166534; border-color: #86EFAC; background: #F0FDF4; }
  .cf-reported { color: #92400E; border-color: #FCD34D; background: #FFFBEB; }

  .hero-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 17.5px; font-weight: 700; line-height: 1.13; color: #111827;
  }
  .hero-desc { font-size: 10.4px; line-height: 1.30; color: #374151; }

  .mid-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .mid-body { padding: 6px 8px 7px; display: flex; flex-direction: column; flex: 1; gap: 3px; }
  .mid-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 13.8px; font-weight: 700; line-height: 1.13; color: #111827;
  }
  .mid-desc { font-size: 9.7px; line-height: 1.25; color: #374151; }

  .bottom-split { display: grid; grid-template-columns: 332px 1fr; gap: 10px; flex: 1; min-height: 0; }
  .map-panel {
    background: #FFFFFF; border: 1px solid #C6BCA6; border-radius: 4px;
    padding: 6px 8px; display: flex; flex-direction: column; justify-content: space-between;
  }
  .panel-hdr {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 9.4px; font-weight: 800; color: #8B1E1E;
    letter-spacing: 0.4px; border-bottom: 1px solid #E5DFD2; padding-bottom: 3px; margin-bottom: 4px;
  }
  .panel-hdr span.sub { font-weight: 600; color: #57534E; font-size: 8.2px; }

  .briefs-panel {
    background: #FAF7F0; border: 1px solid #C6BCA6; border-radius: 4px;
    padding: 6px 10px; display: flex; flex-direction: column;
  }
  .briefs-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 14px; flex: 1; }
  .brief-col { display: flex; flex-direction: column; justify-content: space-between; }
  .brief-row {
    font-size: 10.1px; line-height: 1.28; color: #1F2937;
    display: flex; align-items: baseline; gap: 4px;
  }
  .b-num {
    font-weight: 800; color: #991B1B; font-family: "Segoe UI", Arial, sans-serif; min-width: 16px; font-size: 9.6px;
  }
  .b-city { font-weight: 800; color: #111827; }

  .map-legend {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 7.9px; color: #44403C; padding-top: 3px; border-top: 1px solid #E5DFD2;
  }
  .date-check {
    background: #FFFDF9; border: 1.3px solid #991B1B; border-radius: 3px;
    padding: 4px 9px; font-size: 8.6px; color: #1F2937;
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .dc-tag { font-weight: 800; color: #991B1B; white-space: nowrap; font-size: 8.6px; }
  .footer {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.3px; color: #44403C; font-weight: 600;
    border-top: 1.5px solid #1C1917; padding-top: 3px;
  }
</style>
</head>
<body>
<div class="page">
  <div class="top-micro">
    <span>THE WORLD IN ONE DAY · 00:00–23:59 UTC</span>
    <span>31 VERIFIED STORIES · 9 REGIONS · ALL FROM 26 NOVEMBER 2026</span>
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
          <svg viewBox="0 0 236 72" width="100%" height="70" preserveAspectRatio="xMidYMid slice" style="display:block">${c.svg}</svg>
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
      <svg viewBox="0 0 320 156" width="100%" height="154" style="display:block;border-radius:3px;background:#DCE7EE">
        <line x1="0" y1="78" x2="320" y2="78" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <line x1="160" y1="0" x2="160" y2="156" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <path d="M 28 32 C 46 20 82 18 106 25 C 118 30 114 48 102 58 L 90 72 L 82 86 C 72 80 62 72 52 58 C 36 52 24 42 28 32 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 118 10 C 134 8 142 16 135 28 C 122 30 114 22 118 10 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 86 90 C 102 88 122 98 124 114 C 122 130 108 148 96 150 C 88 148 84 128 84 106 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 145 36 L 152 34 L 152 44 L 145 44 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 154 24 C 172 18 190 22 194 36 C 194 50 182 58 168 58 L 152 54 C 150 42 152 30 154 24 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 144 64 C 166 60 184 68 192 84 C 192 104 176 128 164 134 C 156 128 150 104 142 86 C 138 74 140 66 144 64 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 192 22 C 236 16 286 20 296 42 C 294 58 276 68 264 78 L 254 92 L 238 82 L 222 90 L 208 72 L 190 66 C 188 48 190 32 192 22 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 284 44 L 292 42 L 292 56 L 284 58 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 264 108 C 282 104 300 112 300 128 C 296 140 274 142 262 132 C 258 120 260 112 264 108 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 268 12 Q 298 10 314 28" fill="none" stroke="#1E3A8A" stroke-width="1" stroke-dasharray="3 2"/>
        ${pins.map(p => `
          <circle cx="${p.x}" cy="${p.y}" r="8" fill="${p.n === 9 ? '#1E3A8A' : '#991B1B'}" stroke="#FFFFFF" stroke-width="1.4"/>
          <text x="${p.x}" y="${p.y + 3.2}" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="8.5" font-weight="800">${p.n}</text>
        `).join('')}
      </svg>
      <div class="map-legend">
        <span><b style="color:#1E3A8A">OFFICIAL</b> = gov/body</span>
        <span><b style="color:#166534">CONFIRMED</b> = 2+ wires</span>
        <span><b style="color:#92400E">REPORTED</b> = 1 wire</span>
      </div>
    </div>

    <div class="briefs-panel">
      <div class="panel-hdr">
        <span>ALSO ON 26 NOVEMBER 2026 — BRIEFS 12–31</span>
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
