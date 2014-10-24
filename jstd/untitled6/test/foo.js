/**
 * Created with JetBrains PhpStorm.
 * User: Elena.Pogorelova
 * Date: 8/22/12
 * Time: 4:47 PM
 * To change this template use File | Settings | File Templates.
 */
describe('foo', function () {
    it('should be true', function () {
        expect(1 + 2).toEqual(4);
    });
    it('should increment a variable', function () {
        var foo = 0;            // set up the world
        foo++;                  // call your application code
        expect(foo).toEqual(12); // passes because foo == 1
    });
    it("test me", function () {
        var waitForWebdriver = function () {
            waitsFor(function () {
                return driver;
            }, "Webdriver did not initialize.\nYou may need to restart", 750);
            runs(function () {
                if (arguments[0]) {
                    arguments[0]();
                }
            });
        };
    });
});
