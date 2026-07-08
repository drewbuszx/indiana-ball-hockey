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
    image: "/assets/nbhl-action.jpg",
    imageAlt: "Ball hockey action at Ellenberger Park",
    logo: "/assets/ellenberger-logo.png",
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
    image: "/assets/hero-action.jpg",
    imageAlt: "Fast-paced rooftop ball hockey action",
    logo: "/assets/rooftop-logo.png",
    badge: "3v3",
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
