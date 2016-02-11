# DASH Website

The website is a basic one page template with some bootstrap functionality. It also uses FontAwesome.

## Getting started:

Run `ionic serve`. This will serve as local node server. Live updates when you make changes to the code. It uses the [ionic.project](https://github.com/DataAnalyticsinStudentHands/DASHWebsite/blob/master/ionic.project) file.

## Deployment

### Prerequisites:

1. If you don't have a global gulp installation, you need to

 `sudo npm install -g gulp`

2. For the deployment to work we install some local npm packages. Just run

 `npm install`

This repository is configured to deploy to dash.hnet.uh.edu (www.housuggest.org) via gulp using the gulpfile.js.

`gulp deploy-prod`

For deployment to the development server  (hnetdev.hnet.uh.edu) for testing run

`gulp deploy-dev`.

Additional documentation for deployment via gulp can be found [here](https://github.com/DataAnalyticsinStudentHands/DASH-Documentation/blob/master/Code%20Development/Frontend/App-Deployment-to-web-server.md). You can skip the section for server configuration.


Notes:
We used YUI to compress css, js files.
