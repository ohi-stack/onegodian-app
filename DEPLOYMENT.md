# Deployment Guide — app.onegodian.com

This repository is intended to deploy the OneGodian Everything App at `app.onegodian.com`.

## Current deployment objective

Ship the Node/Next.js app on the current cloud hosting first, keep the app modular, then harden infrastructure after the official v1 launch and app-store readiness.

## Production-safe environment variables

Create a real `.env` file only on the hosting platform. Do not commit secrets.

```env
NEXT_PUBLIC_APP_URL=https://app.onegodian.com
NEXTAUTH_URL=https://app.onegodian.com
NEXTAUTH_SECRET=
AUTH_TRUST_HOST=true
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Required local checks

From the deployable app root, run:

```bash
npm install
npm run lint
npm run build
```

Deployment should not proceed until the build passes.

## Preferred cloud deployment path

Use the provider’s Node/Next.js app deployment flow.

Recommended settings:

```txt
Framework: Next.js
Install Command: npm install
Build Command: npm run build
Start Command: npm run start
Node Version: 20 LTS or 22 LTS
Production URL: https://app.onegodian.com
```

If the repository is normalized into a monorepo, set the app root to:

```txt
apps/web
```

If the repository remains a single Next.js app at root, set the app root to:

```txt
.
```

## DNS for app.onegodian.com

If using a cloud platform with CNAME routing:

```txt
Type: CNAME
Name: app
Value: provider-supplied target
```

If using VPS/IP routing:

```txt
Type: A
Name: app
Value: VPS_IP_ADDRESS
```

## Hostinger VPS path, when ready

Install runtime packages:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx postgresql postgresql-contrib certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Clone and build:

```bash
git clone https://github.com/ohi-stack/onegodian-app.git
cd onegodian-app
npm install
npm run build
npm run start
```

Run with PM2:

```bash
pm2 start npm --name onegodian-app -- start
pm2 save
pm2 startup
```

Nginx reverse proxy example:

```nginx
server {
    server_name app.onegodian.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable SSL:

```bash
sudo certbot --nginx -d app.onegodian.com
```

## Production readiness checklist

- [ ] Repo structure is normalized or clearly documented.
- [ ] Deployable app root is confirmed.
- [ ] `npm install` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Environment variables are configured in hosting dashboard.
- [ ] No secrets are committed.
- [ ] DNS points `app.onegodian.com` to the deployment target.
- [ ] SSL is active.
- [ ] `/` loads.
- [ ] `/dashboard` loads.
- [ ] `/planets` loads.
- [ ] `/moons-systems` loads.
- [ ] `/registry` loads.
- [ ] `/tools` loads.

## Current v1 posture

Before official v1, prioritize a stable deployable app over complex infrastructure. After official v1 and app-store readiness, move toward full VPS hardening, monitoring, backups, release tags, and mobile app wrapper deployment.
