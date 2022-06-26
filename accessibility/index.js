const pa11y = require('pa11y')

pa11y('http://localhost:8080/', {
  actions: [
    'set field #firstName to Homer',
    'set field #lastName to Simpson',
    'set field #topic to Other',
    'click element #search',
  ],
  log: {
    debug: console.log.bind(console),
    error: console.error.bind(console),
    info: console.log.bind(console),
  },
}).then((results) => {
  console.log(results)
})
