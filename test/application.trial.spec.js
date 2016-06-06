describe('application.trial', function () {

    beforeEach(module('application.trial'));

    var application, trial, body, $rootScope;

    beforeEach(inject(function (_$rootScope_, $document, applicationDataService, trialRunner, $templateCache) {
        $rootScope = _$rootScope_;
        application = applicationDataService;
        trial = trialRunner;
        body = $document.find('body');

        $rootScope.test = 'compiled value';

        $templateCache.put('trial-expired-overlay.html', '<div id="test">{{test}}</div>');
    }));

    describe('when trial is expired', function () {
        beforeEach(function () {
            spyOn(application, 'isExpired').and.returnValue({
                then: function (fn) {
                    fn(true);
                }
            });

            trial.run();
            $rootScope.$digest();
        });

        it('trial-ended class is added to body', function () {
            expect(body.hasClass('trial-expired')).toBeTruthy();
        });

        it('template is appended to body', function () {
            expect(body.html()).toContain('id="test"');
        });

        it('template is compiled', function () {
            expect(body.html()).toContain('compiled value');
        });
    });
});