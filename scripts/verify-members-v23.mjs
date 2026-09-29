import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'src/config/onegodian-members-plugin.ts');
const pagePath = path.join(root, 'src/app/members/page.tsx');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

function contains(source, needle, message) {
  if (!source.includes(needle)) fail(`${message} Missing: ${needle}`);
}

if (!fs.existsSync(configPath) || !fs.existsSync(pagePath)) {
  fail('Members config and page must exist.');
}

const config = fs.readFileSync(configPath, 'utf8');
const page = fs.readFileSync(pagePath, 'utf8');

for (const needle of [
  "version: '2.3.0'",
  "packageName: 'onegodian-members-v2.3.0-production.zip'",
  "dashboardUrl: 'https://onegodian.org/member-dashboard/'",
  "'/onegodian-101/'",
  "'/onegodian-101-progress/'",
  "onegodian101Progress: '/wp-json/onegodian/v1/members/me/onegodian-101'",
  "onegodian101Lessons: '/wp-json/onegodian/v1/onegodian-101/lessons'",
  "onegodian101Terms: '/wp-json/onegodian/v1/onegodian-101/terms'",
  "credentialAuthority: 'wordpress-woocommerce'",
  "lostPasswordUrl: 'https://onegodian.org/my-account/lost-password/'"
]) {
  contains(config, needle, 'Members app config must match the v2.3.0 access contract.');
}

for (const needle of [
  'production candidate',
  'Login Details',
  'Username or email address',
  'Password',
  'Remember me',
  'Forgot Password',
  'Create Account',
  'Explore Membership',
  'Credentials are entered only on OneGodian.org'
]) {
  contains(page, needle, 'Members app page must explain the canonical login handoff.');
}

if (page.includes('synced with the production OneGodian Members WordPress plugin')) {
  fail('App must not represent the v2.3.0 production candidate as production-verified.');
}

console.log('PASS: OneGodian App is aligned with Members v2.3.0 authentication and orientation contract.');
