requirejs.config({
	baseUrl: './',
  paths: {
    'mustache': 'libs/mustache.min',
    'page1Tmpl': 'templates/page1.html',
    'page2Tmpl': 'templates/page2.html',
    'page1': 'handlers/page1',
    'page2': 'handlers/page2',
  },
});

require(['./js/main']);
