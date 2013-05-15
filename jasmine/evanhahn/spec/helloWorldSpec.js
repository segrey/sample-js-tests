describe("World", function() {

  beforeEach(function () {
    this.addMatchers({
      toBeDivisibleByTwo: function () {
        return (this.actual % 2) == 0;
      }
    });
  });

  describe("Talkative", function() {
    it("says hello", function() {
      console.log("Hello world from spec!");
      expect(helloWorld()).toEqual("Hello world!");
    });

    it("says world", function() {
      expect(helloWorld()).toContain("world");
    });

    describe("Divisible", function() {
      beforeEach(function() {
        this.addMatchers({
          toBeDivisibleByTwo: function() {
            return (this.actual % 2) === 0;
          }
        });
      });

      it('is divisible by 2', function() {
        expect(gimmeANumber()).toBeDivisibleByTwo();
      });
    });
  });

  it("long test", function() {
    var date = new Date();
    while (new Date().getTime() - date.getTime() <= 1000) {
    }
    expect(1).toBe(1);
  });

});
