define(function(require) {
  var routes = {
    '#page1': {
      tmpl: require('page1Tmpl'),
      handler: require('page1')
    },
    '#page2': {
      tmpl: require('page2Tmpl'),
      handler: require('page2'),
    },
  };

  return routes;
})
