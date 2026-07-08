export const siteConfig = {
  name: "Indiana Ball Hockey Association",
  shortName: "IBHA",
  description:
    "Indiana's home for competitive and recreational ball hockey. Run instead of skate. Play year-round across Indianapolis leagues.",
  url: "https://www.indianaballhockey.com",
  tagline: "Growing ball hockey across Indiana — one shift at a time.",
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
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leagues", label: "Leagues" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
] as const;

export const whyBallHockey = [
  {
    title: "No Skates Required",
    description:
      "Players run on foot. If you can move, you can play — no skating lessons or ice time needed.",
    stat: "0",
    statLabel: "skates",
  },
  {
    title: "More Affordable",
    description:
      "Skip the expensive gear and rink fees. Ball hockey keeps hockey accessible without sacrificing intensity.",
    stat: "$",
    statLabel: "lower barrier",
  },
  {
    title: "Fast & Competitive",
    description:
      "Same nonstop action, physical play, and team strategy as ice hockey — at a pace all its own.",
    stat: "100%",
    statLabel: "hockey heart",
  },
  {
    title: "All Skill Levels",
    description:
      "From first-timers to seasoned competitors, IBHA leagues welcome everyone who loves the game.",
    stat: "2",
    statLabel: "leagues",
  },
] as const;

export const quickPaths = [
  {
    title: "Play",
    description: "Find your league and hit the rink this season.",
    href: "/leagues",
    accent: "rink-400",
  },
  {
    title: "Learn",
    description: "New to ball hockey? Start with the basics.",
    href: "/#what-is-ball-hockey",
    accent: "gold",
  },
  {
    title: "Compete",
    description: "5-on-5 at Ellenberger or 3-on-3 on the rooftop.",
    href: "/leagues",
    accent: "rink-300",
  },
  {
    title: "Sponsor",
    description: "Partner with IBHA and grow the sport in Indiana.",
    href: "/contact#partners",
    accent: "gold-light",
  },
] as const;

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
  { ...communityPhotos.jerseyNavy, fit: "cover" as const },
] as const;

export const leagues = [
  {
    id: "ellenberger",
    name: "Ellenberger Ball Hockey League",
    location: "Ellenberger Park, Irvington",
    format: "5-on-5",
    surface: "Indoor Sport Court",
    description:
      "IBHA's flagship full-size league at Ellenberger Park. Competitive 5-on-5 ball hockey on upgraded Sport Court flooring — the home rink for Indiana's growing ball hockey community.",
    audience:
      "Competitive and recreational adult players ready for standard-format hockey.",
    href: externalLinks.ellenbergerLeague,
    image: communityPhotos.ellenberger.src,
    imageAlt: communityPhotos.ellenberger.alt,
    logo: "/assets/ellenberger-logo.png",
    logoTile: "none",
    badge: "5v5",
  },
  {
    id: "rooftop",
    name: "Indy Rooftop Hockey League",
    location: "Near Eastside Indianapolis",
    format: "3-on-3",
    surface: "Rooftop Dek Rink",
    description:
      "Indianapolis's original rooftop hockey experience. A compact 60×40 ft rink delivers lightning-fast 3-on-3 action with 50+ active players and a tight-knit community vibe.",
    audience:
      "Players who want fast, high-tempo games in a unique urban setting.",
    href: externalLinks.rooftopLeague,
    image: communityPhotos.rooftop.src,
    imageAlt: communityPhotos.rooftop.alt,
    logo: "/assets/irhl.png",
    logoTile: "none",
    badge: "3v3",
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
  { label: "Format", ellenberger: "5-on-5", rooftop: "3-on-3" },
  { label: "Rink Size", ellenberger: "Full-size indoor", rooftop: "60×40 ft rooftop" },
  { label: "Surface", ellenberger: "Sport Court", rooftop: "Dek / outdoor surface" },
  {
    label: "Location",
    ellenberger: "Ellenberger Park, Irvington",
    rooftop: "Near Eastside Indy",
  },
  { label: "Vibe", ellenberger: "Standard league play", rooftop: "Fast, tight, urban" },
  {
    label: "Best For",
    ellenberger: "Competitive & rec adults",
    rooftop: "High-tempo 3v3 players",
  },
] as const;

export const contactAudiences = [
  {
    title: "New Players",
    description:
      "Curious about ball hockey? Ask us anything — we'll help you find the right league and get on the rink.",
    cta: "Message on Facebook",
    href: socialLinks.facebook,
  },
  {
    title: "Current Players",
    description:
      "League questions, schedule info, or community updates — connect with IBHA on social for the latest.",
    cta: "Follow on Instagram",
    href: socialLinks.instagram,
  },
  {
    title: "Sponsors & Partners",
    description:
      "Help us build Indiana's ball hockey future. We're actively seeking sponsors, partners, and donors for our year-round facility vision.",
    cta: "Reach Out",
    href: socialLinks.facebook,
  },
  {
    title: "Parents & Youth",
    description:
      "Interested in youth programming? Connect with us — we're working to expand opportunities for the next generation of players.",
    cta: "Contact via Social",
    href: socialLinks.facebook,
  },
] as const;

export const timelineEvents = [
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
      "Super Bowl Legacy funding helps ECDC renovate the building into apartments with a gymnasium. Executive Director Joe Bowling brings Indianapolis its first rooftop hockey rink — recreating Pittsburgh dek hockey memories.",
    quote:
      "We built the rooftop rink in hopes of re-creating our family's experience playing dek hockey in Pittsburgh when we were kids.",
  },
  {
    year: "2011–2023",
    title: "Indy Rooftop Hockey League Grows",
    description:
      "The IRHL thrives on the compact 60×40 ft rooftop rink. Fast 3-on-3 play attracts 50+ active players as interest in rooftop hockey continues to grow.",
  },
  {
    year: "1960s–2009",
    title: "Ellenberger's Ice Era",
    description:
      "Ellenberger Park's outdoor ice rink — enclosed in 1974 — hosts public skating and competitive hockey until costly repairs force closure in 2009.",
  },
  {
    year: "2015",
    title: "Inline Hockey Arrives",
    description:
      "The Indy Inline Hockey League moves into Ellenberger's dormant rink after three years on a repurposed tennis court in South Broad Ripple.",
  },
  {
    year: "2020–2021",
    title: "Ellenberger Upgrades",
    description:
      "Ryan Spahr and league leadership convince the Parks Department to install new Sport Court flooring (2020) and upgraded lighting (2021), transforming the facility.",
  },
  {
    year: "2022",
    title: "NBHL Expansion",
    description:
      "Indiana becomes an expansion division of the National Ball Hockey League — the first nationwide ball hockey league sanctioned by USA Ball Hockey.",
  },
  {
    year: "2023",
    title: "IBHA Formed",
    description:
      "The Indiana Ball Hockey Association launches. The Indiana Division of the NBHL begins play at Ellenberger with three local teams and one visiting team from Columbus, Ohio.",
  },
  {
    year: "2024–2025",
    title: "Focused on Home",
    description:
      "After two valuable NBHL seasons, IBHA leadership pivots to concentrate on growing ball hockey locally. The NBHL relationship remains strong for players seeking national competition.",
    quote:
      "Our time in the NBHL has been invaluable... However, we believe that the best path forward is to concentrate on growing and nurturing the sport here at home.",
  },
] as const;
