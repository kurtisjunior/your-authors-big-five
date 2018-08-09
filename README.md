# Emotional Tweets

## Goals

1. Create a RESTful API that uses IBM Watson and another API to perform tasks such as personality insights and translations of a Twitter user's tweets. (Get creative!)
2. Become comfortable using 3rd party APIs such as [IBM Watson's](https://developer.ibm.com/watson/)).
3. Gain a better understanding of async in general as it relates to programming in JS.
4. Manipulate data you receive back from 3rd party APIs
5. Understand that servers can communicate with other servers too - it doesn't have to be client/server.

## Instructions

1. Sign up to [IBM Watson's](https://console.bluemix.net/) API. Create a free trial account with IBM Bluemix. Spend some time reading about how they work. [IBM Docs](https://console.bluemix.net/catalog/?search=label:lite&category=ai)


2. Select a second API that you can use with one of the IBM Watson services. Twitter is a popular one, but feel free to use any others you think will be interesting such as [They Work For You](https://www.theyworkforyou.com/api/) and [Google Books](https://developers.google.com/books/docs/overview)

2. Make authenticated requests, using Postman, to each of the APIs.

3. Read up on how, once you've successfully made a request via Postman,
you can get hold of JS code that makes those requests for you (for use in
your own code).

4. If using Twitter: Use the npm `twit` package to connect to Twitter from your server. See if you can send a tweet or get some tweet data to check you are connected correctly.

5. Use the npm package [watson-developer-cloud](https://www.npmjs.com/package/watson-developer-cloud) to connect to IBM Watson's Personality Insights module (*__or whichever module you have chosen to use!__*) from your server. Play around and see what you do with it. See if you can send it some information to analyse.

6. Build out your API, thinking carefully about how you might make your endpoints RESTful. Aim to implement at least the following routes:

  - a route that receives a data from an API and sends it to one of the Watson API services
  - a route that uses two Watson API services

Feel free to go further and explore what IMB Watson is capable of. It also has modules that work with images and analyse them, which could be fun.

## Some ideas for further development

* Cache the results in a SQL database (i.e. if an
identical request to your API has already been made, retrieve the results
from your database)

* Build a front end for this application. (You could use EJS!) Think about what kind of a UI you would need.

* Examples of previous students work
  * Use graphs to display information about a user's personality.
  * Use twilio to text username and then text back top 5 traits.
  * Which dictator your tweets relate most to.
  * How close your personality is to one of your friends.
  * A website that takes a twitter handle, gets their last tweet and converts it into a audio file translated into another language.
  * Reply to a twitter user with a different message depending on their personality stats from Watson

This sprint is open-ended and is designed to make you:
1. Get creative and try to think of what you achieve with these tools.
2. To read through documentation and try to work out how to piece different apis together to achieve a desired outcome.

Most importantly, Have fun!
