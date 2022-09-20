This bio.link clone project made solely for demoing purpose and powered by [Next.js](https://nextjs.org/). Find out more [here](https://medium.vladmykol.com/production-ready-react-app-setup-with-next-js-and-dokku-555fb08cb188).

# Getting Started

To run a local development server use

```bash
npm run dev
# or
yarn dev
```

## Deploy with dokku to [Hetzner Clound](https://console.hetzner.cloud/)

### Setup new sever
1. Create [new server and access it via SSH](https://www.banjocode.com/post/hosting/setup-server-hetzner/)
1. Install [dokku](https://dokku.com/docs/getting-started/installation/#1-install-dokku) on you newly created server
1. Run following command to setup new application on dokku
```
dokku apps:create biolink-clone
dokku proxy:ports-set biolink-clone http:80:5000
dokku domains:add biolink-clone ?your_domain_name?
```
4. Create personal [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token) in GitHub account
   `dokku git:auth github.com ?username? ?personal-access-token?`
4. Deploy application and verify if its running
4. Enable HTTPS and scheduler SSL certificate renewal
```
dokku config:set biolink-clone DOKKU_LETSENCRYPT_EMAIL=''
dokku letsencrypt:enable biolink-clone
dokku letsencrypt:cron-job --add
```

###Deploy steps
1. Push the latest changes to GitHub
1. Login with SSH to your server and run
```
dokku git:sync --build biolink-clone https://github.com/?your_repo_name?
```
3. Check last 1000 lines of logs:
   `dokku logs biolink-clone -n 1000`

