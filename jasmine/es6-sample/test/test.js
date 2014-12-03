describe('es6-suite', function () {
    it('es6-spec', function () {
        var greeter = new Greeter();
        expect(greeter.sayHi()).toBe('Hi Anonymous!');
    });
});
