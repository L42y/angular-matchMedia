angular.module('l42y.matchMedia', []).provider('matchMediaFilter', function () {
  var service = {
    queries: {
      xs: 'screen and (max-width: 480px)',
      sm: 'screen and (min-width: 481px) and (max-width: 768px)',
      md: 'screen and (min-width: 769px) and (max-width: 992px)',
      lg: 'screen and (min-width: 993px) and (max-width: 1200px)',
      xl: 'screen and (min-width: 1201px)'
    },
    $get: function (
      $window
    ) {
      return function (unchanged, query, newVal) {
        var mq = service.queries[query];

        return ($window.matchMedia && $window.matchMedia(mq).matches)
          ? newVal
          : unchanged;
      };
    }
  };

  return service;
});
