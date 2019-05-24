define(function(require) {
  var mustache = require('mustache');

  var data = {
    name: 'page 2',
    desc: 'I am page two',
  };

  return function(el, template) {
    el.innerHTML = mustache.render(template, data);
  };
});
