# React Redux Base

This is likely one of the more over-architected Hello World apps you've seen, but it's meant to be a baseline for new single page apps with server rendering using...

* [Express](http://expressjs.com/)
* [Webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/rackt/redux)
* [React-router](https://github.com/rackt/react-router)
* [React-redux](https://github.com/rackt/react-redux)

...without much extra app-specific logic getting in the way.

## Structure

    \---src
        |   app.js - server
        +---api
        |       api-router.js - router for all top-level APIs
        |       hello.js - 
        +---client
        |       client.js - (webpack entry) the only JS file on the client
        |       immutify.js - turns the initial state from the server into Immutable objects
        +---shared
        |   |   axios-intercepted.js - corrects the URL for requests sent from the server
        |   |   fetchComponentData.js - gathers data for the mounted react components
        |   |   routes.js - react-router configuration
        |   +---actions
        |   |       actions.js - exports all the actions available
        |   +---components
        |   |       App.js - what actually shows "Hello, World!"
        |   +---middleware
        |   |       middleware.js - exports the middlware+store-creating function
        |   |       promise.js - middleware to handle axios request promise states
        |   \---reducers
        |           reducers.js - exports the combined reducers
        \---views
                index.jade - template for the html sent to the client

Inspired by [bananaoomarang/isomorphic-redux](https://github.com/bananaoomarang/isomorphic-redux)!