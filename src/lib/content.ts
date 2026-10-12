export const siteConfig = {
  name: "Indiana Ball Hockey Association",
  shortName: "IBHA",
  description:
    "Indiana's governing body for ball hockey. IBHA oversees leagues across the state, connecting players, sponsors, and communities from Indianapolis to Northwest Indiana.",
  url: "https://www.indianaballhockey.com",
  tagline: "Hockey without the ice. Indiana without the limits.",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/IndianaBallHockey",
  instagram:
    "https://www.instagram.com/indianaballhockey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  youtube: "https://youtube.com/@indianaballhockey",
} as const;

export const externalLinks = {
  store: "https://hagancustomsports.com/collections/indiana-ball-hockey",
  ellenbergerLeague:
    "https://www.kreezee.com/hockey/league/ellenberger-ball-hockey-league/23179",
  rooftopLeague:
    "https://www.kreezee.com/hockey/league/indy-rooftop-hockey-league/23180",
  sponsorshipForm: "/assets/IBHA-2027-Sponsorship-Form.pdf",
  sponsorPage: "/sponsor",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#leagues", label: "Leagues" },
  { href: "/#join", label: "Join" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
] as const;

/** Canonical registration destination (home join anchor). */
export const registerPath = "/#join";

export const brandAssets = {
  logo: "/assets/ibha-logo.png",
  logoPrimary: "/assets/ibha-logo-primary.png",
} as const;

export const communityPhotos = {
  champions: {
    src: "/assets/community-champions.jpg",
    alt: "The Hydra celebrate as 2026 Ellenberger Ball Hockey League champions",
  },
  team: {
    src: "/assets/community-team.jpg",
    alt: "IBHA team gathered on the rink for a group photo",
  },
  rink: {
    src: "/assets/123.jpg",
    alt: "Aerial view of the Ellenberger Park ball hockey and basketball courts",
  },
  whiteJersey: {
    src: "/assets/white.jpg",
    alt: "Cream Indiana Ball Hockey jersey with orange and navy accents",
  },
  rooftop: {
    src: "/assets/roof.jpg",
    alt: "Nighttime ball hockey action on the Indy rooftop rink",
  },
  rooftopRink: {
    src: "/assets/roof2.jpg",
    alt: "Aerial view of the Indy rooftop ball hockey rink with city skyline",
  },
  tailgate: {
    src: "/assets/tailgate.jpg",
    alt: "IBHA players tailgating before a ball hockey game",
  },
  orange: {
    src: "/assets/orange.jpg",
    alt: "Rooftop league champions celebrating with the trophy",
  },
  gang: {
    src: "/assets/gang.jpg",
    alt: "IBHA players posing together on the rink",
  },
  snug1: {
    src: "/assets/snug1.jpg",
    alt: "IBHA team gathered on the rink for a group photo",
  },
  snug2: {
    src: "/assets/snug2.jpg",
    alt: "Rooftop league champions celebrating with the can trophy",
  },
  rbow: {
    src: "/assets/rbow.png",
    alt: "IBHA rainbow pride logo",
  },
  ellenberger: {
    src: "/assets/ellen.png",
    alt: "Ball hockey action at Ellenberger Park",
  },
  ellen3: {
    src: "/assets/ellen3.png",
    alt: "Ellenberger Ball Hockey Club team celebration",
  },
  historyRooftop: {
    src: "/assets/rooff.jpg",
    alt: "Indy Rooftop Hockey League team celebration",
  },
  historyEllenberger: {
    src: "/assets/ellen2.png",
    alt: "Ball hockey action at Ellenberger Park",
  },
  historyNbhl: {
    src: "/assets/nbhl.png",
    alt: "Indiana celebrates 2024 NBHL Division Championship",
  },
  heroAction: {
    src: "/assets/hero-action.jpg",
    alt: "Ball hockey action at Ellenberger Park",
  },
  aboutHero: {
    src: "/assets/hocksy.png",
    alt: "Ball hockey players competing on the rink",
  },
  leaguesHero: {
    src: "/assets/hawky.png",
    alt: "IBHA players gathered on the rink",
  },
  nbhlAction: {
    src: "/assets/nbhl-action.jpg",
    alt: "Ball hockey players competing at Ellenberger Park",
  },
  rooftopKreezeeBg: {
    src: "/assets/rooftop-kreezee-bg.jpg",
    alt: "Indy Rooftop Hockey League rink at dusk",
  },
  jerseyCream: {
    src: "/assets/community-jersey-cream.jpg",
    alt: "Cream Indiana Ball Hockey jersey with orange and navy accents",
  },
  trophies: {
    src: "/assets/community-trophies.jpg",
    alt: "Championship trophies displayed on the ball hockey rink",
  },
  jerseyNavy: {
    src: "/assets/community-jersey-navy.jpg",
    alt: "Navy IBHA jersey featuring the orange mascot crest",
  },
  ball: {
    src: "/assets/ball.png",
    alt: "IBHA-branded ball hockey ball on the rink",
  },
  irhlLogo: {
    src: "/assets/irhl.png",
    alt: "Indy Rooftop Hockey League crest",
  },
  irhlCover: {
    src: "/assets/leagues/irhl-cover.jpg",
    alt: "Indy Rooftop Hockey League rink overlooking the Indianapolis skyline",
  },
  nwibhlCover: {
    src: "/assets/leagues/nwibhl-cover.jpg",
    alt: "Northwest Indiana Ball Hockey League sunset cover art",
  },
  nwibhlHero: {
    src: "/assets/leagues/nwibhl-hero.webp",
    alt: "Northwest Indiana Ball Hockey League atmosphere",
  },
  storeHero: {
    src: "/assets/store-hero.png",
    alt: "Navy IBHA jersey with orange mascot crest and number 15",
  },
  storeHeroBg: {
    src: "/assets/store-hero-bg.png",
    alt: "IBHA team apparel and jerseys",
  },
  storeSuggly: {
    src: "/assets/store-snerg.png",
    alt: "Custom IBHA team jersey with shamrock crest",
  },
  storeJersey1: {
    src: "/assets/store-1.png",
    alt: "Cream Indiana Ball Hockey jersey with cursive Indiana lettering",
  },
  storeJersey3: {
    src: "/assets/store-3.png",
    alt: "IBHA champions team photo with championship graphic",
  },
} as const;

export const galleryPhotos = [
  communityPhotos.snug1,
  communityPhotos.snug2,
  { ...communityPhotos.rbow, fit: "contain" as const },
  communityPhotos.tailgate,
  communityPhotos.gang,
] as const;

export const contactConnectPhotos = [
  { ...communityPhotos.ball, fit: "contain" as const },
  {
    src: "/assets/ellenberger-logo.png",
    alt: "Ellenberger Ball Hockey League crest",
    fit: "contain" as const,
  },
  {
    ...communityPhotos.irhlLogo,
    fit: "contain" as const,
  },
  {
    src: "/assets/nwibhl-logo.png",
    alt: "Northwest Indiana Ball Hockey League crest",
    fit: "contain" as const,
  },
] as const;

export type LeagueStatus = "open" | "interest";

export const leagues = [
  {
    id: "ellenberger",
    name: "Ellenberger Ball Hockey League",
    shortName: "Ellenberger",
    abbreviation: "EBHL",
    location: "Ellenberger Park, Irvington",
    region: "Indianapolis",
    format: "5-on-5",
    surface: "Indoor Sport Court",
    description:
      "IBHA's flagship full-size league. Competitive 5-on-5 ball hockey on upgraded Sport Court flooring at Ellenberger Park.",
    audience:
      "Competitive and recreational adult players ready for standard-format hockey.",
    href: externalLinks.ellenbergerLeague,
    image: communityPhotos.ellenberger.src,
    imageAlt: communityPhotos.ellenberger.alt,
    logo: "/assets/ellenberger-logo.png",
    logoTile: "none" as const,
    badge: "5v5",
    status: "open" as LeagueStatus,
    accent: "#dc8f28",
    ctaLabel: "Register on Kreezee",
  },
  {
    id: "rooftop",
    name: "Indy Rooftop Hockey League",
    shortName: "Rooftop",
    abbreviation: "IRHL",
    location: "Near Eastside Indianapolis",
    region: "Indianapolis",
    format: "3-on-3",
    surface: "Rooftop Dek Rink",
    description:
      "Indianapolis's original rooftop hockey experience. Lightning-fast 3-on-3 on a compact 60×40 ft dek with the city as the backdrop.",
    audience:
      "Players who want high-tempo games in a unique urban setting.",
    href: externalLinks.rooftopLeague,
    image: communityPhotos.irhlCover.src,
    imageAlt: communityPhotos.irhlCover.alt,
    logo: "/assets/irhl.png",
    logoTile: "none" as const,
    badge: "3v3",
    status: "open" as LeagueStatus,
    accent: "#c42b3e",
    ctaLabel: "Register on Kreezee",
  },
  {
    id: "northwest",
    name: "Northwest Indiana Ball Hockey League",
    shortName: "Northwest Indiana",
    abbreviation: "NWIBHL",
    location: "Northwest Indiana",
    region: "Northwest Indiana",
    format: "League play",
    surface: "Regional venues",
    description:
      "IBHA's newest chapter, expanding ball hockey into Northwest Indiana. Building the next rink community for players across the Region.",
    audience:
      "Players and partners ready to help launch ball hockey in Northwest Indiana.",
    href: "/contact#partners",
    image: communityPhotos.nwibhlCover.src,
    imageAlt: communityPhotos.nwibhlCover.alt,
    logo: "/assets/nwibhl-logo.png",
    logoTile: "none" as const,
    badge: "NEW",
    status: "interest" as LeagueStatus,
    accent: "#4da8f5",
    ctaLabel: "Express Interest",
  },
] as const;

export const leagueTeamLogos = {
  ellenberger: {
    title: "Ellenberger Ball Hockey League",
    logos: [
      { src: "/assets/teams/ellenberger/the-hydra.png", alt: "The Hydra" },
      { src: "/assets/teams/ellenberger/indy-heist.png", alt: "Indy Heist" },
      {
        src: "/assets/teams/ellenberger/midwest-blizzard.png",
        alt: "Midwest Blizzard",
      },
      { src: "/assets/teams/ellenberger/corn-kings.png", alt: "Corn Kings" },
    ],
  },
  rooftop: {
    title: "Indy Rooftop Hockey League",
    logos: [
      { src: "/assets/teams/rooftop/osha.png", alt: "OSHA" },
      {
        src: "/assets/teams/rooftop/englewood-woodsmen.png",
        alt: "Englewood Woodsmen",
      },
      { src: "/assets/teams/rooftop/indy-heist.png", alt: "Indy Heist" },
      {
        src: "/assets/teams/rooftop/midwest-blizzard.png",
        alt: "Midwest Blizzard",
      },
      { src: "/assets/teams/rooftop/mammoths.png", alt: "Mammoths" },
      { src: "/assets/teams/rooftop/swamp-donkeys.png", alt: "Swamp Donkeys" },
      { src: "/assets/teams/rooftop/wolfpack.png", alt: "Laser Wolves" },
    ],
  },
} as const;

export const leagueCompare = [
  {
    label: "Format",
    ellenberger: "5-on-5",
    rooftop: "3-on-3",
    northwest: "League play",
  },
  {
    label: "Surface",
    ellenberger: "Indoor Sport Court",
    rooftop: "Rooftop dek",
    northwest: "Regional venues",
  },
  {
    label: "Location",
    ellenberger: "Ellenberger Park, Irvington",
    rooftop: "Near Eastside Indy",
    northwest: "Northwest Indiana",
  },
  {
    label: "Status",
    ellenberger: "Registering now",
    rooftop: "Registering now",
    northwest: "Building interest",
  },
  {
    label: "Best For",
    ellenberger: "Competitive & rec adults",
    rooftop: "High-tempo 3v3 players",
    northwest: "Region players & partners",
  },
] as const;

export const sponsorHighlights = [
  {
    title: "Game-Day Presence",
    description:
      "Logo placement, rink boards, and association visibility across IBHA league nights.",
  },
  {
    title: "Community Reach",
    description:
      "Connect with players, families, and fans across Indianapolis and Northwest Indiana.",
  },
  {
    title: "Season Packages",
    description:
      "Flexible 2027 sponsorship levels sized for local businesses through major partners.",
  },
] as const;

export const contactAudiences = [
  {
    title: "New Players",
    description:
      "Curious about ball hockey? Ask us anything. We'll help you find the right league and get on the rink.",
    cta: "Message on Facebook",
    href: socialLinks.facebook,
  },
  {
    title: "Current Players",
    description:
      "League questions, schedule info, or community updates: connect with IBHA on social for the latest.",
    cta: "Follow on Instagram",
    href: socialLinks.instagram,
  },
  {
    title: "Sponsors & Partners",
    description:
      "Help us grow Indiana ball hockey. Submit the 2027 sponsorship form online or reach out to talk packages.",
    cta: "Sponsorship Form",
    href: "/sponsor",
  },
  {
    title: "Parents & Youth",
    description:
      "Interested in youth programming? Connect with us. We're working to expand opportunities for the next generation of players.",
    cta: "Contact via Social",
    href: socialLinks.facebook,
  },
] as const;

export const timelineEvents = [
  {
    year: "1960s-2009",
    title: "Ellenberger's Ice Era",
    description:
      "Ellenberger Park's outdoor ice rink (enclosed in 1974) hosts public skating and competitive hockey until costly repairs force closure in 2009.",
  },
  {
    year: "2009",
    title: "A Building Finds New Purpose",
    description:
      "The Wheeler Mission Center relocates, donating its former building to Englewood Community Development Corporation (ECDC) on Indy's Near Eastside.",
  },
  {
    year: "2011",
    title: "Rooftop Rink Born",
    description:
      "Super Bowl Legacy funding helps ECDC renovate the building into apartments with a gymnasium. Executive Director Joe Bowling brings Indianapolis its first rooftop hockey rink, recreating Pittsburgh dek hockey memories.",
    quote:
      "We built the rooftop rink in hopes of re-creating our family's experience playing dek hockey in Pittsburgh when we were kids.",
  },
  {
    year: "2011-2023",
    title: "Indy Rooftop Hockey League Grows",
    description:
      "The IRHL thrives on the compact 60×40 ft rooftop rink. Fast 3-on-3 play attracts 50+ active players as interest in rooftop hockey continues to grow.",
  },
  {
    year: "2015",
    title: "Inline Hockey Arrives",
    description:
      "The Indy Inline Hockey League moves into Ellenberger's dormant rink after three years on a repurposed tennis court in South Broad Ripple.",
  },
  {
    year: "2020-2021",
    title: "Ellenberger Upgrades",
    description:
      "Ryan Spahr and league leadership convince the Parks Department to install new Sport Court flooring (2020) and upgraded lighting (2021), transforming the facility.",
  },
  {
    year: "2022",
    title: "NBHL Expansion",
    description:
      "Indiana becomes an expansion division of the National Ball Hockey League, the first nationwide ball hockey league sanctioned by USA Ball Hockey.",
  },
  {
    year: "2023",
    title: "IBHA Formed",
    description:
      "The Indiana Ball Hockey Association launches. The Indiana Division of the NBHL begins play at Ellenberger with three local teams and one visiting team from Columbus, Ohio.",
  },
  {
    year: "2024-2025",
    title: "Focused on Home",
    description:
      "After two valuable NBHL seasons, IBHA leadership pivots to concentrate on growing ball hockey locally. The NBHL relationship remains strong for players seeking national competition.",
    quote:
      "Our time in the NBHL has been invaluable... However, we believe that the best path forward is to concentrate on growing and nurturing the sport here at home.",
  },
  {
    year: "2026",
    title: "Statewide Association",
    description:
      "IBHA oversees Ellenberger, Indy Rooftop, and the launch of Northwest Indiana Ball Hockey League, uniting Indiana under one association brand.",
  },
] as const;
