import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';
import { JSDOM } from 'jsdom'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null;

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '../');
  let config = {};
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'));
  } catch (e) {}
  config.rootDir = rootDir; // project folder
  config.dev = false; // production build
  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  nuxt.listen(4000, 'localhost');
});

// Example of testing only generated html
test('Rendering HTML', async t => {
  let context = {};
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes('id="app"'));
});

test('Rendering HTML: Index page has a section class for features, guilds, projects, slack, team, sponsors, communities and video', async t => {
  let context = {};
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes('class="features-section"'));
  t.true(html.includes('class="guilds-section"'));
  t.true(html.includes('class="projects-section"'));
  t.true(html.includes('class="slack-section"'));
  t.true(html.includes('class="team-section"'));
  t.true(html.includes('class="sponsors-section"'));
  t.true(html.includes('class="communities-section"'));
  t.true(html.includes('class="video-section"'));
});

// Example of testing via DOM checking
test('Rendering HTML using CSS selctor. Index page has a section class for features, guilds, projects, slack, team, sponsors, communities and video', async t => {
  let context = {};
  const { html } = await nuxt.renderRoute('/', context);
  const { window } = new JSDOM(html).window;
  const features = window.document.querySelector('.features-section');
  const guilds = window.document.querySelector('.guilds-section');
  const projects = window.document.querySelector('.projects-section');
  const slack = window.document.querySelector('.slack-section');
  const team = window.document.querySelector('.team-section');
  const sponsors = window.document.querySelector('.sponsors-section');
  const communities = window.document.querySelector('.communities-section');
  const video = window.document.querySelector('.video-section');
  t.not(features, null);
  t.not(guilds, null);
  t.not(projects, null);
  t.not(slack, null);t.not(features, null);
  t.not(team, null);
  t.not(sponsors, null);
  t.not(communities, null);
  t.not(video, null);
});

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close();
});
