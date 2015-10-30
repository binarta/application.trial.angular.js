(function () {
    'use strict';
    angular.module('application.trial', ['application'])
        .service('trialRunner', ['$rootScope', '$document', '$templateCache', '$compile', 'applicationDataService', TrialRunner])
        .run(['trialRunner', function (trial) {
            trial.run();
        }]);

    function TrialRunner($rootScope, $document, $templateCache, $compile, application) {
        this.run = function () {
            application.isExpired().then(function (expired) {
                if (expired) loadTrialEndedOverlay();
            });
        };

        function loadTrialEndedOverlay() {
            var body = $document.find('body');
            body.addClass('trial-expired');
            var element = angular.element($templateCache.get('trial-expired-overlay.html'));
            $compile(element)($rootScope.$new());
            body.prepend(element);
        }
    }
})();