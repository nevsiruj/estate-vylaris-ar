(function () {
  var projectId = 'omqzvblkvk';
  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.clarity.ms/tag/' + projectId;
  document.head.appendChild(script);

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="https://wa.me/5493544444745"]');
    if (!link) return;
    window.clarity('event', 'estate_whatsapp_click');
  });
})();
