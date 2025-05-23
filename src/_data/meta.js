

export const url = (() => {
  const env = process.env.ELEVENTY_ENV;
  if (env === 'production') {
    // For production, check if it's the main branch or a preview branch
    return process.env.CF_PAGES_BRANCH === 'main' || !process.env.CF_PAGES_URL
      ? 'https://jasonbyday.com' // Main branch or CF_PAGES_URL not defined
      : process.env.CF_PAGES_URL; // Preview branch
  } else if (env === 'development') {
    // For local development
    return 'http://localhost:8080';
  }

  // Default fallback
  return process.env.URL || process.env.SITE_URL || 'http://localhost:8080';
})();
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Jason by Day'; // i.e. Lene Saile - the name of the site. Must be set.
export const siteDescription = "Jason Day's progress in works. Consulting, writing, speaking. Accessibility, inclusive design, and otherwise meandering ramblings.";
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Jason Day', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'jasonbyday@outlook.com', // i.e. hola@lenesaile.com - email of the author
  website: 'https://jasonbyday.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  fediverse: 'https://mastodon.social/@jasonday', // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
  mastodon: 'https://mastodon.social/@jasonday',
  bluesky:'https://bsky.app/profile/jasonbyday.bsky.social',
  linkedin: 'https://linkedin.com/in/jasonbday',
  github: 'https://github.com/jasonday',
  goodreads: 'https://www.goodreads.com/user/show/148128005-jay-day',
  strava: 'https://www.strava.com/athletes/15415932'
};
export const creator = {
  name: 'Jason Day', // 
  email: 'jasonbyday@outlook.com',
  website: 'https://jasonbyday.com',
  social: 'https://bsky.app/profile/jasonbyday.bsky.social'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Jason Day's progress in works. Consulting, writing, speaking. Accessibility, inclusive design, and otherwise meandering ramblings."; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Jason by Day',
  description: "Jason Day's progress in works. Consulting, writing, speaking. Accessibility, inclusive design, and otherwise meandering ramblings.",
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const projects = {
  // RSS feed
  name: 'Jason by Day',
  description: "Jason Day's progress in works. Consulting, writing, speaking. Accessibility, inclusive design, and otherwise meandering ramblings.",
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Projects',
  paginationPage: 'Project',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
