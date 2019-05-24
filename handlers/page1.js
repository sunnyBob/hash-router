define(function(require) {
  var mustache = require('mustache');

  var data = {
    name: 'page 1',
    desc: 'I am page one',
  };

  return function(el, template) {
    el.innerHTML = mustache.render(template, data);
  };
});
