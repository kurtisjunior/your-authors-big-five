# How does your favorite author score ?

Deployed app: https://emotionalauthors.herokuapp.com/api/authorHome

This app uses the express framework to run a server in the MVC design pattern. Users can enter their favorite authors and recieve an IBM watson personality insight anlaysis. The result is displayed in a graph.

### Prerequisites

This project has been built by and runs in NODE. The further dependencies can be installed by running NPM INSTALL in the command line. The additional packages are: chart.js, ejs, pg-promise, superagent and the watson developer cloud.

### To run the app on the client side:

Start with git. Follow a link to the repository and fork a version to your profile. Then, copy the link, and run the command GIT CLONE followed by the URL. Find the file in visual studio, or similar dev tool program, and open the file. Next, run the command NPM INSTALL. This will download all relevant dependencies.

In short:

1. GIT CLONE <URL>
2. NPM INSTALL

There will be no configuration file. This is important. It will communicate with the watson cloud services. Start by visiting this link: https://www.ibm.com/watson/developercloud/. Next, create an account. Then, create a new file called CONFIG.JS and set a NODE_ENV variable to the following:

`const NODE_ENV = process.env.NODE_ENV || test`

Then create an object called credentialsObj and fill in the missing key values with your watson developer information:

```
const credentialsObj = {
    VERSION: '$$$$',
    USERNAME: '$$$$',
    PASSWORD: '$$$$',
    URL: 'https://gateway.watsonplatform.net/personality-insights/api',
    KEY: '$$$$'
};

module.exports = config[NODE_ENV];
```

Finally, run NPM START and visit http://localhost:9090/api/authorHome.

Author: Kurtis Angell.
