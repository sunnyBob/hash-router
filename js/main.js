define(['../router/router'], function(routers) {
  var rootEle = document.querySelector('#root');

  function renderPage(page) {
    var router = routers[page]
    if (!router) return; // no router match

    var template = router.tmpl;
    var handler = router.handler;

    handler(rootEle, template);
  }

  renderPage(location.hash);
  window.addEventListener('hashchange', function() {
    var hash = location.hash;
    renderPage(hash);
  });
})
