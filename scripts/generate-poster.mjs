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
    kicker: 'USA · COASTAL STORMS',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    src: 'AP · LA Times',
    hed: "Nor'easter delays Macy's 100th parade; Pacifica pier falls",
    desc: 'Gale gusts above 50 mph halt New York’s centennial march until Saturday, trigger a New Jersey emergency, and drive California king tides tearing Pacifica Pier.',
    svg: `
      <rect width="320" height="96" fill="#DCE8F5"/>
      <rect y="70" width="320" height="26" fill="#B8CDE3"/>
      <rect x="18" y="34" width="18" height="38" fill="#64748B"/>
      <rect x="40" y="18" width="24" height="54" fill="#475569"/>
      <rect x="68" y="40" width="18" height="32" fill="#64748B"/>
      <rect x="134" y="26" width="20" height="46" fill="#475569"/>
      <rect x="160" y="42" width="18" height="30" fill="#64748B"/>
      <line x1="22" y1="12" x2="122" y2="26" stroke="#1E3A8A" stroke-width="1.4" stroke-dasharray="5 4"/>
      <line x1="14" y1="24" x2="130" y2="40" stroke="#3B82F6" stroke-width="1.1" stroke-dasharray="5 4"/>
      <ellipse cx="96" cy="36" rx="28" ry="15" transform="rotate(-14 96 36)" fill="#F59E0B" stroke="#92400E" stroke-width="1.6"/>
      <circle cx="118" cy="27" r="7" fill="#DC2626"/>
      <line x1="82" y1="49" x2="72" y2="72" stroke="#1E293B" stroke-width="1.3"/>
      <line x1="108" y1="47" x2="112" y2="72" stroke="#1E293B" stroke-width="1.3"/>
      <path d="M 184 74 Q 208 56 232 72 T 278 68 T 320 74 L 320 96 L 184 96 Z" fill="#0284C7"/>
      <rect x="196" y="52" width="96" height="5" fill="#78350F"/>
      <rect x="208" y="57" width="5" height="17" fill="#92400E"/>
      <rect x="244" y="57" width="5" height="17" fill="#92400E"/>
      <rect x="208" y="10" width="98" height="26" rx="4" fill="#991B1B"/>
      <text x="257" y="27" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12" font-weight="700">SAT 28 NOV</text>
    `
  },
  {
    num: 2,
    kicker: 'EUROPE · BRUSSELS & ECB',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'FT · Council of EU',
    hed: 'EU picks De Cos for ECB as €1.58tn budget talks stall',
    desc: 'Euro leaders tap Spain’s Pablo Hernández de Cos to succeed Lagarde; two-day summit pushes €1.58tn seven-year budget and €45bn Kyiv loan to December.',
    svg: `
      <rect width="320" height="96" fill="#E3EAF6"/>
      <circle cx="64" cy="48" r="36" fill="#1E3A8A"/>
      <circle cx="64" cy="48" r="29" fill="none" stroke="#FACC15" stroke-width="1.8" stroke-dasharray="2 7.2"/>
      <polygon points="64,25 36,40 92,40" fill="#F8FAFC"/>
      <rect x="42" y="40" width="6" height="27" fill="#F8FAFC"/>
      <rect x="54" y="40" width="6" height="27" fill="#F8FAFC"/>
      <rect x="68" y="40" width="6" height="27" fill="#F8FAFC"/>
      <rect x="80" y="40" width="6" height="27" fill="#F8FAFC"/>
      <rect x="37" y="67" width="54" height="5" fill="#CBD5E1"/>
      <rect x="120" y="14" width="184" height="28" rx="4" fill="#1E3A8A"/>
      <text x="212" y="33" text-anchor="middle" fill="#FDE047" font-family="Georgia, serif" font-size="13" font-weight="700">EU 27 · ECB NOMINEE</text>
      <rect x="120" y="50" width="88" height="34" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.2"/>
      <text x="164" y="72" text-anchor="middle" fill="#1E3A8A" font-family="Georgia, serif" font-size="15.5" font-weight="700">€1.58T</text>
      <rect x="216" y="50" width="88" height="34" rx="4" fill="#FFFFFF" stroke="#991B1B" stroke-width="1.2"/>
      <text x="260" y="72" text-anchor="middle" fill="#991B1B" font-family="Georgia, serif" font-size="15.5" font-weight="700">€45B</text>
    `
  },
  {
    num: 3,
    kicker: 'MIDDLE EAST · GULF & GAZA',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    src: 'BBC · CNN · AA',
    hed: 'Kuwait drone debris kills two; raids hit Gaza & Yemen',
    desc: 'Falling drone debris kills two Italian contractors in Kuwait as Iran denies firing; Israeli strikes hit central Gaza while Saudi jets bomb 50 Houthi sites.',
    svg: `
      <rect width="320" height="96" fill="#F4E3D7"/>
      <path d="M 0 76 L 68 62 L 146 74 L 230 60 L 320 72 L 320 96 L 0 96 Z" fill="#C28D6B"/>
      <circle cx="88" cy="72" r="24" fill="none" stroke="#B45309" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="88" cy="72" r="42" fill="none" stroke="#991B1B" stroke-width="1.1" stroke-dasharray="4 4"/>
      <path d="M 22 18 Q 78 12 128 50" fill="none" stroke="#991B1B" stroke-width="2.2" stroke-dasharray="5 3"/>
      <polygon points="124,42 136,52 125,58" fill="#991B1B"/>
      <circle cx="88" cy="72" r="4.5" fill="#991B1B"/>
      <rect x="172" y="14" width="132" height="28" rx="4" fill="#991B1B"/>
      <text x="238" y="33" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12.5" font-weight="700">KUWAIT · GAZA</text>
      <rect x="172" y="50" width="132" height="28" rx="4" fill="#78350F"/>
      <text x="238" y="69" text-anchor="middle" fill="#FDE047" font-family="Georgia, serif" font-size="12.5" font-weight="700">50 YEMEN SITES</text>
    `
  }
];

const midCards = [
  {
    num: 4,
    kicker: 'MARKETS · ASIA & EU',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'BoK · Reuters',
    hed: 'Korea lifts rate to 3.25% as Asian stocks rebound',
    desc: 'Bank of Korea hikes 25bp with US shut; Taiex rises 2.5%, Stoxx 600 adds 1.6%.',
    svg: `
      <rect width="236" height="58" fill="#EEF4F0"/>
      <text x="30" y="18" fill="#0F172A" font-family="Segoe UI, Arial" font-size="8.4" font-weight="700">TAIEX</text>
      <rect x="68" y="10" width="66" height="9" rx="2" fill="#0D9488"/>
      <text x="138" y="18" fill="#0F766E" font-family="Segoe UI, Arial" font-size="8.6" font-weight="700">+2.5%</text>
      <text x="30" y="33" fill="#0F172A" font-family="Segoe UI, Arial" font-size="8.4" font-weight="700">STOXX</text>
      <rect x="68" y="25" width="46" height="9" rx="2" fill="#2563EB"/>
      <text x="118" y="33" fill="#1D4ED8" font-family="Segoe UI, Arial" font-size="8.6" font-weight="700">+1.6%</text>
      <text x="30" y="48" fill="#0F172A" font-family="Segoe UI, Arial" font-size="8.4" font-weight="700">NIKKEI</text>
      <rect x="68" y="40" width="28" height="9" rx="2" fill="#059669"/>
      <text x="100" y="48" fill="#047857" font-family="Segoe UI, Arial" font-size="8.6" font-weight="700">+0.9%</text>
      <rect x="176" y="11" width="52" height="36" rx="4" fill="#14532D"/>
      <text x="202" y="29" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12.5" font-weight="700">3.25%</text>
      <text x="202" y="41" text-anchor="middle" fill="#BBF7D0" font-family="Segoe UI, Arial" font-size="7.5" font-weight="700">+25bp</text>
    `
  },
  {
    num: 5,
    kicker: 'UK DATA · ONS',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'ONS · BBC',
    hed: 'UK net migration drops 62% YoY to 77,000',
    desc: 'ONS shows net arrivals fell from 204k a year earlier, down over 90% from 2023.',
    svg: `
      <rect width="236" height="58" fill="#F1F5F9"/>
      <rect x="34" y="11" width="32" height="35" rx="2" fill="#64748B"/>
      <text x="50" y="30" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="8.6" font-weight="700">944k</text>
      <text x="50" y="54" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="7.2" font-weight="600">Mar '23</text>
      <rect x="82" y="28" width="32" height="18" rx="2" fill="#2563EB"/>
      <text x="98" y="41" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="8.4" font-weight="700">204k</text>
      <text x="98" y="54" text-anchor="middle" fill="#475569" font-family="Segoe UI, Arial" font-size="7.2" font-weight="600">Jun '25</text>
      <rect x="130" y="39" width="32" height="7" rx="2" fill="#DC2626"/>
      <text x="146" y="35" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="8.6" font-weight="700">77k</text>
      <text x="146" y="54" text-anchor="middle" fill="#B91C1C" font-family="Segoe UI, Arial" font-size="7.2" font-weight="700">Jun '26</text>
      <path d="M 68 12 L 138 24" stroke="#DC2626" stroke-width="2" stroke-dasharray="3 2"/>
      <rect x="176" y="12" width="52" height="34" rx="4" fill="#991B1B"/>
      <text x="202" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="13" font-weight="700">-62%</text>
    `
  },
  {
    num: 6,
    kicker: 'UKRAINE & RUSSIA',
    conf: 'CONFIRMED',
    confCls: 'cf-confirmed',
    src: 'BBC · IAEA',
    hed: 'Kyiv warns on grid risk; IAEA seeks plant truce',
    desc: 'Zelenskyy notes Patriot gaps after ZNPP power cut; Eldridge buys Lukoil global units.',
    svg: `
      <rect width="236" height="58" fill="#E6ECF5"/>
      <line x1="52" y1="8" x2="38" y2="52" stroke="#1E3A8A" stroke-width="2.2"/>
      <line x1="52" y1="8" x2="66" y2="52" stroke="#1E3A8A" stroke-width="2.2"/>
      <line x1="30" y1="22" x2="74" y2="22" stroke="#D97706" stroke-width="2.2"/>
      <line x1="36" y1="36" x2="68" y2="36" stroke="#1E3A8A" stroke-width="1.6"/>
      <polygon points="94,14 82,34 94,34 88,50 108,28 96,28" fill="#D97706"/>
      <rect x="122" y="14" width="102" height="30" rx="4" fill="#1E3A8A"/>
      <text x="173" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12" font-weight="700">ZNPP TRUCE</text>
    `
  },
  {
    num: 7,
    kicker: 'ASIA FLASHPOINTS',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    src: 'AP · NK News',
    hed: 'Bangkok fire hurts 9; Pyongyang ousts Swiss',
    desc: 'Bangchak Unit 4 blast halts Thailand fuel complex; North Korea gives mission 48 hours.',
    svg: `
      <rect width="236" height="58" fill="#FCEEE6"/>
      <rect x="34" y="25" width="16" height="27" fill="#475569"/>
      <rect x="58" y="29" width="16" height="23" fill="#64748B"/>
      <path d="M 35 25 Q 42 7 50 25" fill="#EA580C"/>
      <path d="M 59 29 Q 66 11 74 29" fill="#DC2626"/>
      <rect x="114" y="13" width="44" height="32" rx="3" fill="#DC2626"/>
      <rect x="133" y="19" width="6" height="20" fill="#FFFFFF"/>
      <rect x="126" y="26" width="20" height="6" fill="#FFFFFF"/>
      <rect x="168" y="13" width="56" height="32" rx="4" fill="#7C2D12"/>
      <text x="196" y="34" text-anchor="middle" fill="#FDE047" font-family="Georgia, serif" font-size="13.5" font-weight="700">48H</text>
    `
  },
  {
    num: 8,
    kicker: 'SPACE & ORBIT',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'NASA · AFP',
    hed: 'Progress 97 docks at ISS; FCC clears 1M sats',
    desc: 'Cargo craft brings three tons and robot arm as SpaceX wins orbital network approval.',
    svg: `
      <rect width="236" height="58" fill="#13223D"/>
      <path d="M 0 58 Q 118 32 236 58 Z" fill="#1D4ED8" opacity="0.65"/>
      <rect x="28" y="16" width="12" height="24" rx="1" fill="#60A5FA"/>
      <rect x="68" y="16" width="12" height="24" rx="1" fill="#60A5FA"/>
      <rect x="42" y="24" width="24" height="8" rx="2" fill="#F8FAFC"/>
      <circle cx="96" cy="28" r="3.5" fill="#34D399"/>
      <rect x="118" y="13" width="106" height="32" rx="4" fill="#1E3A8A" stroke="#60A5FA"/>
      <text x="171" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12.5" font-weight="700">1M SATS</text>
    `
  },
  {
    num: 9,
    kicker: 'TECH & DIGITAL LAW',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'Gov.au · TC',
    hed: 'Nvidia halts SE Asia chips; Australia 5% bill',
    desc: 'US firm pauses AI server deliveries to four nations; Canberra backs Digital Duty of Care.',
    svg: `
      <rect width="236" height="58" fill="#E3F3EF"/>
      <rect x="34" y="12" width="36" height="34" rx="5" fill="#0F766E"/>
      <text x="52" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Segoe UI, Arial" font-size="11" font-weight="700">GPU</text>
      <circle cx="70" cy="14" r="6.5" fill="#DC2626"/>
      <line x1="66" y1="14" x2="74" y2="14" stroke="#FFFFFF" stroke-width="2"/>
      <rect x="96" y="13" width="126" height="32" rx="4" fill="#134E4A"/>
      <text x="159" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="13" font-weight="700">5% FINE BILL</text>
    `
  },
  {
    num: 10,
    kicker: 'AFRICA · COURTS & POLLS',
    conf: 'REPORTED',
    confCls: 'cf-reported',
    src: 'Reuters · Nation',
    hed: 'Bissau delays vote to 2028; Kenya halts US hub',
    desc: 'Junta pushes polls two years; Kenyan court halts US Laikipia Ebola quarantine facility.',
    svg: `
      <rect width="236" height="58" fill="#FEF5DE"/>
      <rect x="30" y="13" width="60" height="32" rx="4" fill="#78350F"/>
      <text x="60" y="34" text-anchor="middle" fill="#FDE047" font-family="Georgia, serif" font-size="14" font-weight="700">2028</text>
      <line x1="120" y1="10" x2="120" y2="46" stroke="#78350F" stroke-width="2.2"/>
      <line x1="102" y1="16" x2="138" y2="16" stroke="#78350F" stroke-width="2.2"/>
      <polygon points="102,16 96,32 108,32" fill="#D97706"/>
      <polygon points="138,16 132,32 144,32" fill="#D97706"/>
      <rect x="154" y="13" width="70" height="32" rx="4" fill="#991B1B"/>
      <text x="189" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12" font-weight="700">HALTED</text>
    `
  },
  {
    num: 11,
    kicker: 'LATIN AMERICA',
    conf: 'OFFICIAL',
    confCls: 'cf-official',
    src: 'AA · Bloomberg',
    hed: 'Colombia quits BRICS; Mexico hits DEA on quake',
    desc: 'Bogotá drops bloc bid for closer US ties; Sheinbaum blasts DEA after Baja tremor.',
    svg: `
      <rect width="236" height="58" fill="#FDF0F0"/>
      <polyline points="26,30 42,30 48,14 56,46 64,10 72,42 78,28 100,28" fill="none" stroke="#DC2626" stroke-width="2.4"/>
      <rect x="114" y="13" width="110" height="32" rx="4" fill="#7F1D1D"/>
      <text x="169" y="34" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="12" font-weight="700">M5.7 · BRICS</text>
    `
  }
];

const pins = [
  { n: 1, x: 80, y: 58 },
  { n: 11, x: 94, y: 98 },
  { n: 2, x: 164, y: 50 },
  { n: 5, x: 148, y: 40 },
  { n: 6, x: 186, y: 44 },
  { n: 3, x: 196, y: 72 },
  { n: 10, x: 166, y: 96 },
  { n: 7, x: 248, y: 80 },
  { n: 4, x: 274, y: 56 },
  { n: 9, x: 280, y: 122 },
  { n: 8, x: 298, y: 20 }
];

const regionBars = [
  { name: 'Europe', count: 8, w: 22.8, c: '#1E3A8A' },
  { name: 'E/SE Asia', count: 6, w: 17.1, c: '#0F766E' },
  { name: 'N. America', count: 5, w: 14.3, c: '#991B1B' },
  { name: 'Middle East', count: 4, w: 11.4, c: '#B45309' },
  { name: 'Africa', count: 4, w: 11.4, c: '#A16207' },
  { name: 'LatAm', count: 4, w: 11.4, c: '#7C2D12' },
  { name: 'Tech/Orbit', count: 3, w: 8.6, c: '#4338CA' },
  { name: 'Oceania', count: 1, w: 3.0, c: '#0369A1' }
];

const utcTimeline = [
  { t: '00:30', label: 'Bangkok fire' },
  { t: '01:00', label: 'BoK 3.25%' },
  { t: '09:30', label: 'UK ONS 77k' },
  { t: '14:00', label: 'EU De Cos' },
  { t: '16:30', label: "Macy's off" },
  { t: '20:30', label: 'Bears 39–35' },
  { t: '22:00', label: 'ISS & 1M sats' }
];

const leftBriefs = [
  { n: 12, city: 'Detroit', text: 'Bears stun Lions 39–35 on late touchdown', src: 'CBS' },
  { n: 13, city: 'Zurich', text: 'Hackers claim 12 GB leak; FIFA cites <0.1% files', src: 'C.Mail' },
  { n: 14, city: 'Crypto', text: 'Binance restores transfers after hack pause', src: 'C.Brief' },
  { n: 15, city: 'Ibiza', text: 'Diesel tanker Med Emre sinks; 1 dead, 16 saved', src: 'Reuters' },
  { n: 16, city: 'West Java', text: 'Bogor illegal mine floods; 16 dead, 10 missing', src: 'AP' },
  { n: 17, city: 'Dhaka', text: '400 garment plants shut amid wage protests', src: 'AFP' },
  { n: 18, city: 'Belgrade', text: 'Serbia sets post-Vučić presidential vote Dec 27', src: 'AP' },
  { n: 19, city: 'Paris', text: 'UNESCO & WAN-IFRA issue AI newsroom rules', src: 'UNESCO' },
  { n: 20, city: 'Cambridge', text: 'Jury convicts LNER train stabbing suspect', src: 'Guardian' },
  { n: 21, city: 'Bengaluru', text: 'Flipkart CEO Kalyan Krishnamurthy steps down', src: 'I.Express' },
  { n: 22, city: 'Beijing', text: 'Golf clubs ordered shut; Premier Li meets ADB', src: 'AGIF · AP' },
  { n: 23, city: 'Ottawa', text: 'Canada commits C$52M for domestic AI systems', src: 'Gov.ca' }
];

const rightBriefs = [
  { n: 24, city: 'Buenos Aires', text: 'Brazil recalls Ambassador Bitelli over dispute', src: 'Reuters' },
  { n: 25, city: 'Batumi', text: 'UEFA Beşiktaş tie suspended over fan clashes', src: 'Al Jazeera' },
  { n: 26, city: 'Giza', text: 'Driver arrested after 31-death tanker pileup', src: 'CBS' },
  { n: 27, city: 'Baghdad', text: 'Iraq seals informal oil-smuggling crossings', src: '8am' },
  { n: 28, city: 'Khartoum', text: 'UN logs 383,000 displaced across Kordofan', src: 'IOM' },
  { n: 29, city: 'Kinshasa', text: 'Congo reinforces Ebola response in Ituri', src: 'BWorld' },
  { n: 30, city: 'Pacifica', text: 'Storm swells collapse historic California pier', src: 'LA Times' },
  { n: 31, city: 'New Jersey', text: 'State declares coastal storm emergency', src: 'AP' },
  { n: 32, city: 'Brussels', text: 'Eldridge seals deal for Lukoil global assets', src: 'CNN' },
  { n: 33, city: 'London', text: 'Brent crude hits $95.58; gold slips 0.8%', src: 'Reuters' },
  { n: 34, city: 'Baja Coast', text: 'Magnitude 5.7 earthquake strikes off Mexico', src: 'Bloomberg' },
  { n: 35, city: 'Geneva', text: 'Trump & NATO’s Rutte issue warning to Moscow', src: 'Reuters' }
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
    font-size: 9px; font-weight: 700; letter-spacing: 0.7px; color: #44403C;
    text-transform: uppercase; padding-bottom: 3px;
    border-bottom: 2px solid #1C1917;
  }
  .masthead {
    text-align: center; padding: 2px 0 4px;
    border-bottom: 1px solid #1C1917;
  }
  .masthead h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 48px; font-weight: 700; line-height: 1.02;
    letter-spacing: -0.6px; color: #141413;
  }
  .masthead h1 .red { color: #991B1B; }
  .masthead .deck {
    margin-top: 2px;
    font-family: Georgia, serif; font-style: italic;
    font-size: 11.8px; color: #374151; font-weight: 400;
  }

  .kpi-strip {
    display: grid; grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid #C7BFB0; border-bottom: 1px solid #1C1917;
    background: #FAF7F0;
  }
  .kpi {
    padding: 4px 7px; border-right: 1px solid #DDD6C8;
    display: flex; flex-direction: column; justify-content: center;
  }
  .kpi:last-child { border-right: none; }
  .kpi-val {
    font-family: Georgia, serif; font-size: 16.5px; font-weight: 700;
    line-height: 1.08; color: #991B1B;
  }
  .kpi-val.navy { color: #1E3A8A; }
  .kpi-val.teal { color: #0F766E; }
  .kpi-lbl {
    font-size: 8.2px; line-height: 1.18; color: #374151; font-weight: 600;
    margin-top: 1px;
  }

  .meta-bars { display: flex; flex-direction: column; gap: 3px; }
  .region-bar { display: flex; height: 6px; width: 100%; overflow: hidden; border-radius: 2px; }
  .region-legend {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.1px; color: #44403C; font-weight: 600;
  }
  .utc-strip {
    display: flex; align-items: center; justify-content: space-between;
    background: #EBE4D5; border: 1px solid #CFC6B4; border-radius: 3px;
    padding: 3px 8px; font-size: 8.8px;
  }
  .utc-title {
    font-weight: 800; color: #8B1E1E; letter-spacing: 0.4px; margin-right: 6px; white-space: nowrap;
  }
  .utc-item { color: #1F2937; white-space: nowrap; }
  .utc-item b { color: #1E3A8A; font-family: Georgia, serif; }

  .hero-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
  .card {
    background: #FFFFFF; border: 1px solid #C8BFA9; border-radius: 4px;
    overflow: hidden; display: flex; flex-direction: column; position: relative;
  }
  .art-wrap {
    position: relative; width: 100%; overflow: hidden;
    border-bottom: 1px solid #D6CEBE;
  }
  .num-badge {
    position: absolute; top: 6px; left: 6px;
    width: 20px; height: 20px; border-radius: 50%;
    background: #991B1B; color: #FFFFFF; border: 1.5px solid #FFFFFF;
    font-family: Georgia, serif; font-size: 10.8px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.35);
  }
  .num-badge.sm { width: 17px; height: 17px; font-size: 9.5px; top: 5px; left: 5px; }
  .hero-body { padding: 7px 9px 8px; display: flex; flex-direction: column; flex: 1; gap: 3px; }
  .card-meta { display: flex; align-items: center; justify-content: space-between; gap: 4px; }
  .kicker {
    font-size: 8px; font-weight: 800; letter-spacing: 0.4px; color: #991B1B; text-transform: uppercase;
  }
  .src-txt { font-size: 7.8px; color: #6B7280; font-weight: 600; }
  .cf {
    font-size: 7.3px; font-weight: 800; padding: 1px 4px; border-radius: 2px;
    letter-spacing: 0.3px; border: 1px solid; white-space: nowrap;
  }
  .cf-official { color: #1E3A8A; border-color: #93C5FD; background: #EFF6FF; }
  .cf-confirmed { color: #166534; border-color: #86EFAC; background: #F0FDF4; }
  .cf-reported { color: #92400E; border-color: #FCD34D; background: #FFFBEB; }

  .hero-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px; font-weight: 700; line-height: 1.13; color: #111827;
  }
  .hero-desc { font-size: 10px; line-height: 1.28; color: #374151; }

  .mid-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .mid-body { padding: 5px 8px 6px; display: flex; flex-direction: column; flex: 1; gap: 2.5px; }
  .mid-hed {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 13.1px; font-weight: 700; line-height: 1.13; color: #111827;
  }
  .mid-desc { font-size: 9.4px; line-height: 1.24; color: #374151; }

  .bottom-split { display: grid; grid-template-columns: 332px 1fr; gap: 10px; flex: 1; min-height: 0; }
  .map-panel {
    background: #FFFFFF; border: 1px solid #C8BFA9; border-radius: 4px;
    padding: 6px 8px; display: flex; flex-direction: column; justify-content: space-between;
  }
  .panel-hdr {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.8px; font-weight: 800; color: #8B1E1E;
    letter-spacing: 0.4px; border-bottom: 1px solid #E5DFD2; padding-bottom: 3px; margin-bottom: 4px;
  }
  .panel-hdr span.sub { font-weight: 600; color: #57534E; font-size: 8px; }

  .briefs-panel {
    background: #FAF7F0; border: 1px solid #C8BFA9; border-radius: 4px;
    padding: 6px 9px; display: flex; flex-direction: column;
  }
  .briefs-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 12px; flex: 1; }
  .brief-col { display: flex; flex-direction: column; justify-content: space-between; }
  .brief-row {
    font-size: 8.95px; line-height: 1.22; color: #1F2937;
    display: flex; align-items: baseline; gap: 3px;
  }
  .b-num {
    font-weight: 800; color: #991B1B; font-family: Georgia, serif; min-width: 14px; font-size: 8.8px;
  }
  .b-city { font-weight: 700; color: #111827; }
  .b-src { color: #6B7280; font-size: 7.8px; }

  .map-legend {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 7.7px; color: #44403C; padding-top: 3px; border-top: 1px solid #E5DFD2;
  }
  .date-check {
    background: #FFFDF9; border: 1.2px solid #991B1B; border-radius: 3px;
    padding: 4px 8px; font-size: 8.3px; color: #1F2937;
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .dc-tag { font-weight: 800; color: #991B1B; white-space: nowrap; font-size: 8.3px; }
  .footer {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 8.1px; color: #44403C; font-weight: 600;
    border-top: 1px solid #1C1917; padding-top: 3px;
  }
</style>
</head>
<body>
<div class="page">
  <div class="top-micro">
    <span>THE WORLD IN ONE DAY · 00:00–23:59 UTC EDITION</span>
    <span>35 SOURCED STORIES · 9 REGIONS · ALL VERIFIED FOR 26 NOVEMBER 2026</span>
  </div>

  <div class="masthead">
    <h1>Thursday <span class="red">26 November 2026</span></h1>
    <div class="deck">Nor'easter delays Macy's 100th parade; EU leaders tap De Cos as budget talks stall; Kuwait drone kills two; Bank of Korea raises rate to 3.25%.</div>
  </div>

  <div class="kpi-strip">
    <div class="kpi"><div class="kpi-val">&gt;50 mph</div><div class="kpi-lbl">Gusts postpone Macy's 100th parade</div></div>
    <div class="kpi"><div class="kpi-val navy">€1.58T</div><div class="kpi-lbl">EU budget &amp; €45B loan deferred</div></div>
    <div class="kpi"><div class="kpi-val teal">3.25%</div><div class="kpi-lbl">Bank of Korea raises rate +25bp</div></div>
    <div class="kpi"><div class="kpi-val">-62%</div><div class="kpi-lbl">UK net migration falls to 77,000</div></div>
    <div class="kpi"><div class="kpi-val navy">1M sats</div><div class="kpi-lbl">FCC approves SpaceX orbital plan</div></div>
    <div class="kpi"><div class="kpi-val">39–35</div><div class="kpi-lbl">Bears stun Lions on Thanksgiving</div></div>
  </div>

  <div class="meta-bars">
    <div class="region-bar">${regionBars.map(r => `<div style="width:${r.w}%;background:${r.c}"></div>`).join('')}</div>
    <div class="region-legend">${regionBars.map(r => `<span><strong style="color:${r.c}">■</strong> ${r.name} ${r.count}</span>`).join('')}</div>
    <div class="utc-strip">
      <span class="utc-title">THE DAY IN UTC</span>
      ${utcTimeline.map(u => `<span class="utc-item"><b>${u.t}</b> ${u.label}</span>`).join('')}
    </div>
  </div>

  <div class="hero-grid">
    ${heroCards.map(c => `
      <div class="card">
        <div class="art-wrap">
          <svg viewBox="0 0 320 96" width="100%" height="92" preserveAspectRatio="xMidYMid slice" style="display:block">${c.svg}</svg>
          <div class="num-badge">${c.num}</div>
        </div>
        <div class="hero-body">
          <div class="card-meta">
            <span class="kicker">${c.kicker}</span>
            <div style="display:flex;align-items:center;gap:4px">
              <span class="src-txt">${c.src}</span>
              <span class="cf ${c.confCls}">${c.conf}</span>
            </div>
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
          <svg viewBox="0 0 236 58" width="100%" height="55" preserveAspectRatio="xMidYMid slice" style="display:block">${c.svg}</svg>
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
        <span class="sub">Pins 1–11 match illustrations</span>
      </div>
      <svg viewBox="0 0 320 156" width="100%" height="152" style="display:block;border-radius:3px;background:#DCE7EE">
        <line x1="0" y1="78" x2="320" y2="78" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <line x1="160" y1="0" x2="160" y2="156" stroke="#CBD5E1" stroke-width="0.7" stroke-dasharray="3 3"/>
        <!-- North America + Greenland -->
        <path d="M 28 32 C 46 20 82 18 106 25 C 118 30 114 48 102 58 L 90 72 L 82 86 C 72 80 62 72 52 58 C 36 52 24 42 28 32 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 118 10 C 134 8 142 16 135 28 C 122 30 114 22 118 10 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- South America -->
        <path d="M 86 90 C 102 88 122 98 124 114 C 122 130 108 148 96 150 C 88 148 84 128 84 106 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- Europe + UK -->
        <path d="M 145 36 L 152 34 L 152 44 L 145 44 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 154 24 C 172 18 190 22 194 36 C 194 50 182 58 168 58 L 152 54 C 150 42 152 30 154 24 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- Africa -->
        <path d="M 144 64 C 166 60 184 68 192 84 C 192 104 176 128 164 134 C 156 128 150 104 142 86 C 138 74 140 66 144 64 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- Asia + India + SE Asia + Japan -->
        <path d="M 192 22 C 236 16 286 20 296 42 C 294 58 276 68 264 78 L 254 92 L 238 82 L 222 90 L 208 72 L 190 66 C 188 48 190 32 192 22 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <path d="M 284 44 L 292 42 L 292 56 L 284 58 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- Australia -->
        <path d="M 264 108 C 282 104 300 112 300 128 C 296 140 274 142 262 132 C 258 120 260 112 264 108 Z" fill="#D5CCB8" stroke="#8C826E" stroke-width="0.8"/>
        <!-- Orbit indicator arc for pin 8 -->
        <path d="M 268 12 Q 298 10 314 28" fill="none" stroke="#1E3A8A" stroke-width="1" stroke-dasharray="3 2"/>
        ${pins.map(p => `
          <circle cx="${p.x}" cy="${p.y}" r="8" fill="${p.n === 8 ? '#1E3A8A' : '#991B1B'}" stroke="#FFFFFF" stroke-width="1.4"/>
          <text x="${p.x}" y="${p.y + 3.2}" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="8.5" font-weight="700">${p.n}</text>
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
        <span>ALSO ON THURSDAY 26 NOVEMBER 2026 — BRIEFS 12–35</span>
        <span class="sub">Dateline verified · All sources named</span>
      </div>
      <div class="briefs-cols">
        <div class="brief-col">
          ${leftBriefs.map(b => `
            <div class="brief-row">
              <span class="b-num">${b.n}</span>
              <span><span class="b-city">${b.city}</span> — ${b.text} <span class="b-src">(${b.src})</span></span>
            </div>
          `).join('')}
        </div>
        <div class="brief-col">
          ${rightBriefs.map(b => `
            <div class="brief-row">
              <span class="b-num">${b.n}</span>
              <span><span class="b-city">${b.city}</span> — ${b.text} <span class="b-src">(${b.src})</span></span>
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
    <span>Sources: Reuters · AP · BBC · FT · NASA · IAEA · ONS · Council of the EU · CBS · Original vector artwork</span>
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
    checkClip('.kpi');

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
