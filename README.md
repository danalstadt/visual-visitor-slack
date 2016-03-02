# visual-visitor-slack

[Visual Visitor](http://www.visualvisitor.com) integration for Slack.

## Getting Started
1. Set up a [Slack webhook](https://api.slack.com/incoming-webhooks) for the integration
2. Clone the repo on a server that can be pinged by the Visual Visitor webhook
3. Create a `.vvslackrc` file (see the [rc package](https://www.npmjs.com/package/rc) for more information on where this can go) with the `hook` value set to the url of your Slack webhook. Optionally, the `port` param can be set.
4. `npm install` and then run `node index.js`
5. [Configure Visual Visitor to ping your server](http://visualvisitor.helpserve.com/Knowledgebase/Article/View/91/0/integrate-our-data-with-any-system-you-like).
